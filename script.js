function toggleRamo(elem) {
  if (elem.classList.contains("bloqueado")) {
    alert("Este ramo tiene un prerrequisito pendiente.");
    return;
  }

  elem.classList.toggle("aprobado");

  // Revisar desbloqueos
  const aprobadoId = elem.getAttribute("data-id");
  const ramos = document.querySelectorAll(".ramo.bloqueado");

  ramos.forEach(r => {
    const prereq = r.getAttribute("data-prerreq");
    const prereqElem = document.querySelector(`[data-id='${prereq}']`);
    if (prereq === aprobadoId && prereqElem.classList.contains("aprobado")) {
      r.classList.remove("bloqueado");
    }
  });
}
