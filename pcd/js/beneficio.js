function formatarMilhar(numero) {
    // Remove caracteres não numéricos
    var num = numero.replace(/\D/g, '');
    // Adiciona separadores de milhar
    return num.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

function calcularCusto() {
    const input = document.getElementById('numFuncionarios');
    let numFunc = parseInt(input.value.replace(/\./g, ''), 10); // Remove os pontos antes de converter para número

    // Verificar o valor do input
    if (isNaN(numFunc) || numFunc < 1) {
        return;
    }

    let custoPorFuncionario;
    if (numFunc <= 100) {
        custoPorFuncionario = 30;
    } else if (numFunc <= 250) {
        custoPorFuncionario = 20;
    } else if (numFunc <= 500) {
        custoPorFuncionario = 15;
    } else if (numFunc <= 2500) {
        custoPorFuncionario = 10;
    } else if (numFunc <= 5000) {
        custoPorFuncionario = 5;
    } else {
        custoPorFuncionario = 3;
    }

    // Calcula o custo total
    const custoTotal = numFunc * custoPorFuncionario;

    // Atualiza os campos da tabela com os valores calculados
    document.querySelector('.custoPorFuncionario').innerText = formatarMilhar(custoPorFuncionario.toString()) + ' / mês';
    document.querySelectorAll('.result')[0].innerText = formatarMilhar(custoTotal.toString()) + ' / mês';
    document.querySelectorAll('.result')[1].innerText = formatarMilhar(custoTotal.toString()) + ' / mês'; 
}

document.addEventListener('DOMContentLoaded', function() {
    const input = document.getElementById('numFuncionarios');

    // Adiciona um evento de focus para limpar o valor do campo
    input.addEventListener('focus', function() {
        this.value = '';
    });

    // Adiciona um evento de input para formatar o valor em tempo real
    input.addEventListener('input', function() {
        this.value = formatarMilhar(this.value);
    });

}); // Corrigido o parêntese ausente