//News Form
function newsletterForm() {
    document.forms["newsletterForm"].submit();
    document.getElementById("successS").style.display = "block";
    document.getElementById("successOnSubmit2").style.display = "block";
    setTimeout(function(){ document.getElementById("successS").style.opacity = "1";document.getElementById("successOnSubmit2").style.opacity = "1"; document.getElementById("successOnSubmit2").style.top = "20%";}, 2000);
    setTimeout(function(){ window.location='index.html';}, 5000);
    
  }
  
  document.getElementById("newsletterForm").addEventListener("submit", (newsletterForm));