RAINY SKYLINE — PROJETO SEPARADO
================================

Este pacote foi gerado a partir do build mais recente com:
- 20 fases
- 20 sons de chuva novos
- 4 trovões v4
- sequência natural: clarão -> atraso por distância -> som + vibração
- frequência de trovões ajustada
- ruído/drone de motor removido

ESTRUTURA
---------
index.html                  HTML principal
css/styles.css              estilos
js/error-handler.js         tratamento de erros de inicialização
js/game.js                  lógica completa do jogo
assets/images/phases/       20 wallpapers
assets/images/zen/          wallpaper do modo Zen
assets/images/ui/           imagem da abertura Zanon
assets/audio/rain/          20 loops de chuva (M4A/AAC)
assets/audio/thunder/       4 trovões (WAV)
assets/manifests/           mapa dos assets

COMO TESTAR LOCALMENTE
----------------------
Por segurança, navegadores podem bloquear fetch de áudio ao abrir index.html diretamente em file://.
Execute a pasta por um servidor local. Exemplo, dentro desta pasta:

  python3 -m http.server 8000

Depois abra:
  http://localhost:8000

No GitHub Pages ou em um servidor web normal, os caminhos relativos já funcionam diretamente.

IMPORTANTE
----------
- Não renomeie/mova as pastas sem atualizar os caminhos em js/game.js.
- Imagens, chuvas e trovões foram extraídos do build atual sem nova recompressão.
- O carregador de áudio aceita arquivos externos locais e também continua compatível com data URI.
