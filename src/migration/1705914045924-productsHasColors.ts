import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export class ProductsHasColors1705914045924 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'productsHasColors',
        columns: [
          {
            name: 'productId',
            type: 'int',
            isNullable: false,
          },
          {
            name: 'colorId',
            type: 'int',
            isNullable: false,
          },
        ],
      }),
      true,
    );

    await queryRunner.createForeignKey(
      'productsHasColors',
      new TableForeignKey({
        name: 'Fk5ProductId',
        columnNames: ['productId'],
        referencedColumnNames: ['id'],
        referencedTableName: 'products',
        onDelete: 'CASCADE',
      }),
    );

    await queryRunner.createForeignKey(
      'productsHasColors',
      new TableForeignKey({
        name: 'FkColorId',
        columnNames: ['colorId'],
        referencedColumnNames: ['id'],
        referencedTableName: 'colors',
        onDelete: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('productsHasColors', 'Fk5ProductId');
    await queryRunner.dropForeignKey('productsHasColors', 'FkColorId');
    await queryRunner.dropTable('productsHasColors');
  }
}
