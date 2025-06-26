var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_distritos_1 = new ol.format.GeoJSON();
var features_distritos_1 = format_distritos_1.readFeatures(json_distritos_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_distritos_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_distritos_1.addFeatures(features_distritos_1);
var lyr_distritos_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_distritos_1, 
                style: style_distritos_1,
                popuplayertitle: 'distritos',
                interactive: true,
    title: 'distritos<br />\
    <img src="styles/legend/distritos_1_0.png" /> 0 - 279<br />\
    <img src="styles/legend/distritos_1_1.png" /> 279 - 704<br />\
    <img src="styles/legend/distritos_1_2.png" /> 704 - 1826<br />\
    <img src="styles/legend/distritos_1_3.png" /> 1826 - 4458<br />\
    <img src="styles/legend/distritos_1_4.png" /> 4458 - 8078<br />\
    <img src="styles/legend/distritos_1_5.png" /> 8078 - 10390<br />' });

lyr_OSMStandard_0.setVisible(true);lyr_distritos_1.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_distritos_1];
lyr_distritos_1.set('fieldAliases', {'id': 'id', 'fid': 'fid', 'NOM_DPTO': 'NOM_DPTO', 'COD_DPTO': 'COD_DPTO', 'NOM_MUN': 'NOM_MUN', 'COD_MUN': 'COD_MUN', 'COD_MUN4': 'COD_MUN4', 'TASA_POBR': 'TASA_POBR', 'POBR_FISDL': 'POBR_FISDL', 'PERIM_KM': 'PERIM_KM', 'AREA_KM2': 'AREA_KM2', 'POB_TOTAL': 'POB_TOTAL', 'POB_HOMB': 'POB_HOMB', 'POB_MUJER': 'POB_MUJER', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'densidad': 'densidad', });
lyr_distritos_1.set('fieldImages', {'id': '', 'fid': '', 'NOM_DPTO': '', 'COD_DPTO': '', 'NOM_MUN': '', 'COD_MUN': '', 'COD_MUN4': '', 'TASA_POBR': '', 'POBR_FISDL': '', 'PERIM_KM': '', 'AREA_KM2': '', 'POB_TOTAL': '', 'POB_HOMB': '', 'POB_MUJER': '', 'Shape_Leng': '', 'Shape_Area': '', 'densidad': '', });
lyr_distritos_1.set('fieldLabels', {'id': 'inline label - always visible', 'fid': 'no label', 'NOM_DPTO': 'inline label - always visible', 'COD_DPTO': 'no label', 'NOM_MUN': 'header label - visible with data', 'COD_MUN': 'no label', 'COD_MUN4': 'no label', 'TASA_POBR': 'no label', 'POBR_FISDL': 'no label', 'PERIM_KM': 'no label', 'AREA_KM2': 'no label', 'POB_TOTAL': 'no label', 'POB_HOMB': 'no label', 'POB_MUJER': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'densidad': 'header label - visible with data', });
lyr_distritos_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});