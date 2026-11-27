import { Categoria } from './entities/categoria.entity.js';
export const categoriaProviders = [
    {
        provide: 'CategoriaRepository',
        useFactory: (dataSource) => dataSource.getRepository(Categoria),
        inject: ['DATABASE_CONNECTION'],
    },
];
//# sourceMappingURL=categoria.provider.js.map