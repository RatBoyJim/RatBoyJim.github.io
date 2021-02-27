document.addEventListener('DOMContentLoaded', () => {
	tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // document.getElementById("about_me_text").style.display = "block";
  // evt.currentTarget.className += " active";

  document.getElementById("defaultOpen").click();
  
});
  
  function openTab(evt, tabName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the link that opened the tab
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";

  // Get the element with id="defaultOpen" and click on it
  // document.getElementById("defaultOpen").click();
};

function linksAppearOnTab() {
  document.getElementById("forkme_banner").style.animation="nudge 1s forwards linear";
  // document.getElementById("forkme_banner").style.display="none";
  document.getElementById("contact_links").style.display="flex"; 
};

function linksReappearOnHeader() {
  // document.getElementById("forkme_banner").style.animation="nudge 1s reverse backwards linear";
  document.getElementById("forkme_banner").style.display="block";
  // document.getElementById("forkme_banner").style.position="fixed";
  // document.getElementById("forkme_banner").style.top="0";
  // document.getElementById("forkme_banner").style.right="0px";
  // document.getElementById("forkme_banner").style.z_index="10";
  // document.getElementById("forkme_banner").style.padding="10px 10px 10px 0px";
  // document.getElementById("forkme_banner").style.color="#fff"
  // document.getElementById("forkme_banner").style.background="rgb(0, 148, 185";
  // document.getElementById("forkme_banner").style.font_weight="700";
  // document.getElementById("forkme_banner").style.border_bottom_left_radius="12px";
  // document.getElementById("forkme_banner").style.border_bottom_right_radius="12px";
  document.getElementById("contact_links").style.display="none";
};