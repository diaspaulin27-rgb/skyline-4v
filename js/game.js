PASSO JS — TELA SECRETA DO PARABRISA
======================================

No arquivo js/game.js, vá até a região:

// #region 15 — EVENT LISTENERS / BOOTSTRAP
// Event Listeners

Cole ESTE BLOCO imediatamente antes da linha:
document.getElementById("continueBtn").onclick = ...


// =========================================================
// PARABRISA SECRETO — ABRIR / FECHAR TELA
// Nesta etapa NÃO existe ainda gatilho das 4 Road Stars.
// =========================================================
function showWindshieldSecretScreen() {
  document.querySelectorAll(".screen").forEach(screen => screen.classList.add("hidden"));
  document.getElementById("hud").classList.add("hidden");

  const secretScreen = document.getElementById("windshieldSecretScreen");
  if (!secretScreen) return;

  secretScreen.classList.remove("hidden");
  secretScreen.setAttribute("aria-hidden", "false");
}

function closeWindshieldSecretScreen() {
  const secretScreen = document.getElementById("windshieldSecretScreen");
  if (secretScreen) {
    secretScreen.classList.add("hidden");
    secretScreen.setAttribute("aria-hidden", "true");
  }

  returnToMainMenu(false);
}

const windshieldSecretContinueBtn = document.getElementById("windshieldSecretContinueBtn");
if (windshieldSecretContinueBtn) {
  windshieldSecretContinueBtn.onclick = closeWindshieldSecretScreen;
}


RESULTADO DESTA ETAPA
=====================
- A tela continua escondida normalmente.
- showWindshieldSecretScreen() consegue abrir a tela quando precisarmos.
- O botão CONTINUAR fecha a recompensa e volta ao menu principal.
- Nenhuma Road Star, recompensa, loja, brush, fase, áudio ou save foi alterado.
- O próximo passo será conectar showWindshieldSecretScreen() ao desbloqueio da 4ª Road Star.