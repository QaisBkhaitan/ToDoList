let button = document.querySelector('button');
let text = document.querySelector('.textbox .text');
let list = document.querySelector('ul');
button.onclick = addOption ;


function addOption() {
  let data ='';
  
   data +=`
        <div class="task">
            
                <input type="checkbox" id="crossOutCheckbox" onchange = "check(this)" />
                <li>${text.value}</li>
               
        </div>  
          `       
    
    list.innerHTML += data;     
    text.value = '';
    
}
function check(checkbox) {
    const listItem = checkbox.parentElement.querySelector('li');
    listItem.classList.toggle('crossed-out');
}

