import { Request, Response } from "express";
import { AppDataSource } from "../../data-source";
import { Post } from "../entity/Post";

class PostController{


    //Save
    static postPost = async(req: Request, res:Response) =>{
        const newPost ={
            title:req.body.title,
            content:req.body.content
        };

        const post = AppDataSource.getRepository(Post).create(newPost);
        const result = await AppDataSource.getRepository(Post).save(post);
        return res.json(result);
    };

    //Get All

    static getPost = async (req: Request, res: Response) => {
        const result = await AppDataSource.getRepository(Post).find();
        return res.json(result);
    };
    

    //Get By ID
    static getPostById = async (req: Request, res: Response) => {
        const post = await AppDataSource.getRepository(Post).findOneBy({
             id: Number(req.params.id)
         });
        return res.json(post);
    };


    //Update
    static updatePost = async (req: Request, res: Response) => {
        const post = await AppDataSource.getRepository(Post).findOneBy({
             id: Number(req.params.id)
         });
         if(post){
            AppDataSource.getRepository(Post).merge(post,req.body);
            const result = await AppDataSource.getRepository(Post).save(post);
            return res.json(result);
        }
        return res.json({msg:"Post Not Found"})
    };

    //Delete
    static deletePost = async (req: Request, res: Response) => {
        const post = await AppDataSource.getRepository(Post).delete({
            id:Number(req.params.id),
        })

        return res.send(post);
    };

    
}

export default PostController;