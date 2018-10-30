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
var format_Nohapertenecidoaningunaorganizacin_2 = new ol.format.GeoJSON();
var features_Nohapertenecidoaningunaorganizacin_2 = format_Nohapertenecidoaningunaorganizacin_2.readFeatures(json_Nohapertenecidoaningunaorganizacin_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Nohapertenecidoaningunaorganizacin_2 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Nohapertenecidoaningunaorganizacin_2.addFeatures(features_Nohapertenecidoaningunaorganizacin_2);var lyr_Nohapertenecidoaningunaorganizacin_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Nohapertenecidoaningunaorganizacin_2, 
                style: style_Nohapertenecidoaningunaorganizacin_2,
    title: '<b/>Pertenencia a alguna organización:</b><br />El degradado de colores en el mapa muestra el porcentaje de personas<br />que no han pertenecido a ninguna organización.<br />\
    <img src="styles/legend/Nohapertenecidoaningunaorganizacin_2_0.png" />  0 - 20 <br />\
    <img src="styles/legend/Nohapertenecidoaningunaorganizacin_2_1.png" />  20 - 40 <br />\
    <img src="styles/legend/Nohapertenecidoaningunaorganizacin_2_2.png" />  40 - 60 <br />\
    <img src="styles/legend/Nohapertenecidoaningunaorganizacin_2_3.png" />  60 - 80 <br />\
    <img src="styles/legend/Nohapertenecidoaningunaorganizacin_2_4.png" />  80 - 100 <br /><br />'
        });

lyr_Nohapertenecidoaningunaorganizacin_2.setVisible(true);

var layersList = [baseLayer,lyr_Nohapertenecidoaningunaorganizacin_2];

lyr_Nohapertenecidoaningunaorganizacin_2.set('fieldAliases', {'Codigo': 'Codigo', 'Cantón': 'Cantón', 'Provincia': 'Provincia', 'Grafica': 'Grafica', 'PD58_PD58T': 'PD58_PD58T', });
lyr_Nohapertenecidoaningunaorganizacin_2.set('fieldImages', {'Codigo': 'Hidden', 'Cantón': 'TextEdit', 'Provincia': 'TextEdit', 'Grafica': 'Photo', 'PD58_PD58T': 'Hidden', });
lyr_Nohapertenecidoaningunaorganizacin_2.set('fieldLabels', {'Cantón': 'no label', 'Provincia': 'no label', 'Grafica': 'no label', });

lyr_Nohapertenecidoaningunaorganizacin_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
	});