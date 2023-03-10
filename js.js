const weatherAPI = 
"http://api.weatherapi.com/v1/current.json?key=79de7420a3fe40febaf144116230903&aqi=no";
const keyword = document.querySelector('.keyword');
const btnSearch = document.querySelector('.btn-search');
const container = document.getElementById('container');

btnSearch.onclick = () => {   
fetch(`${weatherAPI}&q=${keyword.value}`)
.then((res) => res.json())
.then((data) => {
    console.log(data);
    let element = ''

    element = showElement(data)
    container.innerHTML = element;
    // const current = data.current;
    // const location = data.location;
});
}

function showElement(data)
{
    return `<h3>${data.location.name},${data.location.region}, ${data.location.country}</h3>
    <div class="box">
        <img src="http:${data.current.condition.icon}" alt="">
        <h1>${data.current.temp_c} ℃</h1>
    </div>
    <p>${data.current.last_updated}</p>
    <p>${data.current.condition.text}</p>
    <a href="index.html">
    <button>Back</button>`;
}