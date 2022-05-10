const form = document.getElementById("form");
const userName = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const passwordTwo = document.getElementById("confirm-password");


const arrElement = [userName,email,password,passwordTwo];

const checkRequired = (arrElement)=>{
    arrElement.map(input => {
        if(input.value.trim() === ''){
            showError(input,`${input.name} is required`);
        }else{
            showsucess(input,'Sucess');
        }
    });
}

// Check Length
const checkLength = function(input, min, max){
if(input.value.trim().length < min) {
    showError(input,`${input.name} should be atleast 5 character`);
}else if (input.value.trim().length > max) {
    showError(input, `${input.name} should be lessthan 12 character`);
}else{
    showsucess(input,'Sucess')
}
}

// Password Match

const checkPasswordMatch = function(input1,input2){
if(input1.value.trim() !== '' && input2.value.trim() !== ''){
    if(input1.value.trim() !== input2.value.trim()){
        showError(input2,'password not match');
    }else{
        showsucess(input1,'sucess');
        showsucess(input2,'sucess');
    }
}
}



form.addEventListener('submit',(e) =>{
    e.preventDefault();
    checkRequired(arrElement);
    checkLength(userName,5,10);
    checkLength(password,5,12);
    checkLength(passwordTwo,5,12);
    checkPasswordMatch(password,passwordTwo);

})


// form.addEventListener('submit',(e) =>{
//     e.preventDefault();

// if (userName.value.trim() === ''){
//     showError(userName,'Enter the Username');
// }else{
//     showsucess(userName,'Sucess');
// }

// });

const showError = function(input, message) {
let formControl = input.parentElement;
formControl.classList = 'form_control error';
let small = formControl.querySelector('span');
small.innerText = message;
}

function showsucess(input, message) {
let formControl = input.parentElement;
formControl.classList = 'form_control sucess';
let small = formControl.querySelector('span');
small.innerText = message;
}