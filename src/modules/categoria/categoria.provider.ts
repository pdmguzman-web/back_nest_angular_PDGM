import { DataSource } from 'typeorm';
import { Categoria } from './entities/categoria.entity.js';

export const categoriaProviders = [
  {
    provide: 'CategoriaRepository',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Categoria),
    inject: ['DATABASE_CONNECTION'],
  },
];
