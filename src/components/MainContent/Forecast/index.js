/** @jsxRuntime classic */
/** @jsx jsx */

import * as React from "react";
import { useState, useEffect } from "react";
import { jsx } from "@emotion/react";
import { css, Global } from "@emotion/react";
import { DailyForecastWrapper } from "./DailyForecastWrapper";
import { WeeklyForecastWrapper } from "./WeeklyForecastWrapper";

export function Forecast({ isWeekly }) {
  return (
    <div className="card">
      <div>
        {!isWeekly ? (
          <DailyForecastWrapper></DailyForecastWrapper>
        ) : (
          <WeeklyForecastWrapper></WeeklyForecastWrapper>
        )}
      </div>
    </div>
  );
}
