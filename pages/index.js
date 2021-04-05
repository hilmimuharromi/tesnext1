import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function Home({ dataTest }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>[Your Self Introduction]</p>
        <p>
          (This is a sample website - you’ll be building a site like this in{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        {JSON.stringify(dataTest)}
      </section>
    </Layout>
  )
}

export async function getServerSideProps(context) {
  const res = await fetch(`https://tesnext1.vercel.app/api/tes`)
  const data = await res.json()
  console.log("data fetch", res)

  if (!data) {
    return {
      notFound: true,
    }
  }

  return {
    props: {dataTest: data}, // will be passed to the page component as props
  }
}
