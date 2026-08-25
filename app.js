/* =========================================================
   Convite Austin — 1 aninho
   -------------------------------------------------------
   TUDO O QUE VOCÊ PRECISA PREENCHER ESTÁ NO BLOCO ABAIXO.
   Não é preciso mexer em mais nada deste arquivo.
   ========================================================= */

const CONFIG = {

  /* ---- GOOGLE FORMS ------------------------------------
     Cole aqui o link do formulário e os três códigos "entry".
     Enquanto estiver com o texto entre colchetes, o site
     funciona normalmente para testes, mas NÃO grava nada.
     ---------------------------------------------------- */
  FORM_URL:        "https://docs.google.com/forms/d/e/1FAIpQLSc41WOneMM3E2nsDygglm_ntkbz2Ixd4Ot_nyRPVyJhMzLLKQ/viewform",
  ENTRY_PRESENCA:  "entry.1735222230",
  ENTRY_NOME:      "entry.295545332",
  ENTRY_IDADES:    "entry.1023432103",

  /* ---- LINKS ------------------------------------------
     Cole os links entre as aspas. Os que ficarem sem link
     aparecem no site como "link em breve" e não abrem nada.
     ---------------------------------------------------- */
  LINKS: {
    amazon:       "https://www.amazon.com.br/s?k=brinquedo+bebe+1+ano&rh=p_n_g-1004151746091%3A16747576011&s=price-asc-rank&dc=&__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=3DWJL51AU9PSV&qid=1787364759&rnid=16254006011&sprefix=brinquedo+bebe+1+ano%2Caps%2C284&ref=sr_nr_p_36_0_0&low-price=41&high-price=",
    shopee:       "https://shopee.com.br/search?fe_filter_options=%5B%7B%22group_name%22%3A%22PRICE_RANGE%22%2C%22values%22%3A%5B%22undefined%E2%96%B6%E2%97%80100%22%5D%7D%2C%7B%22group_name%22%3A%22LOCATIONS%22%2C%22values%22%3A%5B%22S%C3%A3o%20Paulo%22%5D%7D%2C%7B%22group_name%22%3A%22RATING%22%2C%22values%22%3A%5B%224%22%5D%7D%2C%7B%22group_name%22%3A%22CONDITION%22%2C%22values%22%3A%5B%22NEW_ITEM%22%5D%7D%2C%7B%22group_name%22%3A%22FACET%22%2C%22values%22%3A%5B%2211062002%22%2C%2211062004%22%2C%2211062001%22%2C%2211059975%22%2C%2211062003%22%5D%7D%5D&keyword=montessori%201%20ano&order=asc&page=0&sortBy=pricehttps://shopee.com.br/search?fe_filter_options=%5B%7B%22group_name%22%3A%22LOCATIONS%22%2C%22values%22%3A%5B%22Nacional%22%2C%22S%C3%A3o%20Paulo%22%5D%7D%2C%7B%22group_name%22%3A%22RATING%22%2C%22values%22%3A%5B%224%22%5D%7D%5D&keyword=brinquedo%20beb%C3%AA%201%20ano&page=0",
    mercadolivre: "https://lista.mercadolivre.com.br/montessori-1-ano_CustoFrete_Gratis_OrderId_PRICE_PriceRange_35-100_AGE*GROUP_371795_MIN*RECOMMENDED*AGE_*-1.5anos_NoIndex_True_SHIPPING*ORIGIN_10215068#applied_filter_id%3DMIN_RECOMMENDED_AGE%26applied_filter_name%3DIdade+m%C3%ADnima+recomendada%26applied_filter_order%3D15%26applied_value_id%3D%28*-1.5anos%29%26applied_value_name%3DMenos+de+1%2C5+anos%26applied_value_order%3D4%26applied_value_results%3D85%26is_custom%3Dfalse",
    riachuelo:    "https://riachuelo.todocartoes.com.br/#/purchase",
    maps:         "https://maps.app.goo.gl/iumtrHoAHRuaQ3KC8",
    waze:         "https://ul.waze.com/ul?from=place.ElhSLiDDgm5nZWxvIE1hcmNvbmRlcyBkZSBDYXN0cm8sIDYxNSAtIEJvbSBKYXJkaW0sIEd1YXJhdGluZ3VldMOhIC0gU1AsIDEyNTA4LTE1MCwgQnJhemlsIjESLwoUChIJWfSmx5vBzJQRyQOvarnK778Q5wQqFAoSCctMJL6bwcyUEcKWCWZODX10&utm_campaign=default&utm_source=waze_website&utm_medium=lm_share_location",
    whatsapp:     "https://wa.me/5512982136882"
  },

  /* ---- DATAS ------------------------------------------
     Formato: ANO-MES-DIAThora:minuto:segundo-03:00
     O "-03:00" é o fuso de Brasília. Não apague.
     ---------------------------------------------------- */
  INICIO_EVENTO: "2026-09-05T13:00:00-03:00",
  FIM_EVENTO:    "2026-09-05T16:00:00-03:00"
};

