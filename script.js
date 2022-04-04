let verificadora;

document.querySelector(".language_options").style.display="none"
function Language(){

    if(document.querySelector(".language_options").style.display =="none"){
        document.querySelector(".language_options").style.display="block"
    }
    else{
        document.querySelector(".language_options").style.display="none"
    }
}

document.querySelector(".netflix").style.display="none"
function Netflix(){
    verificadora = "netflix";
    Fechar(verificadora)
    if(document.querySelector(".netflix").style.display =="none"){
        document.querySelector(".netflix").style.display="block"
    }
    else{
        document.querySelector(".netflix").style.display="none"
    }
}


document.querySelector(".custo").style.display="none"
function Custo(){
    verificadora="custo"
    Fechar(verificadora)
    if(document.querySelector(".custo").style.display =="none"){
        document.querySelector(".custo").style.display="block"
    }
    else{
        document.querySelector(".custo").style.display="none"
    }
}


document.querySelector(".onde").style.display="none"
function Onde(){
    verificadora = "onde"
    Fechar(verificadora)
    if(document.querySelector(".onde").style.display =="none"){
        document.querySelector(".onde").style.display="block"
    }
    else{
        document.querySelector(".onde").style.display="none"
    }
}


document.querySelector(".cancelar").style.display="none"
function Cancelar(){
    verificadora="cancelar"
    Fechar(verificadora)
    if(document.querySelector(".cancelar").style.display =="none"){
        document.querySelector(".cancelar").style.display="block"
    }
    else{
        document.querySelector(".cancelar").style.display="none"
    }
}



document.querySelector(".assistir").style.display="none"
function Assistir(){
    verificadora="assistir"
    Fechar(verificadora)
    if(document.querySelector(".assistir").style.display =="none"){
        document.querySelector(".assistir").style.display="block"
    }
    else{
        document.querySelector(".assistir").style.display="none"
    }
}

document.querySelector(".criancas").style.display="none"
function Criancas(){
    verificadora="criancas"
    Fechar(verificadora)
    if(document.querySelector(".criancas").style.display =="none"){
        document.querySelector(".criancas").style.display="block"
    }
    else{
        document.querySelector(".criancas").style.display="none"
    }
}

function Fechar(ver){
    if(ver == "netflix"){
        document.querySelector(".custo").style.display="none";
        document.querySelector(".onde").style.display="none";
        document.querySelector(".cancelar").style.display="none";
        document.querySelector(".assistir").style.display="none";
        document.querySelector(".criancas").style.display="none";
    }
    else if(ver == "custo"){
        document.querySelector(".netflix").style.display="none";
        document.querySelector(".onde").style.display="none";
        document.querySelector(".cancelar").style.display="none";
        document.querySelector(".assistir").style.display="none";
        document.querySelector(".criancas").style.display="none";
    }
    else if(ver == "onde"){
        document.querySelector(".netflix").style.display="none";
        document.querySelector(".custo").style.display="none";
        document.querySelector(".cancelar").style.display="none";
        document.querySelector(".assistir").style.display="none";
        document.querySelector(".criancas").style.display="none";
    }
    else if(ver == "cancelar"){
        document.querySelector(".netflix").style.display="none";
        document.querySelector(".custo").style.display="none";
        document.querySelector(".onde").style.display="none";
        document.querySelector(".assistir").style.display="none";
        document.querySelector(".criancas").style.display="none";
    }
    else if(ver == "assistir"){
        document.querySelector(".netflix").style.display="none";
        document.querySelector(".custo").style.display="none";
        document.querySelector(".onde").style.display="none";
        document.querySelector(".cancelar").style.display="none";
        document.querySelector(".criancas").style.display="none";
    }
    else{
        document.querySelector(".netflix").style.display="none";
        document.querySelector(".custo").style.display="none";
        document.querySelector(".onde").style.display="none";
        document.querySelector(".cancelar").style.display="none";
        document.querySelector(".assistir").style.display="none";
    }

}

document.querySelector(".footer_language_options").style.display="none"
function LanguageFooter(){

    if(document.querySelector(".footer_language_options").style.display =="none"){
        document.querySelector(".footer_language_options").style.display="block"
    }
    else{
        document.querySelector(".footer_language_options").style.display="none"
    }
}