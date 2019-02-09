//hover - pointer on notes
//click on note at bottom and add to measure
//functionality for top menu

//CHOICES AT TOP BAR
  //started - commented out until I come back to it//
/*const numBeats = document.querySelectorAll('.num-beats');
const meterTop = document.getElementById('meter-top');

numBeats.forEach(el => {
  el.addEventListener('click', event => {
    console.log('beat choice is ' + event.value);
  })
});*/

/*if (numBeats.value = 2) 
*/



// CHOOSE RHYTHM AND PUT IN WORK AREA
const choice = document.querySelectorAll('.choice');
const beat = document.querySelectorAll('.beat-line');

const chosen = Array.from(choice);
const beats = Array.from(beat);


//Choose rhythm 
chosen.forEach(el => {
  el.addEventListener('click', event => {
    console.log('a choice was clicked')
    copyTarget = event.target.cloneNode();
  })
});

//add rhythm to measure (work-area) 
beats.forEach(el => {
  el.addEventListener('click', event => {
    console.log('a beat was clicked');
    event.target.appendChild(copyTarget);
   })  
})


//check for children:
 //if (element.childNodes.length > 0)