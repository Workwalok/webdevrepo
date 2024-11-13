const calcAverage = (a,b,c) => (a+b+c)/3;
//console.log(calcAverage(3,4,5));

//test1
const scoreDolphins = calcAverage(4,2,71);
const scoreKoalas = calcAverage(65,54,49);


const checkWinner = function(avgDolphins, avgKoalas){
          if(avgDolphins>=2*avgKoalas){
                    console.log("Dolphin win")
          }
          else if(avgKoalas>=2*avgDolphins){
                    console.log("Koalas win")
          }
          else{
                    console.log("No one win");
          }
}

checkWinner(scoreDolphins,scoreKoalas);
checkWinner(555,55);
