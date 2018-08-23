// import './index.css';
// import numeral from 'numeral';
//
// const courseValue = numeral(1000).format('$0,0.00');
// console.log(`Price: ${courseValue}`); // eslint-disable-line no-console

import {getUsers} from "./api/userApi";

getUsers().then(result => {
  let userBody = "";
  result.forEach(user => {
    userBody+=`<tr>
      <td><a href="#" data-id="${user.id}" class="deleteUser">Delete</a></td>
      <td>${user.id}</td>
      <td>${user.firstName}</td>
      <td>${user.lastName}</td>
      <td>${user.email}</td>
    `
  });
  global.document.getElementById('users').innerHTML = userBody;
});
