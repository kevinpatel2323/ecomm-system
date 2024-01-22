import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export class Variants1705747599426 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'variants',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'productId',
            type: 'int',
            isNullable: false,
          },
          {
            name: 'itemPrice',
            type: 'int',
            isNullable: false,
          },
          {
            name: 'currency',
            type: 'int',
            isNullable: false,
          },
          {
            name: 'SKU',
            type: 'int',
            isNullable: false,
          },
          {
            name: 'createdAt',
            type: 'timestamp',
            default: 'CURRENT_TIMESTAMP',
          },
          {
            name: 'updatedAt',
            type: 'timestamp',
            default: 'CURRENT_TIMESTAMP',
            onUpdate: 'CURRENT_TIMESTAMP',
          },
          {
            name: 'deletedAt',
            type: 'timestamp',
            isNullable: true,
          },
        ],
      }),
      true,
    );

    await queryRunner.createForeignKey(
      'variants',
      new TableForeignKey({
        name: 'FK3ProductId',
        columnNames: ['productId'],
        referencedColumnNames: ['id'],
        referencedTableName: 'products',
        onDelete: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('variants', 'FK3ProductId');
    await queryRunner.dropTable('variants');
  }
}
