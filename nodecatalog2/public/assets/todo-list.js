function delete_(i) {
  console.log(i);
  
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
      if(this.readyState == 4 && (this.status == 200 || this.status==304)) {
          tmp=this.responseText;
      }
  };

  xhttp.open("GET", "/delete/" + i , false);
  xhttp.send();
  location.reload();                     
};