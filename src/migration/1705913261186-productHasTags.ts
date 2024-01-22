import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export class ProductHasTags1705913261186 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'productHasTags',
        columns: [
          {
            name: 'productId',
            type: 'int',
            isNullable: false,
          },
          {
            name: 'tagId',
            type: 'int',
            isNullable: false,
          },
        ],
      }),
      true,
    );

    await queryRunner.createForeignKey(
      'productHasTags',
      new TableForeignKey({
        name: 'Fk4ProductId',
        columnNames: ['productId'],
        referencedColumnNames: ['id'],
        referencedTableName: 'products',
        onDelete: 'CASCADE',
      }),
    );

    await queryRunner.createForeignKey(
      'productHasTags',
      new TableForeignKey({
        name: 'FkTagId',
        columnNames: ['tagId'],
        referencedColumnNames: ['id'],
        referencedTableName: 'tags',
        onDelete: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('productHasTags', 'Fk4ProductId');
    await queryRunner.dropForeignKey('productHasTags', 'FkTagId');
    await queryRunner.dropTable('productHasTags');
  }
}
