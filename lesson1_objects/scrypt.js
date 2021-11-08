document.addEventListener('DOMContentLoaded', () => {
  
  const 
      box = document.querySelectorAll('.box');
 

  box.forEach( element => {
    element.addEventListener('mouseover', (event) => {
      event.target.style.transform = `scale(1.1)`;
    })
    element.addEventListener('mouseout', (event) => {
      event.target.style.transform = `scale(1)`;
    })
  })
  
  console.log('all working...');

})