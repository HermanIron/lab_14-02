
let resp = prompt("está enchufada la lámpara?");
if (resp == "no") {
  document.write(" Enchúfala ");
} else if(resp =="si"){
  let resp2 = prompt("está el foco quemado?");
  if (resp2 == "si"){
    document.write(" reemplaza el foco")
  } else if (resp2 == "no") {
    document.write(" compra nueva lámpara")
  }
} else {
  document.write(" responde si o no , gracias")
}
