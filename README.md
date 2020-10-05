# Domingo Cook - CS 4331 - Project 1

## Project Link
[Virtual Restaurant in the Pandemic](https://dj9123.github.io/CS-4331-Project-One/)


## Door Control

Javascript - This function is called when an item with class `clickable` is clicked. An event is bound which looks for the door id and toggles the position/rotation of a given door.
```Javascript
toggleOpen(el, newOpen, '0 0 0', '0 -90 0', '4 0 4', '0 0 0')
...
function toggleOpen(el, isOpen, positionClosed, rotationClosed, positionOpen, rotationOpen) {
  if (isOpen) {
    el.setAttribute('position', positionOpen);
    el.setAttribute('rotation', rotationOpen);
  } else {
    el.setAttribute('position', positionClosed);
    el.setAttribute('rotation', rotationClosed);
  }
}
```
HTML - Sound and click toggle attributes
```HTML
<a-entity gltf-model="#door" door id="door1" sound="src: #doorSound; on: click" class="clickable" isOpen="false"></a-entity>
```

![Door Control](https://i.imgur.com/KWapLfx.gif)

## Covid - Caution Cone Control
Cones are set up during covid mode to block access to seating and promote social distancing. These can be toggled with the yellow button by the registers.


Javascript - Get all Covid elements and toggle visibility
```Javascript
Array.from(document.getElementsByClassName('covid')).forEach(covidItem => {
  covidItem.setAttribute('visible', !(covidItem.getAttribute('visible')))
});
```
HTML - Example Covid object
```HTML
<a-entity gltf-model="#cone" id="cone" class="covid" visible="false"></a-entity>
```

![Covid Control Gif](https://i.imgur.com/XJ7GtaH.gif)
![Covid Cone Display](https://i.imgur.com/lzmPlji.png)

## Light Control

Javascript - Given the light's current intensity, it is cycled through lightArr and wraps to the start of the array when accessing an out of index value.
```Javascript
const lightArr = ['0.2', '0.4', '0.6', '0.8', '1']
...
let light = document.getElementById('light');
let newLightIndex = lightArr.indexOf(light.getAttribute('intensity')) + 1;
light.setAttribute('intensity', lightArr[(newLightIndex % lightArr.length + lightArr.length) % lightArr.length])
```

HTML - A simple a-light with a default intensity is required.
```HTML
<a-light id="light" type="hemisphere" intensity="0.6" position="0 2 0"></a-light>
```

![Light Control](https://i.imgur.com/FMyTK9C.gif)


# Project Design

## My Assets
1. [Scene](https://i.imgur.com/9Fzt0WM.png)
2. [Tall Chair](https://i.imgur.com/Nxbyjbz.png)
3. [Freestyle Soda Machine](https://i.imgur.com/MLGZ9r8.png)
4. [Trash Can](https://i.imgur.com/8zlGWq3.png)
5. [Cone](https://i.imgur.com/M2jewG9.png)
6. [Table Booths](https://i.imgur.com/wcBG25i.png)
7. [Table Wide](https://i.imgur.com/BNcLbxg.png)
8. [Table Thin](https://i.imgur.com/CXMNP5z.png)
9. [Door](https://i.imgur.com/LuxHGDJ.png)
10. [Register](https://i.imgur.com/0WBSUWB.png)
11. [Ice Cream Machine](https://i.imgur.com/w4jlNl4.png)
12. [Foot Pedal Sink](https://i.imgur.com/NSEgmU1.png)
13. [Stove Set](https://i.imgur.com/jXunvnM.png)
14. [Fryer Set](https://i.imgur.com/o67bL9F.png)
15. [Industrial Sink](https://i.imgur.com/UKDR75W.png)

16. 17, 18, 19, 20 - Various Tables


![My Assets Image](https://i.imgur.com/uajpO2g.png)

## External Assets
[Food Content Pack](http://quaternius.com/)

![Food Content Image](https://i.imgur.com/St1jJqo.png)

[Door Sound](https://minecraft.gamepedia.com/Door#Sounds)

![Door Sound Image](https://static.wikia.nocookie.net/minecraft_gamepedia/images/0/0a/Oak_Door_BE4.png/revision/latest/scale-to-width-down/300?cb=20200918134933)

## References
[Aframe Docs](https://aframe.io/docs/1.0.0/introduction/)
[Angular Docs](https://angular.io/docs)
[Blender Manual](https://docs.blender.org/manual/en/latest/)



# Build Information
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.17.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project.

## Build - Prod
Run `ng run build-prod` to build locally to /dist/. This is used for deployment with Angular GitHub Pages

## Deploy
Run `ng run deploy` deploy the /dist/ directory to GitHub.