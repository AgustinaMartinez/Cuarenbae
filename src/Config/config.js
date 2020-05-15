export const configApiWeather = {
    url: "http://api.openweathermap.org/data/2.5/weather",
    api_key: "076a57f5bf0565a05eb08abebaefdc92",
    city: "cordoba",
    state: "cordoba",
    country: "ar",
    lang: "es",
    units: "metric"
}

export const configApiTime = {
    url: "http://api.timezonedb.com/v2.1/get-time-zone",
    by: "zone",
    zone: "ART",
    format: "json",
    api_key: "UIYH9M1PZSC9"
}

export const configApiPhotos = {
    url: "https://api.unsplash.com/photos/random/",
    query: "coronavirus",
    count: "10",
    api_key: "ZJIb9mKmajs7KbwSRFk3afyEvZm52fxN2tnYVAKYkNA"
}