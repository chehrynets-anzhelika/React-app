export const getOrderList = (arr1, arr2) => {
    let newArr = []
       arr1.forEach(element => {
       let cur = arr2.find(({code}) => {
          return code === element;
           });
          newArr.push(cur);
       });
       
   let summ = newArr.reduce((acc, {price}) => acc + +price, 0);
   let names = newArr.reduce((acc, {name}) => acc + name + ", ", "");
   let finallyStr = `Your order: ${names} Summ your order: ${summ} UAN`;
   return finallyStr;
}