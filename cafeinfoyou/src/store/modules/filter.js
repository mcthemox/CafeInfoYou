const initState = {
  list: [
    {
      id: 0,
      text: '리뷰많은순',
      ckeck: false,
    },
    {
      id: 1,
      text: '대형',
      ckeck: false,
    },
    {
      id: 2,
      text: '디저트',
      ckeck: false,
    },
  ],
};

export default function filter(state = initState, action) {
  return state;
}
