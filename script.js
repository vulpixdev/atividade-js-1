function mascTelefone()
{
    var tel_formatado = document.getElementById("telefone").value
    if (tel_formatado[0]!="(")
    {
        if(tel_formatado[0]!=undefined)
        {
            document.getElementById("telefone").value="("+tel_formatado[0]
        }
    }

    if (tel_formatado[3]!=")")
    {
        if(tel_formatado[3]!=undefined)
        {
            document.getElementById("telefone").value=tel_formatado.slice(0,3)+") "+tel_formatado[3]
        }
    }

    if (tel_formatado[6]!=" "){
        if(tel_formatado[6]!=undefined){
            document.getElementById("telefone").value=tel_formatado.slice(0,6)+" "+tel_formatado[6]
        }
    }

    if (tel_formatado[11]!="-")
    {
        if(tel_formatado[11]!=undefined)
        {
            document.getElementById("telefone").value=tel_formatado.slice(0,11)+"-"+tel_formatado[11]
        }
    }
}

function mascCnpj()
{
    var cnpj_formatado = document.getElementById("cnpj").value
    if(cnj_formatado[2]!="."){
        if(cnpj_formatado[2]!=undefined){
            document.getElementById("cnpj").value=cnpj_formatado.slice(0,2)+"."+cnpj_formatado[2]
        }
    }

    if(cnj_formatado[6]!="."){
        if(cnpj_formatado[6]!=undefined){
            document.getElementById("cnpj").value=cnpj_formatado.slice(0,6)+"."+cnpj_formatado[6]
        }
    }

    if(cnpj_formatado[9]!="/"){
        if (cnpj_formatado[9]!=undefined) {
            document.getElementById("cnpj").value=cnpj_formatado.slice(0,9)+"/0001-"+cnpj_formatado[9]
        }
    }
}

function enivarDados (){
    const dados = {
        nome: document.getElementById("nome").value,
        endereço: document.getElementById("endereco").value,
        cep: document.getElementById("cep").value,
        cpf: document.getElementById("cpf").value,
        telefone: document.getElementById("telefone").value,
        cnpj: document.getElementById("cnpj").value,
        código: document.getElementById("codigo").value
    }

    console.log(dados);

    sessionStorage(setItem("dado", JSON.stringify(dados)))
}

function pegarDados(){
    sessionStorage(getItem("dado", JSON.parse(dados)))

    document.getElementById("nome").innerText = "nome: " + dado.nome;
}