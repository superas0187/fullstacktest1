import React from 'react';
import { Card, Button, Typography, Divider } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { deletePost } from '../../../actions/posts'; 
import Comment from '../../Comments/Comment';
import moment from 'moment';
import useStyles from './styles';



const Post = ({post, setCurrentId}) => {
  const dispatch = useDispatch()
  const user = JSON.parse(localStorage.getItem('profile'));
  const classes = useStyles();
  
 

  return (
    <Card className={classes.card} raised elevation={6} >
        <div  >
          <Typography style={{marginLeft: '10px'}} variant="h6">{post.name}</Typography>
          <Typography style={{marginLeft: '10px'}} variant="body2">{moment(post.createdAt).fromNow()}</Typography>
          <Divider style={{ margin: '10px 0' }} />
          <Typography style={{marginLeft: '10px'}} variant="h6" gutterBottom>{post.title}</Typography>
          <Typography style={{marginLeft: '10px'}} variant="body1" color="textSecondary" component="p">{post.message}</Typography>
        </div> 
          <Divider style={{ margin: '10px 0' }} />
          <Comment post={post}/>  
        {(user?.result?.googleId === post?.creator || user?.result?._id === post?.creator) && (
        <div>
          <Button size="small" color="secondary" onClick={() => dispatch(deletePost(post._id))}>
             Delete
          </Button>
          <Button onClick={(e) => { e.stopPropagation(); setCurrentId(post._id);}} style={{ color: 'black' }} size="small">
            Edit
          </Button>
        </div>
        )}  
    </Card>
  );
};

export default Post



