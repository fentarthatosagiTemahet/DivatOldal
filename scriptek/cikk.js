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

const lista = [];

function init(){
/*    for (let index = 0; index < cikkek.length; index++) {
        for (const key in cikkek[]) {

      }
        */

      
      fetch("../json/cikkek.json")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        console.log(data.cikkek);
        data.cikkek.forEach((elem) => {
          lista.push(elem);
        });
        console.log(lista);
        feltolt();
      })
      .catch((err) => {
        console.log(err);
      });

    }


    function feltolt(){
        let txt = "";
        for (let i = 0; i < lista.length; i++) {
            txt+=`<div id= "cikkek"><h1>${lista[i].focim}</h1> <p>${lista[i].bekezdes1}</p> <p>${lista[i].bekezdes7}</p></div>`;
        }
        console.log(txt);
        ID("cikkContainer").innerHTML = txt;
    }
    




    console.log(cikkek[0].bekezdes)    




    


