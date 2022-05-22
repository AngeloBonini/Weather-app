/** @jsxRuntime classic */
/** @jsx jsx */

import * as React from "react";
import { useState, useEffect } from "react";
import { jsx } from "@emotion/react";
import { css, Global } from "@emotion/react";

export function Settings() {
  return (
    <p
      css={css`
        padding-left: 10px;
        opacity: 1;
        color: rgba(255, 255, 255, 1);
        font-size: 24px;
        font-weight: 700;
        font-style: normal;
        letter-spacing: 0px;
        text-align: right;
      `}
    >
      Settings
    </p>
  );
}
