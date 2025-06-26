var wms_layers = [];

var format_escMun_0 = new ol.format.GeoJSON();
var features_escMun_0 = format_escMun_0.readFeatures(json_escMun_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_escMun_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_escMun_0.addFeatures(features_escMun_0);
var lyr_escMun_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_escMun_0, 
                style: style_escMun_0,
                popuplayertitle: 'escMun',
                interactive: true,
    title: 'escMun<br />\
    <img src="styles/legend/escMun_0_0.png" /> 0.9 - 16.6<br />\
    <img src="styles/legend/escMun_0_1.png" /> 16.6 - 19.5<br />\
    <img src="styles/legend/escMun_0_2.png" /> 19.5 - 21.3<br />\
    <img src="styles/legend/escMun_0_3.png" /> 21.3 - 23.8<br />\
    <img src="styles/legend/escMun_0_4.png" /> 23.8 - 41.1<br />' });
var group_Escuelasbrechadegenero = new ol.layer.Group({
                                layers: [],
                                fold: 'open',
                                title: 'Escuelas - brecha de genero'});

lyr_escMun_0.setVisible(true);
var layersList = [lyr_escMun_0];
lyr_escMun_0.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'NOM_DPTO': 'NOM_DPTO', 'COD_DPTO': 'COD_DPTO', 'municipio': 'municipio', 'COD_MUN': 'COD_MUN', 'COD_MUN4': 'COD_MUN4', 'TASA_POBR': 'TASA_POBR', 'POBR_FISDL': 'POBR_FISDL', 'PERIM_KM': 'PERIM_KM', 'AREA_KM2': 'AREA_KM2', 'POB_TOTAL': 'POB_TOTAL', 'POB_HOMB': 'POB_HOMB', 'POB_MUJER': 'POB_MUJER', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'densidad': 'densidad', '2024_TOTAL_HOMBRES_sum': '2024_TOTAL_HOMBRES_sum', '2024_TOTAL_MUJERES_sum': '2024_TOTAL_MUJERES_sum', '2024_TOTAL_GENERAL_sum': '2024_TOTAL_GENERAL_sum', 'tasa_cobertura': 'tasa_cobertura', 'porcentaje_cobertura': 'porcentaje_cobertura', });
lyr_escMun_0.set('fieldImages', {'fid': 'TextEdit', 'id': 'Range', 'NOM_DPTO': 'TextEdit', 'COD_DPTO': 'TextEdit', 'municipio': 'TextEdit', 'COD_MUN': 'TextEdit', 'COD_MUN4': 'TextEdit', 'TASA_POBR': 'TextEdit', 'POBR_FISDL': 'TextEdit', 'PERIM_KM': 'TextEdit', 'AREA_KM2': 'TextEdit', 'POB_TOTAL': 'Range', 'POB_HOMB': 'Range', 'POB_MUJER': 'Range', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'densidad': 'TextEdit', '2024_TOTAL_HOMBRES_sum': 'TextEdit', '2024_TOTAL_MUJERES_sum': 'TextEdit', '2024_TOTAL_GENERAL_sum': 'TextEdit', 'tasa_cobertura': 'TextEdit', 'porcentaje_cobertura': 'TextEdit', });
lyr_escMun_0.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'NOM_DPTO': 'no label', 'COD_DPTO': 'no label', 'municipio': 'no label', 'COD_MUN': 'no label', 'COD_MUN4': 'no label', 'TASA_POBR': 'no label', 'POBR_FISDL': 'no label', 'PERIM_KM': 'no label', 'AREA_KM2': 'no label', 'POB_TOTAL': 'no label', 'POB_HOMB': 'no label', 'POB_MUJER': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'densidad': 'no label', '2024_TOTAL_HOMBRES_sum': 'no label', '2024_TOTAL_MUJERES_sum': 'no label', '2024_TOTAL_GENERAL_sum': 'no label', 'tasa_cobertura': 'no label', 'porcentaje_cobertura': 'inline label - always visible', });
lyr_escMun_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});