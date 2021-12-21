async function test() {
let a =  await fetch("https://restcountries.com/v3.1/lang/german").then((success)=>{let div = document.getElementById("print");
div.innerText=b;}).catch((failed)=>{console.log(failed)});

/*b = a.then( (s) => {console.log("success")}).catch(() => {console.log(failure)});*/

}

test()