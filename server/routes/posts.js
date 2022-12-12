import { Router } from "express";
import { createPost, getAll, getById, getMyPosts, removePost, updatePost } from "../controllers/posts.js";
import { checkAuth } from "../utils/checkAuth.js";

const router = new Router();

router.post('/', checkAuth, createPost)
router.get('/', getAll)
router.get('/:id', getById)
router.get('/user/me', checkAuth, getMyPosts)
router.get('/:id', checkAuth, removePost)
router.put('/:id', checkAuth, updatePost)


export default router;