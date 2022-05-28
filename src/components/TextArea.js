import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function TextArea(props) {
//   const [value, setValue] = React.useState('Controlled');

//   const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setValue(event.target.value);
//   };

  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '80ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
      <TextField
          id="outlined-multiline-static"
          label="Summary"
          multiline
          rows={10}
        //   defaultValue="Default Value"
          placeholder="summary..."
        />
      </div>
    </Box>
  );
}
