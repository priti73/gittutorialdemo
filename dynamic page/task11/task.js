const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');  
console.log(userList);
myForm.addEventListener('submit', onSubmit);
function onSubmit(e) {  
    e.preventDefault(); 
    const li = document.createElement('li');
    let obj={
              nameInput:nameInput.value,
             emailInput:emailInput.value } 
               let myobj=JSON.stringify(obj);

               axios.post("https://crudcrud.com/api/50833bbbec5147a8a5f3e71a011a5414/appointmentdata",obj)
               .then((response) =>{
                 showNewUserOnScreen(response.data)
                console.log(response.data);
                console.log(response.status);
               })
               .catch((err) =>{
               console.log(err);
               })
            }
function showNewUserOnScreen(user){ 
        const parentNode = document.getElementById('listofusers');
        //console.log(parentNode);
        const childHTML = `<li id=${user.emailInput}> ${user.nameInput} - ${user.emailInput}
        <button onclick=deleteUser('${user.emailInput}')> Delete User </button> </li>`
       parentNode.innerHTML = parentNode.innerHTML + childHTML;}

