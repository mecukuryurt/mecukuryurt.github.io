window.onload=function() {
    let REQ = "https://api.open-meteo.com/v1/forecast?latitude=40.937&longitude=29.29&daily=weather_code,temperature_2m_max,temperature_2m_min,wind_speed_10m_max,wind_direction_10m_dominant,rain_sum,showers_sum,snowfall_sum&timezone=Europe%2FMoscow";
    WEATHERREPORTNUMBER = 7;

    const rows=[];

    for (let i=0; i<WEATHERREPORTNUMBER; i++) {
        rows[i] = document.getElementById("t"+i);
    }
    
    var result = fetch(REQ)
    .then(response => {return response.json();})
    .then(items => {
        let data=items;
        console.log(items);
        const date      =items["daily"]["time"];
        const weather   =items["daily"]["weather_code"];
        const windspd   =items["daily"]["wind_speed_10m_max"];
        const winddir   =items["daily"]["wind_direction_10m_dominant"];
        const rain      =items["daily"]["rain_sum"];
        const shower    =items["daily"]["showers_sum"]
        const snow      =items["daily"]["snowfall_sum"];

        const avgtemp   =[];
        for (let i=0; i<WEATHERREPORTNUMBER; i++) {
            avgtemp[i]=(items["daily"]["temperature_2m_max"][i]+items["daily"]["temperature_2m_min"][i])/2;

            let currow="";
            currow += 
                "<td>" + date[i] + "</td>" + 
                "<td>" + calculateWMO(weather[i]) + "</td>" + 
                "<td>" + avgtemp[i].toFixed(2) + " °C</td>" +
                "<td>" + windspd[i].toFixed(1) + " km/h</td>" + 
                "<td>" + winddir[i].toFixed(0) + "°</td>" + 
                "<td>" + (rain[i]+shower[i]).toFixed(1)+ " mm</td>" + 
                "<td>" + snow[i].toFixed(1) + " cm</td>"
                ;
                rows[i].innerHTML = currow; 
        }
        document.getElementById("theading").innerHTML="WETTERBERİCHT FÜR 7 TAGE";
    });
}

function calculateWMO(wmo) {
    if (wmo == 5 || wmo == 10) return "Nebel";
    if (wmo == 4 || wmo == 3)  return "Bewölkt";
    if (wmo == 2 || wmo == 1)  return "Leicht Bewökt";
    if (wmo == 0) return "Klar";
    if (wmo == 19) return "Tornado";
    if (wmo == 17 || wmo == 18 || wmo == 29)  return "Gewitter";
    if (wmo == 20 || wmo == 21)  return "Regnen";
    if (wmo == 27) return "Hagel";
    if (wmo <= 28 && wmo >= 25) return "Platzregen";
    if (wmo <= 24 && wmo >= 22) return "Schnee";
    if (wmo <= 39 && wmo >= 36) return "Schnee";
    if (wmo <= 35 && wmo >= 30) return "Sandsturm";
    if (wmo <= 49 && wmo >= 40) return "Nebel";
    if (wmo <= 59 && wmo >= 50) return "Nieselregen";
    if (wmo <= 69 && wmo >= 60) return "Regnen";
    if (wmo <= 78 && wmo >= 70) return "Schnee";
    if (wmo == 79) return "Hagel";
    if (wmo <= 82 && wmo >= 80) return "Platzregen";
    if (wmo <= 84 && wmo >= 83) return "Schneeregen";
    if (wmo <= 88 && wmo >= 85) return "Schnee";
    if (wmo <= 90 && wmo >= 89) return "Hagel";
    if (wmo <= 92 && wmo >= 91) return "Regnen";
    if (wmo <= 94 && wmo >= 93) return "Schnee oder Schneeregen oder Hagel";
    if (wmo == 95) return "Gewitter";
    if (wmo == 99) return "Gewitter und Hagel";
    return "keine informationen";
}