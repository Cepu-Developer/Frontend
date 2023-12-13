/* eslint-disable react/prop-types */
import { useState } from "react";

const isGoodAir = (data) => {
  return data >= 0 && data <= 50;
};

const isModerateAir = (data) => {
  return data >= 51 && data <= 100;
};

const isUnhealthyForGroupAir = (data) => {
  return data >= 101 && data <= 150;
};

const isUnhealthyAir = (data) => {
  return data >= 151 && data <= 200;
};

export function CardUdara({ pollutan }) {
  const [dataAqius] = useState(pollutan.current.pollution.aqius);

  const getQualityAir = () => {
    if (isGoodAir(dataAqius)) {
      return {
        title: "Good",
        image: "ic-face-green.svg",
      };
    } else if (isModerateAir(dataAqius)) {
      return {
        title: "Moderate",
        image: "ic-face-yellow.svg",
      };
    } else if (isUnhealthyForGroupAir(dataAqius)) {
      return {
        title: "Unhealthy for sensitive groups",
        image: "ic-face-orange.svg",
      };
    } else if (isUnhealthyAir(dataAqius)) {
      return {
        title: "Unhealthy",
        image: "ic-face-red.svg",
      };
    }
  };

  const qualityAirData = getQualityAir();

  return (
    <div className="container d-flex justify-content-center w-75">
  <div className="card shadow border border-gray-200 rounded-lg w-100 bg-gray">
    <div
      className={`card-body w-100 ${
        isGoodAir(dataAqius)
          ? "bg-success"
          : isModerateAir(dataAqius)
          ? "bg-warning"
          : isUnhealthyForGroupAir(dataAqius)
          ? "bg-danger"
          : isUnhealthyAir(dataAqius)
          ? "bg-danger"
          : ""
      }`}
    >
      <img
        className="rounded-top-lg mx-auto w-25 pt-1"
        src={qualityAirData.image}
        alt={qualityAirData.title}
      />
      <h2 className="text-24 text-white tracking-tight">{dataAqius}</h2>
      <p className="pb-1 text-white tracking-tight">US AQI</p>
    </div>
    <div className="pb-2 px-2 w-100">
      <h6
        className={`font-bold text-xl tracking-tight mb-1 ${
          isGoodAir(dataAqius)
            ? "text-success"
            : isModerateAir(dataAqius)
            ? "text-warning"
            : isUnhealthyForGroupAir(dataAqius)
            ? "text-danger"
            : isUnhealthyAir(dataAqius)
            ? "text-danger"
            : ""
        }`}
      >
        {qualityAirData.title}
      </h6>
      <h6 className="text-gray-400 text-sm tracking-tight">📍 {pollutan.city}</h6>
      <h5 className="text-gray-900 font-bold text-xl tracking-tight mb-1">
        {pollutan.state} {pollutan.country}
      </h5>
      <div className="d-flex justify-content-between mt-1">
        <p>🌡️ {pollutan.current.weather.tp}°C</p>
        <p>💨 {pollutan.current.weather.ws} km/jam</p>
        <p>💧 {pollutan.current.weather.hu}%</p>
      </div>
    </div>
  </div>
</div>


  );
}
