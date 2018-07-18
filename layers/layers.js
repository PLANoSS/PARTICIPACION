var wms_layers = [];
var baseLayer = new ol.layer.Group({
    'title': '',
    layers: [
new ol.layer.Tile({
    'title': 'OpenMapSurfer adminb',
    'type': 'base',
    source: new ol.source.XYZ({
        url: 'http://openmapsurfer.uni-hd.de/tiles/adminb/x={x}&y={y}&z={z}',
        attributions: [new ol.Attribution({html: 'Imagery from <a href="http://giscience.uni-hd.de/">GIScience Research Group @University of Heidelberg</a> &mdash; Map data:&copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors,<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>'})]
    })
})
]
});
var format_Notieneconocimientosobreelpoderdelaparticipacinciudadana_0 = new ol.format.GeoJSON();
var features_Notieneconocimientosobreelpoderdelaparticipacinciudadana_0 = format_Notieneconocimientosobreelpoderdelaparticipacinciudadana_0.readFeatures(json_Notieneconocimientosobreelpoderdelaparticipacinciudadana_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Notieneconocimientosobreelpoderdelaparticipacinciudadana_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Notieneconocimientosobreelpoderdelaparticipacinciudadana_0.addFeatures(features_Notieneconocimientosobreelpoderdelaparticipacinciudadana_0);var lyr_Notieneconocimientosobreelpoderdelaparticipacinciudadana_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Notieneconocimientosobreelpoderdelaparticipacinciudadana_0, 
                style: style_Notieneconocimientosobreelpoderdelaparticipacinciudadana_0,
    title: 'No tiene conocimiento sobre el poder de la participación ciudadana<br />\
    <img src="styles/legend/Notieneconocimientosobreelpoderdelaparticipacinciudadana_0_0.png" />  0 - 20 <br />\
    <img src="styles/legend/Notieneconocimientosobreelpoderdelaparticipacinciudadana_0_1.png" />  20 - 40 <br />\
    <img src="styles/legend/Notieneconocimientosobreelpoderdelaparticipacinciudadana_0_2.png" />  40 - 60 <br />\
    <img src="styles/legend/Notieneconocimientosobreelpoderdelaparticipacinciudadana_0_3.png" />  60 - 80 <br />\
    <img src="styles/legend/Notieneconocimientosobreelpoderdelaparticipacinciudadana_0_4.png" />  80 - 100 <br />'
        });var format_Nohaformadopartedeningntipodeorganizacin_1 = new ol.format.GeoJSON();
var features_Nohaformadopartedeningntipodeorganizacin_1 = format_Nohaformadopartedeningntipodeorganizacin_1.readFeatures(json_Nohaformadopartedeningntipodeorganizacin_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Nohaformadopartedeningntipodeorganizacin_1 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Nohaformadopartedeningntipodeorganizacin_1.addFeatures(features_Nohaformadopartedeningntipodeorganizacin_1);var lyr_Nohaformadopartedeningntipodeorganizacin_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Nohaformadopartedeningntipodeorganizacin_1, 
                style: style_Nohaformadopartedeningntipodeorganizacin_1,
    title: 'No ha formado parte de ningún tipo de organización<br />\
    <img src="styles/legend/Nohaformadopartedeningntipodeorganizacin_1_0.png" />  0 - 20 <br />\
    <img src="styles/legend/Nohaformadopartedeningntipodeorganizacin_1_1.png" />  20 - 40 <br />\
    <img src="styles/legend/Nohaformadopartedeningntipodeorganizacin_1_2.png" />  40 - 60 <br />\
    <img src="styles/legend/Nohaformadopartedeningntipodeorganizacin_1_3.png" />  60 - 80 <br />\
    <img src="styles/legend/Nohaformadopartedeningntipodeorganizacin_1_4.png" />  80 - 100 <br />'
        });var format_Nohapertenecidoaningunaorganizacin_2 = new ol.format.GeoJSON();
