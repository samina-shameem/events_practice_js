//button click event
const clickButton=document.getElementById('clickButton');
const clickMessage=document.getElementById('clickMessage');
clickButton.addEventListener('click', () =>{
    clickMessage.textContent='Button clicked!';
    
    //console.log("btn clicked");
});

//mouse over and mouse out events

const hoverBox=document.getElementById('hoverBox');
const hoverMessage=document.getElementById('hoverMessage');
hoverBox.addEventListener('mouseover', () =>{
    hoverMessage.textContent='Mouse is over the box';
});
hoverBox.addEventListener('mouseout', () => {
    hoverMessage.textContent='Mouse left the box';
     //console.log("testing");
});