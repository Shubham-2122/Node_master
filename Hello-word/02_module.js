// mathes releta function
// jetala joei ae function banavai sakiye module thi

// What is module ?
// this function module file
// module.exports se jaya use karvu hoy taya kari saku
function add(a, b) {
    return a + b;
}

function sub(a, b) {
    return a - b;
}



// module.exports = "shubham"
// this is not valide 

// multiple aavse tayre object use
module.exports = {
    adFun : add,
    subFn : sub
}

// module.exports = add;
// module.exports = sub;
// console.log(add(2,5))

// exports.add = (a,b) => a+ b;
// exports.sub = (a,b) => a - b;

