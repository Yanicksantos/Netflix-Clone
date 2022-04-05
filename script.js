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

document.querySelector(".netflix1").style.display="none"
function Netflix(){
    verificadora = "netflix1";
    Fechar(verificadora)
    if(document.querySelector(".netflix1").style.display =="none"){
        document.querySelector("#netflix_img").src="img/outline_clear_white_24dp.png"
        document.querySelector(".netflix1").style.display="block"
        document.querySelector(".netflix2").style.display="block"
    }
    else{
        document.querySelector("#netflix_img").src="img/outline_add_white_24dp.png"
        document.querySelector(".netflix1").style.display="none"
        document.querySelector(".netflix2").style.display="none"
    }
}


document.querySelector(".custo").style.display="none"
function Custo(){
    verificadora="custo"
    Fechar(verificadora)
    if(document.querySelector(".custo").style.display =="none"){
        document.querySelector("#custo_img").src="img/outline_clear_white_24dp.png"
        document.querySelector(".custo").style.display="block"
    }
    else{
        document.querySelector("#custo_img").src="img/outline_add_white_24dp.png"
        document.querySelector(".custo").style.display="none"
    }
}


document.querySelector(".onde1").style.display="none"
function Onde(){
    verificadora = "onde1"
    Fechar(verificadora)
    if(document.querySelector(".onde1").style.display =="none"){
        document.querySelector("#onde_img").src="img/outline_clear_white_24dp.png"
        document.querySelector(".onde1").style.display="block"
        document.querySelector(".onde2").style.display="block"
    }
    else{
        document.querySelector("#onde_img").src="img/outline_add_white_24dp.png"
        document.querySelector(".onde1").style.display="none"
        document.querySelector(".onde2").style.display="none"
    }
}


document.querySelector(".cancelar").style.display="none"
function Cancelar(){
    verificadora="cancelar"
    Fechar(verificadora)
    if(document.querySelector(".cancelar").style.display =="none"){
        document.querySelector("#cancelar_img").src="img/outline_clear_white_24dp.png"
        document.querySelector(".cancelar").style.display="block"
    }
    else{
        document.querySelector("#cancelar_img").src="img/outline_add_white_24dp.png"
        document.querySelector(".cancelar").style.display="none"
    }
}



document.querySelector(".assistir").style.display="none"
function Assistir(){
    verificadora="assistir"
    Fechar(verificadora)
    if(document.querySelector(".assistir").style.display =="none"){
        document.querySelector("#assistir_img").src="img/outline_clear_white_24dp.png"
        document.querySelector(".assistir").style.display="block"
    }
    else{
        document.querySelector("#assistir_img").src="img/outline_add_white_24dp.png"
        document.querySelector(".assistir").style.display="none"
    }
}

document.querySelector(".criancas1").style.display="none"
function Criancas(){
    verificadora="criancas1"
    Fechar(verificadora)
    if(document.querySelector(".criancas1").style.display =="none"){
        document.querySelector("#criancas_img").src="img/outline_clear_white_24dp.png"
        document.querySelector(".criancas1").style.display="block"
        document.querySelector(".criancas2").style.display="block"
    }
    else{
        document.querySelector("#criancas_img").src="img/outline_add_white_24dp.png"
        document.querySelector(".criancas1").style.display="none"
        document.querySelector(".criancas2").style.display="none"
    }
}

