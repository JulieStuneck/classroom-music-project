//hover - pointer on notes
//click on note at bottom and add to measure
//functionality for top menu

const choice = document.querySelectorAll('.choice');
const beat = document.querySelectorAll('.beat-line');

const chosen = Array.from(choice);
const beats = Array.from(beat);

chosen.forEach(el => {
  el.addEventListener('click', event => {
    console.log('choice was clicked')
    currentChoice = event.target;
    choiceOriginalLocation = event.target.parentNode; 
  })
});


beats.forEach(el => {
  el.addEventListener('click', event => {
    console.log('a beat was clicked');
    event.target.appendChild(currentChoice);
    choiceOriginalLocation.insertAdjacentHTML('beforeend', currentChoice);
    
    /*if (!choiceOriginalLocation.childNode) { //not working
      choiceOriginalLocation.insertAdjacentHTML('beforeend', currentChoice); 
      }   */
   })  
})




//sample
/*document.getElementById("myBtn").addEventListener("mouseover", myFunction);
document.getElementById("myBtn").addEventListener("click", someOtherFunction);
document.getElementById("myBtn").addEventListener("mouseout", someOtherFunction);*/