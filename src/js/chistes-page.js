import { obtenerChiste } from "./http-provider";

const body = document.querySelector('body');
let btnAddChiste, olList;
let num = 0;


const crearChistesHtml = () =>{
    const html = `
        <h1 class="mt-5">Chistes</h1>
        <hr>

        <button class="btn btn-primary" > Add chiste</button>

        <ol class="mt-3 list-group">
        </ol>
    `;

    const divChistes = document.createElement('div');
    divChistes.classList.add('container');
    divChistes.innerHTML = html;
    
    body.append( divChistes );
};

const eventos = () => {
    olList       = document.querySelector('ol');
    btnAddChiste = document.querySelector('button');

    btnAddChiste.addEventListener( 'click', async() =>{
        btnAddChiste.disabled = true;
        dibujarChiste( await obtenerChiste() );
        btnAddChiste.disabled = false;
    });  
};


const dibujarChiste = ( chiste ) => {
    num++;
    const olItem = document.createElement('li');
    olItem.innerHTML = `${num}.- <b>${ chiste.id }</b>: ${ chiste.value }`;
    olItem.classList.add('list-group-item');

    olList.append( olItem );
};




export const init =() => {
    crearChistesHtml();
    eventos();
}