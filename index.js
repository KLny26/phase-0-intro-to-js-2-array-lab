const cats = ["Milo", "Otis", "Garfield"];

// function beforeEach(){
   //cats.length = 0
//}

function destructivelyAppendCat(name){
    cats.push("Ralph");
}

function destructivelyPrependCat(name){
    cats.unshift("Bob");
}

function destructivelyRemoveLastCat(){
    cats.pop();
}

function destructivelyRemoveFirstCat(){
    cats.shift();
}

function appendCat(name){
   let appendCat = ([...cats, "Broom"]);
   return appendCat
}

function prependCat(name){
    let prependCat = (["Arnold", ...cats]);
    return prependCat
}

function removeLastCat(){
    let removeLastCat = cats.slice(0, cats.length-1);
    return removeLastCat
}

function removeFirstCat(){
    let removeFirstCat = cats.slice(-2);
    return removeFirstCat
}