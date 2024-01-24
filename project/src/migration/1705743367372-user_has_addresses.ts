// import { MigrationInterface, QueryRunner } from "typeorm";

// export class UserHasAddresses1705743392620 implements MigrationInterface {

//     public async up(queryRunner: QueryRunner): Promise<void> {
//     }

//     public async down(queryRunner: QueryRunner): Promise<void> {
//     }

// }
import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class UserHasAddresses1705743367372 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'user_has_addresses',
        columns: [
          { name: 'id', type: 'int', isPrimary: true, isGenerated: true, generationStrategy: 'increment' },
          { name: 'user_Id', type: 'int', isNullable: false },
          { name: 'address', type: 'varchar', length: '50', isNullable: false },
          { name: 'city', type: 'varchar', length: '20', isNullable: false },
          { name: 'state', type: 'varchar', length: '20', isNullable: false },
          { name: 'country', type: 'varchar', length: '20', isNullable: false },
          { name: 'postal_code', type: 'int', isNullable: false },
          { name: 'created_at', type: 'timestamp', default: 'CURRENT_TIMESTAMP' },
          { name: 'updated_at', type: 'timestamp', default: 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' },
          { name: 'deleted_at', type: 'timestamp', isNullable: true },
        ],
      }),
      true
    );

    await queryRunner.createForeignKey(
      'user_has_addresses',
      new TableForeignKey({
        columnNames: ['user_Id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'user',
        onDelete: 'CASCADE',
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    const table = await queryRunner.getTable('user_has_addresses');
    const foreignKey = table.foreignKeys.find((fk) => fk.columnNames.indexOf('user_Id') !== -1);
    await queryRunner.dropForeignKey('user_has_addresses', foreignKey);
    await queryRunner.dropTable('user_has_addresses');
  }
}
