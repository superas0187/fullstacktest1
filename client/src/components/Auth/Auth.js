import React, { useState } from 'react';
import useStyles from './styles';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { Container, Paper, Button, Grid, Typography } from '@material-ui/core';
import Input from './Input';
import { signin, signup } from '../../actions/auth';

const initialState = { firstName: '', lastName: '', email: '', password: '', confirmPassword: ''}


const Auth = () => { 
    const classes = useStyles();
    const [ isSignup, setIsSignup ] = useState(false);
    const [ formData, setFormData ] =useState(initialState);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData)
        if(isSignup) {
            dispatch(signup(formData, navigate))
        }else {
            dispatch(signin(formData, navigate))
        }
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value});
    };

    const switchSign = () => {
        setFormData(initialState);
        setIsSignup((prevIsSignup) => !prevIsSignup);
    };

  return (
    <Container component="main" maxWidth="xs">
            <Paper className={classes.paper} elevetion={3}>
                
                <Typography variant="h5">{isSignup ? 'Sign Up' : 'Sign In'}</Typography>
                <form className={classes.form} onSubmit={handleSubmit}>
                    <Grid container spacing={2} >
                        { isSignup && (
                        <>
                            <Input  name="firstName"  label="Firs Name" handleChange={handleChange} autoFocus half ></Input>
                            <Input name="lastName" label="Last Name" handleChange={handleChange} half ></Input>
                        </>
                        )}
                        <Input name="email" label="Email address" handleChange={handleChange} type="email"  autoFocus ></Input>
                        <Input type="password" name="password" label="Password" handleChange={handleChange}  ></Input>
                        { isSignup && <Input name="confirmPassword" label="Repeat Password" handleChange={handleChange} type="password" /> }
                    </Grid>
                    <Button type="submit" fullWidth color="primary" variant="contained" className={classes.submit} >
                        { isSignup ? 'Sign Up' : 'Sign In'}
                    </Button>
                    <Grid container justifyContent="flex-end">
                        <Grid item >
                            <Button onClick={switchSign}>
                                { isSignup ? 'Already have an account? Sign In' : "Don't have an accoutn? Sign Up" }
                            </Button>
                        </Grid>

                    </Grid>
                </form>
            </Paper>
        </Container>
  )
}

export default Auth