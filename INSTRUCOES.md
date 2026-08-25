# Convite do Austin — o que fazer, na ordem

Leia na ordem. Cada etapa depende da anterior.

---

## Etapa 1 — Criar o Google Forms

1. Abra <https://forms.google.com> e clique em **Em branco**.
2. Dê o nome **Confirmação de presença — Austin 1 aninho**.
3. Crie **três perguntas**, exatamente nesta ordem e neste tipo:

| # | Pergunta | Tipo | Detalhe |
|---|----------|------|---------|
| 1 | Presença | Múltipla escolha | Duas opções, escritas exatamente assim: `SIM` e `NÃO` |
| 2 | Nome | Resposta curta | — |
| 3 | Idades das crianças | Resposta curta | — |

> As opções da pergunta 1 precisam ser **SIM** e **NÃO** em letra maiúscula e com o acento no NÃO. Se escrever diferente, o Google descarta a resposta.

4. Em nenhuma das três marque "Obrigatória". A validação já é feita pelo site, e o campo obrigatório do Google atrapalha o envio.
5. Clique em **Publicar** (canto superior direito) e deixe o acesso aberto para qualquer pessoa com o link.

---

## Etapa 2 — Pegar o link e os três códigos "entry"

1. No formulário, clique nos três pontinhos (⋮) e escolha **Obter link preenchido previamente**.
2. Abre uma cópia do formulário. Preencha com valores de teste:
   - Presença: marque **SIM**
   - Nome: escreva `teste`
   - Idades: escreva `1`
3. Clique em **Obter link** e depois em **Copiar link**.
4. Cole esse link no bloco de notas. Ele vai parecer com isto:

```
https://docs.google.com/forms/d/e/1FAIpQLSxxxxxxxxxxxxxxxxxxx/viewform?usp=pp_url&entry.111111111=SIM&entry.222222222=teste&entry.333333333=1
```

5. Desse texto você tira quatro coisas:

| O que você precisa | Onde está no link |
|---|---|
| **FORM_URL** | Tudo até `/viewform`, incluindo o `/viewform`. No exemplo: `https://docs.google.com/forms/d/e/1FAIpQLSxxxxxxxxxxxxxxxxxxx/viewform` |
| **ENTRY_PRESENCA** | O `entry.` que vem antes de `=SIM`. No exemplo: `entry.111111111` |
| **ENTRY_NOME** | O `entry.` que vem antes de `=teste`. No exemplo: `entry.222222222` |
| **ENTRY_IDADES** | O `entry.` que vem antes de `=1`. No exemplo: `entry.333333333` |

Os números do exemplo são inventados. Use os do **seu** link.

---

## Etapa 3 — Preencher o arquivo `app.js`

Abra o `app.js` em qualquer editor de texto e mexa **somente** no bloco `CONFIG`, lá no comecinho. Troque o texto entre colchetes pelo valor real, mantendo as aspas:

```js
FORM_URL:        "https://docs.google.com/forms/d/e/SEU_ID_AQUI/viewform",
ENTRY_PRESENCA:  "entry.111111111",
ENTRY_NOME:      "entry.222222222",
ENTRY_IDADES:    "entry.333333333",

LINKS: {
  amazon:       "https://...",
  shopee:       "https://...",
  mercadolivre: "https://...",
  riachuelo:    "https://...",
  maps:         "https://...",
  waze:         "https://...",
  whatsapp:     "https://wa.me/5512999999999"
},
```

Regras que evitam dor de cabeça:

- Nunca apague as aspas nem a vírgula do fim da linha.
- O link que você **não** tiver ainda pode ficar como está. O botão aparece como "link em breve" e não abre nada, em vez de virar um link quebrado.
- O link do WhatsApp usa o formato `https://wa.me/55` + DDD + número, tudo junto e sem traço, parêntese ou espaço.
- Para o Google Maps, abra o local no app, toque em **Compartilhar** e copie o link curto.
- Para o Waze, abra o local, toque em **Enviar** ou **Compartilhar** e copie o link.

---

## Etapa 4 — Arrumar o repositório no GitHub

A pasta atual do repositório se chama `assets:`, com dois-pontos no nome, e alguns arquivos têm espaço no nome. Isso quebra os endereços das imagens quando o site estiver publicado. O pacote novo já vem com tudo corrigido, então o caminho mais seguro é **apagar a pasta antiga e subir a nova**.

### 4.1 — Apagar a pasta antiga

1. Entre em <https://github.com/maelizapinheiroribeiro/aniversario-austin>.
2. Clique na pasta `assets:`.
3. Entre em cada subpasta, abra cada arquivo, clique no ícone de lixeira (**Delete file**) e confirme com **Commit changes**.

Isso é chato porque o GitHub não deixa apagar pasta inteira pelo navegador. Se preferir, pode simplesmente **deixar a pasta antiga onde está** e subir a nova por cima: o site vai usar só a pasta nova, e a antiga fica ocupando espaço sem atrapalhar. Só lembre que o repositório continuará pesando 21 MB à toa.

### 4.2 — Subir os arquivos novos

