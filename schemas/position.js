export default {
  name: 'position',
  title: 'Position',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'candidates',
      title: 'Candidates',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'candidate' } }],
    },
  ],
}
