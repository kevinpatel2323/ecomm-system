import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export class UserHasAddress1705732732280 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'userHasAddress',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'userId',
            type: 'int',
            isNullable: false,
          },
          {
            name: 'address',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'city',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'state',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'country',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'postalCode',
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
      'userHasAddress',
      new TableForeignKey({
        name: 'FkUserId',
        columnNames: ['userId'],
        referencedColumnNames: ['id'],
        referencedTableName: 'users',
        onDelete: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('userHasAddress', 'FkUserId');
    await queryRunner.dropTable('userHasAddress');
  }
}
