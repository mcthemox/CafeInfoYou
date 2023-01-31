import * as React from 'react';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { cyan, green, indigo, pink, red } from '@mui/material/colors';
import { useSelector } from 'react-redux';

export default function FilterBox() {
  // const list = useSelector((state) => {
  //   return state.filter.list;
  // })
  const [state, setState] = React.useState({
    리뷰많은순: false,
    대형: false,
    디저트: false,
  });

  const handleChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    });
  };

  const { 리뷰많은순, 대형, 디저트 } = state;

  return (
    <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
      {/* <FormLabel component="legend">Assign responsibility</FormLabel> */}
      <FormGroup sx={{ flexDirection: 'row' }}>
        <FormControlLabel
          control={
            <Checkbox
              checked={리뷰많은순}
              onChange={handleChange}
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
              checked={대형}
              onChange={handleChange}
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
              checked={디저트}
              onChange={handleChange}
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
