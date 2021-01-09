function mobileViewUnder(){
  var coll = document.getElementsByClassName("heading-of");
  var i;
  for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
      this.classList.toggle("active");
      var content = this.nextElementSibling.nextElementSibling.nextElementSibling;

      if (content.style.display === "block") {
        content.style.display = "none";
      } else {
        content.style.display = "block";
      }
    });
  }

}
function mobileView(){
var coll = document.getElementsByClassName("dropbtn");
var i;
for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}
}

function search(){
    y=document.getElementsByClassName("mp search")[0];
    y.addEventListener("click",function(){
    x=document.getElementsByClassName("search-bar")[0];
    if(x.style.display==="block"){
      x.style.display="none";
    }else{
      x.style.display="block";
    }})
  }

// function seeMoreFunction(y){
//   var x = document.getElementsByClassName("myDIV")[y];
//   if (x.style.display === "none") {
//     x.style.display = "block";
//   }
//   else {
//     x.style.display = "none";
//   }
// }


// function seeMoreFunction(y){
//   var x = document.getElementsByClassName("myDIV")[y];
//   if (x.style.display === "none") {
//     x.style.display = "block";
//   }
//   else {
//     x.style.display = "none";
//   }
// }

//function openNav(){

//}


function openNav(){
var colly = document.getElementsByClassName("openbtn");
var c;
for (c = 0; c < colly.length; c++) {
  colly[c].addEventListener("click", function() {
    this.classList.toggle("active");
    var con = this.nextElementSibling.nextElementSibling;

    con.style.width="250px";
  });
}
}
function closeNav(){
var cal = document.getElementsByClassName("closebtn");
var l;
for (l = 0; l < cal.length; l++) {
  cal[l].addEventListener("click", function() {
    this.classList.toggle("active");
    var conten = this.parentNode;
    conten.style.width="0";
  });
}
}
function seeMoreFunction(){
var coll = document.getElementsByClassName("see-more");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.parentNode.parentNode.parentNode.parentNode.nextElementSibling;

    if (content.style.display === "none") {
      content.style.display = "block";
    } else {
      content.style.display = "none";
    }
  });
}
}


function Modal(){
var coll = document.getElementsByClassName("btn btn-primary");
var i;
var span = document.getElementsByClassName("close");
for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
      content.style.display = "block";
  });}
  for (j = 0; j < span.length; j++) {
    span[j].addEventListener("click", function() {
      this.classList.toggle("active");
      var cont = this.parentNode.parentNode.parentNode.parentNode;
        cont.style.display = "none";
    });
}
}


// function Modal(){
// // Get the modal
// var modal = document.getElementById("myModal");
//
// // Get the button that opens the modal
// var btn = document.getElementById("myBtn");
//
// // Get the <span> element that closes the modal
// var span = document.getElementsByClassName("close")[0];
//
// // When the user clicks the button, open the modal
// btn.onclick = function() {
//   modal.style.display = "block";
// }
//
//
//
// // When the user clicks on <span> (x), close the modal
// span.onclick = function() {
//   modal.style.display = "none";
// }
//
// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// }
// }


function showFilter(){
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}
}
