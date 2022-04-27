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

function init() 
{
    const altalanosteszt =[{
        kerd:" 1. A műanyagot milyen színű szelektív kukába gyűjtjük?",
        valasz1:"citromsárga",
        valasz2:"kék",
        valasz3:"zöld",
        helyes: valasz1,
        pont : 1,
    },{
        kerd:"2. A papírt milyen színű szelektív kukába gyűjtjük?",
        valasz1:"kék",
        valasz2:"piros",
        valasz3:"szürke",
        helyes: valasz1,
        pont : 1,
    },{
        kerd:"3. Az üveget milyen színű szelektív kukába gyűjtjük?",
        valasz1:"zöld",
        valasz2:"lila",
        valasz3:"citromsárga",
        helyes: valasz1,
        pont : 1,
    },{
        kerd:"4. A fémet milyen színű szelektív kukába gyűjtjük?",
        valasz1:"szürke",
        valasz2:"kék",
        valasz3:"narancssárga",
        helyes: valasz1,
        pont : 1,
    },{
        kerd:"5. Milyen színűek a szelektív kukák?",
        valasz1:"citromsárga, kék, szürke, zöld",
        valasz2:"piros, kék, zöld, fekete",
        valasz3:"citromsárga, zöld, lila, rózsaszín",
        helyes: valasz1,
        pont : 1,
    },{
        kerd:"6. A felsorolás között mi a legkörnyezetbarátabb közlekedés?",
        valasz1:"séta",
        valasz2:"vonat",
        valasz3:"autó",
        helyes: valasz1,
        pont : 1,
    },{
        kerd:"7. A felsorolás között melyik a takarékosabb?",
        valasz1:"zuhanyzás",
        valasz2:"habfürdő, pancsolás kádban",
        valasz3:"fürdűszobából vizipark csinálás",
        helyes: valasz1,
        pont : 1,
    },{
        kerd:"8. Miket komposztálhatunk?",
        valasz1:"zöldség - gyümölcs maradék, tojáshéj",
        valasz2:"nagy ágak, fatörzsek, diófalevél",
        valasz3:"fém, műanyag, vegyszeres dolgok",
        helyes: valasz1,
        pont : 1,
    },{
        kerd:"9. Fogmosásnál... ",
        valasz1:"elzárom a csapot, ha már nem kell víz",
        valasz2:"nem zárom el a csapot, hadd folyjon",
        valasz3:"ki tekerem tejlesen, mert miért ne",
        helyes: valasz1,
        pont : 1,
    },{
        kerd:"10. Közlekedésnél....",
        valasz1:"ha lehet biciklizek",
        valasz2:"autózom",
        valasz3:"tömegközlekedést használok",
        helyes: valasz1,
        pont : 1,
    },{
        kerd:"11. Az okostelefont...",
        valasz1:"csak 2-3 évente cserélem",
        valasz2:"évente cserélem",
        valasz3:"amikor van egy jobb akkor azt rögtön megveszem",
        helyes: valasz1,
        pont : 1,
    }];
    const kozepiskolasteszt = [{
        kerd:"1. Hogyan dobjuk a szelektívbe a műanyagot?",
        valasz1:"Tisztán, kimosva",
        valasz2:"koszosan",
        valasz3:"mindegy",
        helyes:valasz1,
        pont : 1,
    },{
        kerd:"2. A felsorolás között mi a legkörnyelózetbarátabb közlekedés?",
        valasz1:"séta",
        valasz2:"vonat",
        valasz3:"autó",
        helyes:valasz1,
        pont : 1,
    },{
        kerd:"3. Ha szemetet látsz eldobva...",
        valasz1:"felveszem és kidobom a legközelebb kukába",
        valasz2:"otthagyom",
        valasz3:"belerúgok",
        helyes:valasz1,
        pont : 1,
    },{
        kerd:"4. Mi kerülhet a papír szelektívbe?",
        valasz1:"újságok, tejes -gyümölcsleves papírdobozok, könyve",
        valasz2:"hőpapír (nyugta, blokk)",
        valasz3:"olajjal/zsíradékkal szennyezett papír",
        helyes:valasz1,
        pont : 1,
    },{
        kerd:"5. Miket komposztálhatunk?",
        valasz1:"zöldség - gyümölcs maradék, tojáshéj",
        valasz2:"nagy ágak, fatörzsek, diófalevér",
        valasz3:"fém, műanyag, vegyszeres dolgok",
        helyes:valasz1,
        pont : 1,
    },{
        kerd:"6. Mi a komposzt?",
        valasz1:"szerves anyagok lebomlásának a végterméke",
        valasz2:"szerves és szervetlen anyagok lebomlásának a végterméke",
        valasz3:" szervetlen anyagok lebomlásának a végterméke",
        helyes:valasz1,
        pont : 1,
    },{
        kerd:"7. A könyveket....",
        valasz1:"kiveszem a könyvtárból/elcserélem",
        valasz2:"megveszem drágán a boltban",
        valasz3:"elégetem,ha már nem kell",
        helyes:valasz1,
        pont : 1,
    },{
        kerd:"8. Mi az ökologiai lábnyom?",
        valasz1:"Egy mutató, hogy mekkora mértékben éljük föl természetes erőforrásokat.",
        valasz2:"Az amikor sárba lépünk és ott marad a cipő talpának a lenyomata.",
        valasz3:"Az amikor valaki lápnyomokat hagy az úton",
        helyes:valasz1,
        pont : 1,
    },{
        kerd:"9. Az okostelefont...",
        valasz1:"csak 2-3 évente cserélem",
        valasz2:"évente cserélem",
        valasz3:"amikor van egy jobb akkor azt rögtön megveszem",
        helyes:valasz1,
        pont : 1,
    },{
        kerd:"10. Hova tegyük az üveget?",
        valasz1:"A színes üveghulladékok közé dobjuk a kupak nélküli boros-, pezsgős, sörös- és röviditalos színesüvegeket, természetesen átöblítés után, tisztán.",
        valasz2:"csak szimplán kidobjuk",
        valasz3:" A fehérüveg-hulladékok közé csak az olyan elöblített üvegeket dobjuk, amelyek átlátszók. Ilyen például a dunsztosüveg, a tejesüveg, bébiételes üveg stb.",
        helyes:valasz1,
        helyes2:valasz2,
        pont : 2,
    },{
        kerd:"11. Mi a legjobb alternatíva a nejlon zacskókra?",
        valasz1:"vászon szatyrok",
        valasz2:"papír zacskók",
        valasz3:"erősebb műanyagból készült szatyrok",
        helyes:valasz1,
        pont : 1,
    },];
    const felnotteszt = [{
        kerd:"1. Található-e Magyarországon (műanyag) csomagolás mentes bolt?",
        valasz1:"Igen, van",
        valasz2:"Magyaroszágon nincs, de külföldön van",
        valasz3:"Magyaroszágon és külföldön sincs",
        helyes:valasz1,
        pont : 1,
    },{
        kerd:"2. Hogyan dobjuk a szelektívbe a műanyagot?",
        valasz1:"tisztán, kimosva",
        valasz2:"koszosan",
        valasz3:"mindegy",
        helyes:valasz1,
        pont : 1,
    },{
        kerd:"3. Ha bővíteni akarod a ruhatárad és mindegy milyen márkájú akkor...",
        valasz1:"turkálókban vásárolok",
        valasz2:"Online vásárolok",
        valasz3:"noname boltokban vásárolok",
        helyes:valasz1,
        pont : 1,
    },{
        kerd:"4. Mi a legjobb alternatíva a nejlon zacskókra?",
        valasz1:"vászon szatyrok",
        valasz2:"",
        valasz3:"",
        helyes:valasz1,
        pont : 1,
    },{
        kerd:"",
        valasz1:"",
        valasz2:"",
        valasz3:"",
        helyes:valasz1,
        pont : 1,
    },{
        kerd:"",
        valasz1:"",
        valasz2:"",
        valasz3:"",
        helyes:valasz1,
        pont : 1,
    },{
        kerd:"",
        valasz1:"",
        valasz2:"",
        valasz3:"",
        helyes:valasz1,
        pont : 1,
    },{
        kerd:"",
        valasz1:"",
        valasz2:"",
        valasz3:"",
        helyes:valasz1,
        pont : 1,
    },{
        kerd:"",
        valasz1:"",
        valasz2:"",
        valasz3:"",
        helyes:valasz1,
        pont : 1,
    },{
        kerd:"",
        valasz1:"",
        valasz2:"",
        valasz3:"",
        helyes:valasz1,
        pont : 1,
    },{
        kerd:"",
        valasz1:"",
        valasz2:"",
        valasz3:"",
        helyes:valasz1,
        pont : 1,
    },{
        kerd:"",
        valasz1:"",
        valasz2:"",
        valasz3:"",
        helyes:valasz1,
        pont : 1,
    },];
}