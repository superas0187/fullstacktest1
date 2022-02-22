import React from 'react';
import { TextField, Grid } from '@material-ui/core';


const Input = ({ handleChange, type, label, name, half, autoFocus }) => (
    <Grid item xs={12} sm={half ? 6 : 12}>
        <TextField
            name={name}
            label={label}
            type={type}
            onChange={handleChange}
            required
            fullWidth
            variant="outlined"
            autoFocus={autoFocus}
           
        />
    </Grid>
);

export default Input;