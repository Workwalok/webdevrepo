const dolpins1= 97;  // const dolpins1= 97;   // const dolpins1= 96;
const dolpins2= 32; // const dolpins2= 112;  // const dolpins2= 108;
const dolpins3= 101; // const dolpins3= 101;  // const dolpins3= 89;
const avgDolpins=(dolpins1+dolpins2+dolpins3)/3;

const koalas1 = 109; // const koalas1 = 109;  // const koalas1 = 88;
const koalas2 = 95;  // const koalas2 = 95;   // const koalas2 = 91;
const koalas3 = 106; // const koalas3 = 123;  // const koalas3 = 110;
const avgKoalas = (koalas1+koalas2+koalas3)/3;

console.log(avgDolpins,avgKoalas);//76.66...,103.333..

if (avgDolpins > avgKoalas && avgDolpins >= 100 ){
          console.log('Dolphins win the trophy.')
}
else if (avgKoalas > avgDolpins && avgKoalas >= 100 ){
          console.log('Koalas win the trophy.')
}
else if(avgDolpins === avgKoalas && avgDolpins >= 100 && avgKoalas >=100){
          console.log('Both win the race.')
}
else{
          console.log('no one win the trophy.')
}