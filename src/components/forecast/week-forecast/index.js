/** @jsxRuntime classic */
/** @jsx jsx */

import * as React from "react";
import { useState, useEffect } from "react";
import { jsx } from "@emotion/react";
import { css, Global } from "@emotion/react";
import { ReactSVG } from "react-svg";
import { Link } from "react-router-dom";

export function WeekForecast(SevenDaysForecast) {
  console.log(
    "🚀 ~ file: index.js ~ line 12 ~ WeekForecast ~ SevenDaysForecast",
    SevenDaysForecast
  );
  return (
    <div>
      <p
        className="white-text"
        css={css`
          font-size: 24px;
        `}
      >
        Hello There
      </p>
    </div>
  );
}
