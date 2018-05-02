function adicionarLembrete(){
    let reqPost = new XMLHttpRequest();

    var lembrete = document.getElementById('btn-adicionar').value;

    var tarefa = {
        "userId": 1,
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