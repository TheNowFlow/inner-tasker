document.getElementById("taskForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const task = document.getElementById("task").value;
  const intention = document.getElementById("intention").value;

  const kaiMessages = {
    crecimiento: "Recuerda que cada paso hacia afuera es también un paso hacia adentro.",
    servicio: "Tu acción de hoy puede ser el alivio de alguien más.",
    claridad: "La claridad surge cuando te permites moverte con intención.",
    foco: "Respira profundo. Estás aquí. Estás avanzando."
  };

  const kaiResponse = document.getElementById("kaiResponse");
  kaiResponse.textContent = `"${kaiMessages[intention]}"`;
  kaiResponse.classList.remove("hidden");
});