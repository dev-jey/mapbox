import React from 'react';
import './App.css';
var mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');
 
mapboxgl.accessToken = 'pk.eyJ1Ijoic2F2YWxpa2l0dWt1IiwiYSI6ImNrMjIxczBhMzA3bWMzY3Fvc2RydzQxd3UifQ.hNGtZUh5syY9E684sH54bg';

class App extends React.Component {
  constructor(props){
    super(props);
  }
  componentDidMount(){
    new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11'
      })
  }
  render(){
  return (
    <div id="map"  style={{width: "400px", height: "300px"}}>
    </div>
  );
  }
}

export default App;
