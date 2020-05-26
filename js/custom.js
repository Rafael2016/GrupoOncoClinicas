$(function(){

	//LOAD 
	$(document).ready(function() {
		
		/**
		 * CÓDIGO PRODUTO
		 */

		 if($(".box-produto").length <= 0){

		 	$("#codProduto").val(1);

		 }



		/**
		 * DATAS
		 */
		const date = new Date();
		const   dia  = ("0" + date.getDate()).slice(-2);
		const   mes  = ("0" + (date.getMonth() + 1)).slice(-2);
		const   ano  = date.getFullYear();

		$("#dtCadastro").val(ano+"-"+mes+"-"+dia);


		/**
		 * TOTAL PRODUTO
		 */

		 $('#vlrFabrica').change(function(){ 

		 	$("#vlrFabrica").val(formatMoney(this.value));

		 });


		 $('#percentualLucro').change(function(){

			var aux         = $("#vlrFabrica").val();
				aux         = aux.substring(3, aux.length);

			var vlrFabrica  = parseFloat(aux);
			var lucroPercent = parseFloat($("#percentualLucro").val());

			var lucro        = (vlrFabrica * lucroPercent) / 100;
			var vlrTotal     = vlrFabrica + lucro;

			$("#vlrProduto").val(formatMoney(vlrTotal)); 
			
		 });	

		/**
		 * MASCARAS
		 */ 		
		  $("#vlrFabrica").mask("000.000.000.000.000,00", {reverse: true});
		  $("#vlrProduto").mask("000.000.000.000.000,00", {reverse: true});
		 


	});



});

/**
 * @FUNCTION FORMAT MONEY
 */

 function formatMoney(mone) {

 	var n = parseFloat(mone);

	return "R$ " + n.toFixed(2).replace('.', ',').replace(/(\d)(?=(\d{3})+\,)/g, "$1.");
}
