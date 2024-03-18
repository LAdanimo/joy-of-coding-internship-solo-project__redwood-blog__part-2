import Article from 'src/components/Article'

export const QUERY = gql`
  query ArticleQuery($id: Int!) {
    article: post(id: $id) {
      id
      title
      body
      createdAt
      user {
        name
      }
    }
  }
`

export const Loading = () => {
  return <div className="text-center text-gray-500">Loading . . .</div>
}

export const Empty = () => {
  return (
    <div className="text-center text-gray-500">
      <p>
        This post doesn't exist yet&nbsp;
        <em>
          <strong>!?</strong>
        </em>
      </p>
      <p>
        How did you get here&nbsp;
        <em>
          <strong>?!</strong>
        </em>
      </p>
    </div>
  )
}

export const Failure = ({ error }) => <div>Error: {error.message}</div>

export const Success = ({ article }) => {
  return <Article article={article} />
}
