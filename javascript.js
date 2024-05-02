document.getElementById("gravarReserva").addEventListener("click", function(){
    var nomeDoProrietario = document.getElementById("nomeDoProrietario").value;
    var apartamento = document.getElementById("apartamento").value;
    var bloco = document.getElementById("bloco").value;
    var placaVeiculo = document.getElementById("placaVeiculo").value;
    var marcaVeiculo = document.getElementById("marcaVeiculo").value;
    var modeloVeiculo = document.getElementById("modeloVeiculo").value;
    var corVeiculo = document.getElementById("corVeiculo").value;
    var numeroVaga = document.getElementById("numeroVaga").value;

    var form = document.getElementById("formulario");

if (nomeDoProrietario === "" || apartamento === "" || bloco === "" || placaVeiculo === "" || marcaVeiculo === "" || modeloVeiculo === "" || corVeiculo === "" || numeroVaga === ""){
    alert ("Preencha todos os campos do formulário");
} else {
    alert ("Dados enviados com sucesso");
    event.preventDefault();
    console.log ("Nome do Prorietario: " + nomeDoProrietario + "," + "Apartamento: " + apartamento + "," + "bloco: " + bloco + "," + "Placa do Veículo: " + placaVeiculo + "," + "Marca do Veiculo: " + marcaVeiculo + "," + "Modelo do Veiculo: " + modeloVeiculo + "," + "Cor do Veiculo: " + corVeiculo + "," + "Número da Vaga: " + numeroVaga);
    form.reset();
};
})

function listaDeVagas () {
    window.location.href = 'vagas.html';
}
