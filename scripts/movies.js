// Implement debouncing for network request
// On clicking book now store the selected movie in localstorage as key "movie"
// so that you can retrive it on checkout.html page
let totalAmount=localStorage.getItem("amount")
let h11=document.createElement("h1")
h11.innerText=totalAmount;
document.querySelector("#navbar").append(h11)
let  movies_div=document.getElementById("movies")
let id
function debounce(func,delay){
    if(id){
        clearTimeout(id)
    }
    id= setTimeout(function(){
        main();
    },delay)
}
async function main(){
    let data=await searchMovies();
    if(data==false){
    return false;
    }
    // console.log(data)
    appendData(data);
   }


async function searchMovies(){
    movies_div.innerHTML=null
    try{
    const query=document.getElementById("search").value;
    const res = await fetch(`https://www.omdbapi.com/?s=${query}&page=1&apikey=f11c6f31`);
    let data= await res.json();
    const movies=data.Search;
    if(movies==undefined){
        return false;
    }
    return movies;
    }catch(err){
        console.log("err:",err);
    }
}
function appendData(data)
{
    data.forEach(function (elm)
    {
        let div = document.createElement('div');
        div.setAttribute('id', 'box');

        let title = document.createElement('h3');
        title.innerText = elm.Title;

        let moviPoster = document.createElement('img');
        moviPoster.src = elm.Poster;
        moviPoster.style.width="100%"
        moviPoster.style.height="180px"

        let btn=document.createElement('button');
        btn.innerText="Book Now"
        btn.setAttribute("class","book_now")
        btn.onclick=()=>{
            checkout(elm)
    }
        div.append(moviPoster,title,btn)
        movies.append(div);
       
    })
}
function checkout(elm){
    localStorage.setItem("movie",JSON.stringify(elm))
   window.open("checkout.html","_blank")
}