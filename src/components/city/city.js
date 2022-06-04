/** @jsxRuntime classic */
/** @jsx jsx */

import * as React from "react";
import { useState, useEffect } from "react";
import { jsx } from "@emotion/react";
import { css, Global } from "@emotion/react";
import { getLocationWeather} from "../../services/getLocationWeather"
export function City({ name, citySelected }) {

  const openCityCard = true
  function handleChange(){
    console.log(name)
    const weatherData = getLocationWeather(name, process.env.REACT_APP_API_KEY)
    
     return {weatherData, openCityCard }
  }
  return (
    <button
      onClick={()=>{
        citySelected(openCityCard)
        handleChange()
      }
      }
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
    
        &:focus{
          border: 0px ;
          background-color: #ffffff;
          color: #0a84ff;
        }
      `}
      
    >
      <p>

      {name}
      </p>
    </button>
  );
}

