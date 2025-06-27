var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_municipios_1 = new ol.format.GeoJSON();
var features_municipios_1 = format_municipios_1.readFeatures(json_municipios_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_municipios_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_municipios_1.addFeatures(features_municipios_1);
var lyr_municipios_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_municipios_1, 
                style: style_municipios_1,
                popuplayertitle: 'municipios',
                interactive: true,
                title: '<img src="styles/legend/municipios_1.png" /> municipios'
            });
var format_tonacatepeque_2_2 = new ol.format.GeoJSON();
var features_tonacatepeque_2_2 = format_tonacatepeque_2_2.readFeatures(json_tonacatepeque_2_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_tonacatepeque_2_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_tonacatepeque_2_2.addFeatures(features_tonacatepeque_2_2);
var lyr_tonacatepeque_2_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_tonacatepeque_2_2, 
                style: style_tonacatepeque_2_2,
                popuplayertitle: 'tonacatepeque_2',
                interactive: true,
                title: '<img src="styles/legend/tonacatepeque_2_2.png" /> tonacatepeque_2'
            });
var format_tonacatepeque_1_3 = new ol.format.GeoJSON();
var features_tonacatepeque_1_3 = format_tonacatepeque_1_3.readFeatures(json_tonacatepeque_1_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_tonacatepeque_1_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_tonacatepeque_1_3.addFeatures(features_tonacatepeque_1_3);
var lyr_tonacatepeque_1_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_tonacatepeque_1_3, 
                style: style_tonacatepeque_1_3,
                popuplayertitle: 'tonacatepeque_1',
                interactive: true,
                title: '<img src="styles/legend/tonacatepeque_1_3.png" /> tonacatepeque_1'
            });
var format_ss3_4 = new ol.format.GeoJSON();
var features_ss3_4 = format_ss3_4.readFeatures(json_ss3_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ss3_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ss3_4.addFeatures(features_ss3_4);
var lyr_ss3_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ss3_4, 
                style: style_ss3_4,
                popuplayertitle: 'ss3',
                interactive: true,
                title: '<img src="styles/legend/ss3_4.png" /> ss3'
            });
var format_ss2_5 = new ol.format.GeoJSON();
var features_ss2_5 = format_ss2_5.readFeatures(json_ss2_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ss2_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ss2_5.addFeatures(features_ss2_5);
var lyr_ss2_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ss2_5, 
                style: style_ss2_5,
                popuplayertitle: 'ss2',
                interactive: true,
                title: '<img src="styles/legend/ss2_5.png" /> ss2'
            });
var format_ss1_6 = new ol.format.GeoJSON();
var features_ss1_6 = format_ss1_6.readFeatures(json_ss1_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ss1_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ss1_6.addFeatures(features_ss1_6);
var lyr_ss1_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ss1_6, 
                style: style_ss1_6,
                popuplayertitle: 'ss1',
                interactive: true,
                title: '<img src="styles/legend/ss1_6.png" /> ss1'
            });
var format_soyapango_3_7 = new ol.format.GeoJSON();
var features_soyapango_3_7 = format_soyapango_3_7.readFeatures(json_soyapango_3_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_soyapango_3_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_soyapango_3_7.addFeatures(features_soyapango_3_7);
var lyr_soyapango_3_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_soyapango_3_7, 
                style: style_soyapango_3_7,
                popuplayertitle: 'soyapango_3',
                interactive: true,
                title: '<img src="styles/legend/soyapango_3_7.png" /> soyapango_3'
            });
var format_soyapango_2_8 = new ol.format.GeoJSON();
var features_soyapango_2_8 = format_soyapango_2_8.readFeatures(json_soyapango_2_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_soyapango_2_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_soyapango_2_8.addFeatures(features_soyapango_2_8);
var lyr_soyapango_2_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_soyapango_2_8, 
                style: style_soyapango_2_8,
                popuplayertitle: 'soyapango_2',
                interactive: true,
                title: '<img src="styles/legend/soyapango_2_8.png" /> soyapango_2'
            });
var format_soyapango_1_9 = new ol.format.GeoJSON();
var features_soyapango_1_9 = format_soyapango_1_9.readFeatures(json_soyapango_1_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_soyapango_1_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_soyapango_1_9.addFeatures(features_soyapango_1_9);
var lyr_soyapango_1_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_soyapango_1_9, 
                style: style_soyapango_1_9,
                popuplayertitle: 'soyapango_1',
                interactive: true,
                title: '<img src="styles/legend/soyapango_1_9.png" /> soyapango_1'
            });
var format_santotomas_10 = new ol.format.GeoJSON();
var features_santotomas_10 = format_santotomas_10.readFeatures(json_santotomas_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_santotomas_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_santotomas_10.addFeatures(features_santotomas_10);
var lyr_santotomas_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_santotomas_10, 
                style: style_santotomas_10,
                popuplayertitle: 'santo tomas',
                interactive: true,
                title: '<img src="styles/legend/santotomas_10.png" /> santo tomas'
            });
var format_santiagotexacuangos_11 = new ol.format.GeoJSON();
var features_santiagotexacuangos_11 = format_santiagotexacuangos_11.readFeatures(json_santiagotexacuangos_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_santiagotexacuangos_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_santiagotexacuangos_11.addFeatures(features_santiagotexacuangos_11);
var lyr_santiagotexacuangos_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_santiagotexacuangos_11, 
                style: style_santiagotexacuangos_11,
                popuplayertitle: 'santiago texacuangos',
                interactive: true,
                title: '<img src="styles/legend/santiagotexacuangos_11.png" /> santiago texacuangos'
            });
