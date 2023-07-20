import { Controller, Get, Post, Body, Patch, Param, Delete,Put } from '@nestjs/common';
import { PostsService } from './posts.service';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Post()
  create(@Body() createPostDto: CreatePostDto) {
    return this.postsService.create(createPostDto);
  }

  @Get()
  findAll() {
    return this.postsService.findAll();
  }

  @Get(':name')
  findOne(@Param('name') name: string) {
    return this.postsService.findOne(name);
  }

  @Put(':name')
  update(@Param('name') name: string, @Body() updatePostDto: UpdatePostDto) {
    return this.postsService.update(name, updatePostDto);
  }

  @Delete(':name')
  remove(@Param('name') name: string) {
    return this.postsService.remove(name);
  }
}
