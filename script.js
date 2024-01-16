

const btn  = document.getElementById('searchBtn');
const city = document.getElementById('cityname');
const wcity = document.getElementById('city_name');
const temp = document.getElementById('temp');
const humidity = document.getElementById('humidity');
const speed = document.getElementById('spedds');
const des = document.getElementById('descri');
const weather_img = document.querySelector('.weather-img');










const getinfo = async(event)=>{


      let cityname = city.value;
 
     if(cityname == ""){

         alert("PLzz Enter city name ")
    }

    else{
       

        try{
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityname}&units=metric&appid=937c0a6712ec1961185970b2df5130ef`;
          
            const response = await fetch(url);
            const data = await  response.json();
            const ardata = [data];
            temp.innerText = ardata[0].main.temp ;
            humidity.innerText = ardata[0].main.humidity ;
            speed.innerText = ardata[0].wind.speed ;
            des.innerText = ardata[0].weather[0].description ;

            switch(ardata[0].weather[0].main){
                case 'Clouds':
                    weather_img.src = "assets/cloud.png";
                    break;
                case 'Clear':
                    weather_img.src = "assets/clear.png";
                    break;
                case 'Rain':
                    weather_img.src = "assets/rain.png";
                    break;
                case 'Mist':
                    weather_img.src = "assets/mist.png";
                    break;
                case 'Snow':
                    weather_img.src = "assets/snow.png";
                    break;
        
            }


            



        }
        catch{

            alert("PLzz Enter city name ")
        }
       
    }



   
}

btn.addEventListener('click' , getinfo);