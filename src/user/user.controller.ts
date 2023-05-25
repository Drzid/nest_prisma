import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('user')
export class UserController {
    constructor(private userService:UserService){}
/**
 * Get User
 * @returns 
 */
    @Get()
    async users(){
    return await this.userService.findAll();
}

/**
 * Post User
 * @param body 
 * @returns 
 */
    @UsePipes(ValidationPipe)
    @Post()
    async createUser(@Body() body : CreateUserDto){
    return await this.userService.createData(body);
}

/**
 * Update User
 * @param id 
 * @param body 
 * @returns 
 */
    @UsePipes(ValidationPipe)
    @Patch('/:id')
    async updateUser(@Param('id', ParseIntPipe) id, @Body() body : CreateUserDto){
    return await this.userService.updateData(id, body);
    }

    /**
    * Delete User
    * @param id 
    * @returns 
    */
    @UsePipes(ValidationPipe)
    @Delete('/:id')
    async deleteUser(@Param('id', ParseIntPipe) id){
        return await this.userService.deleteUser(id);
        }
    }


