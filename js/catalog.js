"use strict";

window.CatalogApp = (() => {
  const ITEMS = [{"id": "ciudades_frutillar_fr01", "code": "FR01", "title": "Frutillar (FR01)", "category": "Ciudades", "subcategory": "Frutillar", "img": "./Ciudades_Frutillar_FR01.webp"}, {"id": "ciudades_frutillar_fr02", "code": "FR02", "title": "Frutillar (FR02)", "category": "Ciudades", "subcategory": "Frutillar", "img": "./Ciudades_Frutillar_FR02.webp"}, {"id": "ciudades_frutillar_fr03", "code": "FR03", "title": "Frutillar (FR03)", "category": "Ciudades", "subcategory": "Frutillar", "img": "./Ciudades_Frutillar_FR03.webp"}, {"id": "ciudades_frutillar_fr04", "code": "FR04", "title": "Frutillar (FR04)", "category": "Ciudades", "subcategory": "Frutillar", "img": "./Ciudades_Frutillar_FR04.webp"}, {"id": "ciudades_frutillar_fr05", "code": "FR05", "title": "Frutillar (FR05)", "category": "Ciudades", "subcategory": "Frutillar", "img": "./Ciudades_Frutillar_FR05.webp"}, {"id": "ciudades_frutillar_fr06", "code": "FR06", "title": "Frutillar (FR06)", "category": "Ciudades", "subcategory": "Frutillar", "img": "./Ciudades_Frutillar_FR06.webp"}, {"id": "ciudades_frutillar_fr07", "code": "FR07", "title": "Frutillar (FR07)", "category": "Ciudades", "subcategory": "Frutillar", "img": "./Ciudades_Frutillar_FR07.webp"}, {"id": "ciudades_llanquihue_ll01", "code": "LL01", "title": "Llanquihue (LL01)", "category": "Ciudades", "subcategory": "Llanquihue", "img": "./Ciudades_Llanquihue_LL01.webp"}, {"id": "ciudades_llanquihue_ll02", "code": "LL02", "title": "Llanquihue (LL02)", "category": "Ciudades", "subcategory": "Llanquihue", "img": "./Ciudades_Llanquihue_LL02.webp"}, {"id": "ciudades_llanquihue_ll03", "code": "LL03", "title": "Llanquihue (LL03)", "category": "Ciudades", "subcategory": "Llanquihue", "img": "./Ciudades_Llanquihue_LL03.webp"}, {"id": "ciudades_llanquihue_ll04", "code": "LL04", "title": "Llanquihue (LL04)", "category": "Ciudades", "subcategory": "Llanquihue", "img": "./Ciudades_Llanquihue_LL04.webp"}, {"id": "ciudades_llanquihue_ll05", "code": "LL05", "title": "Llanquihue (LL05)", "category": "Ciudades", "subcategory": "Llanquihue", "img": "./Ciudades_Llanquihue_LL05.webp"}, {"id": "ciudades_llanquihue_ll06", "code": "LL06", "title": "Llanquihue (LL06)", "category": "Ciudades", "subcategory": "Llanquihue", "img": "./Ciudades_Llanquihue_LL06.webp"}, {"id": "ciudades_osorno_os1", "code": "OS1", "title": "Osorno (OS1)", "category": "Ciudades", "subcategory": "Osorno", "img": "./Ciudades_Osorno_OS1.webp"}, {"id": "ciudades_osorno_os2", "code": "OS2", "title": "Osorno (OS2)", "category": "Ciudades", "subcategory": "Osorno", "img": "./Ciudades_Osorno_OS2.webp"}, {"id": "ciudades_osorno_os3", "code": "OS3", "title": "Osorno (OS3)", "category": "Ciudades", "subcategory": "Osorno", "img": "./Ciudades_Osorno_OS3.webp"}, {"id": "ciudades_osorno_os4", "code": "OS4", "title": "Osorno (OS4)", "category": "Ciudades", "subcategory": "Osorno", "img": "./Ciudades_Osorno_OS4.webp"}, {"id": "ciudades_puerto_montt_pm01", "code": "PM01", "title": "Puerto Montt (PM01)", "category": "Ciudades", "subcategory": "Puerto Montt", "img": "./Ciudades_Puerto_Montt_PM01.webp"}, {"id": "ciudades_puerto_octay_po01", "code": "PO01", "title": "Puerto Octay (PO01)", "category": "Ciudades", "subcategory": "Puerto Octay", "img": "./Ciudades_Puerto_Octay_PO01.webp"}, {"id": "ciudades_puerto_octay_po02", "code": "PO02", "title": "Puerto Octay (PO02)", "category": "Ciudades", "subcategory": "Puerto Octay", "img": "./Ciudades_Puerto_Octay_PO02.webp"}, {"id": "ciudades_puerto_varas_pv01", "code": "PV01", "title": "Puerto Varas (PV01)", "category": "Ciudades", "subcategory": "Puerto Varas", "img": "./Ciudades_Puerto_Varas_PV01.webp"}, {"id": "ciudades_puerto_varas_pv02", "code": "PV02", "title": "Puerto Varas (PV02)", "category": "Ciudades", "subcategory": "Puerto Varas", "img": "./Ciudades_Puerto_Varas_PV02.webp"}, {"id": "ciudades_puerto_varas_pv03", "code": "PV03", "title": "Puerto Varas (PV03)", "category": "Ciudades", "subcategory": "Puerto Varas", "img": "./Ciudades_Puerto_Varas_PV03.webp"}, {"id": "ciudades_puerto_varas_pv04", "code": "PV04", "title": "Puerto Varas (PV04)", "category": "Ciudades", "subcategory": "Puerto Varas", "img": "./Ciudades_Puerto_Varas_PV04.webp"}, {"id": "ciudades_puerto_varas_pv05", "code": "PV05", "title": "Puerto Varas (PV05)", "category": "Ciudades", "subcategory": "Puerto Varas", "img": "./Ciudades_Puerto_Varas_PV05.webp"}, {"id": "ciudades_puerto_varas_pv06", "code": "PV06", "title": "Puerto Varas (PV06)", "category": "Ciudades", "subcategory": "Puerto Varas", "img": "./Ciudades_Puerto_Varas_PV06.webp"}, {"id": "ciudades_puerto_varas_pv07", "code": "PV07", "title": "Puerto Varas (PV07)", "category": "Ciudades", "subcategory": "Puerto Varas", "img": "./Ciudades_Puerto_Varas_PV07.webp"}, {"id": "ciudades_santiago_stgo1", "code": "STGO1", "title": "Santiago (STGO1)", "category": "Ciudades", "subcategory": "Santiago", "img": "./Ciudades_Santiago_STGO1.webp"}, {"id": "ciudades_santiago_stgo2", "code": "STGO2", "title": "Santiago (STGO2)", "category": "Ciudades", "subcategory": "Santiago", "img": "./Ciudades_Santiago_STGO2.webp"}, {"id": "ciudades_santiago_stgo3", "code": "STGO3", "title": "Santiago (STGO3)", "category": "Ciudades", "subcategory": "Santiago", "img": "./Ciudades_Santiago_STGO3.webp"}, {"id": "ciudades_santiago_stgo4", "code": "STGO4", "title": "Santiago (STGO4)", "category": "Ciudades", "subcategory": "Santiago", "img": "./Ciudades_Santiago_STGO4.webp"}, {"id": "ciudades_santiago_stgo5", "code": "STGO5", "title": "Santiago (STGO5)", "category": "Ciudades", "subcategory": "Santiago", "img": "./Ciudades_Santiago_STGO5.webp"}, {"id": "comida_co1", "code": "CO1", "title": "Comida CO1", "category": "Comida", "subcategory": "Comida", "img": "./Comida_CO1.webp"}, {"id": "comida_co2", "code": "CO2", "title": "Comida CO2", "category": "Comida", "subcategory": "Comida", "img": "./Comida_CO2.webp"}, {"id": "comida_co3", "code": "CO3", "title": "Comida CO3", "category": "Comida", "subcategory": "Comida", "img": "./Comida_CO3.webp"}, {"id": "comida_co4", "code": "CO4", "title": "Comida CO4", "category": "Comida", "subcategory": "Comida", "img": "./Comida_CO4.webp"}, {"id": "fauna_aves_av01", "code": "AV01", "title": "Aves (AV01)", "category": "Fauna", "subcategory": "Aves", "img": "./Fauna_Aves_AV01.webp"}, {"id": "fauna_aves_av02", "code": "AV02", "title": "Aves (AV02)", "category": "Fauna", "subcategory": "Aves", "img": "./Fauna_Aves_AV02.webp"}, {"id": "fauna_aves_av03", "code": "AV03", "title": "Aves (AV03)", "category": "Fauna", "subcategory": "Aves", "img": "./Fauna_Aves_AV03.webp"}, {"id": "fauna_aves_av04", "code": "AV04", "title": "Aves (AV04)", "category": "Fauna", "subcategory": "Aves", "img": "./Fauna_Aves_AV04.webp"}, {"id": "fauna_aves_av05", "code": "AV05", "title": "Aves (AV05)", "category": "Fauna", "subcategory": "Aves", "img": "./Fauna_Aves_AV05.webp"}, {"id": "fauna_aves_av06", "code": "AV06", "title": "Aves (AV06)", "category": "Fauna", "subcategory": "Aves", "img": "./Fauna_Aves_AV06.webp"}, {"id": "fauna_aves_av07", "code": "AV07", "title": "Aves (AV07)", "category": "Fauna", "subcategory": "Aves", "img": "./Fauna_Aves_AV07.webp"}, {"id": "fauna_aves_av08", "code": "AV08", "title": "Aves (AV08)", "category": "Fauna", "subcategory": "Aves", "img": "./Fauna_Aves_AV08.webp"}, {"id": "fauna_aves_av09", "code": "AV09", "title": "Aves (AV09)", "category": "Fauna", "subcategory": "Aves", "img": "./Fauna_Aves_AV09.webp"}, {"id": "fauna_aves_av10", "code": "AV10", "title": "Aves (AV10)", "category": "Fauna", "subcategory": "Aves", "img": "./Fauna_Aves_AV10.webp"}, {"id": "fauna_aves_av11", "code": "AV11", "title": "Aves (AV11)", "category": "Fauna", "subcategory": "Aves", "img": "./Fauna_Aves_AV11.webp"}, {"id": "fauna_aves_av12", "code": "AV12", "title": "Aves (AV12)", "category": "Fauna", "subcategory": "Aves", "img": "./Fauna_Aves_AV12.webp"}, {"id": "fauna_aves_av13", "code": "AV13", "title": "Aves (AV13)", "category": "Fauna", "subcategory": "Aves", "img": "./Fauna_Aves_AV13.webp"}, {"id": "fauna_aves_av14", "code": "AV14", "title": "Aves (AV14)", "category": "Fauna", "subcategory": "Aves", "img": "./Fauna_Aves_AV14.webp"}, {"id": "fauna_aves_av15", "code": "AV15", "title": "Aves (AV15)", "category": "Fauna", "subcategory": "Aves", "img": "./Fauna_Aves_AV15.webp"}, {"id": "fauna_aves_av16", "code": "AV16", "title": "Aves (AV16)", "category": "Fauna", "subcategory": "Aves", "img": "./Fauna_Aves_AV16.webp"}, {"id": "fauna_aves_av17", "code": "AV17", "title": "Aves (AV17)", "category": "Fauna", "subcategory": "Aves", "img": "./Fauna_Aves_AV17.webp"}, {"id": "fauna_fa01", "code": "FA01", "title": "Fauna FA01", "category": "Fauna", "subcategory": "Fauna", "img": "./Fauna_FA01.webp"}, {"id": "fauna_fa02", "code": "FA02", "title": "Fauna FA02", "category": "Fauna", "subcategory": "Fauna", "img": "./Fauna_FA02.webp"}, {"id": "fauna_serie_acuarela_horizontal_faa01", "code": "FAA01", "title": "Serie Acuarela Horizontal (FAA01)", "category": "Fauna", "subcategory": "Serie Acuarela Horizontal", "img": "./Fauna_Serie_Acuarela_Horizontal_FAA01.webp"}, {"id": "fauna_serie_acuarela_horizontal_faa02", "code": "FAA02", "title": "Serie Acuarela Horizontal (FAA02)", "category": "Fauna", "subcategory": "Serie Acuarela Horizontal", "img": "./Fauna_Serie_Acuarela_Horizontal_FAA02.webp"}, {"id": "fauna_serie_acuarela_horizontal_faa03", "code": "FAA03", "title": "Serie Acuarela Horizontal (FAA03)", "category": "Fauna", "subcategory": "Serie Acuarela Horizontal", "img": "./Fauna_Serie_Acuarela_Horizontal_FAA03.webp"}, {"id": "fauna_serie_acuarela_horizontal_faa04", "code": "FAA04", "title": "Serie Acuarela Horizontal (FAA04)", "category": "Fauna", "subcategory": "Serie Acuarela Horizontal", "img": "./Fauna_Serie_Acuarela_Horizontal_FAA04.webp"}, {"id": "fauna_serie_acuarela_horizontal_faa05", "code": "FAA05", "title": "Serie Acuarela Horizontal (FAA05)", "category": "Fauna", "subcategory": "Serie Acuarela Horizontal", "img": "./Fauna_Serie_Acuarela_Horizontal_FAA05.webp"}, {"id": "fauna_serie_acuarela_horizontal_faa06", "code": "FAA06", "title": "Serie Acuarela Horizontal (FAA06)", "category": "Fauna", "subcategory": "Serie Acuarela Horizontal", "img": "./Fauna_Serie_Acuarela_Horizontal_FAA06.webp"}, {"id": "fauna_serie_acuarela_vertical_faa07", "code": "FAA07", "title": "Serie Acuarela Vertical (FAA07)", "category": "Fauna", "subcategory": "Serie Acuarela Vertical", "img": "./Fauna_Serie_Acuarela_Vertical_FAA07.webp"}, {"id": "fauna_serie_acuarela_vertical_faa08", "code": "FAA08", "title": "Serie Acuarela Vertical (FAA08)", "category": "Fauna", "subcategory": "Serie Acuarela Vertical", "img": "./Fauna_Serie_Acuarela_Vertical_FAA08.webp"}, {"id": "fauna_serie_acuarela_vertical_faa09", "code": "FAA09", "title": "Serie Acuarela Vertical (FAA09)", "category": "Fauna", "subcategory": "Serie Acuarela Vertical", "img": "./Fauna_Serie_Acuarela_Vertical_FAA09.webp"}, {"id": "fauna_serie_acuarela_vertical_faa10", "code": "FAA10", "title": "Serie Acuarela Vertical (FAA10)", "category": "Fauna", "subcategory": "Serie Acuarela Vertical", "img": "./Fauna_Serie_Acuarela_Vertical_FAA10.webp"}, {"id": "fauna_serie_acuarela_vertical_faa11", "code": "FAA11", "title": "Serie Acuarela Vertical (FAA11)", "category": "Fauna", "subcategory": "Serie Acuarela Vertical", "img": "./Fauna_Serie_Acuarela_Vertical_FAA11.webp"}, {"id": "fauna_serie_acuarela_vertical_faa12", "code": "FAA12", "title": "Serie Acuarela Vertical (FAA12)", "category": "Fauna", "subcategory": "Serie Acuarela Vertical", "img": "./Fauna_Serie_Acuarela_Vertical_FAA12.webp"}, {"id": "fauna_serie_pastel_fap01", "code": "FAP01", "title": "Serie Pastel (FAP01)", "category": "Fauna", "subcategory": "Serie Pastel", "img": "./Fauna_Serie_Pastel_FAP01.webp"}, {"id": "fauna_serie_pastel_fap02", "code": "FAP02", "title": "Serie Pastel (FAP02)", "category": "Fauna", "subcategory": "Serie Pastel", "img": "./Fauna_Serie_Pastel_FAP02.webp"}, {"id": "fauna_serie_pastel_fap03", "code": "FAP03", "title": "Serie Pastel (FAP03)", "category": "Fauna", "subcategory": "Serie Pastel", "img": "./Fauna_Serie_Pastel_FAP03.webp"}, {"id": "fauna_serie_pastel_fap04", "code": "FAP04", "title": "Serie Pastel (FAP04)", "category": "Fauna", "subcategory": "Serie Pastel", "img": "./Fauna_Serie_Pastel_FAP04.webp"}, {"id": "fauna_serie_pastel_fap05", "code": "FAP05", "title": "Serie Pastel (FAP05)", "category": "Fauna", "subcategory": "Serie Pastel", "img": "./Fauna_Serie_Pastel_FAP05.webp"}, {"id": "fauna_serie_pastel_fap06", "code": "FAP06", "title": "Serie Pastel (FAP06)", "category": "Fauna", "subcategory": "Serie Pastel", "img": "./Fauna_Serie_Pastel_FAP06.webp"}, {"id": "flora_y_tipicos_ft01", "code": "FT01", "title": "Flora y Típicos FT01", "category": "Flora y Típicos", "subcategory": "Flora y Típicos", "img": "./Flora_y_Tipicos_FT01.webp"}, {"id": "flora_y_tipicos_ft02", "code": "FT02", "title": "Flora y Típicos FT02", "category": "Flora y Típicos", "subcategory": "Flora y Típicos", "img": "./Flora_y_Tipicos_FT02.webp"}, {"id": "flora_y_tipicos_ft03", "code": "FT03", "title": "Flora y Típicos FT03", "category": "Flora y Típicos", "subcategory": "Flora y Típicos", "img": "./Flora_y_Tipicos_FT03.webp"}, {"id": "flora_y_tipicos_ft04", "code": "FT04", "title": "Flora y Típicos FT04", "category": "Flora y Típicos", "subcategory": "Flora y Típicos", "img": "./Flora_y_Tipicos_FT04.webp"}, {"id": "flora_y_tipicos_ft05", "code": "FT05", "title": "Flora y Típicos FT05", "category": "Flora y Típicos", "subcategory": "Flora y Típicos", "img": "./Flora_y_Tipicos_FT05.webp"}, {"id": "flora_y_tipicos_ft06", "code": "FT06", "title": "Flora y Típicos FT06", "category": "Flora y Típicos", "subcategory": "Flora y Típicos", "img": "./Flora_y_Tipicos_FT06.webp"}, {"id": "flora_y_tipicos_ft07", "code": "FT07", "title": "Flora y Típicos FT07", "category": "Flora y Típicos", "subcategory": "Flora y Típicos", "img": "./Flora_y_Tipicos_FT07.webp"}, {"id": "flora_y_tipicos_ft08", "code": "FT08", "title": "Flora y Típicos FT08", "category": "Flora y Típicos", "subcategory": "Flora y Típicos", "img": "./Flora_y_Tipicos_FT08.webp"}, {"id": "flora_y_tipicos_ft09", "code": "FT09", "title": "Flora y Típicos FT09", "category": "Flora y Típicos", "subcategory": "Flora y Típicos", "img": "./Flora_y_Tipicos_FT09.webp"}, {"id": "flora_y_tipicos_ft10", "code": "FT10", "title": "Flora y Típicos FT10", "category": "Flora y Típicos", "subcategory": "Flora y Típicos", "img": "./Flora_y_Tipicos_FT10.webp"}, {"id": "flora_y_tipicos_ft11", "code": "FT11", "title": "Flora y Típicos FT11", "category": "Flora y Típicos", "subcategory": "Flora y Típicos", "img": "./Flora_y_Tipicos_FT11.webp"}, {"id": "paisajes_zona_sur_ps01", "code": "PS01", "title": "Zona Sur (PS01)", "category": "Paisajes", "subcategory": "Zona Sur", "img": "./Paisajes_Zona_Sur_PS01.webp"}, {"id": "paisajes_zona_sur_ps02", "code": "PS02", "title": "Zona Sur (PS02)", "category": "Paisajes", "subcategory": "Zona Sur", "img": "./Paisajes_Zona_Sur_PS02.webp"}, {"id": "paisajes_zona_sur_ps03", "code": "PS03", "title": "Zona Sur (PS03)", "category": "Paisajes", "subcategory": "Zona Sur", "img": "./Paisajes_Zona_Sur_PS03.webp"}, {"id": "paisajes_zona_sur_ps04", "code": "PS04", "title": "Zona Sur (PS04)", "category": "Paisajes", "subcategory": "Zona Sur", "img": "./Paisajes_Zona_Sur_PS04.webp"}, {"id": "paisajes_zona_sur_ps05", "code": "PS05", "title": "Zona Sur (PS05)", "category": "Paisajes", "subcategory": "Zona Sur", "img": "./Paisajes_Zona_Sur_PS05.webp"}, {"id": "paisajes_zona_sur_ps06", "code": "PS06", "title": "Zona Sur (PS06)", "category": "Paisajes", "subcategory": "Zona Sur", "img": "./Paisajes_Zona_Sur_PS06.webp"}, {"id": "paisajes_zona_sur_ps07", "code": "PS07", "title": "Zona Sur (PS07)", "category": "Paisajes", "subcategory": "Zona Sur", "img": "./Paisajes_Zona_Sur_PS07.webp"}, {"id": "paisajes_zona_sur_ps08", "code": "PS08", "title": "Zona Sur (PS08)", "category": "Paisajes", "subcategory": "Zona Sur", "img": "./Paisajes_Zona_Sur_PS08.webp"}, {"id": "paisajes_zona_sur_ps09", "code": "PS09", "title": "Zona Sur (PS09)", "category": "Paisajes", "subcategory": "Zona Sur", "img": "./Paisajes_Zona_Sur_PS09.webp"}, {"id": "paisajes_zona_sur_ps10", "code": "PS10", "title": "Zona Sur (PS10)", "category": "Paisajes", "subcategory": "Zona Sur", "img": "./Paisajes_Zona_Sur_PS10.webp"}, {"id": "paisajes_zona_sur_ps11", "code": "PS11", "title": "Zona Sur (PS11)", "category": "Paisajes", "subcategory": "Zona Sur", "img": "./Paisajes_Zona_Sur_PS11.webp"}, {"id": "paisajes_zona_sur_ps12", "code": "PS12", "title": "Zona Sur (PS12)", "category": "Paisajes", "subcategory": "Zona Sur", "img": "./Paisajes_Zona_Sur_PS12.webp"}, {"id": "volcanes_vc01", "code": "VC01", "title": "Volcanes VC01", "category": "Volcanes", "subcategory": "Volcanes", "img": "./Volcanes_VC01.webp"}, {"id": "volcanes_vc02", "code": "VC02", "title": "Volcanes VC02", "category": "Volcanes", "subcategory": "Volcanes", "img": "./Volcanes_VC02.webp"}, {"id": "volcanes_vc03", "code": "VC03", "title": "Volcanes VC03", "category": "Volcanes", "subcategory": "Volcanes", "img": "./Volcanes_VC03.webp"}, {"id": "volcanes_vc04", "code": "VC04", "title": "Volcanes VC04", "category": "Volcanes", "subcategory": "Volcanes", "img": "./Volcanes_VC04.webp"}, {"id": "volcanes_vc05", "code": "VC05", "title": "Volcanes VC05", "category": "Volcanes", "subcategory": "Volcanes", "img": "./Volcanes_VC05.webp"}, {"id": "volcanes_vc06", "code": "VC06", "title": "Volcanes VC06", "category": "Volcanes", "subcategory": "Volcanes", "img": "./Volcanes_VC06.webp"}];

  const CATEGORIES = ['Todas', 'Ciudades', 'Paisajes', 'Volcanes', 'Fauna', 'Flora y Típicos', 'Comida'];
  const FORMAT_OPTIONS = [
    { id: 'postal', label: 'Postal', short: 'Postal · $2.000', price: '$2.000', note: 'Promo 3×$5.000 · 6×$10.000' },
    { id: 'postal_sobre', label: 'Postal con sobre', short: 'c/Sobre · $2.500', price: '$2.500', note: 'Incluye sobre · suma a promo' },
    { id: 'cuadro_postal', label: 'Cuadro tamaño postal', short: 'Cuadro postal · $8.000', price: '$8.000', note: 'Enmarcado tamaño postal' },
    { id: 'lamina_21x30', label: 'Formato 21×30 solo papel', short: '21×30 papel · $4.500', price: '$4.500', note: 'Lámina clásica 21×30 cm' },
    { id: 'cuadro_21x30', label: 'Cuadro 21×30 con marco', short: 'Cuadro 21×30 · $10.000', price: '$10.000', note: 'Enmarcado clásico 21×30 cm' }
  ];
  let activeCategory = 'Todas';
  let searchQuery = '';

  function renderBackFace(compact = true) {
    const pad = compact ? 'p-2.5' : 'p-4';
    const lineGap = compact ? 'space-y-2' : 'space-y-3';
    const stampSize = compact ? 'w-9 h-9' : 'w-12 h-12';
    const sealSize = compact ? 'w-9 h-9' : 'w-12 h-12';
    const qrSize = compact ? 'w-7 h-7' : 'w-10 h-10';
    const lines = Array.from({ length: 7 }, () => '<div class="border-b border-stone-400/70 w-full"></div>').join('');

    return `
      <div class="h-full w-full flex flex-col justify-between ${pad} text-stone-600 select-none">
        <div class="flex items-start justify-between gap-2">
          <div class="w-1/2 pt-0.5">
            <span class="font-hand ${compact ? 'text-xs' : 'text-base'} text-stone-600 block leading-none">Fecha:</span>
            <div class="border-b border-stone-400/70 mt-2.5"></div>
          </div>
          <div class="relative shrink-0 pr-0.5 pt-0.5">
            <div class="${sealSize} rounded-full bg-stone-300/75 border border-dashed border-stone-400/80 flex flex-col items-center justify-center -rotate-12 -translate-x-3 translate-y-2">
              <span class="font-logo text-[7px] leading-tight text-stone-700 font-bold text-center">CiaN y<br/>Coral</span>
            </div>
            <div class="${stampSize} border-2 border-dotted border-stone-500/85 bg-transparent absolute top-0 right-0"></div>
          </div>
        </div>

        <div class="my-auto pt-2">
          <span class="font-hand ${compact ? 'text-xs' : 'text-base'} text-stone-600 block leading-none mb-2">Para:</span>
          <div class="${lineGap}">${lines}</div>
        </div>

        <div class="flex items-end justify-between gap-2 pt-1">
          <div class="flex items-center gap-1.5">
            <svg viewBox="0 0 24 24" class="${qrSize} text-stone-700 shrink-0" fill="currentColor" aria-hidden="true">
              <path d="M3 3h7v7H3V3zm2 2v3h3V5H5zm9-2h7v7h-7V3zm2 2v3h3V5h-3zM3 14h7v7H3v-7zm2 2v3h3v-3H5zm9-2h2v2h-2v-2zm3 0h4v2h-4v-2zm-3 3h3v4h-3v-4zm4 2h3v2h-3v-2z"/>
            </svg>
            <div class="leading-tight">
              <span class="block font-bold tracking-tight text-stone-600 ${compact ? 'text-[7px]' : 'text-[10px]'}">DISEÑOS A PEDIDO</span>
              <span class="block text-stone-500 ${compact ? 'text-[7px]' : 'text-[9px]'}">@cianycoral</span>
            </div>
          </div>
          <svg viewBox="0 0 64 40" class="${compact ? 'w-11 h-7' : 'w-14 h-9'} text-stone-500/80 shrink-0" fill="none" stroke="currentColor" stroke-width="1.2" aria-hidden="true">
            <circle cx="20" cy="20" r="14" stroke-dasharray="3 2"/>
            <circle cx="20" cy="20" r="10"/>
            <path d="M10 20h20M20 10v10" stroke-width="1"/>
            <circle cx="15" cy="15" r="1.5" fill="currentColor"/>
            <path d="M30 14c8-3 14 3 24 0M30 20c8-3 14 3 24 0M30 26c8-3 14 3 24 0" stroke-linecap="round"/>
          </svg>
        </div>
      </div>
    `;
  }

  function getFiltered() {
    const q = searchQuery.trim().toLowerCase();
    return ITEMS.filter(item => {
      const catOk = activeCategory === 'Todas' || item.category === activeCategory;
      if (!catOk) return false;
      if (!q) return true;
      return (
        item.title.toLowerCase().includes(q) ||
        item.code.toLowerCase().includes(q) ||
        item.category.toLowerCase().includes(q) ||
        item.subcategory.toLowerCase().includes(q)
      );
    });
  }

  function renderTabs() {
    const el = document.getElementById('category-tabs');
    if (!el) return;
    el.innerHTML = CATEGORIES.map(cat => {
      const count = cat === 'Todas' ? ITEMS.length : ITEMS.filter(i => i.category === cat).length;
      const active = cat === activeCategory;
      return `
        <button
          type="button"
          role="tab"
          aria-selected="${active}"
          onclick="window.CatalogApp.setCategory('${cat}')"
          class="shrink-0 px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
            active
              ? 'bg-ink text-white shadow-2xs'
              : 'bg-paper hover:bg-cian-pastel/60 text-slate-600'
          }"
        >
          ${cat} <span class="opacity-65 text-[10px]">(${count})</span>
        </button>
      `;
    }).join('');
  }

  function renderGrid() {
    const grid = document.getElementById('catalog-grid');
    const empty = document.getElementById('catalog-empty');
    const counter = document.getElementById('catalog-counter');
    if (!grid) return;

    const list = getFiltered();
    if (counter) {
      counter.textContent = `${list.length} ${list.length === 1 ? 'diseño' : 'diseños'} disponibles`;
    }

    if (!list.length) {
      grid.innerHTML = '';
      if (empty) empty.classList.remove('hidden');
      return;
    }
    if (empty) empty.classList.add('hidden');

    grid.innerHTML = list.map((item, idx) => {
      const priority = idx < 5 ? 'fetchpriority="high"' : 'loading="lazy"';
      return `
        <article class="group flex flex-col bg-white/85 backdrop-blur-2xs rounded-2xl border border-stone-200/80 p-2 shadow-2xs hover:shadow-md transition-all">
          <div class="relative postcard-scene w-full aspect-[2/3] cursor-pointer" onclick="window.CatalogApp.openModal('${item.id}')">
            <div id="card-flip-${item.id}" class="postcard-inner rounded-lg">
              <div class="postcard-face bg-white p-1.5 rounded-lg border border-stone-200/90 postcard-shadow">
                <img
                  src="${item.img}"
                  alt="${item.title} — ${item.category}"
                  ${priority}
                  decoding="async"
                  class="postcard-img rounded-sm"
                />
              </div>
              <div class="postcard-face postcard-back rounded-lg border border-stone-200 postcard-shadow">
                ${renderBackFace(true)}
              </div>
            </div>
            <button
              type="button"
              onclick="event.stopPropagation(); window.CatalogApp.flipCard('${item.id}')"
              class="absolute top-2 right-2 z-10 px-2 py-0.5 rounded-full bg-white/95 hover:bg-cian-pastel text-slate-600 hover:text-cian-deep border border-stone-200 shadow-xs text-[10px] font-bold flex items-center gap-1 transition-colors"
              title="Ver tiro / retiro de postal"
              aria-label="Girar postal ${item.title}"
            >↻ <span class="hidden sm:inline">Retiro</span></button>
          </div>

          <div class="pt-2.5 px-1 flex flex-col flex-1 justify-between gap-2">
            <button type="button" onclick="window.CatalogApp.openModal('${item.id}')" class="text-left group-hover:text-cian-deep transition-colors">
              <span class="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">${item.category}</span>
              <h3 class="font-serif text-sm sm:text-base font-bold text-ink leading-snug line-clamp-1">${item.title}</h3>
            </button>

            <div class="flex flex-col gap-1.5 pt-1.5 border-t border-stone-100">
              <select
                id="card-format-${item.id}"
                aria-label="Formato para ${item.title}"
                class="w-full px-2 py-1 rounded-lg bg-paper border border-stone-200 text-[11px] font-medium text-ink focus:outline-none focus:border-cian"
              >
                ${FORMAT_OPTIONS.map(o => `<option value="${o.id}">${o.short}</option>`).join('')}
              </select>
              <button
                type="button"
                onclick="window.CatalogApp.addFromCard('${item.id}')"
                class="w-full py-1.5 rounded-lg bg-cian-pastel/75 hover:bg-cian text-cian-deep hover:text-white text-[11px] font-bold transition-colors active:scale-95"
              >+ Agregar al carro</button>
            </div>
          </div>
        </article>
      `;
    }).join('');
  }

  function openModal(id) {
    const item = ITEMS.find(i => i.id === id);
    const dialog = document.getElementById('product-modal');
    if (!item || !dialog) return;

    document.getElementById('modal-cat').textContent = `${item.category} · ${item.code}`;
    document.getElementById('modal-title').textContent = item.title;
    document.getElementById('modal-front-img').innerHTML = `
      <img src="${item.img}" alt="${item.title}" class="postcard-img rounded-sm" />
    `;
    document.getElementById('modal-back-face').innerHTML = renderBackFace(false);

    const optsEl = document.getElementById('modal-format-options');
    if (optsEl) {
      optsEl.innerHTML = FORMAT_OPTIONS.map(o => `
        <div class="flex items-center justify-between gap-2 p-2 rounded-xl border border-stone-200 bg-paper/70 hover:border-cian transition-colors">
          <div class="min-w-0">
            <p class="text-xs font-bold text-ink leading-tight">${o.label}</p>
            <p class="text-[10px] text-slate-500">${o.note}</p>
          </div>
          <button
            type="button"
            onclick="window.CartApp.add('${item.id}', '${o.id}', 1)"
            class="shrink-0 px-2.5 py-1.5 rounded-lg bg-ink hover:bg-cian-deep text-white text-[11px] font-bold transition-colors active:scale-95"
          >+ ${o.price}</button>
        </div>
      `).join('');
    }

    if (!dialog.open) dialog.showModal();
  }

  function closeModal() {
    const dialog = document.getElementById('product-modal');
    if (dialog && dialog.open) dialog.close();
  }

  function setupDialogFallback() {
    if (!('closedBy' in HTMLDialogElement.prototype)) {
      const outside = (e, dialog) => {
        const r = dialog.getBoundingClientRect();
        return e.clientX < r.left || e.clientX > r.right || e.clientY < r.top || e.clientY > r.bottom;
      };
      for (const dialog of document.querySelectorAll('dialog[closedby="any"]')) {
        let pressedOutside = false;
        dialog.addEventListener('pointerdown', e => { pressedOutside = outside(e, dialog); });
        dialog.addEventListener('pointerup', e => { if (pressedOutside && outside(e, dialog)) dialog.close(); });
      }
    }
  }

  function init() {
    setupDialogFallback();
    renderTabs();
    renderGrid();

    const searchEl = document.getElementById('search-input');
    if (searchEl) {
      searchEl.addEventListener('input', e => {
        searchQuery = e.target.value;
        renderGrid();
      });
    }

    if (window.CartApp) {
      window.CartApp.sync(ITEMS);
    }
  }

  document.addEventListener('DOMContentLoaded', init);

  return {
    setCategory: cat => { activeCategory = cat; renderTabs(); renderGrid(); },
    reset: () => {
      activeCategory = 'Todas';
      searchQuery = '';
      const s = document.getElementById('search-input');
      if (s) s.value = '';
      renderTabs();
      renderGrid();
    },
    flipCard: id => {
      const el = document.getElementById(`card-flip-${id}`);
      if (el) el.classList.toggle('is-flipped');
    },
    addFromCard: id => {
      const sel = document.getElementById(`card-format-${id}`);
      const formatId = sel ? sel.value : 'postal';
      if (window.CartApp) window.CartApp.add(id, formatId, 1);
    },
    openModal,
    closeModal
  };
})();
