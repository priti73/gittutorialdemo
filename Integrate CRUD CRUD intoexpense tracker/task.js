const myForm=document.querySelector('#my-form');
const description=document.querySelector('#description');
const expenseAmount=document.querySelector('#amount');
const category=document.querySelector('#category');
const msg=document.querySelector('.msg');
myForm.addEventListener('submit', onSubmit);
function onSubmit(e){
    e.preventDefault();
    if(expenseAmount==='' ||description===''||  category===''){
        msg.classList.add('error');
        msg.innerHTML='Please enter all fields';
        setTimeout(()=> msg.remove(),2000);
    }
    else{
        let obj={
            description:description.value,
            expenseAmount:expenseAmount.value,
            category:category.value
        }
        axios.post("https://crudcrud.com/api/5041fbf1f6ec47bba54ee7d52dd679bd/expensetracker",obj)
        .then((response) =>{
          showUserOnScreen(response.data)
         console.log(response.data);
         console.log(response.status);
        })
        .catch((err) =>{
        console.log(err);
        })
        expenseAmount.value='';
        description.value='';
        category.value='';
           }
}
document.addEventListener("DOMContentLoaded", () => {  
    axios.get("https://crudcrud.com/api/5041fbf1f6ec47bba54ee7d52dd679bd/expensetracker")
   .then((response)  =>{
     console.log(response);
     for(var i=0;i<response.data.length;i++){
        showUserOnScreen(response.data[i])
     }
   } )
   .catch((err)=>{
    console.log(err);
   })
});
function showUserOnScreen(user){
    const parentNode=document.getElementById('listofusers');
    console.log(parentNode);
    const childHTML=`<li id=${user._id}> ${user.expenseAmount} - ${user.description} - ${user.category}
    <button onclick=deleteExpense('${user._id}')> Delete Expense </button>
    <button onclick=EditExpense('${user._id}')> Edit Expense </button>
    </li>`
    parentNode.innerHTML=parentNode.innerHTML+childHTML;
}
function deleteExpense(userid){
    axios.delete(`https://crudcrud.com/api/5041fbf1f6ec47bba54ee7d52dd679bd/expensetracker/${userid}`)
              .then((response) =>{
               removeUserFromScreen(userid)
                 })
              .catch((err) =>{
              console.log(err);
              })
        }
function removeUserFromScreen(userid){
    const parentNode=document.getElementById('listofusers');
    const childToBeDeleted=document.getElementById(userid);
    if(childToBeDeleted){
        parentNode.removeChild(childToBeDeleted)
    }
}
function EditExpense(userid){
    axios.get(`https://crudcrud.com/api/5041fbf1f6ec47bba54ee7d52dd679bd/expensetracker/${userid}`)
   .then((response) =>{
    console.log(response.data);
    document.getElementById('amount').value=response.data.expenseAmount;
    document.getElementById('description').value=response.data.description;
    document.getElementById('category').value=response.data.category;
      deleteExpense(userid)
      })
   .catch((err) =>{
   console.log(err);
   })
}
