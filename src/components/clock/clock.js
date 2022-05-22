/** @jsxRuntime classic */
/** @jsx jsx */

import * as React from "react";
import { useState, useEffect } from "react";
import { jsx } from '@emotion/react'
import { css, Global } from "@emotion/react";

export function Clock({format12h}) {
  const [hours, setHours] = useState(new Date());
 useEffect(()=> {
     setInterval(()=> setHours(new Date()), 1000)
 }, [] )
  const time = {
    hour: "numeric",
    minute: "numeric",
    hour12: format12h,
  };


  return(
      <div
      css={css`
      opacity: 1;
      color: rgba(255,255,255,1);
      font-size: 32px;
      font-weight: 500;
      font-style: normal;
      letter-spacing: 0px;
      text-align: right
    `}
      >
          {hours.toLocaleString('en-US', time)}
      </div>
  )
}
