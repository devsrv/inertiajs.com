import React from 'react'
import { A, H1, Layout, P } from '@/Components'

const meta = {
  title: 'inertia-progress@v0.1.2',
}

const Page = () => {
  return (
    <>
      <H1>inertia-progress@v0.1.2</H1>
      <div className="-mt-8 mb-12 text-base font-medium text-gray-600">Published on September 24, 2020</div>
      <P>
        Prevent progress from starting if the "start" event was cancelled (
        <A href="https://github.com/inertiajs/progress/commit/1acfcc87c619120bc2c3ad6782c4881faa09ddb7">commit</A>).
      </P>
    </>
  )
}

Page.layout = page => <Layout children={page} meta={meta} />

export default Page