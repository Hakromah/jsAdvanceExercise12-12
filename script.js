let sendbutton = document.querySelector('#sendbtn')
let inputField = document.querySelector('#book_title');
let item = document.querySelector('.h3item');


let arr = []

sendbutton.addEventListener('click', () => {
  let output = inputField.value;
  arr.push(output)
  console.log(arr);
  inputField.value = ('');
  item.textContent = arr.join(' '); 
  
  // convert the arr to JSON OBJ
  let jsonArr = JSON.stringify(arr);
  console.log(jsonArr);

  // save the json Array to local storage
 let storedData = window.localStorage.setItem("arr", jsonArr)

 let retriveData = window.localStorage.getItem("arr", storedData)
 let jsObj = JSON.parse(retriveData)
 console.log(jsObj);
 
  // Display the saved book title in a h3 tag
  

  




})





