import Head from 'next/head'
import Link from 'next/link'
import Upload from 'rc-upload'

import { meta } from '../src/api/meta'
import {
  Container,
  Header,
  Body,
  Footer,
  UploadButton,
} from '../src/lib/styles/styled'

export default function HomePage() {
  return (
    <>
      <Head>
        <title>{meta.title}</title>
      </Head>
      <Container>
        <Link href="/">
          <Header className="block accent">
            <h1>💌 AdventMail</h1>
          </Header>
        </Link>

        {/* Here goes Animation Wrapper */}
        <>
          <Body className="block fixed">
            <center className="i-used-center-tag-forgive-me-please-dont-kill-me">
              <h2>Upload .csv file</h2>
              <Upload>
                <UploadButton className="block accent" type="button">
                  Upload
                </UploadButton>
              </Upload>
            </center>
          </Body>
        </>

        <Footer className="block accent fixed">This is the footer.</Footer>
      </Container>
    </>
  )
}
