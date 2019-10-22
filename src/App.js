import React from 'react';
import './App.css';
var mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');
 
mapboxgl.accessToken = 'pk.eyJ1Ijoic2F2YWxpa2l0dWt1IiwiYSI6ImNrMjIxczBhMzA3bWMzY3Fvc2RydzQxd3UifQ.hNGtZUh5syY9E684sH54bg';

class App extends React.Component {
  componentDidMount(){
    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11'
      })
    



      var size = 200;
 
var pulsingDot = {
width: size,
height: size,
data: new Uint8Array(size * size * 4),
 
onAdd: function() {
var canvas = document.createElement('canvas');
canvas.width = this.width;
canvas.height = this.height;
this.context = canvas.getContext('2d');
},
 
render: function() {
var duration = 1000;
var t = (performance.now() % duration) / duration;
 
var radius = size / 2 * 0.3;
var outerRadius = size / 2 * 0.7 * t + radius;
var context = this.context;
 
// draw outer circle
context.clearRect(0, 0, this.width, this.height);
context.beginPath();
context.arc(this.width / 2, this.height / 2, outerRadius, 0, Math.PI * 2);
context.fillStyle = 'rgba(255, 200, 200,' + (1 - t) + ')';
context.fill();
 
// draw inner circle
context.beginPath();
context.arc(this.width / 2, this.height / 2, radius, 0, Math.PI * 2);
context.fillStyle = 'rgba(255, 100, 100, 1)';
context.strokeStyle = 'white';
context.lineWidth = 2 + 4 * (1 - t);
context.fill();
context.stroke();
 
// update this image's data with data from the canvas
this.data = context.getImageData(0, 0, this.width, this.height).data;
 
// keep the map repainting
map.triggerRepaint();
 
// return `true` to let the map know that the image was updated
return true;
}
};






      map.on('load', function () {
 
        map.addImage('pulsing-dot', pulsingDot, { pixelRatio: 2 });
         
        map.addLayer({
        "id": "points",
        "type": "symbol",
        "source": {
        "type": "geojson",
        "data": {
        "type": "FeatureCollection",
        "features": [{
        "type": "Feature",
        "geometry": {
        "type": "Point",
        "coordinates": [36.80, -1.2]
        }
        }]
        }
        },
        "layout": {
        "icon-image": "pulsing-dot"
        }
        });
        });
  }
  render(){
  return (
    <div id="map"  style={{width: "100%", height: "100vh"}}>
    </div>
  );
  }
}

export default App;
