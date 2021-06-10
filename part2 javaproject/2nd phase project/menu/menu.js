// array item
const menu=[
    {
    id : 1,
    title :"Dal bhaat",
    category:"dinner",
    price: 200,
    img:"https://img.theculturetrip.com/wp-content/uploads/2018/02/5539113435_9fce607d63_b.jpg",
    desc:"Lorem ipsum dolor sit amet con<br>ectetur adipisicing elit. Possimus,<br> magnam.",
    },
    {
    id : 2,
                    title :"vegi food",
                   category:"breakfast",
           price:150,
                    img:"http://ecs.com.np/fckimage/article/images/2017/IMG_9974_rt.jpg",
                    desc:"Lorem ipsum dolor sit amet cons<br>ectetur adipisicing elit. Possimus,<br> magnam.",
                    },
                    {
                        id : 3,
                        title :"chineese food",
                        category:"dinner",
                        price: 200,
                        img:"https://www.gannett-cdn.com/presto/2019/10/03/PPHX/36b93376-cfea-4b89-b041-5cf49c589819-Old_Town_Taste_-_Sichuan_Fish.jpg?crop=5471,3077,x0,y231&width=660&height=372&format=pjpg&auto=webp",
                        desc:"Lorem ipsum dolor sit amet conse<br>ctetur adipisicing elit. Possimus,",
                        },
                        {
                            id : 4,
                            title :"fruits salad",
                            category:"breakfast",
                            price: 100,
                            img:"https://thumbs.dreamstime.com/z/fruits-salad-cream-blue-bowl-31507901.jpg",
                            desc:"Lorem ipsum dolor sit amet cons<br>ectetur adipisicing elit. Possimus, <br>magnam.",
                            },
                            {
                                id : 5,
                                title :"bugger",
                                category:"lunch",
                                price: 300,
                                img:"https://thumbs.dreamstime.com/z/bugger-table-170357897.jpg",
                                desc:"Lorem ipsum dolor sit amet cons<br>ectetur adipisicing elit. Possimus,<br> magnam.",
                                },
                                {
                                    id : 6,
                                    title :"pranks",
                                    category:"lunch",
                                    price:150,
                                img:"https://c.ndtvimg.com/2019-06/go4418h8_garlic-recipes-mushrooms-in-garlic-sauce_625x300_20_June_19.jpg",
                                desc:" prank-opsum dolor sit amet cons<br>ectetur adipisicing elit. Possimus, <br>magnam.",
                                    },
                                    {
                                        id : 7,
                                        title :"tasty food",
                                        category:"lunch",
                                        price: 300,
                                        img:"https://image.winudf.com/v2/image/Y29tLmhhYmliaS5UYXN0eWFuZFl1bW15Rm9vZFJlY2lwZV9zY3JlZW5fMF8xNTE0MTkwNzU0XzA5Ng/screen-0.jpg?h=355&fakeurl=1&type=.jpg",
                                        desc:"Lorem ipsum dolor sit amet cons<br>ectetur adipisicing elit. Possimus,<br> magnam.",
                                        },
                                        {
                                            id : 8,
                                            title :"momos",
                                            category:"dinner",
                                            price:200,
                                            img:"https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
                                            desc:"Lorem ipsum dolor sit amet cons<br>ectetur adipisicing elit. Possimus,<br> magnam.",
                                            },
]
//creating a variable to connect html to a javascript
const sectionCenter=document.querySelector(".section_center");
const filterBtns=document.querySelectorAll(".filter_btn");

// when the window is loaded
window.addEventListener("DOMContentLoaded",function(){
    dispalyMenuItems(menu);
});

//When we click on filter buttons
filterBtns.forEach(function(btn){
btn.addEventListener("click", function(e){
const category = e.currentTarget.dataset.id;
const menuCategory= menu.filter(function(menuItem){
   if(menuItem.category===category){
       return menuItem;
   } 
});
if(category==="all"){
    dispalyMenuItems(menu);
}else{dispalyMenuItems(menuCategory);
}
});
});

// function 
function dispalyMenuItems(menuItems){
    let displayMenu = menuItems.map(function(item){
        
        return `<article class="menu_item">
        <img src=${item.img} class="photo">
     <div class="item_info">
         <header>
             <h4>${item.title}</h4>
             <h4 class="price"> RS.${item.price}</h4>
         </header>
         <hr>
         <p class="item_text">${item.desc}</p>
     </div>
  </article>`;
    });
    displayMenu= displayMenu.join("");
    sectionCenter.innerHTML=displayMenu;
}