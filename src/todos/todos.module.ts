import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm';
import { Todo } from './todos.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Todo])],
})
export class TodosModule {}