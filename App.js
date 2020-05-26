/**
 *@Class Produto
 */

class Produto 
{
    constructor(codProduto, nome, dtCadastro, vlrFabrica,percentualLucro,vlrProduto) {

        const date  = new Date(dtCadastro);

        this.codProduto         = codProduto;
        this.nome               = nome;
        this.dtCadastro         = date.toLocaleDateString();
        this.vlrFabrica         = vlrFabrica;
        this.percentualLucro    = percentualLucro;
        this.vlrProduto         = vlrProduto; 
    }
}


class UI 
{
    addProduto(produto) 
    {
        const produtoList = document.getElementById('product-list');
        const element = document.createElement('div');

        element.innerHTML = `
        <div class="card mb-4">
        <div class="card-body box-produto">
        <strong>Código:</strong> ${produto.codProduto} |
        <strong>Nome:</strong> ${produto.nome}  |
        <strong>dt.Cadastro</strong>: ${produto.dtCadastro} <p>
        <strong>Valor de Fábrica:</strong> ${produto.vlrFabrica} |
        <strong>Lucro:</strong> ${produto.percentualLucro} % <p>
        <strong>Valor Produto:</strong>: ${produto.vlrProduto}   
        <a href="#" class="btn btn-danger" name="delete">Delete</a>
        </div>
        </div>
        `;

        produtoList.appendChild(element);
    }

    resetForm() 
    {
        $("#nome").val("");
        $("#vlrFabrica").val("");
        $("#percentualLucro").val("");
        $("#vlrProduto").val("");
    }

    deleteProduct(element) 
    {
        if (element.name === 'delete') {
            element.parentElement.parentElement.remove();
            this.showMessage('Produto deletado com sucesso...', 'success');
        }
    }

    showMessage(message, cssClass) {

        const div = document.createElement('div');
        div.className = `alert alert-${cssClass} mt-2`;
        div.appendChild(document.createTextNode(message));
        
        const container = document.querySelector('.container');
        const app = document.querySelector('#App');
      
        container.insertBefore(div, app);
        
        setTimeout(function () {
            document.querySelector('.alert').remove();
        }, 5000);
    }

    incrementCodProduto(){

        var i = parseInt($("#codProduto").val());

        i     = i  + 1;

        $("#codProduto").val(i);

    }
}

/**
 * EVENTO SUBMESSAO FORMULÁRIO ADD
 */
document.getElementById('product-form')
.addEventListener('submit', function (e){


    const codProduto = $("#codProduto").val(),
    nome             = $("#nome").val(),
    dtCadastro       = $("#dtCadastro").val(),
    vlrFabrica       = $("#vlrFabrica").val(),
    percentualLucro  = $("#percentualLucro").val(),
    vlrProduto       = $("#vlrProduto").val();

    const produto  =  new Produto( codProduto, nome, dtCadastro, vlrFabrica, percentualLucro, vlrProduto);
    const ui       = new UI();

    if (codProduto === '' || nome === '' || dtCadastro === '' || vlrFabrica === '' || percentualLucro ==='' || vlrProduto === '') {
            
        ui.showMessage('Necessário preencher todos os campos', 'danger');
        document.documentElement.scrollTop = 0;
        
        e.preventDefault();
       
    }else{

        ui.addProduto(produto);
        ui.showMessage('Produto cadastrado com sucesso...', 'success');
        ui.resetForm();
        ui.incrementCodProduto();
        document.documentElement.scrollTop = 0;

        e.preventDefault();
    }
});

/**
 * EVENTO DELETE REGISTRO
 */
document.getElementById('product-list')
.addEventListener('click', function (e) {
    const ui = new UI();
    ui.deleteProduct(e.target);
    e.preventDefault();
});