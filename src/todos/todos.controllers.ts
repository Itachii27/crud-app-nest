import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { TodoService } from "./todos.service";
import { CreateTodoDto } from "./dtos/create-todo.dto";

@Controller('todos')
export class TodosController {
    constructor(private readonly todoservice: TodoService) { }

    @Post()
    create(@Body() dto: CreateTodoDto) {
        return this.todoservice.create(dto);
    }

    @Get()
    findMany() {
        return this.todoservice.findMany();
    }

    @Put(':id')
    update(@Param('id') id: number, @Body() dto: CreateTodoDto) {
        return this.todoservice.update(id, dto);
    }

    @Delete(':id')
    delete(@Param('id') id: number) {
        return this.todoservice.delete(id);
    }
}