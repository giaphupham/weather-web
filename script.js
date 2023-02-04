var bg_screen = document.body;
var bg_main = document.getElementById('weather');
var search = document.getElementsByClassName('search-bar')[0];
var city = document.getElementsByClassName('city')[0];
var country = document.getElementsByClassName('country')[0];
var value = document.getElementsByClassName('value')[0];
var statu = document.getElementsByClassName('status')[0];
var vision = document.getElementsByClassName('visibility')[0];
var wind = document.getElementsByClassName('winds')[0];
var humidity = document.getElementsByClassName('humiditys')[0];
var time = document.getElementsByClassName('datetime')[0];
var content = document.getElementsByClassName('content')[0];


async function getWeather(capitalName){
    

    let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${capitalName}&appid=fb5409c02c63381fe349dfd8060277dd`

    let data = await fetch(apiURL).then(res=> res.json())
    
    if(data.cod == 200){
        content.classList.remove('hide')
        city.innerText = data.name 
        country.innerText = data.sys.country
        vision.innerText = data.visibility + 'm'
        wind.innerText = data.wind.speed + 'm/s'
        humidity.innerText = data.main.humidity + '%'
        statu.innerText = data.weather[0].main
        let temp = Math.round(data.main.temp - 273.15)
        value.innerText = temp
        time.innerText = new Date().toLocaleString('vi')

        if(temp < 10){
            bg_screen.style.background = "linear-gradient(to bottom, rgba(0,0,0,0.3),rgba(0,0,0,0.9)), url(de488cd7d1c2b66b1029ea11bd671a44.jpg) no-repeat center/cover"
            bg_main.style.background = "url(de488cd7d1c2b66b1029ea11bd671a44.jpg) no-repeat center/cover"
        }else if(temp > 10 && temp < 25){
            bg_screen.style.background = "linear-gradient(to bottom, rgba(0,0,0,0.3),rgba(0,0,0,0.9)), url(90c44138da2e02b18a35bd772142b9de.jpg) no-repeat center/cover"
            bg_main.style.background = "url(90c44138da2e02b18a35bd772142b9de.jpg) no-repeat center/cover"
        }else{
            bg_screen.style.background = "linear-gradient(to bottom, rgba(0,0,0,0.3),rgba(0,0,0,0.9)), url(4e2257ce54d1359137c6f15b0d16b3ec.jpg) no-repeat center/cover"
            bg_main.style.background = "url(4e2257ce54d1359137c6f15b0d16b3ec.jpg) no-repeat center/cover"
        }

    }else{
        content.classList.add('hide')
    }

}



search.addEventListener('keypress', function(e){
    if(e.code === 'Enter'){
        let capitalName = search.value.trim()
        getWeather(capitalName)
    }
})

