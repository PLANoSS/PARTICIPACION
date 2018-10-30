var wms_layers = [];
var baseLayer = new ol.layer.Group({
    'title': '',
    layers: [
new ol.layer.Tile({
    'title': 'OpenMapSurfer adminb',
    'type': 'base',
   source: new ol.source.XYZ({
        url: 'http://{a-c}.www.toolserver.org/tiles/bw-mapnik/{z}/{x}/{y}.png',
        attributions: [new ol.Attribution({html: '&copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>'})]
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
    title: '<b/>Conocimiento sobre el poder de la participación ciudadana:</b><br />El degradado de colores en el mapa muestra el porcentaje de personas<br />que no tienen conocimiento sobre el poder de la participación ciudadana.<br />\
    <img src="styles/legend/Notieneconocimientosobreelpoderdelaparticipacinciudadana_0_0.png" />  0 - 20 <br />\
    <img src="styles/legend/Notieneconocimientosobreelpoderdelaparticipacinciudadana_0_1.png" />  20 - 40 <br />\
    <img src="styles/legend/Notieneconocimientosobreelpoderdelaparticipacinciudadana_0_2.png" />  40 - 60 <br />\
    <img src="styles/legend/Notieneconocimientosobreelpoderdelaparticipacinciudadana_0_3.png" />  60 - 80 <br />\
    <img src="styles/legend/Notieneconocimientosobreelpoderdelaparticipacinciudadana_0_4.png" />  80 - 100 <br /><br />'
        });

lyr_Notieneconocimientosobreelpoderdelaparticipacinciudadana_0.setVisible(true);

var layersList = [baseLayer,lyr_Notieneconocimientosobreelpoderdelaparticipacinciudadana_0];

lyr_Notieneconocimientosobreelpoderdelaparticipacinciudadana_0.set('fieldAliases', {'Codigo': 'Codigo', 'Cantón': 'Cantón', 'Provincia': 'Provincia', 'Grafica': 'Grafica', 'No': 'No', });
lyr_Notieneconocimientosobreelpoderdelaparticipacinciudadana_0.set('fieldImages', {'Codigo': 'Hidden', 'Cantón': 'TextEdit', 'Provincia': 'TextEdit', 'Grafica': 'Photo', 'No': 'Hidden', });
lyr_Notieneconocimientosobreelpoderdelaparticipacinciudadana_0.set('fieldLabels', {'Cantón': 'no label', 'Provincia': 'no label', 'Grafica': 'no label', });
