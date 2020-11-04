
var aleat = 10;
function gerar() {
 
const cpf = document.getElementById("cpf"); 

function gerarCpf() {
  const num1 = aleatorio(); 
  const num2 = aleatorio();
  const num3 = aleatorio();

  const dig1 = dig(num1, num2, num3); 
  const dig2 = dig(num1, num2, num3, dig1); 


  cpf.innerHTML +=`${num1}.${num2}.${num3}-${dig1}${dig2}`+"<br>";
}


function dig(n1, n2, n3, n4) { 
  
 
  let nums = n1.split("").concat(n2.split(""), n3.split(""));
  
  if (n4){ 
    nums[9] = n4;
  }
  
  let x = 0;
   
  //o j é também iniciado e incrementado no for para aproveitar a própria sintaxe dele
  //o i tem inicios diferentes consoante é 1º ou 2º digito verificador
  for (let i = (n4 ? 11:10), j = 0; i >= 2; i--, j++) {
    x += parseInt(nums[j]) * i;
  }
  
  const y = x % 11;
  //ternário aqui pois ambos os retornos são simples e continua legivel
  return y < 2 ? 0 : 11 - y; 
}

function aleatorio() {
//   const aleat = Math.floor(Math.random() * 99);
//  //o preenchimento dos zeros à esquerda é mais facil com a função padStart da string
//   return ("" + aleat).padStart(3, '0'); 


  aleat += 1;
  return ("" + aleat).padStart(3, '0'); 



}

gerarCpf();
}