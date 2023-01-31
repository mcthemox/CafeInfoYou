import * as React from 'react';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { cyan, green, indigo, pink, red } from '@mui/material/colors';

import { useSelector, useDispatch } from 'react-redux';
import { height } from '@mui/system';


export default function FilterBox() {
  const dispatch = useDispatch();
  const state = useSelector((state) => {
    return state.filter;
  });

  return (
    <FormControl sx={{ m: 2, }} component="fieldset" variant="standard">
      {/* <FormLabel component="legend">Assign responsibility</FormLabel> */}
      <FormGroup sx={{ flexDirection: 'row' }} >
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
            border: 3,
            borderColor: indigo['A700'],
            borderRadius: 2,
            bgcolor: indigo[50],
            pr: 0.5,
            pt: 0,
            width: '75px'
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
