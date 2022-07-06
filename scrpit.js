
// SISTEMA DE CALCULO E TODA A LOGICA
function calculo(){
 //=================================PRODUTO1=======================   
    //nome do produto
    let nomep=document.getElementById('nomeP');
    let nomep01=String(nomep.value);
    //parte de data de entrega 
    let data=document.getElementById('data');
    let data01=String(data.value);
    //unidades
    let unidadeP=document.getElementById('unidadeP');
    let unidadeP01=Number(unidadeP.value);
    //VALOR PAGO POR NONATA 
    let valorF=document.getElementById('valorF');
    let valorFP01=Number(valorF.value);
    //VALOR PAGO NO TOTAL
    let valorTP=document.getElementById('valorTP');
    let valorTP01=Number(valorTP.value);
    

    //=================================PRODUTO2=======================   
    //nome do produto
    let nomep2=document.getElementById('nomeP2');
    let nomep02=String(nomep2.value);
    //parte de data de entrega 
    let data2=document.getElementById('data2');
    let data02=String(data2.value);
    //unidades
    let unidadeP2=document.getElementById('unidadeP2');
    let unidadeP02=Number(unidadeP2.value);
    //VALOR PAGO POR NONATA 
    let valorF2=document.getElementById('valorF2');
    let valorFP02=Number(valorF2.value);
    //VALOR PAGO NO TOTAL
    let valorTP2=document.getElementById('valorTP2');
    let valorTP02=Number(valorTP2.value);


    //=================================PRODUTO3=======================   
    //nome do produto
    let nomep3=document.getElementById('nomeP3');
    let nomep03=String(nomep3.value);
    //parte de data de entrega 
    let data3=document.getElementById('data3');
    let data03=String(data3.value);
    //unidades
    let unidadeP3=document.getElementById('unidadeP3');
    let unidadeP03=Number(unidadeP3.value);
    //VALOR PAGO POR NONATA 
    let valorF3=document.getElementById('valorF3');
    let valorFP03=Number(valorF3.value);
    //VALOR PAGO NO TOTAL
    let valorTP3=document.getElementById('valorTP3');
    let valorTP03=Number(valorTP3.value);

    let frete=document.getElementById('frete');
    let frete0=Number(frete.value);
    // calculo de valor do frete por unidade
    frete00=frete0/(unidadeP01+unidadeP02+unidadeP03)
    //===========calculo de protos
    let calculop1=(valorTP01/unidadeP01)+valorFP01+frete00
    let calculop2=(valorTP02/unidadeP02)+valorFP02+frete00
    let calculop3=(valorTP03/unidadeP03)+valorFP03+frete00

    produtoT.innerHTML=` <div class="produton">
    <table>
     <tr><th>Nome do produto</th><th>${nomep01}</th></tr>
     <tr><th>Unidades Pedidas</th><th>${unidadeP01}</th></tr>
     <tr><th>Valor Pago Por Nota Fisacal</th><th>${valorFP01.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</th></tr>
     <tr><th>Data Presvista Do Pedido</th><th>${data01}</th></tr>
     <tr><th>Valor Pago Por Unidade</th><th>${calculop1.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</th></tr>
    </table></div>
    
    <div class="produton">
    <table>
     <tr><th>Nome do produto</th><th>${nomep02}</th></tr>
     <tr><th>Unidades Pedidas</th><th>${unidadeP02}</th></tr>
     <tr><th>Valor Pago Por Nota Fisacal</th><th>${valorFP02.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</th></tr>
     <tr><th>Data Presvista Do Pedido</th><th>${data02}</th></tr>
     <tr><th>Valor Pago Por Unidade</th><th>${calculop2.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</th></tr>
    </table></div>

    <div class="produton">
    <table>
     <tr><th>Nome do produto</th><th>${nomep03}</th></tr>
     <tr><th>Unidades Pedidas</th><th>${unidadeP03}</th></tr>
     <tr><th>Valor Pago Por Nota Fisacal</th><th>${valorFP03.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</th></tr>
     <tr><th>Data Presvista Do Pedido</th><th>${data03}</th></tr>
     <tr><th>Valor Pago Por Unidade</th><th>${calculop3.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</th></tr>
    </table></div>
    
    `
  // console.log(valorFP01)
    



}