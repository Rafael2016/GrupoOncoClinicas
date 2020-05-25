# GrupoOncoClinicas
Teste Desenvolvedor

Descrição do Desafio
O desafio consiste em usar HTML5, Bootstrap, Javascript, e Jquery para criar um formulário de cadastro de produtos. O formulário será dividido em duas partes, uma para o preenchimento de informações e outra para exibição das informações.
Observação: Não é necessário armazenar as informações em banco de dados.
Requisito 01 – Criar Formulário.
O formulário deve possuir os campos conforme a descrição da tabela abaixo. Os campos de preenchimento automáticos devem ser bloqueados.
Título	Tipo	Preenchimento	Másc.	Descrição
Código Produto	Numérico	Automático	N/A	Código do último produto cadastrado +1
Nome Produto	Texto	Manual	N/A	Nome do produto com limite de 40 caracteres
Data Cadastro	Data	Automático	dd/mm/aaaa	Data do dia do cadastro
Valor de fabricação	Texto	Manual	R$ X.XXX,XX	Valor do produto
Porcentagem de Lucro	Texto	Manual	XX%	Porcentagem de lucro do produto
Valor do produto	Texto	Automático	R$ X.XXX,XX	Valor de fabricação do produto + o valor equivalente a porcentagem de lucro

Requisito 02 – Adicionar Produto
Criar um botão que ao ser clicado valide se as informações do formulário foram preenchidas e adicione o produto em uma tabela. 
Requisito 03 – Tabela de Produtos
Criar uma tabela para receber os produtos cadastrados. A tabela deve conter uma coluna para cada campo do formulário e ser atualizada automaticamente toda vez que um novo produto for cadastrado.
