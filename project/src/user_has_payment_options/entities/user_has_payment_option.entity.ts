import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, CreateDateColumn, UpdateDateColumn, DeleteDateColumn } from 'typeorm';
import { User } from '../../users/entities/user.entity';

@Entity('user_has_payment_options')
export class UserHasPaymentOptions {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'int', nullable: false })
  user_Id: number;

  @Column({ type: 'varchar', length: 16, unique: true, nullable: false })
  card_number: string;

  @Column({ type: 'varchar', length: 50, nullable: false })
  card_holder_name: string;

  @Column({ type: 'date', nullable: false })
  expiration_date: Date;

  @Column({ type: 'varchar', length: 3, nullable: false })
  cvv: string;

  @ManyToOne(() => User, user => user.paymentOptions)
  @JoinColumn({ name: 'user_Id' })
  user: User;

  @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' })
  updatedAt: Date;

  @DeleteDateColumn({ type: 'timestamp', nullable: true })
  deletedAt: Date;
}
