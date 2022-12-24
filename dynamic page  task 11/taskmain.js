const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');  
// Listen for form submit
myForm.addEventListener('submit', onSubmit);
function onSubmit(e) {  
    e.preventDefault(); 
       if(nameInput.value === '' || emailInput.value === '') 
     {    // alert('Please enter all fields');  
       msg.classList.add('error');  
       msg.innerHTML = 'Please enter all fields';  
       // Remove error after 3 seconds    
     setTimeout(() => msg.remove(), 3000);  
    } else {  
         
          const li = document.createElement('li');
            let obj={   
                         nameInput:nameInput.value, 
                            emailInput:emailInput.value    } 
                  let myobj=JSON.stringify(obj);
  axios.post("https://crudcrud.com/api/c40aaa380a6740e2bc613a7db3d0380e/appointmentdata",obj)
  .then((response) =>{
    showNewUserOnScreen(response.data)
   console.log(response);
  })
  .catch((err) =>{
  console.log(err);
  })



   //localStorage.setItem(obj.emailInput,JSON.stringify(obj));  
  //showNewUserOnScreen(obj)   
 document.addEventListener("DOMContentLoaded", () => {  
      console.log("vscode"); 
    localStorage.getItem();   
 });   
   if (document.readyState !== "loading") { 
     console.log("vscode");
  var keys = Object.keys(localStorage), //taking out all the keys that are there in the local storage  
  i = keys.length; //6 
 console.log("keys", keys);  
let stringifiedDetailsOfPeople, detailsOfPeople;
  // 6 to 0  
Object.keys(localStorage).forEach((key) => {    //i==2  
  if (key.match(/userDetails/g)) {      //we only care about keys that start with userDetails
      //this is called regex matching     
 stringifiedDetailsOfPeople = localStorage.getItem(key); 
      console.log("stringifiedDetailsOfPeople", stringifiedDetailsOfPeople);      
  detailsOfPeople = JSON.parse(stringifiedDetailsOfPeople);      console.log("details", detailsOfPeople);
      addNewLineElement(detailsOfPeople);    }  });}      // Append to ul       
    //
userList.appendChild(li);    
// Clear fields   
 nameInput.value = '';    emailInput.value = '';}}
 function showNewUserOnScreen(user){ // if(localStorage.getItem(user.emailInput) !== null){   //   removeuserfromscreen(user.emailInput)  //  }
 
                 const parentNode = document.getElementById('listofusers');           
      const childHTML = `<li id=${user.emailInput}> ${user.nameInput} - ${user.emailInput}     
                                     <button onclick=deleteUser('${user.emailInput}')>Delete User </button>
   <button onclick=editUserDetails('${user.nameInput}','${user.emailInput}')>Edit User </button></li>`
             parentNode.innerHTML = parentNode.innerHTML + childHTML;            }
            // deleteUser('abc@gmail.com')
 function deleteUser(emailInput){  console.log(emailInput) 
    localStorage.removeItem(emailInput);removeuserfromscreen(emailInput); } 
     function removeuserfromscreen(emailInput){ 
          const parentNode = document.getElementById('listofusers');   
         const childNodeToBeDeleted = document.getElementById(emailInput);   
         //if( childNodetobedeleted){
               parentNode.removeChild(childNodeToBeDeleted)          // 
        }   
function editUserDetails(nameInput,emailInput){
   
  document.getElementById('name').value=nameInput;

document.getElementById('email').value=emailInput;
            deleteUser(emailInput)}