function myFunction() {
    
    //search//
let searching = document.getElementsByClassName("searchable");

let maxResults = searching.length;
console.log(maxResults);

if (document.getElementById("here") != null){
    for (let i = 0; i < maxResults; i++){
        if (document.getElementById("here") != null){
            document.getElementById("here").removeAttribute('id');
        }
    }
}
//search is the value of the user input//

let UserInput = document.getElementById("mytext").value.trim();
UserInput = UserInput.toLowerCase();
console.log(UserInput);
//print search//
//document.getElementById("response").innerHTML = UserInput;



//go through all classes//


for ( let i = 0; i < maxResults; i++){
    let classSearch = searching[i].innerHTML.valueOf();
    let classSearchLC = classSearch.toLowerCase();
    let Output = classSearchLC.search(UserInput);
    if (Output != -1){
        searching[i].setAttribute('id', "here" )
    }
    //document.getElementById("output").innerHTML = Output;
    
}
//console.log("searching" + searching  + "Userinput" + UserInput);

//console.log("Output" + Output)



}