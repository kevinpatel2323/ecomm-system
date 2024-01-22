import { User } from 'src/users/entities/user.entity';
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { CreateDateColumn, DeleteDateColumn, UpdateDateColumn } from 'typeorm';
@Entity({ name: 'userHasPaymentOptions' })
export class UserHasPaymentOption {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  userId: number;

  @Column()
  cardNumber: string;

  @Column()
  cardHolderName: string;

  @Column()
  expiryDate: Date;

  @Column()
  cvv: number;

  @CreateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(6)',
    nullable: false,
  })
  createdAt: Date;

  @UpdateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(6)',
    onUpdate: 'CURRENT_TIMESTAMP(6)',
    nullable: false,
  })
  updatedAt: Date;

  @DeleteDateColumn({ type: 'timestamp', nullable: true })
  deletedAt: Date;

  @ManyToOne(() => User, (user) => user.paymentOptions)
  @JoinColumn({ name: 'userId' })
  user: User;
}
