/** @jsxRuntime classic */
/** @jsx jsx */

import * as React from "react";
import { useState, useEffect } from "react";
import { jsx } from "@emotion/react";
import { css, Global } from "@emotion/react";
import { DailyForecastWrapper } from "./DailyForecastWrapper";
import { WeeklyForecastWrapper } from "./WeeklyForecastWrapper";

export function Forecast(selectedLocation) {
  console.log(selectedLocation);
  const [isWeekly, setIsWeekly] = useState(false);

  return (
    <div className="card">
      <div>
        {!isWeekly ? (
          <DailyForecastWrapper></DailyForecastWrapper>
        ) : (
          <WeeklyForecastWrapper></WeeklyForecastWrapper>
        )}
      </div>
      <div className="forecast-with-buttons">
        <p
          className="white-text"
          css={css`
            font-size: 28px;
          `}
        >
          {" "}
          Forecast
        </p>
        <div className="buttons-check">
          <button
            onClick={() => setIsWeekly(false)}
            css={css`
              border-radius: 10px;
              border: 2px solid rgba(10, 132, 255, 1);
              opacity: 1;
              font-size: 24px;
              font-weight: 500;
              font-style: normal;
              letter-spacing: 0px;
              text-align: center;
              color: rgba(255, 255, 255, 1);
              background-color: transparent;
            `}
          >
            Now
          </button>
          <button
            onClick={() => setIsWeekly(true)}
            css={css`
              border-radius: 10px;
              border: 2px solid rgba(10, 132, 255, 1);
              opacity: 1;
              font-size: 24px;
              font-weight: 500;
              font-style: normal;
              letter-spacing: 0px;
              text-align: center;
              color: rgba(255, 255, 255, 1);
              background-color: transparent;
            `}
          >
            7 Days
          </button>
        </div>
      </div>
    </div>
  );
}
