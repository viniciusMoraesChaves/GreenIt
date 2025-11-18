function createModal(content) {
    const overlay = document.createElement("div");
    overlay.style.position = "fixed";
    overlay.style.top = "0";
    overlay.style.left = "0";
    overlay.style.width = "100vw";
    overlay.style.height = "100vh";
    overlay.style.background = "rgba(0, 0, 0, 0.61)";
    overlay.style.display = "flex";
    overlay.style.alignItems = "center";
    overlay.style.justifyContent = "center";
    overlay.style.opacity = "0";
    overlay.style.transition = "0.2s ease";
    overlay.style.zIndex = "9999";

    const modal = document.createElement("div");
    modal.style.background = "#fff";
    modal.style.padding = "20px";
    modal.style.borderRadius = "10px";
    modal.style.minWidth = "1000px";
    modal.style.boxShadow = "0px 4px 10px rgba(0,0,0,0.3)";
    modal.innerHTML = content;

    overlay.appendChild(modal);
    document.body.appendChild(overlay);

    requestAnimationFrame(() => {
       overlay.style.opacity = "1";
    });

    overlay.addEventListener("click", (e) => {
        if (e.target === overlay) hideModal();
    });

    function hideModal() {
        overlay.style.opacity = "0";
        setTimeout(() => overlay.remove(), 200);
    }

    return hideModal;
}

const imageMap = {
    "manutençãopreventiva": "img/materia1/manutencaopreventiva.png",
    "useréguadeenergia": "img/materia1/usereguadeenergia.png",
    "useeletrodomésticoseficientes": "img/materia1/useeletrodomésticoseficientes.png",
    "useenergiasolar": "img/materia1/useenergiasolar.png",
    "uselâmpadasled": "img/materia1/uselampadasled.png",
    "programasdereciclagem" : "img/materia2/reciclagem.png",
    "designsustentável" : "img/materia2/design.png",
    "fontesdeenergiarenovável" : "img/materia2/energia.png",
    "cloudcomputing" : "img/materia2/cloud.png",
    "trabalhoremoto" : "img/materia2/remoto.png",
    "concertarvazamentos" : "img/materia3/vazamento.png",
    "fecharatorneiraaoescovarosdentes" : "img/materia3/dente.png",
    "acumularroupaantesdelavar" : "img/materia3/roupa.png",
    "capteereutilizeáguadachuva" : "img/materia3/chuva.png",
    "reduzirotempodobanho" : "img/materia3/banho.png",
    "reutilizareprolongaravidaútildosaparelhos" : "img/materia4/aparelho.png",
    "reciclarcorretamenteoseletrônicosdescartados" : "img/materia4/lixo.png",
    "optarporprodutossustentáveisemodulares" : "img/materia4/produtos.png",
    "reduziroconsumoeodescartedesnecessário" : "img/materia4/consumo.png",
    "utilizarsoluçõesdigitaisebaseadasemnuvem" : "img/materia4/digitais.png",
    "migraçãoparanuvemxdatacenterpróprio" : "img/materia5/nuvem.png",
    "iapararesfriamentoeficientededatacenters" : "img/materia5/resfriamento.png",
    "nuvemalimentadaporenergiarenovável(ppasemetas100%)" : "img/materia5/renovavel.png",
    "crescimentodoconsumodeenergiadosdatacenterscomia" : "img/materia5/data.png",
    "migrarparasoluçõesdigitaisebaseadasemnuvem" : "img/materia5/ferramenta.png",

    "reutilizaçãoeprolongaçãoavidaútildosaparelhos" : "img/materia6/vida.png",
    "reciclarcorretamenteoseletrônicosdescartados" : "img/materia6/eletronico.png",
    "optarporprodutossustentáveisemodulares" : "img/materia6/modulares.png",
    "reduziroconsumoedescartedesnecessário" : "img/materia6/descarte.png",
    "migrarparasoluçõesdigitaisebaseadasemnuvem" : "img/materia6/nuvem.png",

    "virtualizaçãodeservidoresfisicos" : "img/materia7/server.png",
    "armazenamentoeficiente" : "img/materia7/armazenamento.png",
    "gestãodedesktops" : "img/materia7/geren.png",
    "clientessustentáveis" : "img/materia7/client.png",
    "eficiênciadosdatacenters" : "img/materia7/data.png",

    "códigoineficiente" : "img/materia8/ine.png",
    "escolhadalinguagemdeprogramação" : "img/materia8/linguagem.png",
    "codebloat" : "img/materia8/bloat.png",
    "priorizealgoritmoseficientes" : "img/materia8/efi.png",
    "diminuaotráfegodedados" : "img/materia8/dad.png",
};

const divs = document.querySelectorAll(".info");

divs.forEach(div => {
    div.addEventListener("click", () => {

        const title = div.textContent.trim();
        const normalized = title.replace(/\s+/g, "").toLowerCase();

        let imgPath = null;

        for (let key in imageMap) {
            if (normalized.includes(key)) {
                imgPath = imageMap[key];
                break;
            }
        }

        const close = createModal(`
            <button id="closeModalBtn" style="width:50px; height:50px; background: #be0101ff; border:none ; border-radius: 50px">X</button>
            ${
                imgPath
                ? `<img src="${imgPath}" 
                        onerror="this.remove()" 
                        style="width:100%;border-radius:10px;">`
                : ""
            }
            
        `);

        setTimeout(() => {
            document.getElementById("closeModalBtn").addEventListener("click", close);
        }, 10);

    });
});

const header = document.querySelector("header");

window.addEventListener("scroll", () => {
    if (!header) return;

    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});



