console.log("bs")
let newsAccordian= document.getElementById("newsAccordian");


const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://newsapi.org/v2/top-headlines?country=fr&apiKey=0c98854a6c424d8a838dd6c4f9aba33a',true);
xhr.getResponseHeader('Content-type', 'application/json');

xhr.onload = function () {
    if(this.status === 200){

       let json= JSON.parse(this.responseText)
      // console.log(json);
       let articles= json.articles;
       let newsHTML= "";
       articles.forEach(function(element,index) {
         
         let news  = `<div class="accordion-item">
                           <h2 class="accordion-header" id="heading${index}">
                           <button class="accordion-button" style="color: black" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${index}" aria-expanded="true" aria-controls="collapse${index}">
                           <b>Breaking news ${index +1}</b> :  ${element.title}
                           </button>
                           </h2>
                           <div id="collapse${index}" class="accordion-collapse collapse show" aria-labelledby="heading${index}" data-bs-parent="#newsAccordian">
                           <div class="accordion-body">
                           ${element.content} <a href = "${element.url}" target ="_blank"> <b>Read more</b> </a> 
                           
                           </div>
                           </div>
                           </div>`;
         newsHTML += news;
         
       });
       newsAccordian.innerHTML= newsHTML;
    }
    else{
        console.log("Some error occured")
    }
}
xhr.send();


//0c98854a6c424d8a838dd6c4f9aba33a
//https://newsapi.org/v2/top-headlines?country=fr&apiKey=0c98854a6c424d8a838dd6c4f9aba33a
//title, description

