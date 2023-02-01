import { useStore } from 'react-redux';
import axios from 'axios';

const initState = {};

export default function cafe(state = initState, action) {
  if (action.type === 'INP_VAL') {
    const inputValue = action.text;
    return { ...state, text: inputValue };
  }
  return state;
}
