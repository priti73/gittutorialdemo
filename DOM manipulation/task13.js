function showNewUserOnScreen(user){
    // if(localStorage.getItem(user.emailInput) !== null){
      //   removeuserfromscreen(user.emailInput)
     //  }
                   const parentNode = document.getElementById('listofusers');
                   const childHTML = `<li id=${user.emailInput}> ${user.nameInput} - ${user.emailInput}
                                           <button onclick=deleteUser('${user.emailInput}')> Delete User </button>
                                           <button onclick=editUserDetails('${user.emailInput}','${user.nameInput}')>Edit User </button>
                                        
                                        </li>`
   
                   parentNode.innerHTML = parentNode.innerHTML + childHTML;
               }
   function editUserDetails(emailInput, nameInput){
   document.getElementById('email').value = emailInput;
   document.getElementById('username').value = nameInput;
   deleteUser(emailInput)
   }
   
    // deleteUser('abc@gmail.com')
   
    function deleteUser(emailInput){
     console.log(emailInput)
    localStorage.removeItem(emailInput);
   removeuserfromscreen(emailInput);
    }
     function removeuserfromscreen(emailInput){
      const parentNode = document.getElementById('listofusers');
      const childNodeToBeDeleted = document.getElementById(emailInput);
      //if( childNodetobedeleted){
      parentNode.removeChild(childNodeToBeDeleted)
             //  }
           }