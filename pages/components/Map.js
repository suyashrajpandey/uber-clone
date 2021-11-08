import { useEffect } from "react";
import tw from "tailwind-styled-components";
import mapboxgl from "mapbox-gl";

mapboxgl.accessToken =
  "pk.eyJ1Ijoic3V5YXNocmFqcGFuZGV5IiwiYSI6ImNrdnBtMzl4ZTE1cmwzMm1vcmdrc3BqdHAifQ.1s1e2gtGbgrRk6nTRO0wcA";

const Map = () => {
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/mapbox/streets-v11",
      center: [-99.29011, 39.39172],
      zoom: 3,
    });
  });
  return <Wrapper id="map"></Wrapper>;
};
const Wrapper = tw.div`
flex-1 `;
export default Map;
