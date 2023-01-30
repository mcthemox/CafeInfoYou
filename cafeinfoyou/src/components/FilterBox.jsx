import * as React from 'react';
import Box from '@mui/material/Box';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { pink } from '@mui/material/colors';

export default function FilterBox() {
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
  // const error = [gilad, jason, antoine].filter((v) => v).length !== 2;

  return (
    <Box>
      <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
        <FormLabel component="legend">Assign responsibility</FormLabel>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox checked={리뷰많은순} onChange={handleChange} name="리뷰많은순" color="secondary" />
            }
            label="리뷰많은순"
          />
          <FormControlLabel
            control={
              <Checkbox checked={대형} onChange={handleChange} name="대형" color="success" />
            }
            label="대형"
          />
          <FormControlLabel
            control={
              <Checkbox checked={디저트} onChange={handleChange} name="디저트" sx={{
                color: pink[800],
                '&.Mui-checked': {
                  color: pink[600],
                },
              }} />
            }
            label="디저트"
          />
        </FormGroup>
      </FormControl>
      {/* <FormControl
        required
        error={error}
        component="fieldset"
        sx={{ m: 3 }}
        variant="standard"
      >
        <FormLabel component="legend">Pick two</FormLabel>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox checked={gilad} onChange={handleChange} name="gilad" />
            }
            label="Gilad Gray"
          />
          <FormControlLabel
            control={
              <Checkbox checked={jason} onChange={handleChange} name="jason" />
            }
            label="Jason Killian"
          />
          <FormControlLabel
            control={
              <Checkbox checked={antoine} onChange={handleChange} name="antoine" />
            }
            label="Antoine Llorca"
          />
        </FormGroup>
        <FormHelperText>You can display an error</FormHelperText>
      </FormControl> */}
    </Box>
  );
}