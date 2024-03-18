// Pass props to your component by passing an `args` object to your story
//
// ```jsx
// export const Primary = {
//  args: {
//    propName: propValue
//  }
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

/* Original contents after running yarn rw g component Comment:

import Comment from './Comment'

export default { component: Comment }

export const Primary = {}
*/

import Comment from './Comment'

export const defaultView = () => {
  return (
    <Comment
      comment={{
        id: 1,
        name: 'Rob Cameron',
        body: 'This is the first comment!',
        createdAt: '2020-01-01T12:34:56Z',
        postId: 1,
      }}
    />
  )
}

export const moderatorView = () => {
  mockCurrentUser({
    id: 1,
    email: 'moderator@moderator.com',
    roles: 'moderator',
  })

  /* CHAPTER 7-a: Role-Based Access Control (RBAC)
  Mocking currentUser for Storybook @
  https://redwoodjs.com/docs/tutorial/chapter7/rbac#mocking-currentuser-for-storybook

  Similar to mockGraphQLQuery() and mockGraphQLMutation(),
  mockCurrentUser() is a global available in Storybook
  automatically, no need to import.

  mockCurrentUser() accepts an object and you can put
  whatever you want in there (it should be similar to what
  you return in getCurrentUser() in api/src/lib/auth.js).
  But since we want hasRole() to work properly then the
  object must have a roles key that is a string or an
  array of strings.
  */

  return (
    <Comment
      comment={{
        id: 1,
        name: 'Rob Cameron',
        body: 'This is the first comment!',
        createdAt: '2020-01-01T12:34:56Z',
        postId: 1,
      }}
    />
  )
}

export default { title: 'Components/Comment' }
