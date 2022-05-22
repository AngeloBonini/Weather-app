/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import { css } from "@emotion/react";
// import * as React from 'react'

export function SearchBar() {
  return (
    <p
      css={css`
        padding-right: 10px;
        opacity: 1;
        color: rgba(255, 255, 255, 1);
        font-size: 24px;
        font-weight: 700;
        font-style: normal;
        letter-spacing: 0px;
        text-align: right;
      `}

    >
      Search
    </p>
  );
}
