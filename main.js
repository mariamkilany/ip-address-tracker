//Make a map
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
//get ip value 
const ip = document.querySelector(`input[type='text']`)
const btn = document.querySelector(`.btn`)
let marker={}
btn.onclick=()=>{
    if(ip.value){
        // API GEO REQ
        let myReq = new XMLHttpRequest();
        myReq.open('GET',`https://geo.ipify.org/api/v2/country,city?apiKey=at_zXDj9ih7qnrye52fqZ55qDzV6YCML&ipAddress=${ip.value}`);
        myReq.send();
        myReq.onreadystatechange = function () {
            if(this.status === 200 && this.readyState === 4){
                let res=JSON.parse(this.responseText)
                console.log(res)
                //select html elements
                let ip = document.querySelector(`.ip`)
                let location = document.querySelector(`.loc`)
                let time = document.querySelector(`.time`)
                let isp = document.querySelector(`.isp`)
                ip.innerHTML=res.ip
                location.innerHTML=`${res.location.country}<br>${res.location.region}`
                time.innerHTML=res.location.timezone
                isp.innerHTML=res.isp
                if(marker != undefined){
                    map.removeLayer(marker);
                }
                map.setView([res.location.lat,res.location.lng],13)
                marker=L.marker([res.location.lat,res.location.lng], {icon: MyIcon}).addTo(map)
            }
            
        }
    }
}
//select map container
let mpCon=document.querySelector(`.location`)
mpCon.onclick=()=>{
    //select map
    let mp=document.querySelector(`#map`)
    mp.classList.toggle('withOutIndx')
    mpCon.classList.toggle('withOutIndx')
    //select info
    let info=document.querySelector(`.info-w`)
    info.classList.toggle('withIndx')
}