import { Box, Button, FormControl, InputLabel, MenuItem, Select, Stack, TextField } from '@mui/material';
import {useState} from 'react'

export default function BasketAndConditions() {

  const [dateType, setDateType] = useState("");
  const [formData, setFormData] = useState({
    basketId : "",
    date : "",
    hourLowerBound : "",
    hourUpperBound : "",
    dateLowerBound : "",
    dateUpperBound : ""
  });

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name] : event.target.value })
  };

 const handleShowHide = (event) => {
     setDateType(event.target.value);
    
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    setFormData({
      basketID : "",
      date : "",
      hourLowerBound : "",
      hourUpperBound : "",
      dateLowerBound : "",
     dateUpperBound : ""
    });
  };

  return (
    <Stack component="form" onSubmit={handleSubmit} direction="column" spacing={2}>

      <TextField
              margin="normal"
              required
              fullWidth
              type="text"
              id="basketId"
              label="Basket Id"
              name="basketId"
              value={formData.basketID}
              onChange={handleChange}
              autoFocus
            />
    
    <FormControl sx={{minWidth: "100%" }}>
        <InputLabel id="dateType">Day Type</InputLabel>
        <Select
          required
          fullWidth
          labelId="dateType"
          id="dateType"
          value={dateType}
          label="Day Type"
          onChange={handleShowHide}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value="single">For one day</MenuItem>
          <MenuItem value="multi">For multiple Days</MenuItem>
          
        </Select>
        </FormControl>
    
    

      { dateType === "single" && (

          <div>
          <TextField 
              margin="normal"
              required
              fullWidth
              id="date"
              label="Date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              type="date"
              InputLabelProps={{
                shrink: true,
              }}
              autoFocus
            />
            
           
            <Box display="flex" flexDirection={{xs:"column", sm:"row"}} gap={2} >
            <TextField
              margin="normal"
              required
              fullWidth
              id="hourLowerBound"
              label="Hour lower bound"
              name="hourLowerBound"
              value={formData.hourLowerBound}
              onChange={handleChange}
              autoFocus
             
            />
              <TextField
              margin="normal"
              required
              fullWidth
              id="hourUpperBound"
              label="Hour upper bound"
              name="hourUpperBound"
              value={formData.hourUpperBound}
              onChange={handleChange}
              autoFocus
            />
           
              
           </Box>
           </div>
        
            )
            
          }
         

      
      { dateType === "multi" && (
        
        <Box display="flex" flexDirection={{xs:"column", sm:"row"}} gap={2}>
            <TextField
              margin="normal"
              required
              fullWidth
              type="date"
              id="dateLowerBound"
              label="Date lower bound"
              name="dateLowerBound"
              value={formData.dateLowerBound}
              onChange={handleChange}
              autoFocus
              InputLabelProps={{
                shrink: true,
              }}
             
            />
              <TextField
              margin="normal"
              required
              fullWidth
              type="date"
              id="dateUpperBound"
              label="Date upper bound"
              name="dateUpperBound"
              value={formData.dateUpperBound}
              onChange={handleChange}
              autoFocus
              InputLabelProps={{
                shrink: true,
              }}
            />
           
              
           </Box>
          
        
            
            
          
      )}

      

      <Button sx={{
        backgroundColor:"#1A2027"
      }} type="submit" variant="contained">Submit</Button>
     
     
      
    </Stack>
  )
}
