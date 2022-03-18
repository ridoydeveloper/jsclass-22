


//get element 

import Alert from "./src/Alert.js";
import Storage from "./src/Storage.js";

const staff_add_form = document.getElementById('staff_add_form');
const staff_data_list = document.getElementById('staff_data_list');




staff_add_form.addEventListener('submit', function(e){

    e.preventDefault();


    const msg = document.querySelector('.msg');


    let form_data = new FormData(e.target);
    let data = Object.fromEntries(form_data.entries());


    let {name ,location } = data;

    if(name == '' || location == '' ){

        msg.innerHTML = Alert.danger('All fields are required')

    }else{

       Storage.set('staffs', data);
       staff_add_form.reset();
       getAllStaff()
     

    }





});





getAllStaff();
function getAllStaff(){

  let data =  Storage.get('staffs');

  
  let list = '';

    data.map(( data , index) =>{
  
  
      let {name , location , photo} = data;
  
      list  += `<tr>
      <td>${index + 1}</td>
      <td>${name}</td>
      <td>${location}</td>
      <td><img style="width:50px; height:50px; object-fit:cover;" src="${photo ? photo :'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png'}"></td>
    
      <td>
    
        <button class="btn btn-=info btn-sm"> <i class="fas fa-eye"></i></button>
        <button class="btn btn-=info btn-sm"> <i class="fas fa-edit"></i></button>
        <button class="btn btn-=info btn-sm" onclick = "stafDelete(${index})"> <i class="fas fa-trash"></i></button>
      </td>
    </tr>`;
       
  
    })
  
    staff_data_list.innerHTML = list;

};


// stafdelete

function stafDelete(id){

console.log(id);

}







