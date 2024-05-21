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

  const cList = document.getElementById("commentList");
const cInput = document.getElementById("commentInput");
const cBtn = document.getElementById("addCommentBtn");


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

cBtn.addEventListener("click", addComment);
