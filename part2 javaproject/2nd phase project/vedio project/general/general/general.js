//reference to html 
//const btns=document.querySelectorAll(".question-btn");
//console.log("btns");

//btns.forEach(function(b){
  //  b.addEventListener("click", function(e) {
    //const question= e.currentTarget.parentElement.parentElement;
    //question.classList.toggle("show-text");

   // });
//});

//reference to html
const questions=document.querySelectorAll(".question");

questions.forEach(function(question){
    const btn= question.querySelector(".question-btn");
    btn.addEventListener("click",function(){
        questions.forEach(function(item){
        if(item !==question){
            item.classList.remove("show-text");
        }
        });
      question.classList.toggle("show-text");  
    });

});