'use strict';

window.WatercolorFX = (() => {
  const PALETTE = [
    { r: 127, g: 216, b: 224 }, // Cian pastel
    { r: 245, g: 171, b: 160 }, // Coral pastel
    { r: 185, g: 235, b: 240 }, // Agua marina suave
    { r: 252, g: 210, b: 196 }  // Durazno pastel
  ];

  let canvas, ctx;
  const drops = [];
  let lastSpawn = 0;

  function resize() {
    if (!canvas) return;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = window.innerWidth * dpr;
    canvas.height = window.innerHeight * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }

  function spawn(x, y, scale = 1, forcedRgb = null) {
    const rgb = forcedRgb || PALETTE[Math.floor(Math.random() * PALETTE.length)];
    const lobes = Array.from({ length: 6 }, (_, i) => ({
      angle: (Math.PI * 2 * i) / 6 + (Math.random() - 0.5) * 0.4,
      offset: 0.18 + Math.random() * 0.22,
      size: 0.72 + Math.random() * 0.35
    }));

    drops.push({
      x, y,
      r: 14 * scale,
      maxR: (95 + Math.random() * 75) * scale,
      speed: (0.4 + Math.random() * 0.3) * scale,
      alpha: 0.085, // Muy delicado para no competir con las fotos
      rgb,
      lobes
    });

    if (drops.length > 28) drops.shift();
  }

  function step() {
    if (ctx && canvas) {
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
      for (const d of drops) {
        if (d.r < d.maxR) {
          d.r += d.speed;
          d.speed *= 0.986;
        }
        const { r, g, b } = d.rgb;
        for (const lobe of d.lobes) {
          const lx = d.x + Math.cos(lobe.angle) * (d.r * lobe.offset);
          const ly = d.y + Math.sin(lobe.angle) * (d.r * lobe.offset);
          const lr = d.r * lobe.size;
          const grad = ctx.createRadialGradient(lx, ly, lr * 0.1, lx, ly, lr);
          grad.addColorStop(0, `rgba(${r}, ${g}, ${b}, ${d.alpha * 0.45})`);
          grad.addColorStop(0.75, `rgba(${r}, ${g}, ${b}, ${d.alpha * 0.85})`);
          grad.addColorStop(0.95, `rgba(${r}, ${g}, ${b}, ${d.alpha * 1.15})`);
          grad.addColorStop(1, `rgba(${r}, ${g}, ${b}, 0)`);
          ctx.fillStyle = grad;
          ctx.beginPath();
          ctx.arc(lx, ly, lr, 0, Math.PI * 2);
          ctx.fill();
        }
      }
    }
    requestAnimationFrame(step);
  }

  function init() {
    canvas = document.getElementById('watercolor-canvas');
    if (!canvas) return;
    ctx = canvas.getContext('2d');
    resize();
    window.addEventListener('resize', resize);

    const onMove = (x, y) => {
      const now = performance.now();
      if (now - lastSpawn < 90) return;
      lastSpawn = now;
      spawn(x, y, 0.95);
    };

    window.addEventListener('mousemove', e => onMove(e.clientX, e.clientY), { passive: true });
    window.addEventListener('touchmove', e => {
      if (e.touches[0]) onMove(e.touches[0].clientX, e.touches[0].clientY);
    }, { passive: true });

    // Aguadas iniciales suaves
    spawn(window.innerWidth * 0.15, window.innerHeight * 0.22, 1.8, PALETTE[0]);
    spawn(window.innerWidth * 0.85, window.innerHeight * 0.35, 1.8, PALETTE[1]);
    spawn(window.innerWidth * 0.5, window.innerHeight * 0.82, 1.6, PALETTE[2]);

    requestAnimationFrame(step);
  }

  document.addEventListener('DOMContentLoaded', init);

  return {
    drop: () => spawn(
      window.innerWidth * (0.15 + Math.random() * 0.7),
      window.innerHeight * (0.15 + Math.random() * 0.7),
      1.6
    )
  };
})();