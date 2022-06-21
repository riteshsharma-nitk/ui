import { Button, Stack, TextField } from '@mui/material'
import React, { useState } from 'react'


function Upc() {

    const [formData, setFormData] = useState({
    upc : "",
    store : "",
    state : ""
  });

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name] : event.target.value })
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    setFormData({
      upc : "",
    store : "",
    state : ""
    });
  };

  return (
    <Stack component="form" onSubmit={handleSubmit} direction="column" spacing={2}>
          <TextField
              margin="normal"
              required
              fullWidth
              type="text"
              id="upc"
              label="UPC"
              name="upc"
              value={formData.upc}
              onChange={handleChange}
              autoFocus
            />

           <TextField
              margin="normal"
             
              fullWidth
              type="text"
              id="state"
              label="State"
              name="state"
              value={formData.state}
              onChange={handleChange}
              autoFocus
            />

           <TextField
              margin="normal"
             
              fullWidth
              type="text"
              id="store"
              label="Store"
              name="store"
              value={formData.store}
              onChange={handleChange}
              autoFocus
            />

           

<Button sx={{
        backgroundColor:"#1A2027"
      }} type="submit" variant="contained">Submit</Button>
    </Stack>
  )
}

export default Upc