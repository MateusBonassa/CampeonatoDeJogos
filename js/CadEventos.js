
function enviardados() 
{
    var nomeE = document.querySelector("#nomeE");
    var tipoJ = document.querySelector("#tipoJ"); 
    var modalidade = document.querySelector("#modalidade");
    var premio = document.querySelector("#premio");  
    var time = document.querySelector("#time"); 
    var time = document.querySelector("#nomeEmpresa"); 
    var time = document.querySelector("#req"); 

    var correto = true;
    if(nomeE.value.length < 5) //validador de nome Evento
    {  nomeE.value = "";
        nomeE.setAttribute('placeholder','Nome inválido!');
        nomeE.style.border = "solid 1px red";
        auxPonteiro=1;
        correto = false;
    }
    else 
    {
        nomeE.style.border = "none";
    }
    if(tipoJ.value.length < 2) //validador de tipo de jogo
    {   tipoJ.value = "";
        tipoJ.setAttribute('placeholder','Nome inválido!');
        tipoJ.style.border = "solid 1px red";
        auxPonteiro=1;
        correto = false;
    }
    else 
    {
        tipoJ.style.border = "none";
    }
    if(modalidade.value.length < 5)  //validador de modalidade
    {  modalidade.value = "";
        modalidade.setAttribute('placeholder','modalidade invalida!');
        modalidade.style.border = "solid 1px red";
        auxPonteiro=1;
        correto = false;
    }
    else 
    {
        modalidade.style.border = "none";
    }
    if(premio.value.length < 5) //validador de premio
    {  premio.value = "";
        premio.setAttribute('placeholder','Nome invalido!');
        premio.style.border = "solid 1px red";
        auxPonteiro=1;
        correto = false;
    }
    else 
    {
        premio.style.border = "none";
    }
    if(nomeEmpresa.value.length < 5) //validador de nome empresa
    {  nomeEmpresa.value = "";
        nomeEmpresa.setAttribute('placeholder','Nome da empresa invalido!');
        nomeEmpresa.style.border = "solid 1px red";
        auxPonteiro=1;
        correto = false;
    }
    else 
    {
        nomeEmpresa.style.border = "none";
    }
    if(req.value.length < 5) //validador de requisitos
    {  req.value = "";
        req.setAttribute('placeholder','requisitos invalidos!');
        req.style.border = "solid 1px red";
        auxPonteiro=1;
        correto = false;
    }
    else 
    {
        req.style.border = "none";
    }

}