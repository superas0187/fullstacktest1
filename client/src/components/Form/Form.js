import React,{ useState, useEffect } from 'react'
import {  useNavigate } from 'react-router-dom';
import { TextField, Paper, Typography, Button } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { createPost, updatePost }  from '../../actions/posts';


const Form = ({ currentId, setCurrentId }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [postData, setPostData]  = useState({title: '', message: ''});
  const post = useSelector((state) => (currentId ? state.posts.find((message) => message._id === currentId) : null));
  const user = JSON.parse(localStorage.getItem('profile'));

  useEffect(() => {
    if (!post?.title) clear();
    if (post) setPostData(post);
  }, [post]);

  const clear = () => {
    setCurrentId(0);
    setPostData({ title: '', message: '' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (currentId === 0) {
      dispatch(createPost({...postData, name: user?.result?.name }, navigate));
      clear();
    } else {
      dispatch(updatePost( currentId, {...postData, name: user?.result?.name }));
      clear();
    }
  };

  if (!user?.result?.name) {
    return (
      <Paper  elevation={6}>
        <Typography variant="h6" align="center">
          Please Sign In to create your own post and like other's posts.
        </Typography>
      </Paper>
    );
  }

  return (
    <Paper>
      {user?.result?.name && (
        <form onSubmit={handleSubmit}>
        <Typography variant="h6">{currentId ? 'Ediding' : 'Creating' } a Post</Typography>
        <TextField name="title" variant="outlined" label="Title" fullWidth value={postData.title} onChange={(e) => setPostData({...postData, title: e.target.value})} />
        <TextField multiline rows={3} name="message" variant="outlined" label="Message" fullWidth value={postData.message} onChange={(e) => setPostData({...postData, message: e.target.value})} />
        <Button  variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
      </form>
      )}
    </Paper>
  )
}

export default Form

