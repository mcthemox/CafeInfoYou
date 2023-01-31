import * as React from 'react';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
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
    <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
      {/* <FormLabel component="legend">Assign responsibility</FormLabel> */}
      <FormGroup sx={{ flexDirection: 'row' }}>
        <FormControlLabel
          control={
            <Checkbox
              checked={state.review}
              onChange={() => {
                dispatch({
                  type: 'filter/CHANGE',
                  payload: { name: 'review', checked: !state.review },
                });
              }}
              name="리뷰많은순"
              sx={{
                color: indigo['A700'],
                '&.Mui-checked': {
                  color: indigo[600],
                },
              }}
            />
          }
          label="리뷰많은순"
          sx={{
            border: 3,
            borderColor: indigo['A700'],
            borderRadius: 2,
            bgcolor: indigo[50],
            pr: 1,
            fontSize: '10px',
          }}
        />
        <FormControlLabel
          control={
            <Checkbox
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
              }}
            />
          }
          label="대형"
          sx={{
            border: 3,
            borderColor: green['A200'],
            borderRadius: 2,
            bgcolor: cyan[50],
            pr: 1,
          }}
        />
        <FormControlLabel
          control={
            <Checkbox
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
              }}
            />
          }
          label="디저트"
          sx={{
            border: 3,
            borderColor: pink['A200'],
            borderRadius: 2,
            bgcolor: red[50],
            pr: 1,
          }}
        />
      </FormGroup>
    </FormControl>
  );
}
