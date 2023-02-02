const initState = {};

const INPUT = 'cafe/INP_VAL';

export default function cafe(state = initState, action) {
  if (action.type === INPUT) {
    const inputValue = action.text;
    return { ...state, text: inputValue };
  }
  return state;
}
