import { css } from "@emotion/core";

const PRIMARY_COLOR = 'rgb(0, 0, 0)'
const SECONDARY_COLOR = 'rgb(255, 255, 255)'

export const body = css`
    padding: 0;
    margin: 0;
`

export const background = css`
    background: ${PRIMARY_COLOR};
    height: 100vh;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`

export const text = css`
    color: ${SECONDARY_COLOR};
    font-size: 5em;
    text-align: center;
`