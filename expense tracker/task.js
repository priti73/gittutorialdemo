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
        localStorage.setItem(`${obj.expenseAmount}+${obj.description}+${obj.category}`,JSON.stringify(obj));
        expenseAmount.value='';
        description.value='';
        category.value='';
        showUserOnScreen(obj);
    }
}
function showUserOnScreen(user){
    const parentNode=document.getElementById('listofusers');
    console.log(parentNode);
    const childHTML=`<li id=${user.expenseAmount}> ${user.expenseAmount} - ${user.description} - ${user.category}
    <button onclick=deleteExpense('${user.expenseAmount}','${user.description}','${user.category}')> Delete Expense </button>
    <button onclick=EditExpense('${user.expenseAmount}','${user.description}','${user.category}')> Edit Expense </button>
    </li>`
    parentNode.innerHTML=parentNode.innerHTML+childHTML;
}
function deleteExpense(expenseAmount,description,category){
    localStorage.removeItem(`${expenseAmount}+${description}+${category}`);
    removeUserFromScreen(expenseAmount);
}
function removeUserFromScreen(expenseAmount){
    const parentNode=document.getElementById('listofusers');
    const childToBeDeleted=document.getElementById(expenseAmount);
    if(childToBeDeleted){
        parentNode.removeChild(childToBeDeleted)
    }
}
function EditExpense(expenseAmount,description,category){
     a=JSON.parse(localStorage.getItem(`${expenseAmount}+${description}+${category}`));
     document.getElementById('amount').value=a.expenseAmount;
    document.getElementById('description').value=a.description;
    document.getElementById('category').value=a.category;
    console.log(a);
    deleteExpense(expenseAmount,description,category)
}
function attachEventListeners(){
    document.addEventListener("DOMContentLoaded", (event) => {

});
}
{
   let Details, details;
   Object.keys(localStorage).forEach((key) => {
   Details = localStorage.getItem(key);
   details = JSON.parse(Details);
   console.log("detail", details);
   showUserOnScreen(details);
   });
}