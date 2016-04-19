function button(id, button) {

  // get all h3 elements into a collection
  var allbuttons =  document.getElementsByClassName('music-buttons');
  var alla = document.getElementsByClassName('music-buttons-a');
  // length of the collection
  var length = allbuttons.length;
  //var style = window.getComputedStyle(allheaders[0],null).cssText;

  for(var n=0; n<length; n++){
    // get the attributes of the header at the top of the stack
    
    allbuttons[n].style.backgroundColor = "#E6F5FF";
    
  }
  for(var x=0; x<length; x++){
    // get the attributes of the header at the top of the stack
    
    alla[x].style.color = "black";
    
  }
    
  var sela = document.getElementById(id);
    sela.style.color = "white";
  var selbutton = document.getElementById(button);
    selbutton.style.backgroundColor = "black";
  //selbutton.setAttribute("class", "music-buttons-selected"); 
}

function addtoplaylist(song){
    var table = document.getElementById('sidebar-playlist');
    var row = table.insertRow(table.rows.length);
    // Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
    var cell1 = row.insertCell(0);


    // Add some text to the new cells:
    cell1.innerHTML = table.rows.length-1 + '. '+song;
    var saveButton = document.getElementById('saveButton');
    saveButton.style.color = "black";
    var nameTD = document.getElementById('playlistNoName');
       nameTD.style.color = "black";
}
function undoPlaylist(){
    
   var table = document.getElementById('sidebar-playlist');
   var length = table.rows.length;
   if(length >2){
    table.deleteRow(length-1);
   }
   var saveButton = document.getElementById('saveButton');
   saveButton.style.color = "black";
   var nameTD = document.getElementById('playlistNoName');
       nameTD.style.color = "black";
}
function deletePlaylist(){
    
   var table = document.getElementById('sidebar-playlist');
   var length = table.rows.length;
   if(length >2){
      for(var x=length-1; x>1; x--){
            table.deleteRow(x);
      }
   }
    var saveButton = document.getElementById('saveButton');
   saveButton.style.color = "black";
   var nameTD = document.getElementById('playlistNoName');
       nameTD.style.color = "black";
}
function savePlaylist(){
    
   var saveButton = document.getElementById('saveButton');
   var nameField = document.getElementById('playlistName');
   
   if(nameField.value ==''){
       var nameTD = document.getElementById('playlistNoName');
       nameTD.style.color = "red";
       var saveButton = document.getElementById('saveButton');
   saveButton.style.color = "black";
   }else{
    saveButton.style.color = "green";
    var nameTD = document.getElementById('playlistNoName');
       nameTD.style.color = "black";
   }
}
/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}