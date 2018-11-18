var wms_layers = [];
var baseLayer = new ol.layer.Group({
    'title': '',
    layers: [
new ol.layer.Tile({
    'title': 'OSM B&W',
    'type': 'base',
    source: new ol.source.XYZ({
        url: 'http://{a-c}.www.toolserver.org/tiles/bw-mapnik/{z}/{x}/{y}.png',
        attributions: [new ol.Attribution({html: '&copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>'})]
    })
})
]
});
var format_Nohapertenecidoaningunaorganizacin_0 = new ol.format.GeoJSON();
var features_Nohapertenecidoaningunaorganizacin_0 = format_Nohapertenecidoaningunaorganizacin_0.readFeatures(json_Nohapertenecidoaningunaorganizacin_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Nohapertenecidoaningunaorganizacin_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Nohapertenecidoaningunaorganizacin_0.addFeatures(features_Nohapertenecidoaningunaorganizacin_0);var lyr_Nohapertenecidoaningunaorganizacin_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Nohapertenecidoaningunaorganizacin_0, 
                style: style_Nohapertenecidoaningunaorganizacin_0,
    title: '<b/>Pertenencia a alguna organización:</b><br />El degradado de colores en el mapa muestra la cantidad de personas<br />que no ha pertenecido a ningún tipo de organización<br />\
    <img src="styles/legend/Nohapertenecidoaningunaorganizacin_0_0.png" />  0 - 20 <br />\
    <img src="styles/legend/Nohapertenecidoaningunaorganizacin_0_1.png" />  20 - 40 <br />\
    <img src="styles/legend/Nohapertenecidoaningunaorganizacin_0_2.png" />  40 - 60 <br />\
    <img src="styles/legend/Nohapertenecidoaningunaorganizacin_0_3.png" />  60 - 80 <br />\
    <img src="styles/legend/Nohapertenecidoaningunaorganizacin_0_4.png" />  80 - 100 <br />'
        });

lyr_Nohapertenecidoaningunaorganizacin_0.setVisible(true);
var layersList = [baseLayer,lyr_Nohapertenecidoaningunaorganizacin_0];
lyr_Nohapertenecidoaningunaorganizacin_0.set('fieldAliases', {'Codigo': 'Codigo', 'Cantón': 'Cantón', 'Provincia': 'Provincia', 'Grafica': 'Grafica', 'PD58_PD58T': 'PD58_PD58T', });
lyr_Nohapertenecidoaningunaorganizacin_0.set('fieldImages', {'Codigo': 'TextEdit', 'Cantón': 'TextEdit', 'Provincia': 'TextEdit', 'Grafica': 'Photo', 'PD58_PD58T': 'TextEdit', });
lyr_Nohapertenecidoaningunaorganizacin_0.set('fieldLabels', {'Codigo': 'no label', 'Cantón': 'no label', 'Provincia': 'no label', 'Grafica': 'no label', 'PD58_PD58T': 'no label', });
lyr_Nohapertenecidoaningunaorganizacin_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});