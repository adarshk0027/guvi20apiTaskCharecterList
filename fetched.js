
// let vehicle="https://world.openfoodfacts.org/api/v0/product/737628064502.json"
// let vehicle1="https://vpic.nhtsa.dot.gov/api/vehicles/decodevin/5UXWX7C5*BA?format=json&modelyear=2011"
//https://x-colors.herokuapp.com/api/random?number=10
const div=document.getElementById('append')
let charecters="https://www.breakingbadapi.com/api/characters";
async function GetData(){
    try{
        const fetching=await fetch("https://www.breakingbadapi.com/api/characters")
    const result=await fetching.json(); 
    return result
    }
    catch{
        console.log("error");
    }
    
}
async function ViewData(){
    const userResult=await GetData()
    console.log(userResult);
     const characterlist=document.getElementById("characterlist");
     characterlist.innerHTML=""
     userResult.forEach(item => {
        characterlist.innerHTML += `<div class="col-md-4">
        <div class="img">
            <img src="${item.img}" alt="" width="343px" height="300px">
        </div>
        <div class="bg-dark">
        <h3><span class="name"> Name:</span> ${item.name}</h3>  
        <h5><span class="occupation">Occupation:</span>${item.occupation[0]} </h5>
        </div>
    </div>
 `
        
     });
}
ViewData()
