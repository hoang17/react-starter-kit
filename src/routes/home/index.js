import React from 'react'
import Build from './Build'
// import Home from './Home'
// import Layout from '../../components/Layout'

async function action({ fetch }) {
  // const resp = await fetch('/graphql', {
  //   body: JSON.stringify({
  //     query: '{news{title,link,content}}',
  //   }),
  // })
  // const { data } = await resp.json()
  // if (!data || !data.news) throw new Error('Failed to load the news feed.')
  return {
    chunks: ['home'],
    title: 'Home',
    component: (
      <Build />
      // <Layout>
      //   <Home news={data.news} />
      // </Layout>
    ),
  }
}

export default action
