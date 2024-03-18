import Comment from 'src/components/Comment'

export const QUERY = gql`
  query CommentsQuery($postId: Int!) {
    comments(postId: $postId) {
      id
      name
      body
      postId
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
