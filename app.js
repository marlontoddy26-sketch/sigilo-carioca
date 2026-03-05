function abrirChat(){
window.location="bate-papo.html"
}

function enviar(){

let msg = document.getElementById("msg").value

let chat = document.getElementById("chat")

chat.innerHTML += "<p>"+msg+"</p>"

}

function comprarFicha(){

alert("Você precisa comprar fichas para liberar as fotos privadas.")

}