function Fechar(ver){
    if(ver == "netflix1"){
        document.querySelector(".custo").style.display="none";
        document.querySelector(".onde1").style.display="none";
        document.querySelector(".onde2").style.display="none";
        document.querySelector(".cancelar").style.display="none";
        document.querySelector(".assistir").style.display="none";
        document.querySelector(".criancas1").style.display="none";
        document.querySelector(".criancas2").style.display="none"

        document.querySelector("#custo_img").src="img/outline_add_white_24dp.png"
        document.querySelector("#onde_img").src="img/outline_add_white_24dp.png"
        document.querySelector("#cancelar_img").src="img/outline_add_white_24dp.png"
        document.querySelector("#assistir_img").src="img/outline_add_white_24dp.png"
        document.querySelector("#criancas_img").src="img/outline_add_white_24dp.png"
    }
    else if(ver == "custo"){
        document.querySelector(".netflix1").style.display="none";
        document.querySelector(".netflix2").style.display="none";
        document.querySelector(".onde1").style.display="none";
        document.querySelector(".onde2").style.display="none"
        document.querySelector(".cancelar").style.display="none";
        document.querySelector(".assistir").style.display="none";
        document.querySelector(".criancas1").style.display="none";
        document.querySelector(".criancas2").style.display="none"

        document.querySelector("#netflix_img").src="img/outline_add_white_24dp.png"
        document.querySelector("#onde_img").src="img/outline_add_white_24dp.png"
        document.querySelector("#cancelar_img").src="img/outline_add_white_24dp.png"
        document.querySelector("#assistir_img").src="img/outline_add_white_24dp.png"
        document.querySelector("#criancas_img").src="img/outline_add_white_24dp.png"
    }
    else if(ver == "onde1"){
        document.querySelector(".netflix1").style.display="none";
        document.querySelector(".netflix2").style.display="none";
        document.querySelector(".custo").style.display="none";
        document.querySelector(".cancelar").style.display="none";
        document.querySelector(".assistir").style.display="none";
        document.querySelector(".criancas1").style.display="none";
        document.querySelector(".criancas2").style.display="none"

        document.querySelector("#netflix_img").src="img/outline_add_white_24dp.png"
        document.querySelector("#custo_img").src="img/outline_add_white_24dp.png"
        document.querySelector("#cancelar_img").src="img/outline_add_white_24dp.png"
        document.querySelector("#assistir_img").src="img/outline_add_white_24dp.png"
        document.querySelector("#criancas_img").src="img/outline_add_white_24dp.png"
    }
    else if(ver == "cancelar"){
        document.querySelector(".netflix1").style.display="none";
        document.querySelector(".netflix2").style.display="none";
        document.querySelector(".custo").style.display="none";
        document.querySelector(".onde1").style.display="none";
        document.querySelector(".onde2").style.display="none";
        document.querySelector(".assistir").style.display="none";
        document.querySelector(".criancas1").style.display="none";
        document.querySelector(".criancas2").style.display="none"

        document.querySelector("#netflix_img").src="img/outline_add_white_24dp.png"
        document.querySelector("#custo_img").src="img/outline_add_white_24dp.png"
        document.querySelector("#onde_img").src="img/outline_add_white_24dp.png"
        document.querySelector("#assistir_img").src="img/outline_add_white_24dp.png"
        document.querySelector("#criancas_img").src="img/outline_add_white_24dp.png"
    }
    else if(ver == "assistir"){
        document.querySelector(".netflix1").style.display="none";
        document.querySelector(".netflix2").style.display="none";
        document.querySelector(".custo").style.display="none";
        document.querySelector(".onde1").style.display="none";
        document.querySelector(".onde2").style.display="none";
        document.querySelector(".cancelar").style.display="none";
        document.querySelector(".criancas1").style.display="none";
        document.querySelector(".criancas2").style.display="none"

        document.querySelector("#netflix_img").src="img/outline_add_white_24dp.png"
        document.querySelector("#custo_img").src="img/outline_add_white_24dp.png"
        document.querySelector("#onde_img").src="img/outline_add_white_24dp.png"
        document.querySelector("#cancelar_img").src="img/outline_add_white_24dp.png"
        document.querySelector("#criancas_img").src="img/outline_add_white_24dp.png"
    }
    else{
        document.querySelector(".netflix1").style.display="none";
        document.querySelector(".netflix2").style.display="none";
        document.querySelector(".custo").style.display="none";
        document.querySelector(".onde1").style.display="none";
        document.querySelector(".onde2").style.display="none";
        document.querySelector(".cancelar").style.display="none";
        document.querySelector(".assistir").style.display="none";

        document.querySelector("#netflix_img").src="img/outline_add_white_24dp.png"
        document.querySelector("#custo_img").src="img/outline_add_white_24dp.png"
        document.querySelector("#onde_img").src="img/outline_add_white_24dp.png"
        document.querySelector("#cancelar_img").src="img/outline_add_white_24dp.png"
        document.querySelector("#assistir_img").src="img/outline_add_white_24dp.png"
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