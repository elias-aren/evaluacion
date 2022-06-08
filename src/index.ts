function mostrarMaximo(vector: number[]): void{
let aux :number=0;
let max :number=0;
for(let i:number =0;i< vector[i];i++){
  if(vector[i]>aux){
    aux=vector[i];
  }
  max= aux;
  }
  console.log(max);
  }
let v1: number[]= new Array(32558,36165,34240,39273,34360,21347,20869,21493,23062,31908,30369,30652,);
let v2: number[]= new Array(27520,31480,24053,34823,32942,38477,23756,21413,26699,22045,25625,26855);
let v3: number[]= new Array(20568,33473,34300,20598,33955,24040,39173,25542,25105,26759,29790,36218,);
let v4: number[]= new Array(27243,38774,21246,30691,24542,39771,21807,31641,20850,29837,37182,28006);
let v5: number[]= new Array(23334,32687,25217,26844,27033,35244,25702,25781,35525,34874,38842,20562);
let vendedor: number =Number(prompt("ingrese vendedor"));
switch (vendedor){
case 1:
  console.log("Camila");
  mostrarMaximo(v1);
  break;
  case 2:
  console.log("Franco");
  mostrarMaximo(v2);
  break;
  case 3:
  console.log("Sofia");
  mostrarMaximo(v3);
  break;
  case 4:
  console.log("Matias");
  mostrarMaximo(v4);
  break;
  case 5:
  console.log("Agustina");
  mostrarMaximo(v5);
  break;
   }
  