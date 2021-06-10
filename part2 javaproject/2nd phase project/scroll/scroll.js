// to set the data automatically
const date=document.getElementById("date");
date.innerHTML=new Date().getFullYear();

// close links
 const navToggle=document.querySelector('.nav_toggle');
 const linksContainer = document.querySelector('.links_container');
 const links =document.querySelector('.links');

 //using classList method

navToggle.addEventListener("click",function(){
if(links.style.display==="block"){
links.style.display="none";
}else{links.style.display="block";

}
});
 //try list
 //nav_toggle.addEventListener("click",function(){
  //linksContainer.classList.toggle("show_links");
 //});

 
//navToggle.addEventListener("click",function(){
//const containerHeight=linksContainer.getBoundingClientRect().height;
//const linksHeight=links.getBoundingClientRect().height;
//if(containerHeight===0){
  // linksContainer.style.height=`${linksHeight}px`;
//}else{
  // linksContainer.style.height=0;
//}
//});

//**********fixed navbar************
//window.addEventListener("scroll",function(){
//const scrollHeight=
//});



