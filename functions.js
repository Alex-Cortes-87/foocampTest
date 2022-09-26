const confirmationModal = document.getElementById("confirmationModal");
const landingPseudoContainer = document.querySelector(".landingPseudocontainer");
const sentCartContainer = document.getElementById("sentCard");
const nameField = document.getElementById("nameField");
const inlineErrorTag = document.createElement("p");
const inlineErrortext = document.createTextNode("* El campo esta vacio, escribe un nombre para poder enviar la tarjeta");
const sentCardHeadline = document.getElementById("sentCardHeadline");

function abrirModalEnvio() {
    confirmationModal.style.display = "block";
    let inline = document.getElementById("errorParagraph");
      if(typeof(inline) != 'undefined' && inline != null) {
           inline.remove();
  
      }
  }
  
  function cerrarModalEnvio() {
      nameField.value = "";
      confirmationModal.style.display = "none";
  }
  
  function enviarTarjeta() {
      let inline = document.getElementById("errorParagraph");
      if(nameField.value !== "") {
          confirmationModal.style.display = "none";
          landingPseudoContainer.style.display = "none";
          sentCartContainer .style.display = "block";
          sentCardHeadline.textContent = "Tarjeta enviada a " + nameField.value + "!";
      }
      if (inline === null && nameField.value == "") {
              inlineErrorTag.setAttribute("id", "errorParagraph");
              inlineErrorTag.appendChild(inlineErrortext);
              document.querySelector("#confirmationModalContainer div").appendChild(inlineErrorTag);
          }
      }
  