const initState = {
  review: false,
  large: false,
  dessert: false,
};

// 액션 타입 정의
const CHANGE = 'filter/CHANGE';

// reducer
export default function filter(state = initState, action) {
  switch (action.type) {
    case CHANGE:
      return {
        ...state,
        [action.payload.name]: action.payload.checked,
      };
    default:
      return state;
  }
}
