//button click event
const clickButton=document.getElementById('clickButton');
const clickMessage=document.getElementById('clickMessage');
clickButton.addEventListener('click', () =>{
    clickMessage.textContent='Button clicked!';
    
    //console.log("btn clicked");
});