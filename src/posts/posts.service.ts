import { Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { Post, PostDocument } from 'src/schemas/post.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class PostsService {
  constructor(@InjectModel(Post.name) private postModel: Model<PostDocument>) {}

 async create(createPostDto: CreatePostDto):Promise<Post> {
    return new this.postModel(createPostDto).save();
 }

  findAll() {
    return this.postModel.find();
  }

  findOne(name: string) {
    return this.postModel.findOne({name});
  }

  update(name: string, updatePostDto: UpdatePostDto) {
    return this.postModel.updateOne({name},{$set:{...updatePostDto}});
  }

  remove(name: string) {
    return this.postModel.deleteOne({name});
  }
}
