import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose'
import { Post } from './interfaces/post.interface';
import { CreatePostDto } from './dto/create-post.dto'

@Injectable()
export class BlogService {
    constructor(@InjectModel('Post') private readonly postModel: Model<Post>) {}

    async addPost(createPostDto: CreatePostDto): Promise<Post> {
        const newPost = await this.postModel(createPostDto);
        return newPost.save();
    }
}
