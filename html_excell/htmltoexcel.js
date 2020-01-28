
$(document).ready(function(){
    $(".export-btn").click(function(){  
      $("#TabelaClientes").tableHTMLExport({
       type:'txt',
       filename:'CadastroDeClientes.txt',
     });
   });
 });