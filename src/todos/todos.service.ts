import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Todo } from "./todos.entity";
import { CreateTodoDto } from "./dtos/create-todo.dto";

@Injectable()
export class TodoService {
    constructor(@InjectRepository(Todo) private readonly todoRepository: Repository<Todo>) { }
    async create(dto: CreateTodoDto) {
        const todo = this.todoRepository.create(dto);

        return await this.todoRepository.save(todo);
    }

    findMany() {
        return this.todoRepository.find();
    }

    async update(id: number, dto: CreateTodoDto) {
        const todo = await this.todoRepository.findOne({ where: { id } });

        //check that record exists

        Object.assign(todo, dto);

        return await this.todoRepository.save(todo);
    }

    async delete(id: number) {
        const todo = await this.todoRepository.findOne({ where: { id } });

        //check that record exists

        return await this.todoRepository.remove(todo);
    }
}