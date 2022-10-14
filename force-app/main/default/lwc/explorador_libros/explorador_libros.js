import { LightningElement } from 'lwc';

export default class Explorador_libros extends LightningElement {
    libros = {
        nombre: "Las aventuras de Tom Sawyer",
        editorial: "Alianza",
        portada_url: "https://www.alianzaeditorial.es/imagenes/libros/grande/9788491042686-las-aventuras-de-tom-sawyer.jpg",
        sinopsis: "En una población a orillas del río Mississippi vive Tom Sawyer, un muchacho travieso, experto en saltarse las normas y escabullirse de la escuela para embarcarse en las aventuras más peligrosas y disparatadas."
    };
}