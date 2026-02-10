// let subscribers = 1000000 or "1M"

let subs : Number | string = "1M"

let apiRequestStatus : "pending" | "success" | "reject" = "pending"

// apiRequestStatus = "raj"  // ❌ warning => Type '"raj"' is not assignable to type '"pending" | "success" | "reject"'.


apiRequestStatus = "success" // ✅

// let airlineSeat : "aisle" | "window" | "middle";

// console.log(airlineSeat);  warning => Variable 'airlineSeat' is used before being assigned.

let airlineSeat : "aisle" | "window" | "middle" = "aisle"

console.log(airlineSeat); // ✅

let orders = ["12", "34", "86", "24"]

let currentOrder : number | undefined;
// let currentOrder : any = undefined;

for(let order of orders){
    if(order == "24"){
        currentOrder = 24
        break
    }
}

console.log(currentOrder);



