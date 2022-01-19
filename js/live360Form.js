//360 Form
function success360() {
  document.forms["live360Form"].submit();
  document.getElementById("successS").style.display = "block";
  document.getElementById("successOnSubmit").style.display = "block";
  setTimeout(function(){ document.getElementById("successS").style.opacity = "1";document.getElementById("successOnSubmit").style.opacity = "1"; document.getElementById("successOnSubmit").style.top = "20%";}, 2000);
  setTimeout(function(){ window.location='index.html';}, 7000);
  
}

document.getElementById("live360Form").addEventListener("submit", (success360));
