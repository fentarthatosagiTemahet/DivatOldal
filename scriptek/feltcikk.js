window.addEventListener("load", init);

function ID(elem)
{
    return document.getElementById(elem);
}

function $(elem)
{
    return document.querySelector(elem);
}

function $All(elem)
{
    return document.querySelectorAll(elem);
}

function CLASS(elem)
{
    return document.getElementsByClassName(elem);
}

function init(){
    let txt = ""

    let adatok =JSON.parse(localStorage.getItem("aktualisgomb"));
    const bekezdestomb = adatok.bekezdeslista;
    const alcimtomb = adatok.alcimlista;
    const fels = adatok.felsorolas;
    const bekkep = adatok.bekezdeskeplista
    
    txt+=`<h1>${adatok.focim}</h1>`
    for (let index = 0; index < bekezdestomb.length; index++) {
        txt+=`<h2>${alcimtomb[index]}</h2><p>${bekezdestomb[index]}</p>`
        for (const key in adatok) {
            if (key.includes("bekezdeskeplista") && index<bekkep.length) {
                txt+=`<img loading="lazy" id="bekkep${index}" src="${bekkep[index]}" alt="kep">`
            }
        }
    }

    for (const key in adatok) {
        if (key.includes("felsorolas")) {
            txt+= `<ul>` 
            for (let index = 0; index < fels.length; index++) {
                txt+= `<li>${fels[index]}</li>`
            }
            txt+=`</ul>`
        }
    }

    

        
    ID("halo").innerHTML = txt


    ID("lab").innerHTML="&copy Készítette: Paál Ádám";
    
}
