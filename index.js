


// 1- اجمالى الميراث
let inheritance = prompt("enter the inheritance amount");

// معرف هل الزوجه عايشه او لا 
let isAlive = confirm("is the wife alive");

let percentage = 1 / 8 * inheritance;


if (isAlive == true) {


    console.log("the wife will get " + percentage + " of the inheritance");
    // معرفة اجمالى الميراث بعد الزوجه
let inheritanceAfterwife = inheritance - percentage ;

// معرف عدد الاولاد
let children = prompt("enter the number of children");

// معرفة عدد اسهم لاولاد
let shares = children * 2 ;

// معرفة عدد البنات
let girls = prompt("enter the number of girls");

// معرف عدد اسهم البنات
let girlsShares = girls * 1 ;

//  اجمالى عدد الاسهم
let totalShares = shares + girlsShares ;

// معرفة سعر السهم الواحد كام
let sharePrice = inheritanceAfterwife / totalShares ;

// نصيب كل ولد من الميراث
let boyInheritance = (sharePrice * shares)/children ;

// نصيب كل بنت من الميراث
let girlInheritance = (sharePrice * girlsShares)/girls ;

console.log( "boy inheritance is " + boyInheritance );
console.log( "girl inheritance is " + girlInheritance );

} else {
    console.log("the wife is dead");

// معرف عدد الاولاد
let children = prompt("enter the number of children");

// معرفة عدد اسهم لاولاد
let shares = children * 2 ;

// معرفة عدد البنات
let girls = prompt("enter the number of girls");

// معرف عدد اسهم البنات
let girlsShares = girls * 1 ;

//  اجمالى عدد الاسهم
let totalShares = shares + girlsShares ;

// معرفة سعر السهم الواحد كام
let sharePrice = inheritance / totalShares ;

// نصيب كل ولد من الميراث
let boyInheritance = (sharePrice * shares)/children ;

// نصيب كل بنت من الميراث
let girlInheritance = (sharePrice * girlsShares)/girls ;

console.log( "boy inheritance is " + boyInheritance );
console.log( "girl inheritance is " + girlInheritance );
}





