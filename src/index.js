const mapboxgl = require("mapbox-gl/dist/mapbox-gl.js");
const buildMark = require("./marker");

mapboxgl.accessToken =
  "pk.eyJ1IjoibWFuYW1pdWVkYSIsImEiOiJjazE2bGhweXIxNndrM2RvM3ZlcjJ2OWN0In0.BFH1qaAMg_hBCLErNqC3QQ";

let map = new mapboxgl.Map({
  center: [-74.009, 40.705],
  zoom: 12,
  container: "manami",
  style: "mapbox://styles/mapbox/streets-v11"
});

map.addControl(new mapboxgl.NavigationControl());

const fsa = "Activity";
const coord = [-74.009, 40.705];
const cop = "Food";
const coord1 = [-74.0000092, 40.7388958];
const whit = "Hotel";
const coord2 = [-73.9757414, 40.7627161];

const FSA = buildMark(fsa, coord, map);
const Coppelia = buildMark(cop, coord1, map);
const whitby = buildMark(whit, coord2, map);
