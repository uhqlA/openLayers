  var mapView = new ol.View({
    center: ol.proj.fromLonLat([36.82598,-1.28462]),
    zoom: 12,
    maxZoom: 15,
    minZoom: 4,

  });

  var map = new ol.Map({
    target: 'map',
    view: mapView,
  });

  //Displaying the OpenLayer Map (Visualization)
  var osmTile = new ol.layer.Tile ({
    title: 'Open Street Map',
    visible: true,
    source: new ol.source.OSM()
  });

  map.addLayer(osmTile);



  // Importing Maps fromn the geoserver and overlaying them on the OpenLayer

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
        url: "http://192.168.20.15:8080/geoserver/nrs/wms?service=WMS&version=1.1.0&request=GetMap&layers=nrs%3Apf_market_points&bbox=36.70948791503906%2C-1.325808763504028%2C36.92393493652344%2C-1.202558040618896&width=768&height=441&srs=EPSG%3A4326&styles=&format=application/openlayers",
        params: {'LAYERS':'	nrs:pf_market_points', 'TILED':true },
        serverType: 'geoserver',
        visibility: true
    })
  });

  map.addLayer(countyMarketPoints);


  var countyMarket = new ol.layer.Tile({
    title: "County Market",
    source: new ol.source.TileWMS({
        url: "http://192.168.20.15:8080/geoserver/nrs/wms?service=WMS&version=1.1.0&request=GetMap&layers=nrs%3Apf_markets&bbox=36.70921325683594%2C-1.326090216636658%2C36.92418670654297%2C-1.202184200286865&width=768&height=442&srs=EPSG%3A4326&styles=&format=application/openlayers",
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
        url: " http://192.168.20.15:8080/geoserver/nrs/wms?service=WMS&version=1.1.0&request=GetMap&layers=nrs%3Aus_county_halls&bbox=36.817371919679886%2C-1.293742579312427%2C36.82845188622876%2C-1.263025884619823&width=330&height=768&srs=EPSG%3A4326&styles=&format=application/openlayers",
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
        params: {'LAYERS':'nrs:us_county_houses', 'TILED':true },
        serverType: 'geoserver',
        visibility: true
    })
  });
  map.addLayer(countyHouses);


  var countyParks = new ol.layer.Tile({
    title: "County Parks",
    source: new ol.source.TileWMS({
        url: "http://192.168.20.15:8080/geoserver/nrs/wms?service=WMS&version=1.1.0&request=GetMap&layers=nrs%3Aus_county_parks&bbox=36.81425892258702%2C-1.293317343583485%2C36.892604436780175%2C-1.246663040666396&width=768&height=457&srs=EPSG%3A4326&styles=&format=application/openlayers",
        params: {'LAYERS':'nrs:us_county_parks' , 'TILED':true },
        serverType: 'geoserver',
        visibility: true
    })
  });
  map.addLayer(countyParks);


  var countyEstate = new ol.layer.Tile({
    title: "County Estate Boundaries",
    source: new ol.source.TileWMS({
        url: "http://192.168.20.15:8080/geoserver/nrs/wms?service=WMS&version=1.1.0&request=GetMap&layers=nrs%3Aus_estate_boundaries&bbox=36.75543350803227%2C-1.310377273150875%2C36.915752303772976%2C-1.251071184349314&width=768&height=330&srs=EPSG%3A4326&styles=&format=application/openlayers",
        params: {'LAYERS':'	nrs:us_estate_boundaries', 'TILED':true },
        serverType: 'geoserver',
        visibility: true
    })
  });
  map.addLayer(countyEstate);


  var countyHealthFacilities = new ol.layer.Tile({
    title: "County Health Facilities",
    source: new ol.source.TileWMS({
        url: "http://192.168.20.15:8080/geoserver/nrs/wms?service=WMS&version=1.1.0&request=GetMap&layers=nrs%3Aus_health_facilities&bbox=36.68534851074219%2C-1.367385149002075%2C37.0340690612793%2C-1.173407077789307&width=768&height=427&srs=EPSG%3A4326&styles=&format=application/openlayers",
        params: {'LAYERS':'	nrs:us_health_facilities', 'TILED':true },
        serverType: 'geoserver',
        visibility: true
    })
  });
  map.addLayer(countyHealthFacilities);


 var countyMortuary = new ol.layer.Tile({
    title: "County Mortuary",
    source: new ol.source.TileWMS({
        url: "http://192.168.20.15:8080/geoserver/nrs/wms?service=WMS&version=1.1.0&request=GetMap&layers=nrs%3Aus_mortuary&bbox=36.802279876743285%2C-1.299262625186126%2C36.80247987674329%2C-1.299062625186126&width=768&height=767&srs=EPSG%3A4326&styles=&format=application/openlayers",
        params: {'LAYERS':'nrs:us_mortuary', 'TILED':true },
        serverType: 'geoserver',
        visibility: true
    })
  });
  map.addLayer(countyMortuary);

  
  var countyOpenGrounds = new ol.layer.Tile({
    title: "County Open Grounds",
    source: new ol.source.TileWMS({
        url: "http://192.168.20.15:8080/geoserver/nrs/wms?service=WMS&version=1.1.0&request=GetMap&layers=nrs%3Aus_open_grounds&bbox=36.7785505788682%2C-1.306519337830801%2C36.77926661305611%2C-1.305388994553039&width=486&height=768&srs=EPSG%3A4326&styles=&format=application/openlayers",
        params: {'LAYERS':'nrs:us_open_grounds', 'TILED':true },
        serverType: 'geoserver',
        visibility: true
    })
  });
  map.addLayer(countyOpenGrounds);


  var countyOSM = new ol.layer.Tile({
    title: "County OSM Houses",
    source: new ol.source.TileWMS({
        url: "http://192.168.20.15:8080/geoserver/nrs/wms?service=WMS&version=1.1.0&request=GetMap&layers=nrs%3Aus_osm_houses&bbox=36.82814025878906%2C-1.313309192657471%2C36.91692352294922%2C-1.253298878669739&width=768&height=519&srs=EPSG%3A4326&styles=&format=application/openlayers",
        params: {'LAYERS':'	nrs:us_osm_houses', 'TILED':true },
        serverType: 'geoserver',
        visibility: true
    })
  });
  map.addLayer(countyOSM);


  var countyParkingZones = new ol.layer.Tile({
    title: "County Parking Zones",
    source: new ol.source.TileWMS({
        url: "http://192.168.20.15:8080/geoserver/nrs/wms?service=WMS&version=1.1.0&request=GetMap&layers=nrs%3Aus_parking&bbox=36.762054443359375%2C-1.344016194343567%2C36.92216110229492%2C-1.234812617301941&width=768&height=523&srs=EPSG%3A4326&styles=&format=application/openlayers",
        params: {'LAYERS':'nrs:us_parking', 'TILED':true },
        serverType: 'geoserver',
        visibility: true
    })
  });
  map.addLayer(countyParkingZones);


  var parkingZone = new ol.layer.Tile({
    title: "Parking Zones",
    source: new ol.source.TileWMS({
        url: "http://192.168.20.15:8080/geoserver/nrs/wms?service=WMS&version=1.1.0&request=GetMap&layers=nrs%3Aus_parking_zones&bbox=36.66452143284103%2C-1.444557287699954%2C37.10498452059844%2C-1.160355005177166&width=768&height=495&srs=EPSG%3A4326&styles=&format=application/openlayers",
        params: {'LAYERS':'nrs:us_parking_zones', 'TILED':true },
        serverType: 'geoserver',
        visibility: true
    })
  });
  map.addLayer(parkingZone);


  var countyEducationFacilities = new ol.layer.Tile({
    title: "County Education Facilities",
    source: new ol.source.TileWMS({
        url: "http://192.168.20.15:8080/geoserver/nrs/wms?service=WMS&version=1.1.0&request=GetMap&layers=nrs%3Aus_public_ecde&bbox=36.82608430000005%2C-1.325972104999948%2C36.96209066700004%2C-1.199508807999962&width=768&height=714&srs=EPSG%3A4326&styles=&format=application/openlayers",
        params: {'LAYERS':'nrs:us_public_ecde', 'TILED':true },
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