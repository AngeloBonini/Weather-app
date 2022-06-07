/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import { css } from "@emotion/react";
// import * as React from 'react'

export function SearchBar() {
  return (
    <p className="white-text"
      css={css`
        padding-right: 10px;
        font-size: 24px;
        font-weight: 700;
        font-style: normal;
        text-align: right;
      `}

    >
      Search
    </p>
  );
}
