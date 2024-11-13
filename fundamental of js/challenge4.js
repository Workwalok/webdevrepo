const bill = 275;
(bill < 50)? console.log(`the bill is ${bill}`):(bill >= 50 && bill <= 300)? console.log(`The bill was ${bill}, the tip was ${(bill*15)/100} ,and the total value ${bill +(bill*15)/100 }`):
console.log(`The bill was ${bill}, the tip was ${bill*0.2} ,and the total value ${bill +(bill*0.2)}`);

if(bill < 50){
          console.log(`The bill is ${bill}`);
}
else if(bill >= 50 && bill <= 300){
          console.log(`The bill was ${bill}, the tip was ${(bill*15)/100} ,and the total value ${bill +(bill*15)/100 }`);
}
else{
          console.log(`The bill was ${bill}, the tip was ${bill*0.2} ,and the total value ${bill +(bill*0.2)}`);
}