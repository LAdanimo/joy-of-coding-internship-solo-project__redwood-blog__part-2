import { MetaTags } from '@redwoodjs/web'

import ArticlesCell from 'src/components/ArticlesCell'

const HomePage = () => {
  return (
    <>
      <MetaTags
        title="Dani's Redwood Blog"
        description="Dani does the Redwood tutorial!"
      />
      <div className="mb-10 text-2xl font-black">
        Welcome, Traveler&nbsp;
        <em>
          <strong>!</strong>
        </em>
      </div>
      <ArticlesCell />
    </>
  )
}

export default HomePage
