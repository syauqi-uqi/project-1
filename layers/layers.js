ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:4326").setExtent([-20037508.342789, -20037508.342789, 20037508.342789, 20037508.342789]);
var wms_layers = [];

var format_LuasWilayah_0 = new ol.format.GeoJSON();
var features_LuasWilayah_0 = format_LuasWilayah_0.readFeatures(json_LuasWilayah_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_LuasWilayah_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LuasWilayah_0.addFeatures(features_LuasWilayah_0);
var lyr_LuasWilayah_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LuasWilayah_0, 
                style: style_LuasWilayah_0,
                popuplayertitle: "Luas Wilayah",
                interactive: true,
    title: 'Luas Wilayah<br />\
    <img src="styles/legend/LuasWilayah_0_0.png" /> Sangat Kecil<br />\
    <img src="styles/legend/LuasWilayah_0_1.png" /> Kecil<br />\
    <img src="styles/legend/LuasWilayah_0_2.png" /> Sedang<br />\
    <img src="styles/legend/LuasWilayah_0_3.png" /> Agak Luas<br />\
    <img src="styles/legend/LuasWilayah_0_4.png" /> Luas<br />'
        });
var format_Jumlah_Penduduk_Jabar_1 = new ol.format.GeoJSON();
var features_Jumlah_Penduduk_Jabar_1 = format_Jumlah_Penduduk_Jabar_1.readFeatures(json_Jumlah_Penduduk_Jabar_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Jumlah_Penduduk_Jabar_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Jumlah_Penduduk_Jabar_1.addFeatures(features_Jumlah_Penduduk_Jabar_1);
var lyr_Jumlah_Penduduk_Jabar_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Jumlah_Penduduk_Jabar_1, 
                style: style_Jumlah_Penduduk_Jabar_1,
                popuplayertitle: "Jumlah_Penduduk_Jabar",
                interactive: true,
    title: 'Jumlah_Penduduk_Jabar<br />\
    <img src="styles/legend/Jumlah_Penduduk_Jabar_1_0.png" /> Sangat Sedikit<br />\
    <img src="styles/legend/Jumlah_Penduduk_Jabar_1_1.png" /> Sedikit<br />\
    <img src="styles/legend/Jumlah_Penduduk_Jabar_1_2.png" /> Sedang<br />\
    <img src="styles/legend/Jumlah_Penduduk_Jabar_1_3.png" /> Agak Banyak<br />\
    <img src="styles/legend/Jumlah_Penduduk_Jabar_1_4.png" /> Banyak<br />'
        });

        var lyr_OpenStreetMap_2 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Jumlah_Pencari_Kerja_Jabar_3 = new ol.format.GeoJSON();
var features_Jumlah_Pencari_Kerja_Jabar_3 = format_Jumlah_Pencari_Kerja_Jabar_3.readFeatures(json_Jumlah_Pencari_Kerja_Jabar_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Jumlah_Pencari_Kerja_Jabar_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Jumlah_Pencari_Kerja_Jabar_3.addFeatures(features_Jumlah_Pencari_Kerja_Jabar_3);
var lyr_Jumlah_Pencari_Kerja_Jabar_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Jumlah_Pencari_Kerja_Jabar_3, 
                style: style_Jumlah_Pencari_Kerja_Jabar_3,
                popuplayertitle: "Jumlah_Pencari_Kerja_Jabar",
                interactive: true,
    title: 'Jumlah_Pencari_Kerja_Jabar<br />\
    <img src="styles/legend/Jumlah_Pencari_Kerja_Jabar_3_0.png" /> Sangat Sedikit<br />\
    <img src="styles/legend/Jumlah_Pencari_Kerja_Jabar_3_1.png" /> Sedikit<br />\
    <img src="styles/legend/Jumlah_Pencari_Kerja_Jabar_3_2.png" /> Sedang<br />\
    <img src="styles/legend/Jumlah_Pencari_Kerja_Jabar_3_3.png" /> Agak Banyak<br />\
    <img src="styles/legend/Jumlah_Pencari_Kerja_Jabar_3_4.png" /> Banyak<br />'
        });

lyr_LuasWilayah_0.setVisible(true);lyr_Jumlah_Penduduk_Jabar_1.setVisible(true);lyr_OpenStreetMap_2.setVisible(true);lyr_Jumlah_Pencari_Kerja_Jabar_3.setVisible(true);
var layersList = [lyr_LuasWilayah_0,lyr_Jumlah_Penduduk_Jabar_1,lyr_OpenStreetMap_2,lyr_Jumlah_Pencari_Kerja_Jabar_3];
lyr_LuasWilayah_0.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'KAB_KOTA': 'KAB_KOTA', 'FID_1': 'FID_1', 'JumPencari': 'JumPencari', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_Jumlah_Penduduk_Jabar_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'KAB_KOTA': 'KAB_KOTA', 'FID_1': 'FID_1', 'JumPendudu': 'JumPendudu', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_Jumlah_Pencari_Kerja_Jabar_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'KAB_KOTA': 'KAB_KOTA', 'FID_1': 'FID_1', 'JumPencari': 'JumPencari', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_LuasWilayah_0.set('fieldImages', {'OBJECTID': 'TextEdit', 'KAB_KOTA': 'TextEdit', 'FID_1': 'TextEdit', 'JumPencari': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Jumlah_Penduduk_Jabar_1.set('fieldImages', {'OBJECTID': 'TextEdit', 'KAB_KOTA': 'TextEdit', 'FID_1': 'TextEdit', 'JumPendudu': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Jumlah_Pencari_Kerja_Jabar_3.set('fieldImages', {'OBJECTID': 'TextEdit', 'KAB_KOTA': 'TextEdit', 'FID_1': 'TextEdit', 'JumPencari': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_LuasWilayah_0.set('fieldLabels', {'OBJECTID': 'hidden field', 'KAB_KOTA': 'inline label - always visible', 'FID_1': 'hidden field', 'JumPencari': 'hidden field', 'Shape_Leng': 'hidden field', 'Shape_Area': 'inline label - always visible', });
lyr_Jumlah_Penduduk_Jabar_1.set('fieldLabels', {'OBJECTID': 'hidden field', 'KAB_KOTA': 'inline label - always visible', 'FID_1': 'hidden field', 'JumPendudu': 'inline label - always visible', 'Shape_Leng': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_Jumlah_Pencari_Kerja_Jabar_3.set('fieldLabels', {'OBJECTID': 'hidden field', 'KAB_KOTA': 'inline label - always visible', 'FID_1': 'hidden field', 'JumPencari': 'inline label - always visible', 'Shape_Leng': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_Jumlah_Pencari_Kerja_Jabar_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});