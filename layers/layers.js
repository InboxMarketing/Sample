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
var format_Ipotesti_1 = new ol.format.GeoJSON();
var features_Ipotesti_1 = format_Ipotesti_1.readFeatures(json_Ipotesti_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ipotesti_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ipotesti_1.addFeatures(features_Ipotesti_1);
cluster_Ipotesti_1 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_Ipotesti_1
});
var lyr_Ipotesti_1 = new ol.layer.Vector({
                declutter: false,
                source:cluster_Ipotesti_1, 
                style: style_Ipotesti_1,
                popuplayertitle: 'Ipotesti',
                interactive: true,
                title: '<img src="styles/legend/Ipotesti_1.png" /> Ipotesti'
            });
var group_Administrativ = new ol.layer.Group({
                                layers: [lyr_Ipotesti_1,],
                                fold: 'open',
                                title: 'Administrativ'});

lyr_GoogleSatelliteHybrid_0.setVisible(true);lyr_Ipotesti_1.setVisible(true);
var layersList = [lyr_GoogleSatelliteHybrid_0,group_Administrativ];
lyr_Ipotesti_1.set('fieldAliases', {'Id': 'Id', 'Tstr': 'Tstr', 'Str': 'Str', 'Bl': 'Bl', 'Sc': 'Sc', 'Nr': 'Nr', 'Etaje': 'Etaje', 'Loc': 'Loc', });
lyr_Ipotesti_1.set('fieldImages', {'Id': 'TextEdit', 'Tstr': 'TextEdit', 'Str': 'TextEdit', 'Bl': 'TextEdit', 'Sc': 'TextEdit', 'Nr': 'TextEdit', 'Etaje': 'TextEdit', 'Loc': 'TextEdit', });
lyr_Ipotesti_1.set('fieldLabels', {'Id': 'no label', 'Tstr': 'no label', 'Str': 'no label', 'Bl': 'no label', 'Sc': 'no label', 'Nr': 'inline label - visible with data', 'Etaje': 'no label', 'Loc': 'no label', });
lyr_Ipotesti_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});