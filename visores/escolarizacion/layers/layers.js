var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Capaunida_1 = new ol.format.GeoJSON();
var features_Capaunida_1 = format_Capaunida_1.readFeatures(json_Capaunida_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Capaunida_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Capaunida_1.addFeatures(features_Capaunida_1);
var lyr_Capaunida_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Capaunida_1, 
                style: style_Capaunida_1,
                popuplayertitle: 'Capa unida',
                interactive: true,
    title: 'Capa unida<br />\
    <img src="styles/legend/Capaunida_1_0.png" /> 0.9 - 16.6<br />\
    <img src="styles/legend/Capaunida_1_1.png" /> 16.6 - 19.5<br />\
    <img src="styles/legend/Capaunida_1_2.png" /> 19.5 - 21.3<br />\
    <img src="styles/legend/Capaunida_1_3.png" /> 21.3 - 23.8<br />\
    <img src="styles/legend/Capaunida_1_4.png" /> 23.8 - 41.1<br />' });

lyr_OSMStandard_0.setVisible(true);lyr_Capaunida_1.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_Capaunida_1];
lyr_Capaunida_1.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'NOM_DPTO': 'NOM_DPTO', 'COD_DPTO': 'COD_DPTO', 'municipio': 'municipio', 'COD_MUN': 'COD_MUN', 'COD_MUN4': 'COD_MUN4', 'TASA_POBR': 'TASA_POBR', 'POBR_FISDL': 'POBR_FISDL', 'PERIM_KM': 'PERIM_KM', 'AREA_KM2': 'AREA_KM2', 'POB_TOTAL': 'POB_TOTAL', 'POB_HOMB': 'POB_HOMB', 'POB_MUJER': 'POB_MUJER', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'densidad': 'densidad', '2024_TOTAL_HOMBRES_sum': '2024_TOTAL_HOMBRES_sum', '2024_TOTAL_MUJERES_sum': '2024_TOTAL_MUJERES_sum', '2024_TOTAL_GENERAL_sum': '2024_TOTAL_GENERAL_sum', 'porcentaje_inscritos': 'porcentaje_inscritos', });
lyr_Capaunida_1.set('fieldImages', {'fid': 'TextEdit', 'id': 'Range', 'NOM_DPTO': 'TextEdit', 'COD_DPTO': 'TextEdit', 'municipio': 'TextEdit', 'COD_MUN': 'TextEdit', 'COD_MUN4': 'TextEdit', 'TASA_POBR': 'TextEdit', 'POBR_FISDL': 'TextEdit', 'PERIM_KM': 'TextEdit', 'AREA_KM2': 'TextEdit', 'POB_TOTAL': 'Range', 'POB_HOMB': 'Range', 'POB_MUJER': 'Range', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'densidad': 'TextEdit', '2024_TOTAL_HOMBRES_sum': 'TextEdit', '2024_TOTAL_MUJERES_sum': 'TextEdit', '2024_TOTAL_GENERAL_sum': 'TextEdit', 'porcentaje_inscritos': 'TextEdit', });
lyr_Capaunida_1.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'NOM_DPTO': 'no label', 'COD_DPTO': 'no label', 'municipio': 'header label - visible with data', 'COD_MUN': 'no label', 'COD_MUN4': 'no label', 'TASA_POBR': 'no label', 'POBR_FISDL': 'no label', 'PERIM_KM': 'no label', 'AREA_KM2': 'no label', 'POB_TOTAL': 'no label', 'POB_HOMB': 'no label', 'POB_MUJER': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'densidad': 'no label', '2024_TOTAL_HOMBRES_sum': 'no label', '2024_TOTAL_MUJERES_sum': 'no label', '2024_TOTAL_GENERAL_sum': 'no label', 'porcentaje_inscritos': 'header label - visible with data', });
lyr_Capaunida_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});