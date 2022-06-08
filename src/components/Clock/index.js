/** @jsxRuntime classic */
/** @jsx jsx */

import { useState, useEffect } from "react";
import { jsx } from "@emotion/react";
import { css } from "@emotion/react";

export function Clock({ format12h }) {
  const [now, setNow] = useState(new Date());
  useEffect(() => {
    setInterval(() => setNow(new Date()), 1000);
  }, []);
  const time = {
    hour: "numeric",
    minute: "numeric",
    hour12: format12h,
  };

  return (
    <div
      css={css`
        color: rgba(255, 255, 255, 1);
        font-size: 32px;
        font-weight: 500;
        font-style: normal;
        letter-spacing: 0px;
        text-align: right;
      `}
    >
      {now.toLocaleString("en-US", time)}
    </div>
  );
}
