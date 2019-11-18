const mapbox = require("mapbox-gl");

const logo = {
  Activity: "url(http://i.imgur.com/WbMOfMl.png)",
  Hotel: "url(http://i.imgur.com/D9574Cu.png)",
  Food: "url(http://i.imgur.com/cqR6pUI.png)"
};


function add(tag, coord, map) {
  const mapEl = document.createElement('div');
  mapEl.style.width = "32px";
  mapEl.style.height = "39px";
  mapEl.style.backgroundImage = logo[tag];
  let marker = new mapbox.Marker(mapEl)
    .setLngLat(coord)
    .addTo(map);
  return marker;
};

module.exports = add;
