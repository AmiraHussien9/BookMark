let siteName = document.getElementById("siteName");
websiteWall = document.getElementById("websiteWall");
let siteUrl = document.getElementsByTagName("input")[1];
let submitBtn = document.getElementsByTagName("button")[0];
let requiredName = document.getElementById("requiredName");
let requiredSite = document.getElementById("requiredSite");
let siteBox ;

if(localStorage.getItem("site") == null) {
    siteBox = [];

} else {
    siteBox = JSON.parse(localStorage.getItem("site"));
    displaySite();
}

// localStorage.setItem("site", JSON.stringify(siteBox ))
// console.log(submitBtn)

// console.log(siteUrl)
console.log(siteName)
submitBtn.addEventListener("click",function(){

    if (validateName() && chechUrl()!=false )  {
        let object = {
    
            theName : siteName.value,
            url :urlVisited(),
        
         }   
        siteBox.push(object);
         localStorage.setItem("site", JSON.stringify(siteBox ))
         clearSite();
        displaySite();
        requiredSite.innerHTML="";
        }
        else
        {
            if(chechUrl()==false)
            chechUrl()
            clearSite();
        }


})





function urlVisited() {

    if(siteUrl.value.includes("http://")) {
    return siteUrl.value;
}
else {
    return "http://" + siteUrl.value
}

}




    
function displaySite() {
    let box = ``;
    for(let i = 0 ; i<siteBox.length ; i++) {
        box+= `<div class="container" id="websiteWall">
        <div class="website m-4 p-5">
            <div class="row">
               
                    <div class="description ">
                       <h2>${siteBox[i].theName}</h2> 
                       <div class="links">
                       <a  target="_blank" href = ${siteBox[i].url}>Visit</a> 
                       <button class="btn btn-danger mb-1" onclick="deleteSite(${i})">Delete</button>
                       </div>
                    </div>
             
            </div>
        </div>
    </div>`



    }

    websiteWall.innerHTML = box;

  
}
    

function chechUrl() {

    for(let i=0 ; i<siteBox.length; i++) {
    if(siteBox[i].url == siteUrl.value) 
    { 
      
        requiredSite.innerHTML="mogod"
        return false; 
    }

                                        }

                     }



   

    
    // localStorage.setItem("site", JSON.stringify(siteBox ))

   




function deleteSite(index) {
    siteBox.splice(index , 1);
    localStorage.setItem("site", JSON.stringify(siteBox ));
    displaySite()
}


function clearSite() {
    siteName.value = "";
    siteUrl.value = "";
}

function validateName() {
    let regexName = /^[A-Z][a-z]{3}/;
    
    if(regexName.test(siteName.value) ){
        if(siteUrl.value != "") {
        return true;
        
    }else {
        requiredSite.innerHTML = "Site Required";
            siteUrl.style.border ="red"
    }
}
    else {
        requiredName.innerHTML = "Your Name must contain a captial letter and at least three small letters";
        siteName.style.border ="red";
      
    }

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    
    
}




