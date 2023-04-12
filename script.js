function whetherapi() {
  let city = prompt("enter city")
  console.log(city);
  function fetchapi(url) {
    fetch(url)
      .then(res => res.json())
      .then(data => {
        console.log(data)
        let html = "";
        html = html + `
        <section class="vh-100" style="background-color: #4B515D;">
  <div class="container py-5 h-100">

    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-md-8 col-lg-6 col-xl-4">

        <div class="card" style="color: #4B515D; border-radius: 35px;">
          <div class="card-body p-4">

            <div class="d-flex">
              <h6 class="flex-grow-1">${data.location.name}</h6>
              <h6>last updated- ${data.current.last_updated}</h6>
            </div>

            <div class="d-flex flex-column text-center mt-5 mb-4">
              <h6 class="display-4 mb-0 font-weight-bold" style="color: #1C2331;"> ${data.current.temp_c}°C </h6>
              <span class="small" style="color: #868B94">${data.current.condition.text}</span>
            </div>

            <div class="d-flex align-items-center">
              <div class="flex-grow-1" style="font-size: 1rem;">
                <div><i class="fas fa-wind fa-fw" style="color: #868B94;"></i> <span class="ms-1">wind - ${data.current.wind_kph} km/h
                  </span></div>
                <div><i class="fas fa-tint fa-fw" style="color: #868B94;"></i> <span class="ms-1"> humidity - ${data.current.humidity}</span>
                </div>
                <div><i class="fas fa-sun fa-fw" style="color: #868B94;"></i> <span class="ms-1">wind direction - ${data.current.wind_dir}</span>
                </div>
              </div>
              <div>
                <img src="${data.current.condition.icon}"
                  width="100px">
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>

  </div>
</section>`
        document.getElementById(`content`).innerHTML = html
      })
  }
  fetchapi(`https://api.weatherapi.com/v1/current.json?key=d26b0f44516b4c4882a144348233003&q=${city}&aqi=yes`)
  // fetchapi("https://api.weatherapi.com/v1/current.json?key=d26b0f44516b4c4882a144348233003&q=kashmir&aqi=no")

  function gettime() {
    fetch(`http://api.weatherapi.com/v1/timezone.json?key=d26b0f44516b4c4882a144348233003&q=${city}`)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        document.getElementById(`region`).innerHTML = data.location.region
        document.getElementById(`country`).innerHTML = data.location.country
      })
  }
  gettime()
}
whetherapi()