import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export class ProductsHasMedia1705914265144 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'productsHasMedia',
        columns: [
          {
            name: 'productId',
            type: 'int',
            isNullable: false,
          },
          {
            name: 'mediaId',
            type: 'int',
            isNullable: false,
          },
        ],
      }),
      true,
    );

    await queryRunner.createForeignKey(
      'productsHasMedia',
      new TableForeignKey({
        name: 'Fk6ProductId',
        columnNames: ['productId'],
        referencedColumnNames: ['id'],
        referencedTableName: 'products',
        onDelete: 'CASCADE',
      }),
    );

    await queryRunner.createForeignKey(
      'productsHasMedia',
      new TableForeignKey({
        name: 'FkMediaId',
        columnNames: ['mediaId'],
        referencedColumnNames: ['id'],
        referencedTableName: 'media',
        onDelete: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('productsHasMedia', 'Fk6ProductId');
    await queryRunner.dropForeignKey('productsHasMedia', 'FkMediaId');
    await queryRunner.dropTable('productsHasMedia');
  }
}
