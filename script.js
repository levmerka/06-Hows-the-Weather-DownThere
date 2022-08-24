const appid = `c23fe1814b1e58bfa4db6ae14b98b9e7`;

async function citySearch(city) {
  const cityUrl = `https://api.openweathermap.org/data/2.5/forecast/?q=${city}&appid=${appid}`;
  const lat = 35;
  const lon = 83;
  const coordUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${appid}`;
  const call = await fetch(coordUrl);
  const data = await call.json();
  console.log(data);
}

citySearch("chicago");
