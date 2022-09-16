# Frontend Mentor - IP address tracker solution
This is a solution to the [IP address tracker challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/ip-address-tracker-I8-0yYAH0). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview
This is a solution to the [IP address tracker challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/ip-address-tracker-I8-0yYAH0). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

### The challenge

Users should be able to:

- View the optimal layout for each page depending on their device's screen size
- See hover states for all interactive elements on the page
- See their own IP address on the map on the initial page load
- Search for any IP addresses or domains and see the key information and location

### Screenshot

![desktop](./screenshot/desktop1.png)
![desktop Active](./screenshot/desktop2.png)
![mobile](./screenshot/phone.png)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

### Built with

- Semantic HTML5 markup
- CSS custom properties
- boot strap
- CSS Grid
- IP Geolocation API
- Leaflet Maps

### What I learned

Using Map from leaflet 
code:

```html
<div id="map"></div>
```
```js
var map=L.map('map').setView([30.00944,31.20861],13)
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1
}).addTo(map);
var MyIcon = L.icon({
    iconUrl: './images/icon-location.svg',
    iconSize:     [40, 40], // size of the icon
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
    popupAnchor:  [0, 0] // point from which the popup should open relative to the iconAnchor
});
L.marker([30.00944,31.20861], {icon: MyIcon}).addTo(map)
```
## Author

- LinkedIn - [Mariam Kilany](www.linkedin.com/in/mariamkilany)
- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/mariamkilany)