1. Na página inicial do repositório, clique em **Add file** → **Upload files**.
2. Descompacte o `convite-austin.zip` no seu computador. Você vai ver:

```
index.html
styles.css
app.js
INSTRUCOES.md
assets/
```

3. Arraste **os quatro arquivos soltos e a pasta `assets` inteira** para a área de upload do GitHub. O navegador aceita pasta arrastada e mantém a estrutura.
4. Espere as barras de progresso terminarem. São mais de 50 arquivos pequenos, leva um minuto.
5. No campo de baixo, escreva a mensagem do commit: `site do convite`.
6. Clique em **Commit changes**.

### 4.3 — Conferir

Na página do repositório você deve ver `index.html`, `styles.css`, `app.js` e a pasta `assets` na raiz. Se `index.html` estiver dentro de alguma subpasta, o site não vai funcionar. Nesse caso, apague e suba de novo tomando cuidado para arrastar os arquivos, não a pasta que os contém.

---

## Etapa 5 — Publicar na Cloudflare

1. Crie uma conta gratuita em <https://dash.cloudflare.com/sign-up> (ou entre, se já tiver).
2. No menu da esquerda, clique em **Compute (Workers)** → **Workers & Pages**.
3. Clique em **Create** e depois na aba **Pages**.
4. Clique em **Connect to Git** e autorize a Cloudflare a acessar o GitHub. Na tela de permissão, escolha dar acesso **apenas ao repositório `aniversario-austin`**.
5. Selecione o repositório `aniversario-austin` e clique em **Begin setup**.
6. Preencha assim:

| Campo | O que colocar |
|---|---|
| Project name | `convite-austin` |
| Production branch | `main` |
| Framework preset | **None** |
| Build command | **deixe vazio** |
| Build output directory | `/` |

> O campo de build precisa mesmo ficar vazio. O site é HTML puro, não tem nada para compilar. Se você escolher um framework, a Cloudflare vai tentar rodar um build que não existe e o deploy falha.

7. Clique em **Save and Deploy**. Em torno de um minuto aparece o endereço, algo como `https://convite-austin.pages.dev`.

Daqui pra frente, todo commit novo no GitHub republica o site sozinho, em cerca de um minuto.

---

## Etapa 6 — Testar antes de mandar para alguém

Abra o endereço `.pages.dev` **no celular**, não no computador, e confira:

1. A abertura aparece com sol, árvores, bandeirinhas e o Austin, e a animação roda uma vez.
2. Depois de alguns segundos ou ao rolar, o pop-up de confirmação aparece sozinho.
3. Marque **SIM**, escreva um nome de teste, coloque `1` na idade e confirme.
4. Abra o Google Forms → aba **Respostas**. A linha de teste tem que estar lá com as três colunas preenchidas. **Se não estiver, pare aqui**: algum `entry` está errado ou as opções da pergunta 1 não estão escritas como `SIM` e `NÃO`.
5. Volte ao site. O conteúdo completo deve estar liberado, com a faixa azul fixa no topo e o contador embaixo dela.
6. Toque nos botões de presentes, mapa e WhatsApp e veja se abrem os links certos.
7. Apague a resposta de teste na planilha antes de divulgar.

Para testar de novo do zero, abra o site numa **aba anônima**. O celular guarda a sua resposta e não mostra o pop-up de novo.

---

## Etapa 7 — Divulgar

Mande o endereço `.pages.dev` no WhatsApp. O link aparece com a miniatura do convite, porque o `share.jpg` já está configurado para isso. Se a miniatura não aparecer de primeira, é cache do WhatsApp: espere alguns minutos ou mande com um caractere a mais no fim, tipo `?1`.

---

## Se algo der errado

| Sintoma | Causa quase certa | O que fazer |
|---|---|---|
| Página em branco | `index.html` não está na raiz do repositório | Suba de novo, arrastando os arquivos soltos |
| Imagens não aparecem (quadrados vazios) | A pasta `assets` não subiu inteira | Confira no GitHub se existem as seis subpastas dentro de `assets` |
| Nada chega na planilha | `entry` errado, ou as opções não são `SIM` e `NÃO` | Refaça a Etapa 2 e confira letra por letra |
| Botão diz "link em breve" | Aquele link ainda está entre colchetes no `app.js` | Preencha e faça um commit novo |
| Contador com número estranho | A data foi alterada no `CONFIG` | Restaure para `2026-09-05T13:00:00-03:00` |
| Deploy falhou na Cloudflare | Foi escolhido um framework preset | Vá em Settings → Builds e deixe o comando de build vazio |

---

## Coisas que você pode querer mudar depois

Tudo no `CONFIG`, no topo do `app.js`:

- **Prazo de confirmação**: está escrito `02/09` no `index.html`, na linha com `class="modal__prazo"`.
- **Horário do evento**: `INICIO_EVENTO` e `FIM_EVENTO`. O `-03:00` no fim é o fuso de Brasília e não pode ser apagado.
- **Textos das seções**: tudo direto no `index.html`, entre as tags. Mexa só no texto, não nas tags.
