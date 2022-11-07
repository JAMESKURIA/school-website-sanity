export default {
  name: 'vote',
  title: 'Vote',
  type: 'document',
  readOnly: true,
  fields: [
    {
      name: 'candidate',
      title: 'Candidate',
      type: 'reference',
      to: { type: 'candidate' },
    },
    // {
    //   name: 'voter',
    //   title: 'Voter',
    //   type: 'reference',
    //   to: { type: 'voter' },
    // },
  ],


}
