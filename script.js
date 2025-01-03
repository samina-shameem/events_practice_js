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

//keyboard event
const keyInput=document.getElementById('keyInput');
const keyMessage=document.getElementById('keyMessage');
keyInput.addEventListener('keyup',(event) =>{
    keyMessage.textContent=`You pressed: ${event.key}`;

    //console.log("keybord event");
});

//form submit event

const submitForm=document.getElementById('submitForm');
const formMessage=document.getElementById('formMessage');
submitForm.addEventListener('submit', (event) => {
    event.preventDefault();//prevent form refreshing the page
    const name=document.getElementById('name').value;
    formMessage.textContent=`Hello, ${name}`;

             //console.log("form submit");
});