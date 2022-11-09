document.addEventListener("DOMContentLoaded", () => {
    console.log("Mapbox JS file imported successfully!");

  // Select the elements that store the info about the display of the map
  const mapCenter = document.querySelector(".map-center").innerHTML.split(",")
  const mapZoom = document.querySelector(".map-zoom").innerHTML

   // Select the elements that store the info about the locatinos and markers
   const popupDivs = document.querySelectorAll(".popup")
   const posDivs = document.querySelectorAll(".pos")
   const markerDivs = document.querySelectorAll(".marker")
 
   // Create an array to store all the popups (one for each location)
   const popups = []
   mapboxgl.accessToken = 'pk.eyJ1IjoibW9saWJpMDEiLCJhIjoiY2xhOWp2dG52MDBnZzNvcG5iaHozZ2d3NSJ9.eWqDx406jFhMUSVNIRtVbA';
 
   // Generating the map
   const map = new mapboxgl.Map({
     container: 'map',
     // Choose from Mapbox's core styles, or make your own style with Mapbox Studio
     style: "mapbox://styles/mapbox/streets-v11",
     center: mapCenter,
     zoom: (mapZoom)
   });
 
   // Create the popus for each location and store them into the popus array
   popupDivs.forEach((popupDiv) => {
     const popup = popupDiv.innerHTML
     popups.push(new mapboxgl.Popup({ offset: 12.5 }).setHTML(
       `${popup}`
     ))
   })
   
   // Create a marker for every position
   posDivs.forEach((posDiv, i) => {
        console.log("hello")
        console.log(posDiv)
        const posS = posDiv.innerText.split(`,`)
        console.log(posS)
        const pos = posS.map(num => Number(num))
        const posSorted = [pos[1], pos[0]]
        new mapboxgl.Marker(markerDivs[i])
       .setLngLat(posSorted)
       .setPopup(popups[i]) // sets a popup on this marker
       .addTo(map)
   })
 });