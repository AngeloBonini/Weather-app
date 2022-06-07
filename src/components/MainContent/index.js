/** @jsxRuntime classic */
/** @jsx jsx */
import { useContext } from "react";
import { css } from "@emotion/react";
import { jsx } from "@emotion/react";
import { WeatherContext } from "../../contexts/weather";
import { Forecast } from "./Forecast";
export function MainContent() {
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
    <Forecast selectedLocation></Forecast>
  );
}
