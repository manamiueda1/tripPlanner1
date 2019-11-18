// const mapboxgl = require("mapbox-gl");

// mapboxgl.accessToken = "YOUR API TOKEN HERE";

// const map = new mapboxgl.Map({
//   container: "map",
//   center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
//   zoom: 12, // starting zoom
//   style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
// });

var mapboxgl = require("mapbox-gl/dist/mapbox-gl.js");

mapboxgl.accessToken =
  "pk.eyJ1IjoibWFuYW1pdWVkYSIsImEiOiJjazE2bGhweXIxNndrM2RvM3ZlcjJ2OWN0In0.BFH1qaAMg_hBCLErNqC3QQ";
var map = new mapboxgl.Map({
  center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  container: "map",
  style: "mapbox://styles/mapbox/streets-v11"
});
