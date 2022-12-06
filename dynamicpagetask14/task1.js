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
              axios.post("https://crudcrud.com/api/b21eaa7d6f794b7f85149d5da23816ea/appointmentdata",obj)
              .then((response) =>{
                showNewUserOnScreen(response.data)
               console.log(response.data);
               console.log(response.status);
              })
              .catch((err) =>{
              console.log(err);
              })
              nameInput.value = '';    emailInput.value = '';
           }
document.addEventListener("DOMContentLoaded", () => {  
   axios.get("https://crudcrud.com/api/b21eaa7d6f794b7f85149d5da23816ea/appointmentdata")
   .then((response)  =>{
     console.log(response);
     for(var i=0;i<response.data.length;i++){
        showNewUserOnScreen(response.data[i])
     }
   } )
   .catch((err)=>{
    console.log(err);
   })
});
   
function showNewUserOnScreen(user){
        const parentNode = document.getElementById('listofusers');
        //console.log(parentNode);
        const childHTML = `<li id=${user._id}> ${user.nameInput} - ${user.emailInput}
        <button onclick=deleteUser('${user._id}')> Delete User </button>
        <button onclick=editUserDetails('${user._id}')>Edit User </button>
         </li>`
       parentNode.innerHTML = parentNode.innerHTML + childHTML;}

function editUserDetails(userid){
    axios.get(`https://crudcrud.com/api/b21eaa7d6f794b7f85149d5da23816ea/appointmentdata/${userid}`)
   .then((response) =>{
      console.log(response.data);
      document.getElementById('name').value=response.data.nameInput;
      document.getElementById('email').value=response.data.emailInput;
      deleteUser(userid)
      })
   .catch((err) =>{
   console.log(err);
   })
    }
function deleteUser(userid){
    axios.delete(`https://crudcrud.com/api/b21eaa7d6f794b7f85149d5da23816ea/appointmentdata/${userid}`)
              .then((response) =>{
               removeuserfromscreen(userid)
                 })
              .catch((err) =>{
              console.log(err);
              })
        }
function removeuserfromscreen(userid){
             const parentNode = document.getElementById('listofusers');
             const childNodeToBeDeleted = document.getElementById(userid);
             if(childNodeToBeDeleted){
              parentNode.removeChild(childNodeToBeDeleted)
             }
    }

