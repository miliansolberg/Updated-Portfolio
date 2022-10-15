function openChat() {
    document.getElementById("chat").style.display = "block";
    document.getElementById("closeBtn").style.display = "block";
    document.getElementById("mainContent").style.marginLeft = "20.5%";
}
  
function closeChat() {
    document.getElementById("chat").style.display = "none";
    document.getElementById("closeBtn").style.display = "none";
    document.getElementById("mainContent").style.marginLeft = "2rem";
}