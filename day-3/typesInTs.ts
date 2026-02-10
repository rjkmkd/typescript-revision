let drink = "chai"

// drink = 0

let cups = Math.random()>0.5 ? 10 : 5

//type inferensing => outo detect the type and give warning when we try to assign another type.

let channelName = "ChaiOurCode"

channelName = 122321 // ❌ //Type 'number' is not assignable to type 'string'.
console.log(channelName);

// type anotation => explesictly declare the type

let chaiFlavour : string = "masala chai"

// chaiFlavour = 6565 ❌ // gives warnings => Type 'number' is not assignable to type 'string'.

chaiFlavour = "ginger tea" //✅


