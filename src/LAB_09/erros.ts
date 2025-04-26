function calcularMedia(notas: number[]): number {
    try {
      let soma = 0;
      for (let i = 0; i < notas.length; i++) {
        soma += notas[i];
      }
  
      if (notas.length === 0) throw new Error("Array de notas está vazio");
  
      return soma / notas.length;
    } catch (erro) {
      console.error("Erro ao calcular a média:", erro);
      return NaN;
    }
  }

function cadastrarUsuario(nome: string, idade: number) {
    if(nome.length === 0 || idade < 0) throw new Error("Dados inválidos");
    console.log("Usuário cadastrado!");
}

function executarOperacao() {
    try {
        throw new Error("Erro genérico");
    } catch(erro: unknown) {
        console.log("Erro: ", erro as Error);
    }
}
  