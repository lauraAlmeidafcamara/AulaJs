
window.onload = function(){
var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var myObj = JSON.parse(this.responseText);

        var ctd = "<table border='1'><tr><th>Título</th><th>Status</th></tr>";
        for (x in myObj){
          ctd += "<tr><td>" + myObj[x].title + "</td>"
                      + "<td>" + myObj[x].completed + "</td></tr>";
        }
        ctd += "</tr></table>"

        document.getElementById("demo").innerHTML = ctd;
    }


function addLembrete(){
   let reqPost = new XMLHttpRequest();

   var lembrete = document.getElementById('btn-adicionar').value;
    console.log(lembrete);
   var tarefa = {
       "userId": number,
       "title": lembrete,
       "completed": false,
   }

   reqPost.onreadystatechange = function() {
       if (this.readyState == 4 && this.status == 201) {
       }
   }

   reqPost.open("POST", 'http://localhost:3000/todos', true);
   reqPost.setRequestHeader("Content-type", "application/json;charset=utf-8");
   reqPost.send(JSON.stringify(tarefa));
}   
    
    
}
xmlhttp.open("GET", "http://localhost:3000/todos", true);
xmlhttp.send();
}



// var json = $.getJSON("./db/db.json");
// var data = eval("(" +json.responseText + ")");
// document.write(data["userId", "title", "completed"]);



// var xhttp = new XMLHttpRequest();
// xhttp.onreadystatechange = function() {
//     if (this.readyState == 4 && this.status == 200) {
//         myFunction(this);
//     }
// };
// xhttp.open("GET", "books.xml", true);
// xhttp.send();

// function myFunction(xml) {
//     var xmlDoc = xml.responseXML;
//     var x = xmlDoc.getElementsByTagName("title")[0].childNodes[0];
//     document.getElementById("demo").innerHTML = x.nodeValue;
// }








// $(document).ready(function(){
//     $("button").click(function(){
//         $.get("demo_test.asp", function(data, status){
//             alert("Data: " + data + "\nStatus: " + status);
//         });
//     });
// });