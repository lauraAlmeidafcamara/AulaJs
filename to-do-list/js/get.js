const Model = required('../task.model');
const task = Model.Task;

window.onload = function(){
    let reqGet = new XMLHttpRequest();

    reqGet.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            // console.log(req)
            console.log(reqGet.responseText)
            let tabela = document.getElementById('myTable');
            let row = table.insertRow(0);
            let cell1 = row.insertCell(1);
            let cell2 = row.insertCell(2);
            cell1.innerHTML = task.userId;
            cell2.innerHTML = task.title;
        }
        // console.log(req.responseText)
    }
    reqGet.open("GET", "http://localhost:3000/todos", true);
    reqGet.send();
}