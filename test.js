function myTEST() {
var xhttp = new XMLHttpRequest();
const the_url = 'https://www.yjezimoc.com/test/helloworld?name=Yang+Bai';
xhttp.open("POST", the_url, true);
xhttp.send();
xhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
  	var json_obj = JSON.parse(this.responseText);
    document.getElementById("the_title").innerHTML = json_obj.title;
    document.getElementById("the_content").innerHTML = json_obj.content;
  }
};
}
