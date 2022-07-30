const txtInput = document.querySelector('.inputs input');

const checkBtn = document.querySelector('.inputs button');

const infoTxt = document.querySelector('.info-text');

let filterInput;

checkBtn.addEventListener('click', function(){
    //splitting user input character, reversing them and joining them in a single word
    let reverseInput = filterInput.split("").reverse().join("");
    infoTxt.style.display = "block";
    if(filterInput != reverseInput){
        return infoTxt.innerHTML = `No, <span>'${txtInput.value}'</span> isn't a palindrome!`
    }
    else{
        return infoTxt.innerHTML = `Yes, <span>'${txtInput.value}'</span> is a palindrome!`
    }
})

txtInput.addEventListener('keyup', function(){

    //Removing spaces & all Specail characters from entered value
     filterInput = txtInput.value.toLowerCase().replace(/[^A-Z0-9]/ig, "");
    if(filterInput){
        return checkBtn.classList.add('active');
    }
    else{
        checkBtn.classList.remove('active');
    }
})


