ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3844").setExtent([594030.118090, 678640.935217, 600822.981294, 683247.919298]);
var wms_layers = [];


        var lyr_GoogleSatelliteHybrid_0 = new ol.layer.Tile({
            'title': 'Google Satellite Hybrid',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_AdreseIpotesti_1 = new ol.format.GeoJSON();
var features_AdreseIpotesti_1 = format_AdreseIpotesti_1.readFeatures(json_AdreseIpotesti_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3844'});
var jsonSource_AdreseIpotesti_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AdreseIpotesti_1.addFeatures(features_AdreseIpotesti_1);
cluster_AdreseIpotesti_1 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_AdreseIpotesti_1
});
var lyr_AdreseIpotesti_1 = new ol.layer.Vector({
                declutter: false,
                source:cluster_AdreseIpotesti_1, 
                style: style_AdreseIpotesti_1,
                popuplayertitle: 'Adrese Ipotesti',
                interactive: true,
                title: '<img src="styles/legend/AdreseIpotesti_1.png" /> Adrese Ipotesti'
            });
var format_UATIpotesti_2 = new ol.format.GeoJSON();
var features_UATIpotesti_2 = format_UATIpotesti_2.readFeatures(json_UATIpotesti_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3844'});
var jsonSource_UATIpotesti_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UATIpotesti_2.addFeatures(features_UATIpotesti_2);
var lyr_UATIpotesti_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_UATIpotesti_2, 
                style: style_UATIpotesti_2,
                popuplayertitle: 'UAT Ipotesti',
                interactive: true,
                title: '<img src="styles/legend/UATIpotesti_2.png" /> UAT Ipotesti'
            });

lyr_GoogleSatelliteHybrid_0.setVisible(true);lyr_AdreseIpotesti_1.setVisible(true);lyr_UATIpotesti_2.setVisible(true);
var layersList = [lyr_GoogleSatelliteHybrid_0,lyr_AdreseIpotesti_1,lyr_UATIpotesti_2];
lyr_AdreseIpotesti_1.set('fieldAliases', {'Id': 'Id', 'Tstr': 'Tstr', 'Str': 'Str', 'Nr': 'Nr', });
lyr_UATIpotesti_2.set('fieldAliases', {'Judet': 'Judet', 'UAT': 'UAT', });
lyr_AdreseIpotesti_1.set('fieldImages', {'Id': 'TextEdit', 'Tstr': 'TextEdit', 'Str': 'TextEdit', 'Nr': 'TextEdit', });
lyr_UATIpotesti_2.set('fieldImages', {'Judet': 'TextEdit', 'UAT': 'TextEdit', });
lyr_AdreseIpotesti_1.set('fieldLabels', {'Id': 'no label', 'Tstr': 'no label', 'Str': 'no label', 'Nr': 'inline label - visible with data', });
lyr_UATIpotesti_2.set('fieldLabels', {'Judet': 'no label', 'UAT': 'inline label - always visible', });
lyr_UATIpotesti_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});