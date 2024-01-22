import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export class UserHasPaymentOptions1705734998975 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'userHasPaymentOptions',
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
            name: 'cardNumber',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'cardHolderName',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'expiryDate',
            type: 'Date',
            isNullable: false,
          },
          {
            name: 'cvv',
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
      'userHasPaymentOptions',
      new TableForeignKey({
        name: 'Fk1UserId',
        columnNames: ['userId'],
        referencedColumnNames: ['id'],
        referencedTableName: 'users',
        onDelete: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('userHasPaymentOptions', 'Fk1UserId');
    await queryRunner.dropTable('userHasPaymentOptions');
  }
}
