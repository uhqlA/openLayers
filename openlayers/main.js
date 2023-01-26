  var mapView = new ol.View({
    center: ol.proj.fromLonLat([36.82598,-1.28462]),
    zoom: 11,
    maxZoom: 15,
    minZoom: 4,

  });

  var map = new ol.Map({
    target: 'map',
    view: mapView,
  });

  var osmTile = new ol.layer.Tile ({
    tiltle: 'Open Street Map',
    visible: true,
    source: new ol.source.OSM()
  });

  map.addLayer(osmTile);
  

//   Adding layer from Geoserver

var SubCounties = new ol.Tile({
    title: "Sub Counties",
    source: new ol.source.TileWMS(
        {
        url :'http://192.168.20.15:8080/geoserver/web/wicket/bookmarkable/org.geoserver.web.demo.MapPreviewPage?0&filter=false',
        parameters: {
            "LAYERS":"nrs:am_sub_county_codes",
            "TILED":true
        },
            serverType: 'geoserver',
            visibility: true
    })
});

var CountWards = new ol.Tile({
    title: "County Wards",
    source: new ol.source.TileWMS(
        {
        url :'http://192.168.20.15:8080/geoserver/web/wicket/bookmarkable/org.geoserver.web.demo.MapPreviewPage?0&filter=false',
        parameters: {
            "LAYERS":"nrs:am_ward_codes",
            "TILED":true
        },
            serverType: 'geoserver',
            visibility: true
    })
});

//adding layer to the map
// map.addLayer(SubCounties); 

// adding layer swticher active

var layerSwitcher = new ol.control.LayerSwitcher({
    activationMode: 'click',
    startActive: false,
    groupSelectStyle: 'children'
});

map.addControl(layerSwitcher);