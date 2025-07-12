const firstarg = process.argv[2];
const secondarg = process.argv[3];

let first = parseInt(firstarg);
let second = parseInt(secondarg);

function add(a,b){
    console.log(a+b);
}

add(first,second);