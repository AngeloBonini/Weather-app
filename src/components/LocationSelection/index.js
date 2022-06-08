/** @jsxRuntime classic */
/** @jsx jsx */

import { useEffect, useContext, useState } from "react";
import { jsx } from "@emotion/react";
import { css } from "@emotion/react";
import { WeatherContext } from "../../contexts/weather";
import { UPDATE_SELECTED_LOCATION } from "../../contexts/weather/WeatherReducer";

export function LocationSelection({ name }) {
  const [, dispatch] = useContext(WeatherContext);

  const [, setIsWeekly] = useState();
  useEffect(() => {
    setIsWeekly(false);
  }, [setIsWeekly]);
  function handleChange() {
    // setIsWeekly(false);
    dispatch({ type: UPDATE_SELECTED_LOCATION, payload: name });
  }

  return (
    <button
      onClick={handleChange}
      css={css`
        border-radius: 10px;
        border: 2px solid rgba(10, 132, 255, 1);
        opacity: 1;
        opacity: 1;
        color: rgba(255, 255, 255, 1);
        font-size: 24px;
        font-weight: 500;
        font-style: normal;
        letter-spacing: 0px;
        text-align: center;
        background-color: transparent;
        margin: 10px 10px;

        &:focus {
          border: 0px;
          background-color: #ffffff;
          color: #0a84ff;
        }
      `}
    >
      <p>{name}</p>
    </button>
  );
}
