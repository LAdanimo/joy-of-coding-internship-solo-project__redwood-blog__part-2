export const standard = () => ({
  comments: [
    {
      id: 1,
      name: 'Rob Cameron',
      body: 'First comment',
      createdAt: '2020-01-02T12:34:56Z',
    },
    {
      id: 2,
      name: 'David Price',
      body: 'Second comment',
      createdAt: '2020-02-03T23:00:00Z',
    },
  ],
})

/* Original contents:

There's no Prisma model for a Comment yet,
so Redwood took a guess that your model
would at least contain an id field and
just used that for the mock data.
- See: https://redwoodjs.com/docs/tutorial/chapter6/multiple-comments#storybook

// Define your own mock data here:
export const standard = ( vars, { ctx, req } ) => ({
  comments: [{ id: 42 }, { id: 43 }, { id: 44 }],
})
*/