var features_Nohapertenecidoaningunaorganizacin_2 = format_Nohapertenecidoaningunaorganizacin_2.readFeatures(json_Nohapertenecidoaningunaorganizacin_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Nohapertenecidoaningunaorganizacin_2 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Nohapertenecidoaningunaorganizacin_2.addFeatures(features_Nohapertenecidoaningunaorganizacin_2);var lyr_Nohapertenecidoaningunaorganizacin_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Nohapertenecidoaningunaorganizacin_2, 
                style: style_Nohapertenecidoaningunaorganizacin_2,
    title: 'No ha pertenecido a ninguna organización<br />\
    <img src="styles/legend/Nohapertenecidoaningunaorganizacin_2_0.png" />  0 - 20 <br />\
    <img src="styles/legend/Nohapertenecidoaningunaorganizacin_2_1.png" />  20 - 40 <br />\
    <img src="styles/legend/Nohapertenecidoaningunaorganizacin_2_2.png" />  40 - 60 <br />\
    <img src="styles/legend/Nohapertenecidoaningunaorganizacin_2_3.png" />  60 - 80 <br />\
    <img src="styles/legend/Nohapertenecidoaningunaorganizacin_2_4.png" />  80 - 100 <br />'
        });

lyr_Notieneconocimientosobreelpoderdelaparticipacinciudadana_0.setVisible(true);lyr_Nohaformadopartedeningntipodeorganizacin_1.setVisible(true);lyr_Nohapertenecidoaningunaorganizacin_2.setVisible(true);
var layersList = [baseLayer,lyr_Notieneconocimientosobreelpoderdelaparticipacinciudadana_0,lyr_Nohaformadopartedeningntipodeorganizacin_1,lyr_Nohapertenecidoaningunaorganizacin_2];
lyr_Notieneconocimientosobreelpoderdelaparticipacinciudadana_0.set('fieldAliases', {'Codigo': 'Codigo', 'Cantón': 'Cantón', 'Provincia': 'Provincia', 'Grafica': 'Grafica', 'No': 'No', });
lyr_Nohaformadopartedeningntipodeorganizacin_1.set('fieldAliases', {'Codigo': 'Codigo', 'Cantón': 'Cantón', 'Provincia': 'Provincia', 'Grafica': 'Grafica', 'Ninguno de': 'Ninguno de', });
lyr_Nohapertenecidoaningunaorganizacin_2.set('fieldAliases', {'Codigo': 'Codigo', 'Cantón': 'Cantón', 'Provincia': 'Provincia', 'Grafica': 'Grafica', 'PD58_PD58T': 'PD58_PD58T', });
lyr_Notieneconocimientosobreelpoderdelaparticipacinciudadana_0.set('fieldImages', {'Codigo': 'Hidden', 'Cantón': 'TextEdit', 'Provincia': 'TextEdit', 'Grafica': 'Photo', 'No': 'Hidden', });
lyr_Nohaformadopartedeningntipodeorganizacin_1.set('fieldImages', {'Codigo': 'Hidden', 'Cantón': 'TextEdit', 'Provincia': 'TextEdit', 'Grafica': 'Photo', 'Ninguno de': 'Hidden', });
lyr_Nohapertenecidoaningunaorganizacin_2.set('fieldImages', {'Codigo': 'TextEdit', 'Cantón': 'TextEdit', 'Provincia': 'TextEdit', 'Grafica': 'Photo', 'PD58_PD58T': 'TextEdit', });
lyr_Notieneconocimientosobreelpoderdelaparticipacinciudadana_0.set('fieldLabels', {'Cantón': 'no label', 'Provincia': 'no label', 'Grafica': 'no label', });
lyr_Nohaformadopartedeningntipodeorganizacin_1.set('fieldLabels', {'Cantón': 'no label', 'Provincia': 'no label', 'Grafica': 'no label', });
lyr_Nohapertenecidoaningunaorganizacin_2.set('fieldLabels', {'Codigo': 'no label', 'Cantón': 'no label', 'Provincia': 'no label', 'Grafica': 'no label', 'PD58_PD58T': 'no label', });
lyr_Nohapertenecidoaningunaorganizacin_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});