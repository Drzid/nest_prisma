import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UserService {
    constructor(private dbService: PrismaService){}

    /**
     * get all user
     * @returns 
     */
    async findAll(){
        return await this.dbService.user.findMany();
    }

    /**
     * create user
     * @param data 
     */
    async createData(data: CreateUserDto){
        return await this.dbService.user.create({
            data
        });
    }

/**
 * Update User
 * @param id 
 * @param data 
 * @returns 
 */
    async updateData(id:number,data:CreateUserDto){
        return await this.dbService.user.update({
            data,
            where:{
                id
            }            
        })
    }
  

    /**
    * Delete User
    * @param id 
    */
    async deleteUser(id:number){
        return await this.dbService.user.delete({
            where:{
                id
            }            
        })
    }
    
}