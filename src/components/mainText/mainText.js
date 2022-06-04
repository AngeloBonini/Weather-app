/** @jsxRuntime classic */
/** @jsx jsx */
import * as React from "react";
import { css} from "@emotion/react";
import { jsx } from "@emotion/react";
export function MainText(){

    return(
        <p
          css={css`
            opacity: 1;
            color: rgba(255, 255, 255, 1);
            font-size: 44px;
            font-weight: 500;
            font-style: normal;
            letter-spacing: 0px;
          `}
        >
          Pick a day to see the full forecast
        </p>
    )
}