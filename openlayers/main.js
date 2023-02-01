  var mapView = new ol.View({
    center: ol.proj.fromLonLat([36.82598,-1.28462]),
    zoom: 13,
    maxZoom: 15,
    minZoom: 4,

  });

  var map = new ol.Map({
    target: 'map',
    view: mapView,
  });

  var osmTile = new ol.layer.Tile ({
    title: 'Open Street Map',
    visible: true,
    source: new ol.source.OSM()
  });

  map.addLayer(osmTile);

  //   Adding layer from Geoserver

  var subCounty = new ol.layer.Tile({
    title: "Sub Counties",
    source: new ol.source.TileWMS({
        url: "http://192.168.20.15:8080/geoserver/nrs/wms?service=WMS&version=1.1.0&request=GetMap&layers=nrs%3Aam_sub_county_codes&bbox=36.66450899090029%2C-1.445051569588901%2C37.10500371817151%2C-1.160509578238451&width=768&height=496&srs=EPSG%3A4326&styles=&format=application/openlayers",
        params: {'LAYERS':'	nrs:am_sub_county_codes', 'TILED':true },
        serverType: 'geoserver',
        visibility: true
    })
  });
  map.addLayer(subCounty);


  var countyWards= new ol.layer.Tile({
    title: "County Wards",
    source: new ol.source.TileWMS({
        url: "http://192.168.20.15:8080/geoserver/nrs/wms?service=WMS&version=1.1.0&request=GetMap&layers=nrs%3Aam_ward_codes&bbox=36.66230773925781%2C-1.446474432945252%2C37.107208251953125%2C-1.15908670425415&width=768&height=496&srs=EPSG%3A4326&styles=&format=application/openlayers",
        params: {'LAYERS':'	nrs:am_ward_codes', 'TILED':true },
        serverType: 'geoserver',
        visibility: true
    })
  });
  map.addLayer(countyWards);


  var countyMarketPoints = new ol.layer.Tile({
    title: "County Market Points",
    source: new ol.source.TileWMS({
        url: " ",
        params: {'LAYERS':'	nrs:pf_market_points', 'TILED':true },
        serverType: 'geoserver',
        visibility: true
    })
  });

  map.addLayer(countyMarketPoints);


  var countyMarket = new ol.layer.Tile({
    title: "County Market",
    source: new ol.source.TileWMS({
        url: " ",
        params: {'LAYERS':'	nrs:pf_markets', 'TILED':true },
        serverType: 'geoserver',
        visibility: true
    })
  });
  map.addLayer(countyMarket);


  var countyDumpsite = new ol.layer.Tile({
    title: "County Dumpsite",
    source: new ol.source.TileWMS({
        url: "http://192.168.20.15:8080/geoserver/nrs/wms?service=WMS&version=1.1.0&request=GetMap&layers=nrs%3Aam_sub_county_codes&bbox=36.66450899090029%2C-1.445051569588901%2C37.10500371817151%2C-1.160509578238451&width=768&height=496&srs=EPSG%3A4326&styles=&format=application/openlayers",
        params: {'LAYERS':'	nrs:us_county_dumpsite', 'TILED':true },
        serverType: 'geoserver',
        visibility: true
    })
  });
  map.addLayer(countyDumpsite);
  
  var countyHalls = new ol.layer.Tile({
    title: "County Halls",
    source: new ol.source.TileWMS({
        url: " ",
        params: {'LAYERS':'	nrs:us_county_halls', 'TILED':true },
        serverType: 'geoserver',
        visibility: true
    })
  });
  map.addLayer(countyHalls);


  var countyHouses = new ol.layer.Tile({
    title: "County Houses",
    source: new ol.source.TileWMS({
        url: " ",
        params: {'LAYERS':'	nrs:us_county_houses', 'TILED':true },
        serverType: 'geoserver',
        visibility: true
    })
  });
  map.addLayer(countyHouses);


  var countyParks = new ol.layer.Tile({
    title: "County Parks",
    source: new ol.source.TileWMS({
        url: " ",
        params: {'LAYERS':'	nrs: us_county_parks' , 'TILED':true },
        serverType: 'geoserver',
        visibility: true
    })
  });
  map.addLayer(countyParks);


  var countyEstate = new ol.layer.Tile({
    title: "County Estate Boundaries",
    source: new ol.source.TileWMS({
        url: " ",
        params: {'LAYERS':'	nrs:us_estate_boundaries', 'TILED':true },
        serverType: 'geoserver',
        visibility: true
    })
  });
  map.addLayer(countyEstate);


  var countyHealthFacilities = new ol.layer.Tile({
    title: "County Health Facilities",
    source: new ol.source.TileWMS({
        url: "",
        params: {'LAYERS':'	nrs:us_health_facilities', 'TILED':true },
        serverType: 'geoserver',
        visibility: true
    })
  });
  map.addLayer(countyHealthFacilities);


 var countyMortuary = new ol.layer.Tile({
    title: "County Mortuary",
    source: new ol.source.TileWMS({
        url: " ",
        params: {'LAYERS':'	nrs:us_mortuary', 'TILED':true },
        serverType: 'geoserver',
        visibility: true
    })
  });
  map.addLayer(countyMortuary);

  
  var countyOpenGrounds = new ol.layer.Tile({
    title: "County Open Grounds",
    source: new ol.source.TileWMS({
        url: " ",
        params: {'LAYERS':'	nrs:us_open_grounds', 'TILED':true },
        serverType: 'geoserver',
        visibility: true
    })
  });
  map.addLayer(countyOpenGrounds);


  var countyOSM = new ol.layer.Tile({
    title: "County OSM Houses",
    source: new ol.source.TileWMS({
        url: " ",
        params: {'LAYERS':'	nrs:us_osm_houses', 'TILED':true },
        serverType: 'geoserver',
        visibility: true
    })
  });
  map.addLayer(countyOSM);


  var countyParkingZones = new ol.layer.Tile({
    title: "County Parking Zones",
    source: new ol.source.TileWMS({
        url: " ",
        params: {'LAYERS':'	nrs:us_parking', 'TILED':true },
        serverType: 'geoserver',
        visibility: true
    })
  });
  map.addLayer(countyParkingZones);


  var parkingZone = new ol.layer.Tile({
    title: "Parking Zones",
    source: new ol.source.TileWMS({
        url: " ",
        params: {'LAYERS':'	nrs:us_parking_zones', 'TILED':true },
        serverType: 'geoserver',
        visibility: true
    })
  });
  map.addLayer(parkingZone);


  var countyEducationFacilities = new ol.layer.Tile({
    title: "County Education Facilities",
    source: new ol.source.TileWMS({
        url: " ",
        params: {'LAYERS':'	nrs:us_public_ecde', 'TILED':true },
        serverType: 'geoserver',
        visibility: true
    })
  });
  map.addLayer(countyEducationFacilities);

  

// adding layer swticher active

var layerSwitcher = new ol.control.LayerSwitcher({
    activationMode: 'click',
    startActive: false,
    groupSelectStyle: 'children'
});

map.addControl(layerSwitcher);