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
var format_Nohaformadopartedeningntipodeorganizacin_1 = new ol.format.GeoJSON();
var features_Nohaformadopartedeningntipodeorganizacin_1 = format_Nohaformadopartedeningntipodeorganizacin_1.readFeatures(json_Nohaformadopartedeningntipodeorganizacin_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Nohaformadopartedeningntipodeorganizacin_1 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Nohaformadopartedeningntipodeorganizacin_1.addFeatures(features_Nohaformadopartedeningntipodeorganizacin_1);var lyr_Nohaformadopartedeningntipodeorganizacin_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Nohaformadopartedeningntipodeorganizacin_1, 
                style: style_Nohaformadopartedeningntipodeorganizacin_1,
    title: '<b/>Ha pertenecido a alguna organización:</b><br />El degradado de colores en el mapa muestra el porcentaje de personas<br />que no han formado parte de ningún tipo de organización.<br />\
    <img src="styles/legend/Nohaformadopartedeningntipodeorganizacin_1_0.png" />  0 - 20 <br />\
    <img src="styles/legend/Nohaformadopartedeningntipodeorganizacin_1_1.png" />  20 - 40 <br />\
    <img src="styles/legend/Nohaformadopartedeningntipodeorganizacin_1_2.png" />  40 - 60 <br />\
    <img src="styles/legend/Nohaformadopartedeningntipodeorganizacin_1_3.png" />  60 - 80 <br />\
    <img src="styles/legend/Nohaformadopartedeningntipodeorganizacin_1_4.png" />  80 - 100 <br /><br />'
        });

lyr_Nohaformadopartedeningntipodeorganizacin_1.setVisible(true);

var layersList = [baseLayer,lyr_Nohaformadopartedeningntipodeorganizacin_1];
lyr_Nohaformadopartedeningntipodeorganizacin_1.set('fieldAliases', {'Codigo': 'Codigo', 'Cantón': 'Cantón', 'Provincia': 'Provincia', 'Grafica': 'Grafica', 'Ninguno de': 'Ninguno de', });
lyr_Nohaformadopartedeningntipodeorganizacin_1.set('fieldImages', {'Codigo': 'Hidden', 'Cantón': 'TextEdit', 'Provincia': 'TextEdit', 'Grafica': 'Photo', 'Ninguno de': 'Hidden', });
lyr_Nohaformadopartedeningntipodeorganizacin_1.set('fieldLabels', {'Cantón': 'no label', 'Provincia': 'no label', 'Grafica': 'no label', });