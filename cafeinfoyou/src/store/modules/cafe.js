import { useStore } from 'react-redux';
import axios from 'axios';

const initState = {};

const INPUT = 'cafe/INP_VAL';
const REVIEW = 'cafe/REVIEW';

export default function cafe(state = initState, action) {
  if (action.type === INPUT) {
    const inputValue = action.text;
    return { ...state, text: inputValue };
  } else if (action.type === REVIEW) {
    const reviewValue = action.text;
    return {
      ...state,
      text: reviewValue,
    };
  }
  return state;
}
