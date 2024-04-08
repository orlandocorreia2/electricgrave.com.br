const date = new Date();
const hour = date.getHours();
const minutes = date.getMinutes();
let boxWhatsShow = false;
let changeStatusText = false;
let boxWhatsShowFirst = false;
let timeOutSlideRightBoxWhats = null;
let timeOutSlideLeftBoxWhats = null;

var whatsBtnConfig = {
  phone: "5511911111111",
  path: "./whatsapp-button-redirect",
  logo: "./whatsapp-button-redirect/dist/images/whatsapp_white.svg",
  companyName: "Whatsup",
  message: "Fala Irmão, vamos curtir um show do Electric Grave ?",
  typingHint: "digitando...",
  text: "Quero saber como agendar um show com a Banda Electric Grave?",
};

function showBoxWhatsAuto() {
  if (!boxWhatsShowFirst) {
    timeOutSlideLeftBoxWhats = setTimeout(() => {
      boxWhatsShowFirst = true;
    }, 10000);
  }
}

function init() {
  setTimeout(() => {
    const body = document.querySelector("body");

    const boxWhats = document.createElement("div");
    boxWhats.classList.add("box-whats");

    boxWhats.innerHTML = `<div class="box-whats-header">
                          <div style="display: flex;">
                            <div class="box-whats-header-logo">
                              <img
                                class="img-logo-whats-round"
                                src="${whatsBtnConfig.logo}"
                                alt="${whatsBtnConfig.companyName}"
                              />
                            </div>
                            <div class="box-whats-header-title">
                              ${whatsBtnConfig.companyName}
                              <div class="box-whats-header-small">
                                <small id="status-text">${whatsBtnConfig.typingHint}</small>
                              </div>
                            </div>
                            <div class="box-whats-header-close">
                              <span aria-hidden="true">&times;</span>
                            </div>
                          </div>
                          </div>
                          <div class="box-whats-redirect">
                          <div class="box-whats-body">
                            <div id="show-message" class="d-none">
                              <span style="margin-left: -11px;" data-icon="tail-in">
                                <img class="img-icon-idea">
                              </span>
  
                              <div class="box-whats-body-message">
                                <div class="box-whats-body-message-info">
                                  ${whatsBtnConfig.message}
                                </div>
                                <div class="box-whats-body-message-time">
                                  <small id="box-whats-body-message-time-now"></small>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="box-whats-footer">
                            <div>
                              <span data-icon="smiley" class="box-whats-footer-emoj">
                                <img class="img-icon-smiley">
                              </span>
                            </div>
                            <div class="box-whats-footer-input"></div>
                            <span data-icon="ptt" class="box-whats-footer-mic">
                              <img class="img-icon-mic">
                            </span>
                          </div>
                          </div>
                          </div>
  
                          <div class="whats-fixed-icon">
                          <a
                          id="whats-link-redirect"
                          href="https://api.whatsapp.com/send?1=pt_BR&phone=${whatsBtnConfig.phone}&text=${whatsBtnConfig.text}"
                          target="_blank"
                          title="Whatsapp Direto"
                          >
                          <img
                            src="${whatsBtnConfig.path}/dist/images/whatsapp.svg"
                            width="100"
                            alt="Whatsapp ${whatsBtnConfig.companyName}"
                          /></a>`;

    body.appendChild(boxWhats);

    window.onscroll = function () {
      showBoxWhatsAuto();
    };

    document
      .querySelector(".whats-fixed-icon")
      .addEventListener("mouseover", function () {});

    document
      .querySelector(".box-whats-header-close")
      .addEventListener("click", function () {
        slideRightBoxWhats();
        clearTimeout(timeOutSlideRightBoxWhats);
        clearTimeout(timeOutSlideLeftBoxWhats);
      });

    document
      .querySelector(".box-whats-redirect")
      .addEventListener("click", function () {
        document.getElementById("whats-link-redirect").click();
      });

    document.getElementById("box-whats-body-message-time-now").innerHTML = `${
      hour < 10 ? `0${hour}` : hour
    }:${minutes < 10 ? `0${minutes}` : minutes}`;
  }, 500);
}

init();
