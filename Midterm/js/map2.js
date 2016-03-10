//creates google map
var map = new google.maps.Map(document.getElementById('map'), {
center: {lat: 30, lng: -90},
zoom: 4
});

//adds KML layers
var ctaLayer = new google.maps.KmlLayer({
    url: 'ttp://gstore.unm.edu/apps/rgis/datasets/09c3d576-cc4a-4e87-a711-d789ad7da11a/k00262data530573475_cnty_view.derived.kml',
    map: map
  });
  