$('#btAqui').click(
    function(){
    
    //     cadastro =
    // {
    //     'nome':document.getElementById('InputNome').value,  
    //     'endereco':document.getElementById('InputEndereco').value,
    //     'email':document.getElementById('InputEmail').value
    // }
        
    //     const nome = document.getElementById('InputNome').value;
    //     alert(' Meu nome é: ' +cadastro.nome + ' sou de ' + cadastro.endereco);

    calculo =
        {
         'a' :document.getElementById('inputA').value,
         'b' :document.getElementById('inputB').value
        }

    alert( parseInt(calculo.a) + parseInt(calculo.b));
    

    }
)