/* =========================================================
   Daqui para baixo é o funcionamento do site.
   ========================================================= */

const CHAVE = "austin_rsvp_v1";
const $  = (s) => document.querySelector(s);
const $$ = (s) => Array.from(document.querySelectorAll(s));

const naoPreenchido = (v) => !v || /^\s*\[.*\]\s*$/.test(v);

/* ---------------------------------------------------------
   Links das lojas, mapas e WhatsApp
   --------------------------------------------------------- */
function aplicarLinks() {
  $$("[data-link]").forEach((el) => {
    const url = CONFIG.LINKS[el.dataset.link];
    if (naoPreenchido(url)) {
      el.classList.add("sem-link");
      el.removeAttribute("href");
      el.removeAttribute("target");
      el.setAttribute("aria-disabled", "true");
    } else {
      el.href = url;
    }
  });
}

/* ---------------------------------------------------------
   Contador regressivo
   --------------------------------------------------------- */
const INICIO = new Date(CONFIG.INICIO_EVENTO);
const FIM    = new Date(CONFIG.FIM_EVENTO);

function atualizarContador() {
  const alvo = $("#contador");
  if (!alvo) return;
  const agora = Date.now();
  const falta = INICIO.getTime() - agora;

  if (falta <= 0) {
    alvo.textContent = agora <= FIM.getTime()
      ? "🎉 É hoje! A festa começou."
      : "💛 Obrigado por celebrar com a gente!";
    return;
  }

  const min   = Math.floor(falta / 60000);
  const dias  = Math.floor(min / 1440);
  const horas = Math.floor((min % 1440) / 60);
  const mins  = min % 60;

  const partes = [];
  if (dias  > 0) partes.push(dias === 1 ? "1 dia" : dias + " dias");
  if (horas > 0 || dias > 0) partes.push(String(horas).padStart(2, "0") + "h");
  partes.push(String(mins).padStart(2, "0") + "min");

  alvo.textContent = "⏳ Faltam " + partes.join(" • ");
}

/* ---------------------------------------------------------
   Modal
   --------------------------------------------------------- */
const modal = $("#modal");
let modalAberto = false;

function abrirModal() {
  if (modalAberto) return;
  modalAberto = true;
  modal.hidden = false;
  document.body.classList.add("travado");
  const primeiro = modal.querySelector(".modal__etapa:not([hidden]) input, .modal__etapa:not([hidden]) button");
  if (primeiro) setTimeout(() => primeiro.focus({ preventScroll: true }), 320);
}

function fecharModal() {
  modalAberto = false;
  modal.hidden = true;
  document.body.classList.remove("travado");
}

function mostrarEtapa(id) {
  $$(".modal__etapa").forEach((e) => { e.hidden = (e.id !== id); });
}

/* ---------------------------------------------------------
   Liberação do conteúdo
   --------------------------------------------------------- */
function liberarConteudo(rolar) {
  $("#protegido").hidden = false;
  $("#topbar").hidden = false;
  document.body.classList.add("liberado");
  atualizarContador();
  ativarReveals();
  if (rolar) {
    setTimeout(() => {
      $("#boasvindas").scrollIntoView({ behavior: "smooth", block: "start" });
    }, 120);
  }
}

/* ---------------------------------------------------------
   Envio para o Google Forms
   --------------------------------------------------------- */
function urlDeEnvio() {
  return CONFIG.FORM_URL.split("?")[0].replace(/\/(viewform|edit|formResponse)?$/, "") + "/formResponse";
}

function enviarParaForms(dados) {
  return new Promise((resolve) => {
    if (naoPreenchido(CONFIG.FORM_URL) ||
        naoPreenchido(CONFIG.ENTRY_PRESENCA) ||
        naoPreenchido(CONFIG.ENTRY_NOME)) {
      console.warn("[Convite Austin] Google Forms ainda não configurado em app.js. A resposta NÃO foi gravada.");
      setTimeout(resolve, 400);
      return;
    }

    const form = document.createElement("form");
    form.action = urlDeEnvio();
    form.method = "POST";
    form.target = "destino-forms";
    form.style.display = "none";

    const campos = {};
    campos[CONFIG.ENTRY_PRESENCA] = dados.presenca;
    campos[CONFIG.ENTRY_NOME]     = dados.nome;
    if (!naoPreenchido(CONFIG.ENTRY_IDADES)) {
      campos[CONFIG.ENTRY_IDADES] = dados.idades || "";
    }

    Object.keys(campos).forEach((nome) => {
      const input = document.createElement("input");
      input.type = "hidden";
      input.name = nome;
      input.value = campos[nome];
      form.appendChild(input);
    });

    const iframe = $("#destino-forms");
    let concluido = false;
    const terminar = () => {
      if (concluido) return;
      concluido = true;
      iframe.removeEventListener("load", terminar);
      form.remove();
      resolve();
    };

    iframe.addEventListener("load", terminar);
    document.body.appendChild(form);
    form.submit();
    setTimeout(terminar, 5000); // rede ruim não pode travar o convidado
  });
}

