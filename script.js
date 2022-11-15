window.addEventListener('DOMContentLoaded',()=>{

    //select required elements
    const calcBtn = document.querySelector('.btn'),
          answerDiv = document.querySelector('.answer');
    
    //calculate the number of characters without spaces
    function calculateCharacters(elementId){
        let inputDivValue = document.getElementById(`${elementId}`).value;
        
        if(inputDivValue){
            inputDivValue = inputDivValue.replaceAll(' ','').length;
            return inputDivValue;
        }else return 0; 
    }

    calcBtn.addEventListener('click',()=>{
        answerDiv.innerHTML = calculateCharacters('input');
    } );
});