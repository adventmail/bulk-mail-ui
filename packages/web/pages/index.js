import Head from 'next/head'

import { meta } from '../src/api/meta'
import { Container } from '../src/lib/styled'

export default function HomePage() {
  return (
    <>
      <Head>
        <title>{meta.title}</title>
      </Head>
      <Container>
        <h1>Hello, world!</h1>
      </Container>
    </>
  )
}
