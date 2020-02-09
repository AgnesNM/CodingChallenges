function bonAppetit(bill, k, b) {
    if (k>=0){
        bill.splice(k,1);

       let total = bill.reduce((a,b) => {
       return a+b},0);

       let annesBill = total/2;  

       if (b === annesBill) {
       console.log('Bon Appetit');
       } 

       else if (b > annesBill) {
       console.log(b - annesBill);
       }    
   }
   else {
       let totalBill = bill.reduce((a,b) => {
       return a+b},0);

        let annesHalfBill = totalBill/2;
        console.log('Bon Appetit');
   }

  
}