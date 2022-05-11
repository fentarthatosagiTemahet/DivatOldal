window.addEventListener('load', init)

function ID(elem) {
  return document.getElementById(elem)
}

function $(elem) {
  return document.querySelector(elem)
}

function $All(elem) {
  return document.querySelectorAll(elem)
}

function CLASS(elem) {
  return document.getElementsByClassName(elem)
}

function init() {
    var melyikteszt = "";
  const altalanosteszt = []
  const kozepiskolasteszt = []
  const felnotteszt = []
  const htmlgombok = $All("#gombok>button");
  htmlgombok.forEach((elem) => {
    elem.addEventListener('click', function () {
      melyikteszt=event.target.innerHTML;
        fetch('../json/tesztek.json')
    .then((response) => response.json())
    .then((data) => {
      data.alt.forEach((element) => {
        altalanosteszt.push(element)
      })
      data.kozep.forEach((element) => {
        kozepiskolasteszt.push(element)
      })
      data.felnot.forEach((element) => {
        felnotteszt.push(element)
      })
      if(melyikteszt==="Általános Iskolás"){
        ID('teszt').innerHTML = listabejaras(altalanosteszt)
      }
      else if(melyikteszt==="Középiskolás"){
        ID('teszt').innerHTML = listabejaras(kozepiskolasteszt);
      }
      else if(melyikteszt==="Felnőtt"){
        ID('teszt').innerHTML = listabejaras(felnotteszt);
      }
    })
    .catch((err) => {
      console.log(err)
    })
    })
  })
}

function listabejaras(array) {
  var txt = '<form>'
  for (let index = 0; index < array.length; index++) {
    let i = 1
    for (const key in array[index]) {
      if (i === 1) {
        txt += `<label for="${index}.kerdes">${array[index][key]}</label><br>`
      } else if (Object.keys(array[index]).length === 7 && (i < 1 || i < 5)) {
        txt += `<input type="checkbox" id="${index}${i}.valasz" name="${index}.valasz" value="${index}.valasz">
                <label for="${index}${i}.valasz">${array[index][key]}</label><br>`
      } else if (i < 1 || i < 5) {
        txt += `<input type="radio" id="${index}${i}.valasz" name="${index}.valasz" value="${index}.valasz">
                <label for="${index}${i}.valasz">${array[index][key]}</label><br>`
      } else if (i === 5) {
        txt += `<p>${array[index][key]}pont</p>`
      }
      i++
    }
  }
  txt += '</form>'
  return txt
}
