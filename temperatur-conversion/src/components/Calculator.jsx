import React, { useState } from 'react'
import TempertureInput from './TempertureInput'

function toCelsius(temp) {
  return ((temp - 32) * 5) / 9;
}

function toFahrenheit(temp) {
  return ((temp * 9) / 5) + 32;
}

function BoilingWater(props) {
  if (props.celsius >= 100) {
    return <p> 물이 끓습니다.</p>;
  }
  return <p> 물이 끓지 않습니다.</p>;
}

function tryConvert(temperature, convert) {
  const input = parseFloat(temperature);
  if (Number.isNaN(input)) {
    return "";
  }
  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}

const Calculator = () => {
  const [temperature, setTemperature] = useState("");
  const [scale, setScale] = useState("c");

  const handleCelsiusChange = (temperature) => {
    setTemperature(temperature);
    setScale("c");
  }
  const handleFahrenheitChange = (temperature) => {
    setTemperature(temperature);
    setScale("f");
  }

  const celsius = scale === "f" ? tryConvert(temperature, toCelsius) : temperature;
  const fahrenheit = scale === "c" ? tryConvert(temperature, toFahrenheit) : temperature;

  return (
    <div style={{ width: "500px", margin: "auto" }}>
      <h1 style={{ textAlign: "center" }}>섭씨, 화씨 변환</h1>
      <TempertureInput scale="c" temperature={celsius} onTempChange={handleCelsiusChange} />
      <TempertureInput scale="f" temperature={fahrenheit} onTempChange={handleFahrenheitChange} />
      <BoilingWater celsius={parseFloat(celsius)} />
    </div>
  )
}

export default Calculator