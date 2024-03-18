import Article from 'src/components/Article'

export const QUERY = gql`
  query BlogPostsQuery {
    articles: posts {
      id
      title
      body
      createdAt
    }
  }
`

export const Loading = () => {
  return <div className="text-center text-gray-500">Loading . . .</div>
}

export const Empty = () => {
  return (
    <div className="text-center text-gray-500">
      There are no posts yet. Check back soon!
    </div>
  )
}

export const Failure = ({ error }) => <div>Error: {error.message}</div>

export const Success = ({ articles }) => {
  return (
    <div className="space-y-10">
      {articles.map((article) => (
        <Article article={article} key={article.id} summary={true} />
      ))}
    </div>
  )
}
