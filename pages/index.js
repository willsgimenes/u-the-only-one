import Head from 'next/head'
import * as style from '../styles/global'

export default function Home() {
  return (
    <div css={style.body}>
      <Head>
        <title>U the only one</title>
        <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🎸</text></svg>"/>
      </Head>

      <main css={style.background}>
        <h1 css={style.text}>
          U the only one
        </h1>
      </main>
    </div>
  )
}
