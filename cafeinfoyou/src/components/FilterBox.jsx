import * as React from 'react';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { cyan, green, indigo, pink, red } from '@mui/material/colors';
import { useSelector, useDispatch } from 'react-redux';

export default function FilterBox() {
  const dispatch = useDispatch();
  const state = useSelector((state) => {
    return state.filter;
  });

  return (
    <>
      <FormControlLabel
        control={
          <Checkbox
            size="small"
            checked={state.review}
            onChange={() => {
              dispatch({
                type: 'filter/CHANGE',
                payload: { name: 'review', checked: !state.review },
              });
            }}
            name="리뷰순"
            sx={{
              color: indigo['A700'],
              '&.Mui-checked': {
                color: indigo[600],
              },
              width: '30px',
            }}
          />
        }
        label="리뷰순"
        sx={{
          borderRadius: 2,
          bgcolor: indigo[50],
          ml: 2.7,
          mt: 3,
          pr: 0.5,
          pt: 0,
          width: '80px',
        }}
      />
      <FormControlLabel
        control={
          <Checkbox
            size="small"
            checked={state.large}
            onChange={() => {
              dispatch({
                type: 'filter/CHANGE',
                payload: { name: 'large', checked: !state.large },
              });
            }}
            name="대형"
            sx={{
              color: green['A200'],
              '&.Mui-checked': {
                color: green[600],
              },
              width: '30px',
            }}
          />
        }
        label="대형"
        sx={{
          borderRadius: 2,
          bgcolor: cyan[50],
          mt: 3,
          pr: 1,
        }}
      />
      <FormControlLabel
        control={
          <Checkbox
            size="small"
            checked={state.dessert}
            onChange={() => {
              dispatch({
                type: 'filter/CHANGE',
                payload: { name: 'dessert', checked: !state.dessert },
              });
            }}
            name="디저트"
            sx={{
              color: pink['A200'],
              '&.Mui-checked': {
                color: pink[600],
              },
              width: '30px',
            }}
          />
        }
        label="디저트"
        sx={{
          borderRadius: 2,
          bgcolor: red[50],
          mt: 3,
          pr: 1,
        }}
      />
    </>
  );
}
