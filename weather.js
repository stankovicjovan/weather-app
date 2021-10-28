class Weather {
  constructor(city, state) {
    this.apiKey = "bf1742c4c626a32eff046296f39e1df5";
    this.city = city;
    this.state = state;
  }

  // Fetch weather from api

  async getWeather() {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.state}&units=metric&appid=${this.apiKey}`
    );

    const responseData = await response.json();

    return responseData;
  }

  // Change weather location
  changeLocation(city, state) {
    this.city = city;
    this.state = state;
  }
}