var format_san_martin_2_12 = new ol.format.GeoJSON();
var features_san_martin_2_12 = format_san_martin_2_12.readFeatures(json_san_martin_2_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_san_martin_2_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_san_martin_2_12.addFeatures(features_san_martin_2_12);
var lyr_san_martin_2_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_san_martin_2_12, 
                style: style_san_martin_2_12,
                popuplayertitle: 'san_martin_2',
                interactive: true,
                title: '<img src="styles/legend/san_martin_2_12.png" /> san_martin_2'
            });
var format_san_martin_1_13 = new ol.format.GeoJSON();
var features_san_martin_1_13 = format_san_martin_1_13.readFeatures(json_san_martin_1_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_san_martin_1_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_san_martin_1_13.addFeatures(features_san_martin_1_13);
var lyr_san_martin_1_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_san_martin_1_13, 
                style: style_san_martin_1_13,
                popuplayertitle: 'san_martin_1',
                interactive: true,
                title: '<img src="styles/legend/san_martin_1_13.png" /> san_martin_1'
            });
var format_rosariodemora_14 = new ol.format.GeoJSON();
var features_rosariodemora_14 = format_rosariodemora_14.readFeatures(json_rosariodemora_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_rosariodemora_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_rosariodemora_14.addFeatures(features_rosariodemora_14);
var lyr_rosariodemora_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_rosariodemora_14, 
                style: style_rosariodemora_14,
                popuplayertitle: 'rosario de mora',
                interactive: true,
                title: '<img src="styles/legend/rosariodemora_14.png" /> rosario de mora'
            });
var format_sanmarcos_15 = new ol.format.GeoJSON();
var features_sanmarcos_15 = format_sanmarcos_15.readFeatures(json_sanmarcos_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_sanmarcos_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_sanmarcos_15.addFeatures(features_sanmarcos_15);
var lyr_sanmarcos_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_sanmarcos_15, 
                style: style_sanmarcos_15,
                popuplayertitle: 'san marcos',
                interactive: true,
                title: '<img src="styles/legend/sanmarcos_15.png" /> san marcos'
            });
var format_panchimalco_2_16 = new ol.format.GeoJSON();
var features_panchimalco_2_16 = format_panchimalco_2_16.readFeatures(json_panchimalco_2_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_panchimalco_2_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_panchimalco_2_16.addFeatures(features_panchimalco_2_16);
var lyr_panchimalco_2_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_panchimalco_2_16, 
                style: style_panchimalco_2_16,
                popuplayertitle: 'panchimalco_2',
                interactive: true,
                title: '<img src="styles/legend/panchimalco_2_16.png" /> panchimalco_2'
            });
var format_panchimalco_1_17 = new ol.format.GeoJSON();
var features_panchimalco_1_17 = format_panchimalco_1_17.readFeatures(json_panchimalco_1_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_panchimalco_1_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_panchimalco_1_17.addFeatures(features_panchimalco_1_17);
var lyr_panchimalco_1_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_panchimalco_1_17, 
                style: style_panchimalco_1_17,
                popuplayertitle: 'panchimalco_1',
                interactive: true,
                title: '<img src="styles/legend/panchimalco_1_17.png" /> panchimalco_1'
            });
var format_paisnal_18 = new ol.format.GeoJSON();
var features_paisnal_18 = format_paisnal_18.readFeatures(json_paisnal_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_paisnal_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_paisnal_18.addFeatures(features_paisnal_18);
var lyr_paisnal_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_paisnal_18, 
                style: style_paisnal_18,
                popuplayertitle: 'paisnal',
                interactive: true,
                title: '<img src="styles/legend/paisnal_18.png" /> paisnal'
            });
var format_nejapa_2_19 = new ol.format.GeoJSON();
var features_nejapa_2_19 = format_nejapa_2_19.readFeatures(json_nejapa_2_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_nejapa_2_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_nejapa_2_19.addFeatures(features_nejapa_2_19);
var lyr_nejapa_2_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_nejapa_2_19, 
                style: style_nejapa_2_19,
                popuplayertitle: 'nejapa_2',
                interactive: true,
                title: '<img src="styles/legend/nejapa_2_19.png" /> nejapa_2'
            });
var format_mejicanos_20 = new ol.format.GeoJSON();
var features_mejicanos_20 = format_mejicanos_20.readFeatures(json_mejicanos_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_mejicanos_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_mejicanos_20.addFeatures(features_mejicanos_20);
var lyr_mejicanos_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_mejicanos_20, 
                style: style_mejicanos_20,
                popuplayertitle: 'mejicanos',
                interactive: true,
                title: '<img src="styles/legend/mejicanos_20.png" /> mejicanos'
            });
var format_nejapa_1_21 = new ol.format.GeoJSON();
var features_nejapa_1_21 = format_nejapa_1_21.readFeatures(json_nejapa_1_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_nejapa_1_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_nejapa_1_21.addFeatures(features_nejapa_1_21);
var lyr_nejapa_1_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_nejapa_1_21, 
                style: style_nejapa_1_21,
                popuplayertitle: 'nejapa_1',
                interactive: true,
                title: '<img src="styles/legend/nejapa_1_21.png" /> nejapa_1'
            });
var format_ilopango_2_22 = new ol.format.GeoJSON();
var features_ilopango_2_22 = format_ilopango_2_22.readFeatures(json_ilopango_2_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ilopango_2_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ilopango_2_22.addFeatures(features_ilopango_2_22);
var lyr_ilopango_2_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ilopango_2_22, 
                style: style_ilopango_2_22,
                popuplayertitle: 'ilopango_2',
                interactive: true,
                title: '<img src="styles/legend/ilopango_2_22.png" /> ilopango_2'
            });
var format_guazapa_23 = new ol.format.GeoJSON();
var features_guazapa_23 = format_guazapa_23.readFeatures(json_guazapa_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_guazapa_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_guazapa_23.addFeatures(features_guazapa_23);
var lyr_guazapa_23 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_guazapa_23, 
                style: style_guazapa_23,
                popuplayertitle: 'guazapa',
                interactive: true,
                title: '<img src="styles/legend/guazapa_23.png" /> guazapa'
            });
