import Layout from '../components/Layout.component'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
