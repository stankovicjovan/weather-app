class UI {
  constructor() {
    this.location = document.getElementById("w-location");
    this.desc = document.getElementById("w-desc");
    this.string = document.getElementById("w-string");
    this.details = document.getElementById("w-details");
    this.icon = document.getElementById("w-icon");
    this.humidity = document.getElementById("w-humidity");
    this.feelsLike = document.getElementById("w-feels-like");
    this.pressure = document.getElementById("w-pressure");
    this.wind = document.getElementById("w-wind");
  }

  paint(weather) {
    this.location.textContent = weather.name + " , " + weather.sys.country;
    this.desc.textContent = `Min Temp : ${weather.main.temp_min} ℃`;
    this.string.textContent = "Current Temp: " + weather.main.temp + " ℃";
    this.icon.textContent = `Max Temp : ${weather.main.temp_max} ℃`;
    this.humidity.textContent = `Relative Humidity : ${weather.main.humidity} %`;
    this.pressure.textContent = "Pressure : " + weather.main.pressure + " hPa";
    this.feelsLike.textContent = `Feels Like :  ${weather.main.feels_like} ℃`;
    this.wind.textContent = "Wind : " + weather.wind.speed + " m/s ";
  }
}