var format_ilopango_1_24 = new ol.format.GeoJSON();
var features_ilopango_1_24 = format_ilopango_1_24.readFeatures(json_ilopango_1_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ilopango_1_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ilopango_1_24.addFeatures(features_ilopango_1_24);
var lyr_ilopango_1_24 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ilopango_1_24, 
                style: style_ilopango_1_24,
                popuplayertitle: 'ilopango_1',
                interactive: true,
                title: '<img src="styles/legend/ilopango_1_24.png" /> ilopango_1'
            });
var format_cuscatancingo_25 = new ol.format.GeoJSON();
var features_cuscatancingo_25 = format_cuscatancingo_25.readFeatures(json_cuscatancingo_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_cuscatancingo_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_cuscatancingo_25.addFeatures(features_cuscatancingo_25);
var lyr_cuscatancingo_25 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_cuscatancingo_25, 
                style: style_cuscatancingo_25,
                popuplayertitle: 'cuscatancingo',
                interactive: true,
                title: '<img src="styles/legend/cuscatancingo_25.png" /> cuscatancingo'
            });
var format_ciudad_delgado_2_26 = new ol.format.GeoJSON();
var features_ciudad_delgado_2_26 = format_ciudad_delgado_2_26.readFeatures(json_ciudad_delgado_2_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ciudad_delgado_2_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ciudad_delgado_2_26.addFeatures(features_ciudad_delgado_2_26);
var lyr_ciudad_delgado_2_26 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ciudad_delgado_2_26, 
                style: style_ciudad_delgado_2_26,
                popuplayertitle: 'ciudad_delgado_2',
                interactive: true,
                title: '<img src="styles/legend/ciudad_delgado_2_26.png" /> ciudad_delgado_2'
            });
var format_ciudad_delgado_1_27 = new ol.format.GeoJSON();
var features_ciudad_delgado_1_27 = format_ciudad_delgado_1_27.readFeatures(json_ciudad_delgado_1_27, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ciudad_delgado_1_27 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ciudad_delgado_1_27.addFeatures(features_ciudad_delgado_1_27);
var lyr_ciudad_delgado_1_27 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ciudad_delgado_1_27, 
                style: style_ciudad_delgado_1_27,
                popuplayertitle: 'ciudad_delgado_1',
                interactive: true,
                title: '<img src="styles/legend/ciudad_delgado_1_27.png" /> ciudad_delgado_1'
            });
var format_ayutuxtepeque_2_28 = new ol.format.GeoJSON();
var features_ayutuxtepeque_2_28 = format_ayutuxtepeque_2_28.readFeatures(json_ayutuxtepeque_2_28, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ayutuxtepeque_2_28 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ayutuxtepeque_2_28.addFeatures(features_ayutuxtepeque_2_28);
var lyr_ayutuxtepeque_2_28 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ayutuxtepeque_2_28, 
                style: style_ayutuxtepeque_2_28,
                popuplayertitle: 'ayutuxtepeque_2',
                interactive: true,
                title: '<img src="styles/legend/ayutuxtepeque_2_28.png" /> ayutuxtepeque_2'
            });
var format_ayutuxtepeque_1_29 = new ol.format.GeoJSON();
var features_ayutuxtepeque_1_29 = format_ayutuxtepeque_1_29.readFeatures(json_ayutuxtepeque_1_29, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ayutuxtepeque_1_29 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ayutuxtepeque_1_29.addFeatures(features_ayutuxtepeque_1_29);
var lyr_ayutuxtepeque_1_29 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ayutuxtepeque_1_29, 
                style: style_ayutuxtepeque_1_29,
                popuplayertitle: 'ayutuxtepeque_1',
                interactive: true,
                title: '<img src="styles/legend/ayutuxtepeque_1_29.png" /> ayutuxtepeque_1'
            });
var format_apopa_3_30 = new ol.format.GeoJSON();
var features_apopa_3_30 = format_apopa_3_30.readFeatures(json_apopa_3_30, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_apopa_3_30 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_apopa_3_30.addFeatures(features_apopa_3_30);
var lyr_apopa_3_30 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_apopa_3_30, 
                style: style_apopa_3_30,
                popuplayertitle: 'apopa_3',
                interactive: true,
                title: '<img src="styles/legend/apopa_3_30.png" /> apopa_3'
            });
var format_apopa_2_31 = new ol.format.GeoJSON();
var features_apopa_2_31 = format_apopa_2_31.readFeatures(json_apopa_2_31, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_apopa_2_31 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_apopa_2_31.addFeatures(features_apopa_2_31);
var lyr_apopa_2_31 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_apopa_2_31, 
                style: style_apopa_2_31,
                popuplayertitle: 'apopa_2',
                interactive: true,
                title: '<img src="styles/legend/apopa_2_31.png" /> apopa_2'
            });
var format_apopa_1_32 = new ol.format.GeoJSON();
var features_apopa_1_32 = format_apopa_1_32.readFeatures(json_apopa_1_32, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_apopa_1_32 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_apopa_1_32.addFeatures(features_apopa_1_32);
var lyr_apopa_1_32 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_apopa_1_32, 
                style: style_apopa_1_32,
                popuplayertitle: 'apopa_1',
                interactive: true,
                title: '<img src="styles/legend/apopa_1_32.png" /> apopa_1'
            });
var format_aguilares_33 = new ol.format.GeoJSON();
var features_aguilares_33 = format_aguilares_33.readFeatures(json_aguilares_33, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_aguilares_33 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_aguilares_33.addFeatures(features_aguilares_33);
var lyr_aguilares_33 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_aguilares_33, 
                style: style_aguilares_33,
                popuplayertitle: 'aguilares',
                interactive: true,
                title: '<img src="styles/legend/aguilares_33.png" /> aguilares'
            });

