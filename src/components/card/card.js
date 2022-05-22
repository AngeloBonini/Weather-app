/** @jsxRuntime classic */
/** @jsx jsx */

import * as React from "react";
import { useState, useEffect } from "react";
import { jsx } from "@emotion/react";
import { css, Global } from "@emotion/react";
import { apiUrl } from "../../utils/defaults";


export function Card({name}) {
    return (
    <button
      css={css`
        border-radius: 10px;
        border: 2px solid rgba(10, 132, 255, 1);
        opacity: 1;
        opacity: 1;
        background-color: transparent;
        margin: 10px 10px;
      `}
    >
      <p
        css={css`
          color: rgba(255, 255, 255, 1);
          font-size: 24px;
          font-weight: 500;
          font-style: normal;
          letter-spacing: 0px;
          text-align: left;
        `}
      >
        Hello {name}
      </p>
    </button>
  );
}
