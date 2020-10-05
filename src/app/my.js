console.log('test');

AFRAME.registerComponent('button', {


  init: function () {
    let el = this.el;
    const lightArr = ['0.2', '0.4', '0.6', '0.8', '1']

    el.addEventListener('mousedown', function () {
      if (el.id == 'light-button') {
        let light = document.getElementById('light');
        let newLightIndex = lightArr.indexOf(light.getAttribute('intensity')) + 1;
        light.setAttribute('intensity', lightArr[(newLightIndex % lightArr.length + lightArr.length) % lightArr.length])
      } else if (el.id == 'covid-toggle') {
        Array.from(document.getElementsByClassName('covid')).forEach(covidItem => {
          covidItem.setAttribute('visible', !(covidItem.getAttribute('visible')))
        });
      }
    });
  }
});

AFRAME.registerComponent('door', {
  init: function () {
    let el = this.el;

    el.addEventListener('mousedown', function () {
      let newOpen = !(el.getAttribute('isOpen') == 'true');
      console.log((el.getAttribute('isOpen') == 'true'));
      console.log(newOpen);

      if (el.id == 'door1') {
        toggleOpen(el, newOpen, '0 0 0', '0 -90 0', '5.69 0 -12.94', '0 180 0')
      } else if (el.id == 'door2') {
        toggleOpen(el, newOpen, '16.984 0 -7.24219', '0 90 0', '4.024 0 -12.942', '0 180 0')
      } else if (el.id == 'door3') {
        toggleOpen(el, newOpen, '6.056 0 1.99', '0 0 0', '-6.894 0 -3.72', '0 -90 0')
      } else if (el.id == 'door4') {
        console.log(`position="" rotation=""`, el);
        toggleOpen(el, newOpen, '-1.19974 0 -14.99185', '0 180 0', '-6.9 0 -2.052', '0 -90 0')
      }

      el.setAttribute('isOpen', newOpen)

    });
  }
});

function toggleOpen(el, isOpen, positionClosed, rotationClosed, positionOpen, rotationOpen) {
  if (isOpen) {
    el.setAttribute('position', positionOpen);
    el.setAttribute('rotation', rotationOpen);
  } else {
    el.setAttribute('position', positionClosed);
    el.setAttribute('rotation', rotationClosed);
  }
}