/* ---------------------------------------------------------
   Validação e submissão
   --------------------------------------------------------- */
function validar() {
  let ok = true;

  const presenca = $$('input[name="presenca"]').find((r) => r.checked);
  $("#erro-presenca").hidden = !!presenca;
  if (!presenca) ok = false;

  const nome = $("#nome");
  const nomeVazio = nome.value.trim().length < 2;
  $("#erro-nome").hidden = !nomeVazio;
  nome.classList.toggle("invalido", nomeVazio);
  if (nomeVazio) ok = false;

  const idades = $("#idades");
  const texto = idades.value.trim();
  const idadesInvalidas = texto.length > 0 && !/^\s*\d{1,2}(\s*[,;]\s*\d{1,2})*\s*$/.test(texto);
  $("#erro-idades").hidden = !idadesInvalidas;
  idades.classList.toggle("invalido", idadesInvalidas);
  if (idadesInvalidas) ok = false;

  return ok ? {
    presenca: presenca.value,
    nome: nome.value.trim().replace(/\s+/g, " "),
    idades: texto.replace(/\s*[,;]\s*/g, ", ")
  } : null;
}

$("#form-rsvp").addEventListener("submit", async (ev) => {
  ev.preventDefault();
  const dados = validar();
  if (!dados) {
    const primeiroErro = $$(".erro").find((e) => !e.hidden);
    if (primeiroErro) primeiroErro.scrollIntoView({ behavior: "smooth", block: "center" });
    return;
  }

  const botao = $("#btn-confirmar");
  botao.disabled = true;
  botao.textContent = "Enviando…";

  await enviarParaForms(dados);

  if (dados.presenca === "SIM") {
    localStorage.setItem(CHAVE, "sim");
    $("#nome-eco").textContent = dados.nome.split(" ")[0];
    mostrarEtapa("etapa-sim");
    liberarConteudo(false);
  } else {
    localStorage.setItem(CHAVE, "nao");
    mostrarEtapa("etapa-nao");
  }

  modal.querySelector(".modal__caixa").scrollTop = 0;
  botao.disabled = false;
  botao.textContent = "Confirmar presença";
});

$("#btn-entrar").addEventListener("click", () => {
  fecharModal();
  $("#boasvindas").scrollIntoView({ behavior: "smooth", block: "start" });
});

$("#abrir-rsvp").addEventListener("click", abrirModal);

$("#ver-convite").addEventListener("click", () => {
  fecharModal();
  window.scrollTo({ top: 0, behavior: "smooth" });
});

$("#voltar-topo").addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

/* ---------------------------------------------------------
   Gate: o modal aparece quando a abertura sai da tela
   --------------------------------------------------------- */
function ativarGate() {
  const abertura = $("#abertura");
  let armado = false;

  const disparar = () => {
    window.removeEventListener("scroll", checar);
    window.removeEventListener("resize", checar);
    abrirModal();
  };

  const t0 = Date.now();
  const ESPERA = 3200; // deixa a animação de abertura terminar antes de interromper
  let agendado = false;

  const checar = () => {
    if (modalAberto) return;
    const fim = abertura.getBoundingClientRect().bottom;
    // chegou ao fim da abertura (ou ela inteira já cabe na tela)
    if (fim - window.innerHeight > 40) return;
    const falta = ESPERA - (Date.now() - t0);
    if (falta > 0) {
      if (!agendado) { agendado = true; setTimeout(checar, falta + 50); }
      return;
    }
    disparar();
  };

  window.addEventListener("scroll", checar, { passive: true });
  window.addEventListener("resize", checar);

  // a primeira checagem só depois das imagens, senão a altura ainda está errada
  const armar = () => {
    if (armado) return;
    armado = true;
    setTimeout(checar, 600);
  };
  if (document.readyState === "complete") armar();
  else window.addEventListener("load", armar);
  setTimeout(armar, 4000);
}

/* ---------------------------------------------------------
   Reveals ao rolar
   --------------------------------------------------------- */
function ativarReveals() {
  const alvos = $$("#protegido .bloco, #protegido .presentes, #protegido .rodape");
  alvos.forEach((el) => el.classList.add("revelar"));
  const obs = new IntersectionObserver((entradas) => {
    entradas.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add("visivel");
        obs.unobserve(e.target);
      }
    });
  }, { rootMargin: "0px 0px -8% 0px" });
  alvos.forEach((el) => obs.observe(el));
}

/* ---------------------------------------------------------
   Início
   --------------------------------------------------------- */
function iniciar() {
  aplicarLinks();
  atualizarContador();
  setInterval(atualizarContador, 30000);

  const resposta = localStorage.getItem(CHAVE);

  if (resposta === "sim") {
    liberarConteudo(false);
  } else if (resposta === "nao") {
    mostrarEtapa("etapa-nao");
    ativarGate();
  } else {
    ativarGate();
  }
}

iniciar();
