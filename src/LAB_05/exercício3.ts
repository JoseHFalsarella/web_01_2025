function dobrarNumeros(nums: number[]): number[] {
    const resultado: number[] = [];
    for (let i = 0; i < nums.length; i++) {
      resultado.push(nums[i] * 2);
    }
    return resultado;
}
  
const numeros = [1, 2, 3, 4, 5];
const resultado = dobrarNumeros(numeros);
console.log(resultado);
  