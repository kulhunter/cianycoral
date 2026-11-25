'use strict';

window.CartApp = (() => {
  const WHATSAPP_NUMBER = '56977623568';
  const STORAGE_KEY = 'cianycoral_cart_v4';

  const FORMATS = Object.freeze({
    postal: Object.freeze({ id: 'postal', name: 'Postal', price: 2000, isPostal: true, freeShip: true }),
    postal_sobre: Object.freeze({ id: 'postal_sobre', name: 'Postal con sobre', price: 2500, isPostal: true, freeShip: true }),
    cuadro_postal: Object.freeze({ id: 'cuadro_postal', name: 'Cuadro tamaño postal', price: 8000, isPostal: false, freeShip: false }),
    lamina_21x30: Object.freeze({ id: 'lamina_21x30', name: '21×30 solo papel', price: 4500, isPostal: false, freeShip: false }),
    cuadro_21x30: Object.freeze({ id: 'cuadro_21x30', name: 'Cuadro 21×30 con marco', price: 10000, isPostal: false, freeShip: false })
  });

  let catalog = [];
  let cart = [];
  let toastTimer = null;

  const formatCLP = n => '$' + Math.max(0, Math.round(Number(n) || 0)).toLocaleString('es-CL');

  function toast(msg) {
    const box = document.getElementById('toast-box');
    const txt = document.getElementById('toast-text');
    if (!box || !txt) return;
    txt.textContent = msg;
    box.classList.remove('opacity-0', 'translate-y-2');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => box.classList.add('opacity-0', 'translate-y-2'), 2200);
  }

  function persist() {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(cart)); } catch (_) {}
  }

  function load() {
    try {
      const parsed = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
      if (!Array.isArray(parsed)) return;
      cart = parsed
        .filter(e => e && catalog.some(c => c.id === e.id) && FORMATS[e.formatId] && e.qty > 0)
        .map(e => ({ id: e.id, formatId: e.formatId, qty: Math.min(99, e.qty) }));
    } catch (_) {
      cart = [];
    }
  }

  function computeTotals() {
    let subtotal = 0, totalCount = 0, postalesCount = 0, hasHeavy = false;
    for (const e of cart) {
      const f = FORMATS[e.formatId];
      if (!f) continue;
      subtotal += f.price * e.qty;
      totalCount += e.qty;
      if (f.isPostal) postalesCount += e.qty;
      if (!f.freeShip) hasHeavy = true;
    }

    const trios = Math.floor(postalesCount / 3);
    const discount = trios * 1000; // 3x$5.000, 6x$10.000
    const total = Math.max(0, subtotal - discount);
    const freeShipping = cart.length > 0 && !hasHeavy && total > 25000;

    return { subtotal, discount, trios, total, totalCount, postalesCount, hasHeavy, freeShipping };
  }

  function render() {
    const listEl = document.getElementById('cart-items');
    const badgeEl = document.getElementById('cart-count-badge');
    const bannerEl = document.getElementById('cart-promo-banner');
    const btnSend = document.getElementById('btn-send-whatsapp');
    const t = computeTotals();

    if (badgeEl) badgeEl.textContent = String(t.totalCount);

    // Banner de promoción / upsell
    if (t.postalesCount > 0 && t.postalesCount % 3 === 2) {
      const nextTotal = Math.floor((t.postalesCount + 1) / 3) * 5000;
      bannerEl.className = 'px-4 py-2 text-xs font-semibold border-b bg-coral-pastel text-coral-deep';
      bannerEl.textContent = `💡 Llevas ${t.postalesCount} postales: ¡si añades 1 más, te quedan en ${formatCLP(nextTotal)}!`;
    } else if (t.trios > 0) {
      bannerEl.className = 'px-4 py-2 text-xs font-semibold border-b bg-cian-pastel text-cian-deep';
      bannerEl.textContent = `🎉 Promo aplicada: ahorras ${formatCLP(t.discount)} en tus ${t.postalesCount} postales.`;
    } else {
      bannerEl.className = 'hidden';
    }

    if (!cart.length) {
      listEl.innerHTML = `<p class="text-center text-xs text-slate-500 py-10">Tu carrito está vacío.</p>`;
      btnSend.disabled = true;
    } else {
      btnSend.disabled = false;
      listEl.innerHTML = cart.map((e, i) => {
        const item = catalog.find(c => c.id === e.id);
        const f = FORMATS[e.formatId];
        if (!item || !f) return '';
        return `
          <div class="bg-white p-2.5 rounded-xl border border-stone-200 flex items-center gap-3">
            <img src="${item.img}" alt="${item.title}" class="w-10 h-14 object-contain bg-paperWarm rounded-md border border-stone-100 shrink-0" />
            <div class="flex-1 min-w-0">
              <p class="font-serif font-bold text-sm text-ink truncate">${item.title}</p>
              <p class="text-[11px] text-slate-500">${f.name} · ${formatCLP(f.price)}</p>
              <div class="flex items-center justify-between mt-1">
                <div class="inline-flex items-center rounded-md bg-paper border border-stone-200 text-xs">
                  <button type="button" onclick="window.CartApp.qty(${i}, -1)" class="px-2 py-0.5 font-bold">−</button>
                  <span class="px-1.5 font-semibold">${e.qty}</span>
                  <button type="button" onclick="window.CartApp.qty(${i}, 1)" class="px-2 py-0.5 font-bold">+</button>
                </div>
                <div class="flex items-center gap-2 text-xs">
                  <span class="font-bold text-ink">${formatCLP(f.price * e.qty)}</span>
                  <button type="button" onclick="window.CartApp.remove(${i})" class="text-[11px] text-coral-deep hover:underline">Quitar</button>
                </div>
              </div>
            </div>
          </div>
        `;
      }).join('');
    }

    document.getElementById('summary-subtotal').textContent = formatCLP(t.subtotal);
    document.getElementById('summary-total').textContent = formatCLP(t.total);

    const discRow = document.getElementById('summary-discount-row');
    if (t.discount > 0) {
      discRow.classList.remove('hidden');
      discRow.classList.add('flex');
      document.getElementById('summary-discount').textContent = '-' + formatCLP(t.discount);
    } else {
      discRow.classList.add('hidden');
      discRow.classList.remove('flex');
    }

    const shipEl = document.getElementById('summary-shipping');
    const shipNote = document.getElementById('shipping-note');
    if (!cart.length) {
      shipEl.textContent = 'Por evaluar';
      shipNote.classList.add('hidden');
    } else if (t.freeShipping) {
      shipEl.textContent = '¡GRATIS! 🎉';
      shipEl.className = 'font-bold text-emerald-700';
      shipNote.textContent = 'Tu pedido de postales supera los $25.000: envío gratis.';
      shipNote.classList.remove('hidden');
    } else if (t.hasHeavy) {
      shipEl.textContent = 'A cotizar por WhatsApp';
      shipEl.className = 'font-semibold text-coral-deep';
      shipNote.textContent = 'Cuadros y láminas 21×30 no tienen envío gratis porque pesan y Chile es muy largo :P';
      shipNote.classList.remove('hidden');
    } else {
      shipEl.textContent = 'A cotizar según ciudad';
      shipEl.className = 'font-semibold text-slate-600';
      shipNote.textContent = `Te faltan ${formatCLP(25001 - t.total)} en postales para envío GRATIS.`;
      shipNote.classList.remove('hidden');
    }
  }

  function sendWhatsApp() {
    if (!cart.length) return;
    const name = document.getElementById('cust-name').value.trim();
    const phone = document.getElementById('cust-phone').value.trim();
    const address = document.getElementById('cust-address').value.trim();
    const city = document.getElementById('cust-city').value.trim();
    const err = document.getElementById('form-error-msg');

    if (!name || !phone || !address || !city) {
      err.textContent = 'Completa tu nombre, teléfono, dirección y ciudad para evaluar el envío.';
      err.classList.remove('hidden');
      return;
    }
    err.classList.add('hidden');

    const t = computeTotals();
    const lines = ['Hola *Cian y Coral* 🎨', 'Quiero hacer este pedido:', ''];
    for (const e of cart) {
      const item = catalog.find(c => c.id === e.id);
      const f = FORMATS[e.formatId];
      if (item && f) lines.push(`• *${item.title}* — ${f.name} ×${e.qty} (${formatCLP(f.price * e.qty)})`);
    }
    lines.push('', `Subtotal: ${formatCLP(t.subtotal)}`);
    if (t.discount > 0) lines.push(`Descuento Promo Postales: -${formatCLP(t.discount)}`);
    lines.push(`*Total productos: ${formatCLP(t.total)} CLP*`);
    lines.push(`Envío: ${t.freeShipping ? 'GRATIS (postales > $25.000)' : 'Por evaluar según ciudad'}`);
    lines.push('', '*Datos de envío:*', `• Nombre: ${name}`, `• Teléfono: ${phone}`, `• Dirección: ${address}`, `• Ciudad/Comuna: ${city}`);

    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lines.join('\n'))}`, '_blank', 'noopener,noreferrer');
  }

  return {
    sync: items => { catalog = items; load(); render(); },
    add: (id, formatId = 'postal', qty = 1) => {
      const item = catalog.find(c => c.id === id);
      const f = FORMATS[formatId];
      if (!item || !f) return;
      const ex = cart.find(e => e.id === id && e.formatId === formatId);
      if (ex) ex.qty = Math.min(99, ex.qty + qty);
      else cart.push({ id, formatId, qty });
      persist();
      render();
      toast(`Agregado: ${item.title} (${f.name})`);
    },
    qty: (idx, delta) => {
      if (!cart[idx]) return;
      const next = cart[idx].qty + delta;
      if (next <= 0) cart.splice(idx, 1);
      else cart[idx].qty = Math.min(99, next);
      persist();
      render();
    },
    remove: idx => { cart.splice(idx, 1); persist(); render(); },
    open: () => {
      document.getElementById('cart-overlay').classList.remove('hidden');
      document.getElementById('cart-drawer').classList.remove('translate-x-full');
    },
    close: () => {
      document.getElementById('cart-overlay').classList.add('hidden');
      document.getElementById('cart-drawer').classList.add('translate-x-full');
    },
    sendWhatsApp
  };
})();
