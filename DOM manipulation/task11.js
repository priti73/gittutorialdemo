let obj={
    nameInput:nameInput.value,
    emailInput:emailInput.value
}
let myobj=JSON.stringify(obj);

localStorage.setItem('userdetails',JSON.stringify(obj));
//localStorage.setItem('emailInput',emailInput_serialized);
