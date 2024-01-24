// import { MigrationInterface, QueryRunner } from "typeorm";

// export class UserHasPaymentOptions1705743407762 implements MigrationInterface {

//     public async up(queryRunner: QueryRunner): Promise<void> {
//     }

//     public async down(queryRunner: QueryRunner): Promise<void> {
//     }

// }
import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class UserHasPaymentOptions1705743407762 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'user_has_payment_options',
        columns: [
          { name: 'id', type: 'int', isPrimary: true, isGenerated: true, generationStrategy: 'increment' },
          { name: 'user_Id', type: 'int', isNullable: false },
          { name: 'card_number', type: 'varchar', length: '16', isUnique: true, isNullable: false },
          { name: 'card_holder_name', type: 'varchar', length: '50', isNullable: false },
          { name: 'expiration_date', type: 'date', isNullable: false },
          { name: 'cvv', type: 'varchar', length: '3', isNullable: false },
          { name: 'createdAt', type: 'timestamp', default: 'CURRENT_TIMESTAMP' },
          { name: 'updatedAt', type: 'timestamp', default: 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' },
          { name: 'deletedAt', type: 'timestamp', isNullable: true },
        ],
      }),
      true
    );

    await queryRunner.createForeignKey(
      'user_has_payment_options',
      new TableForeignKey({
        columnNames: ['user_Id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'user',
        onDelete: 'CASCADE',
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    const table = await queryRunner.getTable('user_has_payment_options');
    const foreignKey = table.foreignKeys.find((fk) => fk.columnNames.indexOf('user_Id') !== -1);
    await queryRunner.dropForeignKey('user_has_payment_options', foreignKey);
    await queryRunner.dropTable('user_has_payment_options');
  }
}
