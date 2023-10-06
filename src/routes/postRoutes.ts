import { Router } from "express";
import PostController from "../controller/PostController";

const router = Router ();
router.post("/post", PostController.postPost);

router.get("/get", PostController.getPost);

router.get("/get/:id", PostController.getPostById);

router.put("/update/:id", PostController.updatePost);

router.delete("/delete/:id", PostController.deletePost);

export default router;