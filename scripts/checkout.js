// Each ticket will cost 100 Rupees
// If wallet amount is insufficient show alert "Insufficient Balance!";
// Else show "Booking successfull!" and adjust the wallet amount in real time
movie=JSON.parse(localStorage.getItem("movie"))
let totalAmount=localStorage.getItem("amount")
console.log(movie)
         div=document.querySelector("#movie")
        let title = document.createElement('h3');
        title.innerText = movie.Title;

        let moviPoster = document.createElement('img');
        moviPoster.src = movie.Poster;
        moviPoster.style.width="100%"
        div.append(moviPoster,title)


        function myFunction(){
            let pay=document.querySelector("#number_of_seats").value
            pay=Number(pay)*100;
            if(pay>Number(totalAmount)){
                alert("Insufficient Balance !")
            }else{
                totalAmount=Number(totalAmount)-pay
                localStorage.setItem("amount",JSON.stringify(totalAmount))
                alert("confirm Booking !")
            }
        }

