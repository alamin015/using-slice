let products = [
    {name: "alamin",price: 303},
    {name: "fahim",price: 7}
];
const totalCost = (products) => {
    let sum=0;
  for(let item of products){
    sum += item.price;
  }
      return sum;
  
  };

  console.log(totalCost(products))