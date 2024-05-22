// NAV
var menuLinks = [
    { text: 'Amazon Fesh', href: 'https://www.amazon.com/alm/storefront?almBrandId=QW1hem9uIEZyZXNo&tag=googhydr-20&hvadid=445337001272&hvpos=&hvexid=&hvnetw=g&hvrand=1518582852317906518&hvpone=&hvptwo=&hvqmt=e&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9033313&hvtargid=kwd-306802166534&ref=pd_sl_7dhczrgnba_e' },
    { text: 'Hello Fresh', href: 'https://www.hellofresh.com/pages/meal-kit-delivery?c=1M-DS6J2QW8A&mealsize=3-2&utm_source=google&utm_medium=cpc&utm_campaign=SEA_US_google_Act_2024_Brand_10FM_tROAS_FDFL_WK17_Control&vs_campaign_id=2b8ffb2c-8245-40a7-bb5e-1350d3139098&utm_content=act_paidsearch_seabrand&&discount_comm_id=69a00013-80db-4f6e-8cdb-87ca07973397&dis_channel=sea-brand&gad_source=1&gclid=EAIaIQobChMI3ZCCqsefhgMVQd8WBR1FbgKJEAAYASAAEgKFFPD_BwE' },
    { text: 'walmart', href: 'https://www.walmart.com/search/?query=Food&adid=22222222224211171859&wmlspartner=wmtlabs&wl0=e&wl1=o&wl2=c&wl3=72774333445890&wl4=kwd-72774761268861:loc-190&wl5=111342&wl6=&wl7=&wl14=walmart%20food&veh=sem&gclid=01dec07bbf0a166db2b8a636bfe60851&gclsrc=3p.ds&msclkid=01dec07bbf0a166db2b8a636bfe60851' },
    { text: 'LOGIN', href: '/account' },
  ];
  
    const mainEl = document.getElementsByTagName('main');
  console.log(mainEl[0])
        mainEl[0].style.backgroundColor = 'var(--main-bg)';
        mainEl[0].innerHTML = "<h1> Create Your Shopping list here:</h1>";
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

const cList = document.getElementById("commentList");
const cInput = document.getElementById("commentInput");
const cBtn = document.getElementById("addCommentBtn");
const saveBtn = document.getElementById("saveListBtn");
const loadBtn = document.getElementById("loadListBtn");
const emailForm = document.getElementById("emailForm");
const emailInput = document.getElementById("emailInput");
const emailError = document.getElementById("emailError");



cList.addEventListener("click", (e) => {
 
  e.target.classList.toggle("strikethrough");
});


function addComment() {
  const newComment = cInput.value;
  if (newComment === "") return;
  cList.appendChild(document.createElement("li")).textContent = newComment;
  cInput.value = "";
  cInput.focus();
}

function saveList(){
    const items = [];
    cList.querySelectorAll('#commentList li').forEach(item =>{
        items.push(item.textContent);
    });
    localStorage.setItem('shoppingList', JSON.stringify(items));
       alert("Your list is saved!");
       window.location.assign('thankyou.html');
}
function loadList() {
    const items = JSON.parse(localStorage.getItem('shoppingList'));
    if (items) {
        cList.innerHTML = '';  // Clear current list
        items.forEach(item => {
            const li = document.createElement('li');
            li.textContent = item;
            cList.appendChild(li);
            
        });
        alert("Saved list is loaded successfully!");
    }else{
        prompt("the list wasn't saved properly!")
    }
}


function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function emailList(event) {
    event.preventDefault();
    const email = emailInput.value;

    if (!validateEmail(email)) {
        emailError.textContent = "Please enter a valid email address.";
        return;
    }

    emailError.textContent = "";

    const items = [];
    cList.querySelectorAll('li').forEach(item => {
        items.push(item.textContent);
    });
    alert("Your List was sent to your mail");

}

cBtn.addEventListener("click", addComment);
saveBtn.addEventListener("click", saveList);
loadBtn.addEventListener("click", loadList);
emailForm.addEventListener("submit", emailList);

document.addEventListener("DOMContentLoaded", function() {
     // Select the element   
    const backgroundDiv = document.getElementById('backgroundDiv');

    // cBtn.addEventListener('click', function() {
    //     const newComment = cInput.value;
    //     if (newComment) {
    //         const li = document.createElement('li');
    //         li.textContent = newComment;
    //         cList.appendChild(li);
    //         cInput.value = '';
    //     }
    // });
    // Set the background image
    backgroundDiv.style.backgroundImage = "url('https://images.twinkl.co.uk/tw1n/image/private/t_630/u/ux/shopping-list-img2_ver_1.png')";

    // Additional styles for better presentation
    //backgroundDiv.style.backgroundSize = 'cover'; // Cover the whole area
    backgroundDiv.style.backgroundPosition = 'left'; // Center the image
    //backgroundDiv.style.marginTop = '15em';
    //backgroundDiv.style.marginBottom = '15em'
    backgroundDiv.style.backgroundRepeat = 'no-repeat'; // Do not repeat the image
    backgroundDiv.style.backgroundAttachment = 'fixed'; // The background is fixed in place
   

});



