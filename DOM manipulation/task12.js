localStorage.setItem(obj.emailInput,JSON.stringify(obj));
    shownewuseronscreen(obj)
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
  Object.keys(localStorage).forEach((key) => {
    //i==2
    if (key.match(/userDetails/g)) {
      //we only care about keys that start with userDetails
      //this is called regex matching
      stringifiedDetailsOfPeople = localStorage.getItem(key);
      console.log("stringifiedDetailsOfPeople", stringifiedDetailsOfPeople);
      detailsOfPeople = JSON.parse(stringifiedDetailsOfPeople);
      console.log("details", detailsOfPeople);

      addNewLineElement(detailsOfPeople);
    }
  });
}
    // Append to ul

    userList.appendChild(li);
    // Clear fields
    nameInput.value = '';
    emailInput.value = '';


function shownewuseronscreen(user){
    const parentNode=document.getElementById('listofusers');
    const childHTML=`<li>${user.nameInput} -${user.emailInput}</li>`
    parentNode.innerHTML=parentNode.innerHTML+childHTML;
}
