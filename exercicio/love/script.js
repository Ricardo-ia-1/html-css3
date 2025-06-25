function abrirCarta() {
  document.querySelector(".envelope").style.display = "none";
  document.getElementById("mensagem").style.display = "flex";
}

function revelarMensagem() {
  const senha = document.getElementById("senha").value.toLowerCase();
  const segredo = "amor";

  if (senha === segredo) {
    const msg = document.getElementById("amor");
    msg.style.opacity = 1;
    msg.innerText = "🌹 Meu amor por você floresce como esta carta. 🌹";
  } else {
    alert("Essa não é a palavra mágica... tente de novo 💔");
  }
}
function fecharMensagem() {
  document.getElementById("mensagem").style.display = "none";
  document.querySelector(".envelope").style.display = "flex";
  document.getElementById("senha").value = "";
  const msg = document.getElementById("amor");
  msg.style.opacity = 0;
  msg.innerText = "";
}