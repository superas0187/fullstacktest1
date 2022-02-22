import React, { useState } from 'react';
import { Button,  Typography } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { commentPost } from '../../actions/posts';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import ReactHtmlParser from 'react-html-parser';


import useStyles from './styles';

const Comment = ({ post }) => {
    const classes = useStyles();
    const [ comments, setComments ] = useState(post?.comments);
    const [ comment, setComment ] = useState('');
    const dispatch = useDispatch();
    const user = JSON.parse(localStorage.getItem('profile'));
    

    const handleClick = async () => {
   
        const newComments = await dispatch(commentPost(`${user?.result?.name}: ${comment}`, post._id));
        setComment('');
        setComments(newComments);
    };

    const handleChange = (e, editor) => {
        
        const data = editor.getData();
            setComment(data);  
    }

    

    return (
        <div >
            <div className={classes.commentOuterContainer}>
                <div className={classes.commentInnerContainer}>
                    <Typography style={{marginLeft: '10px'}} gutterBottom >Comments</Typography>
                    {comments?.map((c, i) => (
                        <Typography  className={classes.loadingPaper} gutterBottom variant="subtitle1" key={i} >
                            <strong>{c.split(': ')[0]}:</strong>
                            {ReactHtmlParser(c.split(':')[1])}
                        </Typography>
                    ))}
                </div>
                {user?.result?.name && (
                    <div style={{ width: "40%", marginRight: '10px' }} >
                        <Typography gutterBottom  >Write a comment</Typography>
                        <CKEditor editor={ClassicEditor} onChange={handleChange}   />
                        {/* <TextField rows={3} variant="outlined" multiline  label="comment" fullWidth onChange={(e) => setComment(e.target.value)} value={comment} /> */}
                            <Button fullWidth style={{ marginTop: "10px" }} disabled={!comment} color="primary" onClick={handleClick} variant="contained" >
                                Comment
                            </Button>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Comment;
