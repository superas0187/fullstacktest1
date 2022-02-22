import React,{ useEffect, useState } from 'react'
import Form from '../Form/Form';
import Posts from '../Posts/Posts';
import { useDispatch } from 'react-redux';
import { getPosts } from '../../actions/posts';
import { Container, Grow, Grid } from '@material-ui/core';
const Home = () => {
    const [ currentId, setCurrentId ] = useState(0);
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(getPosts());
    }, [dispatch])
  

    return (
        <Grow in>
            <Container>
                <Grid container justifyContent='space-between' alignItems='stretch' spacing={3}>
                    <Grid item xs={12} sm={7}>
                        <Posts  setCurrentId={setCurrentId} currentId={currentId} />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Form currentId={currentId} setCurrentId={setCurrentId}/>
                    </Grid>
                </Grid>
            </Container>
        </Grow>
    );
};
export default Home