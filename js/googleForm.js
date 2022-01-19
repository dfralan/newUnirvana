//Contact Form

const formZone = $("#formTop")

//Nativo Coder
document.getElementById("option1").addEventListener("click", function() {
    document.getElementById("Subject").value = "CODE ARTIST";
  });

//Nativo Influencer
document.getElementById("option2").addEventListener("click", function() {
    document.getElementById("Subject").value = "INFLUENCER";
  });

//Nativo Influencer
document.getElementById("option3").addEventListener("click", function() {
    document.getElementById("Subject").value = "NOT TRADITIONAL";
  });

document.getElementById("option4").addEventListener("click", function() {
    document.getElementById("Subject").value = "SUGGEST";
  });

document.getElementById("option5").addEventListener("click", function() {
    document.getElementById("Subject").value = "OTHER";
  });

function redirect() {
  document.forms["contactGoogleForm"].submit();
  document.getElementById("successF").style.display = "block";
  document.getElementById("successOnSubmit").style.display = "block";
  setTimeout(function(){ document.getElementById("successF").style.opacity = "1";document.getElementById("successOnSubmit").style.opacity = "1"; document.getElementById("successOnSubmit").style.top = "20%";}, 2000);
  setTimeout(function(){ window.location='index.html';}, 7000);
  
}

document.getElementById("contactGoogleForm").addEventListener("submit", (redirect));
