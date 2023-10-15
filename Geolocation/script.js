function initializeMap() {
  var platform = new H.service.Platform({
    apikey: "zgB-Ox-uGnZl_rKZ9GAV7wrAo7_qtg24ci68r81eZh4",
  });

  var defaultLayers = platform.createDefaultLayers();
  var map = new H.Map(
    document.getElementById("mapContainer"),
    defaultLayers.vector.normal.map,
    {
      zoom: 10,
      center: { lat: 0, lng: 0 },
    }
  );

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (position) {
      var userLocation = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      };

      var marker = new H.map.Marker(userLocation);
      map.addObject(marker);

      map.setCenter(userLocation);
    });
  }

  if (H.mapevents) {
    var behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(map));
    var ui = H.ui.UI.createDefault(map, defaultLayers);
    ui.removeControl("zoom");
  }
}

window.onload = initializeMap;
