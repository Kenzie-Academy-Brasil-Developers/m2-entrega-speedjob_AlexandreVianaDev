function renderCardsFrontEnd () {
    for (let i = 0; i < frontEndJobs.length; i++) {
        const frontEndList = document.querySelector("#frontend__list");
        let job = frontEndJobs[i];
        frontEndList.insertAdjacentHTML("beforeend", `
        <li class="section__card">
            <div class="card__top">
                <div class="card__header">
                    <img src="/src/assets/images/profile_img.fw.png" alt="G">
                    <div>
                        <h3 class="card__title">${job.title}</h3>
                        <span class="card__location">Curitiba - Paraná</span>
                    </div>
                </div>
                <p class="card__description">${job.description}</p>
            </div>
            <div class="card__category--frontEnd">

            </div>
        </li>
        `)

        for(let j = 0; j < job.modality.length; j++) {
            let jobModality = job.modality[j];
            const cardCategory = document.querySelectorAll(".card__category--frontEnd")
            cardCategory[i].insertAdjacentHTML("beforeend", `<span>${job.modality[j]}</span>`)
        }
    }
}

function renderCardsBackEnd () {
    for (let i = 0; i < backEndJobs.length; i++) {
        const backEndList = document.querySelector("#backend__list");
        let job = backEndJobs[i];
        backEndList.insertAdjacentHTML("beforeend", `
        <li class="section__card">
            <div class="card__top">
                <div class="card__header">
                    <img src="/src/assets/images/profile_img.fw.png" alt="G">
                    <div>
                        <h3 class="card__title">${job.title}</h3>
                        <span class="card__location">Curitiba - Paraná</span>
                    </div>
                </div>
                <p class="card__description">${job.description}</p>
            </div>
            <div class="card__category--backEnd">

            </div>
        </li>
        `)

        for(let j = 0; j < job.modality.length; j++) {
            let jobModality = job.modality[j];
            const cardCategory = document.querySelectorAll(".card__category--backEnd")
            cardCategory[i].insertAdjacentHTML("beforeend", `<span>${job.modality[j]}</span>`)
        }
    }
}

function start () {
    renderCardsFrontEnd ();
    renderCardsBackEnd ();
}


start ();