import React, {useState} from 'react'

import TriggerAndUpc from './TriggerAndUpc';
import BasketAndConditions from './BasketAndConditions';
import Upc from './Upc';
import BasketAndUpc from './BasketAndUpc';
import { Box, FormControl, InputLabel, MenuItem, Select } from '@mui/material';


export default function AuditParser() {
  const [option, setOption] = useState('');

  const handleChange = (event) => {
     setOption(event.target.value);
   
  };


  return (
    <Box sx={{m:4, display:"flex", justifyContent:"center"}}>

      <FormControl sx={{ m: 1, minWidth: "50%" }}>
        <InputLabel id="auditType">Audit by</InputLabel>
        <Select
          fullWidth
          labelId="auditType"
          id="auditType"
          value={option}
          label="Audit by"
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value="upc">UPC : get recent triggers based on upc</MenuItem>
          <MenuItem value="trigger">Trigger Id and UPC : get recent audit based on trigger id and upc</MenuItem>
          <MenuItem value="basket">Basket Id and UPC : get recent audit based on basket id and upc</MenuItem>
          <MenuItem value="basketAndCondition">Basket Id and Conditions : get recent audit based on basket id and conditions</MenuItem>
        </Select>

        { option === "upc" && <Upc/> }

        { option === "trigger" && <TriggerAndUpc/> }

        { option === "basket" && <BasketAndUpc/> }

        { option === "basketAndCondition" && <BasketAndConditions/> }  

        
      </FormControl>
    
</Box>
  )

}

 