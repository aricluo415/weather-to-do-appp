function importAll(r) {
  return r.keys().map(r);
}

const moons = require.context("../icons/Moon/", true, /.*(.png)$/);
const moons1 = importAll(moons);

const sun = require.context("../icons/sunBall/", true, /.*(.png)$/);
const suns = importAll(sun);

const tornado = require.context("../icons/tornado/", true, /.*(.png)$/);
const tornados = importAll(tornado);

const snow = require.context("../icons/snowFlake/", true, /.*(.png)$/);
const snowflake = importAll(snow);

const cloud = require.context("../icons/sunCloudRain/", true, /.*(.png)$/);
let cloudy = importAll(cloud);
cloudy.splice(5);

export { moons1, suns, tornados, snowflake, cloudy };
