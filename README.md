# Spot your Spot - Project 2

## About the Project
The application **Spot Your Spot** is a tool for sports interested people who want to network and share their favorite spots and experiences on locations to **Surf** or **Climb**.

To access the main features of the app a sign up of the user is necessary. There are no costs to use the networking-app.

### Features:
The main features of the tool are the technologie to upload new "sports-Spots" and stream through spots, created by others or find and access them on map. 

Your favorite spots can be liked and bookmarked to your favorites-list. 

As a creator or consumer of the app you are also able to share some information about yourself on your profile-page.

<img src="/Project/public/images/readme/Bildschirmfoto32.png" alt="Home" width="200"/>
<img src="/Project/public/images/readme/Bildschirmfoto08.png" alt="Main-Feed]" width="200"/>
<img src="/Project/public/images/readme/Bildschirmfoto24.png" alt="Navigation" width="200"/>
<img src="/Project/public/images/readme/Bildschirmfoto46.png" alt="Profile" width="200"/>
<img src="/Project/public/images/readme/Bildschirmfoto03.png" alt="Location-Detail" width="200"/>
<img src="/Project/public/images/readme/Bildschirmfoto24.png" alt="Map" width="200"/>
<img src="/Project/public/images/readme/Bildschirmfoto47.png" alt="Favorit-List" width="200"/>

### Presentation:
[Slides](https://slides.com/molibi01/minimal/fullscreen) 

## Built With
- HTML
- CSS
- JavaScript
- Node.js
- Express
- Handlebar
- Mongoose


also in Use: 
- Mapbox
- Cloudinary

## Getting Started
### Prerequisites:
 - npm
 `npm install npm@latest -g`

### Installation
- Get your free API Key and Secret at:
    - [Mapbox](https://www.mapbox.com/) 
    - [Cloudinary](https://console.cloudinary.com/) 
- Fork the repo
- Install NPM packages
`npm install`
- Create an .env file and enter your Secrets
- run seed2.js and seed.js


## Routes
| Syntax | Description |Description |Description |
| ----------- | ----------- | ----------- | ----------- |
| Rout | Method | render/redirect | Aim/Path |
| / | GET | render | /index|
| /auth/signup | GET | render | /auth/signup |
| /auth/signup | POST | redirect | /profile/edit-profile |
| /auth/login | GET | render | /auth/login |
| /auth/login | POST | redirect | /location |
| /auth/logout | POST | redirect | / |
| /profile | GET | render | /profile/profile |
| /edit-profile | GET | render | /profile/edit-profile |
| /profile/img-upload | POST | redirect | /profile |
| /profile/favorites | GET | render | /location/favorites |
| /location | GET | render | /location/main-feed |
| /location/create | GET | render | /location/create-spot |
| /location/create | POST | render | /location |
| /location/detail/:id | GET | render | /location/spot-detail |
| /map | GET | render | /map |
| /like/:locationId | POST | - | - |
| /like/:locationId/delete | POST | - | - |
| /like/:locationId/delete-fave| POST | redirect | /profile/favorites |


## Nice to haves in the Futures
- Sorting & Filter
- Live Communikation
- User-Geo-Location 