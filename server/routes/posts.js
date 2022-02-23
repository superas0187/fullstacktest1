import express from 'express';
import {  getPosts, createPost, updatePost, deletePost,commentPost } from '../controllers/posts.js';
import auth from "../middleware/auth.js";
const router = express.Router();


router.get('/', getPosts);
router.post('/',auth, createPost);
router.patch('/:id',auth, updatePost);
router.delete('/:id',auth, deletePost);
router.post('/:id/commentPost', commentPost);


export default router;