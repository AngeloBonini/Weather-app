/** @jsxRuntime classic */
/** @jsx jsx */
import { useContext, useEffect, useState } from "react";
import { css } from "@emotion/react";
import { jsx } from "@emotion/react";
import { WeatherContext } from "../../contexts/weather";
import { Forecast } from "./Forecast";
export function MainContent() {
  const [isWeekly, setIsWeekly] = useState(false);

  const [state] = useContext(WeatherContext);
  const selectedLocation = state.selectedLocation;
  return state.selectedLocation === "" ? (
    <p
      className="white-text"
      css={css`
        font-size: 44px;
      `}
    >
      Pick a day to see the full forecast
    </p>
  ) : (
    <div>
      <Forecast isWeekly={isWeekly}></Forecast>
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
