import Comment from 'src/components/Comment'

export const QUERY = gql`
  query CommentsQuery {
    comments {
      id
      name
      body
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="text-center text-gray-500">
      There are no comments yet. Be the first!
    </div>
  )
}

export const Failure = ({ error }) => (
  <div className="text-center" style={{ color: 'red' }}>
    Error: {error?.message}
  </div>
)

export const Success = ({ comments }) => {
  return (
    <div className="space-y-8">
      {comments.map((comment) => (
        <Comment comment={comment} key={comment.id} />
      ))}
    </div>
  )
}
