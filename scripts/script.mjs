  // NAV
  var menuLinks = [
    { text: 'about', href: '/about' },
    { text: 'catalog', href: '/catalog' },
    { text: 'orders', href: '/orders' },
    { text: 'account', href: '/account' },
  ];
  
    const mainEl = document.getElementsByTagName('main');
  console.log(mainEl[0])
  
  
  mainEl[0].style.backgroundColor = 'var(--main-bg)';
  
  
  mainEl[0].innerHTML = "<h1> Shopping List goes here:</h1>";
  
  
  
  mainEl[0].classList.add('flex-ctr');
  
  
  const topMenuEl = document.getElementById('top-menu');
  console.log(topMenuEl);
  
  
  topMenuEl.style.height = "100%";
  
  
  topMenuEl.style.backgroundColor = 'var(--top-menu-bg)';
  
  
  topMenuEl.classList.add('flex-around');
  
  
  
      menuLinks.forEach((link)=>{
  
     
      let newLink = document.createElement('a');
  
      
      newLink.setAttribute('href', link.href)
  
      
      newLink.textContent = link.text
      topMenuEl.appendChild(newLink)
  
  })
  
  
const items = document.getElementById('todo');
const addBtn = document.getElementById('addbtn');
const delBtn = document.getElementById('delbtn');
const taskAdd = document.getElementById('task')

addBtn.addEventListener('click', function() {
    // Create a new list item element

    if(taskAdd.value != ''){
    const  list = document.createElement("li");
    list.innerText = task.value;
    list.classList.add('list')
  
    // Append the new list item to the items list
     items.appendChild(list);

//Erase the text input in textarea for new text
     taskAdd.value ="";
    }

  });

  delBtn.addEventListener('click', function() {

    const li = document.getElementsByClassName('list')[0]; 
    items.removeChild(li);
  });


