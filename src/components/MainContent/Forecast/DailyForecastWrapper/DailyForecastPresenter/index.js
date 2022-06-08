/** @jsxRuntime classic */
/** @jsx jsx */

import * as React from "react";
import { useState, useEffect } from "react";
import { jsx } from "@emotion/react";
import { css, Global } from "@emotion/react";
import { ReactSVG } from "react-svg";
import { Link } from "react-router-dom";

export function DailyForecastPresenter({
  name,
  temperature,
  feelsLike,
  humidity,
  sunrise,
  sunset,
  weatherDescription,
  weatherPreview,
}) {
  return (
    <div>
      <p
        className="white-text"
        css={css`
          font-size: 32px;
        `}
      >
        {name}
      </p>
      <div
        css={css`
          display: grid;
          grid-template-columns: 50% 50%;
        `}
      >
        <p></p>
        <p
          className="white-text"
          css={css`
            font-size: 28px;
          `}
        >
          Temp: {temperature}° <br></br>
          Feels like {feelsLike}° <br></br>
          Humidity: {humidity}%<br></br>
          Sunrise: {sunrise}
          <br></br>
          Sunset: {sunset}
          <br></br>
        </p>
        <p className="white-text">{weatherDescription}</p>
      </div>
    </div>
  );
}