lyr_OSMStandard_0.setVisible(true);lyr_municipios_1.setVisible(true);lyr_tonacatepeque_2_2.setVisible(true);lyr_tonacatepeque_1_3.setVisible(true);lyr_ss3_4.setVisible(true);lyr_ss2_5.setVisible(true);lyr_ss1_6.setVisible(true);lyr_soyapango_3_7.setVisible(true);lyr_soyapango_2_8.setVisible(true);lyr_soyapango_1_9.setVisible(true);lyr_santotomas_10.setVisible(true);lyr_santiagotexacuangos_11.setVisible(true);lyr_san_martin_2_12.setVisible(true);lyr_san_martin_1_13.setVisible(true);lyr_rosariodemora_14.setVisible(true);lyr_sanmarcos_15.setVisible(true);lyr_panchimalco_2_16.setVisible(true);lyr_panchimalco_1_17.setVisible(true);lyr_paisnal_18.setVisible(true);lyr_nejapa_2_19.setVisible(true);lyr_mejicanos_20.setVisible(true);lyr_nejapa_1_21.setVisible(true);lyr_ilopango_2_22.setVisible(true);lyr_guazapa_23.setVisible(true);lyr_ilopango_1_24.setVisible(true);lyr_cuscatancingo_25.setVisible(true);lyr_ciudad_delgado_2_26.setVisible(true);lyr_ciudad_delgado_1_27.setVisible(true);lyr_ayutuxtepeque_2_28.setVisible(true);lyr_ayutuxtepeque_1_29.setVisible(true);lyr_apopa_3_30.setVisible(true);lyr_apopa_2_31.setVisible(true);lyr_apopa_1_32.setVisible(true);lyr_aguilares_33.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_municipios_1,lyr_tonacatepeque_2_2,lyr_tonacatepeque_1_3,lyr_ss3_4,lyr_ss2_5,lyr_ss1_6,lyr_soyapango_3_7,lyr_soyapango_2_8,lyr_soyapango_1_9,lyr_santotomas_10,lyr_santiagotexacuangos_11,lyr_san_martin_2_12,lyr_san_martin_1_13,lyr_rosariodemora_14,lyr_sanmarcos_15,lyr_panchimalco_2_16,lyr_panchimalco_1_17,lyr_paisnal_18,lyr_nejapa_2_19,lyr_mejicanos_20,lyr_nejapa_1_21,lyr_ilopango_2_22,lyr_guazapa_23,lyr_ilopango_1_24,lyr_cuscatancingo_25,lyr_ciudad_delgado_2_26,lyr_ciudad_delgado_1_27,lyr_ayutuxtepeque_2_28,lyr_ayutuxtepeque_1_29,lyr_apopa_3_30,lyr_apopa_2_31,lyr_apopa_1_32,lyr_aguilares_33];
lyr_municipios_1.set('fieldAliases', {});
lyr_tonacatepeque_2_2.set('fieldAliases', {'ogc_fid': 'ogc_fid', 'id': 'id', 'center_lon': 'center_lon', 'center_lat': 'center_lat', 'aa_mins': 'aa_mins', 'aa_mode': 'aa_mode', 'total_pop': 'total_pop', });
lyr_tonacatepeque_1_3.set('fieldAliases', {'ogc_fid': 'ogc_fid', 'id': 'id', 'center_lon': 'center_lon', 'center_lat': 'center_lat', 'aa_mins': 'aa_mins', 'aa_mode': 'aa_mode', 'total_pop': 'total_pop', });
lyr_ss3_4.set('fieldAliases', {'ogc_fid': 'ogc_fid', 'id': 'id', 'center_lon': 'center_lon', 'center_lat': 'center_lat', 'aa_mins': 'aa_mins', 'aa_mode': 'aa_mode', 'total_pop': 'total_pop', });
lyr_ss2_5.set('fieldAliases', {'ogc_fid': 'ogc_fid', 'id': 'id', 'center_lon': 'center_lon', 'center_lat': 'center_lat', 'aa_mins': 'aa_mins', 'aa_mode': 'aa_mode', 'total_pop': 'total_pop', });
lyr_ss1_6.set('fieldAliases', {'ogc_fid': 'ogc_fid', 'id': 'id', 'center_lon': 'center_lon', 'center_lat': 'center_lat', 'aa_mins': 'aa_mins', 'aa_mode': 'aa_mode', 'total_pop': 'total_pop', });
lyr_soyapango_3_7.set('fieldAliases', {'ogc_fid': 'ogc_fid', 'id': 'id', 'center_lon': 'center_lon', 'center_lat': 'center_lat', 'aa_mins': 'aa_mins', 'aa_mode': 'aa_mode', 'total_pop': 'total_pop', });
lyr_soyapango_2_8.set('fieldAliases', {'ogc_fid': 'ogc_fid', 'id': 'id', 'center_lon': 'center_lon', 'center_lat': 'center_lat', 'aa_mins': 'aa_mins', 'aa_mode': 'aa_mode', 'total_pop': 'total_pop', });
lyr_soyapango_1_9.set('fieldAliases', {'ogc_fid': 'ogc_fid', 'id': 'id', 'center_lon': 'center_lon', 'center_lat': 'center_lat', 'aa_mins': 'aa_mins', 'aa_mode': 'aa_mode', 'total_pop': 'total_pop', });
lyr_santotomas_10.set('fieldAliases', {'ogc_fid': 'ogc_fid', 'id': 'id', 'center_lon': 'center_lon', 'center_lat': 'center_lat', 'aa_mins': 'aa_mins', 'aa_mode': 'aa_mode', 'total_pop': 'total_pop', });
lyr_santiagotexacuangos_11.set('fieldAliases', {'ogc_fid': 'ogc_fid', 'id': 'id', 'center_lon': 'center_lon', 'center_lat': 'center_lat', 'aa_mins': 'aa_mins', 'aa_mode': 'aa_mode', 'total_pop': 'total_pop', });
lyr_san_martin_2_12.set('fieldAliases', {'ogc_fid': 'ogc_fid', 'id': 'id', 'center_lon': 'center_lon', 'center_lat': 'center_lat', 'aa_mins': 'aa_mins', 'aa_mode': 'aa_mode', 'total_pop': 'total_pop', });
lyr_san_martin_1_13.set('fieldAliases', {'ogc_fid': 'ogc_fid', 'id': 'id', 'center_lon': 'center_lon', 'center_lat': 'center_lat', 'aa_mins': 'aa_mins', 'aa_mode': 'aa_mode', 'total_pop': 'total_pop', });
lyr_rosariodemora_14.set('fieldAliases', {'ogc_fid': 'ogc_fid', 'id': 'id', 'center_lon': 'center_lon', 'center_lat': 'center_lat', 'aa_mins': 'aa_mins', 'aa_mode': 'aa_mode', 'total_pop': 'total_pop', });
lyr_sanmarcos_15.set('fieldAliases', {'ogc_fid': 'ogc_fid', 'id': 'id', 'center_lon': 'center_lon', 'center_lat': 'center_lat', 'aa_mins': 'aa_mins', 'aa_mode': 'aa_mode', 'total_pop': 'total_pop', });
lyr_panchimalco_2_16.set('fieldAliases', {'ogc_fid': 'ogc_fid', 'id': 'id', 'center_lon': 'center_lon', 'center_lat': 'center_lat', 'aa_mins': 'aa_mins', 'aa_mode': 'aa_mode', 'total_pop': 'total_pop', });
lyr_panchimalco_1_17.set('fieldAliases', {'ogc_fid': 'ogc_fid', 'id': 'id', 'center_lon': 'center_lon', 'center_lat': 'center_lat', 'aa_mins': 'aa_mins', 'aa_mode': 'aa_mode', 'total_pop': 'total_pop', });
lyr_paisnal_18.set('fieldAliases', {'ogc_fid': 'ogc_fid', 'id': 'id', 'center_lon': 'center_lon', 'center_lat': 'center_lat', 'aa_mins': 'aa_mins', 'aa_mode': 'aa_mode', 'total_pop': 'total_pop', });
lyr_nejapa_2_19.set('fieldAliases', {'ogc_fid': 'ogc_fid', 'id': 'id', 'center_lon': 'center_lon', 'center_lat': 'center_lat', 'aa_mins': 'aa_mins', 'aa_mode': 'aa_mode', 'total_pop': 'total_pop', });
lyr_mejicanos_20.set('fieldAliases', {'ogc_fid': 'ogc_fid', 'id': 'id', 'center_lon': 'center_lon', 'center_lat': 'center_lat', 'aa_mins': 'aa_mins', 'aa_mode': 'aa_mode', 'total_pop': 'total_pop', });
lyr_nejapa_1_21.set('fieldAliases', {'ogc_fid': 'ogc_fid', 'id': 'id', 'center_lon': 'center_lon', 'center_lat': 'center_lat', 'aa_mins': 'aa_mins', 'aa_mode': 'aa_mode', 'total_pop': 'total_pop', });
lyr_ilopango_2_22.set('fieldAliases', {'ogc_fid': 'ogc_fid', 'id': 'id', 'center_lon': 'center_lon', 'center_lat': 'center_lat', 'aa_mins': 'aa_mins', 'aa_mode': 'aa_mode', 'total_pop': 'total_pop', });
lyr_guazapa_23.set('fieldAliases', {'ogc_fid': 'ogc_fid', 'id': 'id', 'center_lon': 'center_lon', 'center_lat': 'center_lat', 'aa_mins': 'aa_mins', 'aa_mode': 'aa_mode', 'total_pop': 'total_pop', });
lyr_ilopango_1_24.set('fieldAliases', {'ogc_fid': 'ogc_fid', 'id': 'id', 'center_lon': 'center_lon', 'center_lat': 'center_lat', 'aa_mins': 'aa_mins', 'aa_mode': 'aa_mode', 'total_pop': 'total_pop', });
lyr_cuscatancingo_25.set('fieldAliases', {'ogc_fid': 'ogc_fid', 'id': 'id', 'center_lon': 'center_lon', 'center_lat': 'center_lat', 'aa_mins': 'aa_mins', 'aa_mode': 'aa_mode', 'total_pop': 'total_pop', });
lyr_ciudad_delgado_2_26.set('fieldAliases', {'ogc_fid': 'ogc_fid', 'id': 'id', 'center_lon': 'center_lon', 'center_lat': 'center_lat', 'aa_mins': 'aa_mins', 'aa_mode': 'aa_mode', 'total_pop': 'total_pop', });
lyr_ciudad_delgado_1_27.set('fieldAliases', {'ogc_fid': 'ogc_fid', 'id': 'id', 'center_lon': 'center_lon', 'center_lat': 'center_lat', 'aa_mins': 'aa_mins', 'aa_mode': 'aa_mode', 'total_pop': 'total_pop', });
lyr_ayutuxtepeque_2_28.set('fieldAliases', {'ogc_fid': 'ogc_fid', 'id': 'id', 'center_lon': 'center_lon', 'center_lat': 'center_lat', 'aa_mins': 'aa_mins', 'aa_mode': 'aa_mode', 'total_pop': 'total_pop', });
lyr_ayutuxtepeque_1_29.set('fieldAliases', {'ogc_fid': 'ogc_fid', 'id': 'id', 'center_lon': 'center_lon', 'center_lat': 'center_lat', 'aa_mins': 'aa_mins', 'aa_mode': 'aa_mode', 'total_pop': 'total_pop', });
lyr_apopa_3_30.set('fieldAliases', {'ogc_fid': 'ogc_fid', 'id': 'id', 'center_lon': 'center_lon', 'center_lat': 'center_lat', 'aa_mins': 'aa_mins', 'aa_mode': 'aa_mode', 'total_pop': 'total_pop', });
lyr_apopa_2_31.set('fieldAliases', {'ogc_fid': 'ogc_fid', 'id': 'id', 'center_lon': 'center_lon', 'center_lat': 'center_lat', 'aa_mins': 'aa_mins', 'aa_mode': 'aa_mode', 'total_pop': 'total_pop', });
lyr_apopa_1_32.set('fieldAliases', {'ogc_fid': 'ogc_fid', 'id': 'id', 'center_lon': 'center_lon', 'center_lat': 'center_lat', 'aa_mins': 'aa_mins', 'aa_mode': 'aa_mode', 'total_pop': 'total_pop', });
lyr_aguilares_33.set('fieldAliases', {'ogc_fid': 'ogc_fid', 'id': 'id', 'center_lon': 'center_lon', 'center_lat': 'center_lat', 'aa_mins': 'aa_mins', 'aa_mode': 'aa_mode', 'total_pop': 'total_pop', });
lyr_municipios_1.set('fieldImages', {});
lyr_tonacatepeque_2_2.set('fieldImages', {'ogc_fid': '', 'id': '', 'center_lon': '', 'center_lat': '', 'aa_mins': '', 'aa_mode': '', 'total_pop': '', });
lyr_tonacatepeque_1_3.set('fieldImages', {'ogc_fid': '', 'id': '', 'center_lon': '', 'center_lat': '', 'aa_mins': '', 'aa_mode': '', 'total_pop': '', });
lyr_ss3_4.set('fieldImages', {'ogc_fid': '', 'id': '', 'center_lon': '', 'center_lat': '', 'aa_mins': '', 'aa_mode': '', 'total_pop': '', });
lyr_ss2_5.set('fieldImages', {'ogc_fid': '', 'id': '', 'center_lon': '', 'center_lat': '', 'aa_mins': '', 'aa_mode': '', 'total_pop': '', });
lyr_ss1_6.set('fieldImages', {'ogc_fid': '', 'id': '', 'center_lon': '', 'center_lat': '', 'aa_mins': '', 'aa_mode': '', 'total_pop': '', });
lyr_soyapango_3_7.set('fieldImages', {'ogc_fid': '', 'id': '', 'center_lon': '', 'center_lat': '', 'aa_mins': '', 'aa_mode': '', 'total_pop': '', });
lyr_soyapango_2_8.set('fieldImages', {'ogc_fid': '', 'id': '', 'center_lon': '', 'center_lat': '', 'aa_mins': '', 'aa_mode': '', 'total_pop': '', });
lyr_soyapango_1_9.set('fieldImages', {'ogc_fid': '', 'id': '', 'center_lon': '', 'center_lat': '', 'aa_mins': '', 'aa_mode': '', 'total_pop': '', });
lyr_santotomas_10.set('fieldImages', {'ogc_fid': '', 'id': '', 'center_lon': '', 'center_lat': '', 'aa_mins': '', 'aa_mode': '', 'total_pop': '', });
lyr_santiagotexacuangos_11.set('fieldImages', {'ogc_fid': '', 'id': '', 'center_lon': '', 'center_lat': '', 'aa_mins': '', 'aa_mode': '', 'total_pop': '', });
lyr_san_martin_2_12.set('fieldImages', {'ogc_fid': '', 'id': '', 'center_lon': '', 'center_lat': '', 'aa_mins': '', 'aa_mode': '', 'total_pop': '', });
lyr_san_martin_1_13.set('fieldImages', {'ogc_fid': '', 'id': '', 'center_lon': '', 'center_lat': '', 'aa_mins': '', 'aa_mode': '', 'total_pop': '', });
lyr_rosariodemora_14.set('fieldImages', {'ogc_fid': '', 'id': '', 'center_lon': '', 'center_lat': '', 'aa_mins': '', 'aa_mode': '', 'total_pop': '', });
lyr_sanmarcos_15.set('fieldImages', {'ogc_fid': '', 'id': '', 'center_lon': '', 'center_lat': '', 'aa_mins': '', 'aa_mode': '', 'total_pop': '', });
lyr_panchimalco_2_16.set('fieldImages', {'ogc_fid': '', 'id': '', 'center_lon': '', 'center_lat': '', 'aa_mins': '', 'aa_mode': '', 'total_pop': '', });
lyr_panchimalco_1_17.set('fieldImages', {'ogc_fid': '', 'id': '', 'center_lon': '', 'center_lat': '', 'aa_mins': '', 'aa_mode': '', 'total_pop': '', });
lyr_paisnal_18.set('fieldImages', {'ogc_fid': '', 'id': '', 'center_lon': '', 'center_lat': '', 'aa_mins': '', 'aa_mode': '', 'total_pop': '', });
lyr_nejapa_2_19.set('fieldImages', {'ogc_fid': '', 'id': '', 'center_lon': '', 'center_lat': '', 'aa_mins': '', 'aa_mode': '', 'total_pop': '', });
lyr_mejicanos_20.set('fieldImages', {'ogc_fid': '', 'id': '', 'center_lon': '', 'center_lat': '', 'aa_mins': '', 'aa_mode': '', 'total_pop': '', });
lyr_nejapa_1_21.set('fieldImages', {'ogc_fid': '', 'id': '', 'center_lon': '', 'center_lat': '', 'aa_mins': '', 'aa_mode': '', 'total_pop': '', });
lyr_ilopango_2_22.set('fieldImages', {'ogc_fid': '', 'id': '', 'center_lon': '', 'center_lat': '', 'aa_mins': '', 'aa_mode': '', 'total_pop': '', });
lyr_guazapa_23.set('fieldImages', {'ogc_fid': '', 'id': '', 'center_lon': '', 'center_lat': '', 'aa_mins': '', 'aa_mode': '', 'total_pop': '', });
lyr_ilopango_1_24.set('fieldImages', {'ogc_fid': '', 'id': '', 'center_lon': '', 'center_lat': '', 'aa_mins': '', 'aa_mode': '', 'total_pop': '', });
lyr_cuscatancingo_25.set('fieldImages', {'ogc_fid': '', 'id': '', 'center_lon': '', 'center_lat': '', 'aa_mins': '', 'aa_mode': '', 'total_pop': '', });
lyr_ciudad_delgado_2_26.set('fieldImages', {'ogc_fid': '', 'id': '', 'center_lon': '', 'center_lat': '', 'aa_mins': '', 'aa_mode': '', 'total_pop': '', });
lyr_ciudad_delgado_1_27.set('fieldImages', {'ogc_fid': '', 'id': '', 'center_lon': '', 'center_lat': '', 'aa_mins': '', 'aa_mode': '', 'total_pop': '', });
lyr_ayutuxtepeque_2_28.set('fieldImages', {'ogc_fid': '', 'id': '', 'center_lon': '', 'center_lat': '', 'aa_mins': '', 'aa_mode': '', 'total_pop': '', });
lyr_ayutuxtepeque_1_29.set('fieldImages', {'ogc_fid': '', 'id': '', 'center_lon': '', 'center_lat': '', 'aa_mins': '', 'aa_mode': '', 'total_pop': '', });
lyr_apopa_3_30.set('fieldImages', {'ogc_fid': '', 'id': '', 'center_lon': '', 'center_lat': '', 'aa_mins': '', 'aa_mode': '', 'total_pop': '', });
lyr_apopa_2_31.set('fieldImages', {'ogc_fid': '', 'id': '', 'center_lon': '', 'center_lat': '', 'aa_mins': '', 'aa_mode': '', 'total_pop': '', });
lyr_apopa_1_32.set('fieldImages', {'ogc_fid': '', 'id': '', 'center_lon': '', 'center_lat': '', 'aa_mins': '', 'aa_mode': '', 'total_pop': '', });
lyr_aguilares_33.set('fieldImages', {'ogc_fid': '', 'id': '', 'center_lon': '', 'center_lat': '', 'aa_mins': '', 'aa_mode': '', 'total_pop': '', });
lyr_municipios_1.set('fieldLabels', {});
lyr_tonacatepeque_2_2.set('fieldLabels', {'ogc_fid': 'no label', 'id': 'no label', 'center_lon': 'no label', 'center_lat': 'no label', 'aa_mins': 'no label', 'aa_mode': 'no label', 'total_pop': 'no label', });
lyr_tonacatepeque_1_3.set('fieldLabels', {'ogc_fid': 'no label', 'id': 'no label', 'center_lon': 'no label', 'center_lat': 'no label', 'aa_mins': 'no label', 'aa_mode': 'no label', 'total_pop': 'no label', });
lyr_ss3_4.set('fieldLabels', {'ogc_fid': 'no label', 'id': 'no label', 'center_lon': 'no label', 'center_lat': 'no label', 'aa_mins': 'no label', 'aa_mode': 'no label', 'total_pop': 'no label', });
lyr_ss2_5.set('fieldLabels', {'ogc_fid': 'no label', 'id': 'no label', 'center_lon': 'no label', 'center_lat': 'no label', 'aa_mins': 'no label', 'aa_mode': 'no label', 'total_pop': 'no label', });
lyr_ss1_6.set('fieldLabels', {'ogc_fid': 'no label', 'id': 'no label', 'center_lon': 'no label', 'center_lat': 'no label', 'aa_mins': 'no label', 'aa_mode': 'no label', 'total_pop': 'no label', });
lyr_soyapango_3_7.set('fieldLabels', {'ogc_fid': 'no label', 'id': 'no label', 'center_lon': 'no label', 'center_lat': 'no label', 'aa_mins': 'no label', 'aa_mode': 'no label', 'total_pop': 'no label', });
lyr_soyapango_2_8.set('fieldLabels', {'ogc_fid': 'no label', 'id': 'no label', 'center_lon': 'no label', 'center_lat': 'no label', 'aa_mins': 'no label', 'aa_mode': 'no label', 'total_pop': 'no label', });
lyr_soyapango_1_9.set('fieldLabels', {'ogc_fid': 'no label', 'id': 'no label', 'center_lon': 'no label', 'center_lat': 'no label', 'aa_mins': 'no label', 'aa_mode': 'no label', 'total_pop': 'no label', });
lyr_santotomas_10.set('fieldLabels', {'ogc_fid': 'no label', 'id': 'no label', 'center_lon': 'no label', 'center_lat': 'no label', 'aa_mins': 'no label', 'aa_mode': 'no label', 'total_pop': 'no label', });
lyr_santiagotexacuangos_11.set('fieldLabels', {'ogc_fid': 'no label', 'id': 'no label', 'center_lon': 'no label', 'center_lat': 'no label', 'aa_mins': 'no label', 'aa_mode': 'no label', 'total_pop': 'no label', });
lyr_san_martin_2_12.set('fieldLabels', {'ogc_fid': 'no label', 'id': 'no label', 'center_lon': 'no label', 'center_lat': 'no label', 'aa_mins': 'no label', 'aa_mode': 'no label', 'total_pop': 'no label', });
lyr_san_martin_1_13.set('fieldLabels', {'ogc_fid': 'no label', 'id': 'no label', 'center_lon': 'no label', 'center_lat': 'no label', 'aa_mins': 'no label', 'aa_mode': 'no label', 'total_pop': 'no label', });
lyr_rosariodemora_14.set('fieldLabels', {'ogc_fid': 'no label', 'id': 'no label', 'center_lon': 'no label', 'center_lat': 'no label', 'aa_mins': 'no label', 'aa_mode': 'no label', 'total_pop': 'no label', });
lyr_sanmarcos_15.set('fieldLabels', {'ogc_fid': 'no label', 'id': 'no label', 'center_lon': 'no label', 'center_lat': 'no label', 'aa_mins': 'no label', 'aa_mode': 'no label', 'total_pop': 'no label', });
lyr_panchimalco_2_16.set('fieldLabels', {'ogc_fid': 'no label', 'id': 'no label', 'center_lon': 'no label', 'center_lat': 'no label', 'aa_mins': 'no label', 'aa_mode': 'no label', 'total_pop': 'no label', });
lyr_panchimalco_1_17.set('fieldLabels', {'ogc_fid': 'no label', 'id': 'no label', 'center_lon': 'no label', 'center_lat': 'no label', 'aa_mins': 'no label', 'aa_mode': 'no label', 'total_pop': 'no label', });
lyr_paisnal_18.set('fieldLabels', {'ogc_fid': 'no label', 'id': 'no label', 'center_lon': 'no label', 'center_lat': 'no label', 'aa_mins': 'no label', 'aa_mode': 'no label', 'total_pop': 'no label', });
lyr_nejapa_2_19.set('fieldLabels', {'ogc_fid': 'no label', 'id': 'no label', 'center_lon': 'no label', 'center_lat': 'no label', 'aa_mins': 'no label', 'aa_mode': 'no label', 'total_pop': 'no label', });
lyr_mejicanos_20.set('fieldLabels', {'ogc_fid': 'no label', 'id': 'no label', 'center_lon': 'no label', 'center_lat': 'no label', 'aa_mins': 'no label', 'aa_mode': 'no label', 'total_pop': 'no label', });
lyr_nejapa_1_21.set('fieldLabels', {'ogc_fid': 'no label', 'id': 'no label', 'center_lon': 'no label', 'center_lat': 'no label', 'aa_mins': 'no label', 'aa_mode': 'no label', 'total_pop': 'no label', });
lyr_ilopango_2_22.set('fieldLabels', {'ogc_fid': 'no label', 'id': 'no label', 'center_lon': 'no label', 'center_lat': 'no label', 'aa_mins': 'no label', 'aa_mode': 'no label', 'total_pop': 'no label', });
lyr_guazapa_23.set('fieldLabels', {'ogc_fid': 'no label', 'id': 'no label', 'center_lon': 'no label', 'center_lat': 'no label', 'aa_mins': 'no label', 'aa_mode': 'no label', 'total_pop': 'no label', });
lyr_ilopango_1_24.set('fieldLabels', {'ogc_fid': 'no label', 'id': 'no label', 'center_lon': 'no label', 'center_lat': 'no label', 'aa_mins': 'no label', 'aa_mode': 'no label', 'total_pop': 'no label', });
lyr_cuscatancingo_25.set('fieldLabels', {'ogc_fid': 'no label', 'id': 'no label', 'center_lon': 'no label', 'center_lat': 'no label', 'aa_mins': 'no label', 'aa_mode': 'no label', 'total_pop': 'no label', });
lyr_ciudad_delgado_2_26.set('fieldLabels', {'ogc_fid': 'no label', 'id': 'no label', 'center_lon': 'no label', 'center_lat': 'no label', 'aa_mins': 'no label', 'aa_mode': 'no label', 'total_pop': 'no label', });
lyr_ciudad_delgado_1_27.set('fieldLabels', {'ogc_fid': 'no label', 'id': 'no label', 'center_lon': 'no label', 'center_lat': 'no label', 'aa_mins': 'no label', 'aa_mode': 'no label', 'total_pop': 'no label', });
lyr_ayutuxtepeque_2_28.set('fieldLabels', {'ogc_fid': 'no label', 'id': 'no label', 'center_lon': 'no label', 'center_lat': 'no label', 'aa_mins': 'no label', 'aa_mode': 'no label', 'total_pop': 'no label', });
lyr_ayutuxtepeque_1_29.set('fieldLabels', {'ogc_fid': 'no label', 'id': 'no label', 'center_lon': 'no label', 'center_lat': 'no label', 'aa_mins': 'no label', 'aa_mode': 'no label', 'total_pop': 'no label', });
lyr_apopa_3_30.set('fieldLabels', {'ogc_fid': 'no label', 'id': 'no label', 'center_lon': 'no label', 'center_lat': 'no label', 'aa_mins': 'no label', 'aa_mode': 'no label', 'total_pop': 'no label', });
lyr_apopa_2_31.set('fieldLabels', {'ogc_fid': 'no label', 'id': 'no label', 'center_lon': 'no label', 'center_lat': 'no label', 'aa_mins': 'no label', 'aa_mode': 'no label', 'total_pop': 'no label', });
lyr_apopa_1_32.set('fieldLabels', {'ogc_fid': 'no label', 'id': 'no label', 'center_lon': 'no label', 'center_lat': 'no label', 'aa_mins': 'no label', 'aa_mode': 'no label', 'total_pop': 'no label', });
lyr_aguilares_33.set('fieldLabels', {'ogc_fid': 'no label', 'id': 'no label', 'center_lon': 'no label', 'center_lat': 'no label', 'aa_mins': 'no label', 'aa_mode': 'no label', 'total_pop': 'no label', });
lyr_aguilares_33.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});