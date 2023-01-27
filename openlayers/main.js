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

  var CountyDumpsite = new ol.layer.Tile({
    title: "county dumpsite",
    source: new ol.source.TileWMS({
        url: "http://192.168.20.15:8080/geoserver/nrs/wms?service=WMS&version=1.1.0&request=GetMap&layers=nrs%3Aam_sub_county_codes&bbox=36.66450899090029%2C-1.445051569588901%2C37.10500371817151%2C-1.160509578238451&width=768&height=496&srs=EPSG%3A4326&styles=&format=application/openlayers",
        params: {'LAYERS':'	nrs:us_county_dumpsite', 'TILED':true },
        serverType: 'geoserver',
        visibility: true
    })
  });
  map.addLayer(CountyDumpsite);

  var CountyWards= new ol.layer.Tile({
    title: "county wards",
    source: new ol.source.TileWMS({
        url: "http://192.168.20.15:8080/geoserver/nrs/wms?service=WMS&version=1.1.0&request=GetMap&layers=nrs%3Aam_ward_codes&bbox=36.66230773925781%2C-1.446474432945252%2C37.107208251953125%2C-1.15908670425415&width=768&height=496&srs=EPSG%3A4326&styles=&format=application/openlayers",
        params: {'LAYERS':'	nrs:am_ward_codes', 'TILED':true },
        serverType: 'geoserver',
        visibility: true
    })
  });
  map.addLayer(CountyWards);

  

//   Adding layer from Geoserver

// var SubCounties = new ol.Tile({
//     title: "Sub Counties",
//     source: new ol.source.Tile(
//         {
//         url :'http://192.168.20.15:8080/geoserver/web/wicket/bookmarkable/org.geoserver.web.demo.MapPreviewPage?0&filter=false',
//         params: {
//             "LAYERS":"nrs:am_sub_county_codes",
//             "TILED":true
//         },
//             serverType: 'geoserver',
//             visibility: true
//     })
// });

// var CountMarkets = new ol.layer.Tile({
//     title: "County Markets",
//     source: new ol.source.Tile(
//         {
//         url :'http://192.168.20.15:8080/geoserver/web/wicket/bookmarkable/org.geoserver.web.demo.MapPreviewPage?0&filter=false',
//         parames: {
//             "LAYERS":"nrs:pf_markets",
//             "TILED":true
//         },
//             serverType: 'geoserver',
//             visibility: true
//     })
// });

//adding layer to the map
// map.addLayer(CountyMarkets); 

// adding layer swticher active

var layerSwitcher = new ol.control.LayerSwitcher({
    activationMode: 'click',
    startActive: false,
    groupSelectStyle: 'children'
});

map.addControl(layerSwitcher);