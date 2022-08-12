'use strict'
// collect input 
// regEx pattern for email = /(\w{2})[\w.-]+@([\w.]+\w)/ 
// showing only two words 
// replace with ***
//  render to the Dom immdialty the button is clicked

const searchUser = document.querySelector(".search_btn");
const results = document.querySelector('#result')
searchUser.addEventListener("click", function () {
console.log('chizoba');
 let inputValue = document.getElementById('email--input').value
    const reg = /(\w{2})[\w.-]+@([\w.]+\w)/;
 let showresult  = inputValue.replace(reg , '$1*******@$2');
      results.innerHTML = showresult
 
});


