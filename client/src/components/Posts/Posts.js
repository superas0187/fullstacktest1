import React from 'react';
import { useSelector } from 'react-redux';
import Post from './Post/Post';
import { Grid} from '@material-ui/core';

const Posts = ({ setCurrentId, currentId }) => {
  
  
  const posts = useSelector((state) => state.posts);

  

  console.log(posts);
  return (
    <div>
      {!posts.length ? 'isLoding' : (
      <Grid>
        {posts.map((post) => (
          <Grid key={post._id} >
            <Post post={post}  setCurrentId={setCurrentId} currentId={currentId} />
          </Grid>
        ))}
      </Grid>
    )}
    </div>
  )
}

export default Posts