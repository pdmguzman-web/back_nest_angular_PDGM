import { Module } from '@nestjs/common';
import { CategoriaService } from './categoria.service.js';
import { CategoriaController } from './categoria.controller.js';
import { DatabaseModule } from '../../database/database.module.js';
import { categoriaProviders } from './categoria.provider.js';

@Module({
  imports: [DatabaseModule],
  controllers: [CategoriaController],
  providers: [...categoriaProviders, CategoriaService],
})
export class CategoriaModule {}