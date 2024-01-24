import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne,
    OneToMany,
    JoinColumn,
    CreateDateColumn,
    UpdateDateColumn,
    DeleteDateColumn,
  } from 'typeorm';
  import { User } from '../../users/entities/user.entity';
  import { OrderDetails } from '../../order_details/entities/order_detail.entity';
  import { status_enum } from './status.enum';
  
  @Entity('order')
  export class Order {
    @PrimaryGeneratedColumn()
    id: number;
  
    @ManyToOne(() => User, user => user.orders)
    @JoinColumn({ name: 'user_id' })
    user: User;
  
    @Column({ type: 'date' })
    date: Date;
  
    @Column({
      type: 'enum',
      enum: status_enum,
    })
    status: status_enum;
  
    @Column({ type: 'int' })
    total_quantity: number;
  
    @Column({ type: 'int' })
    paid_amount: number;
  
    @Column({ type: 'int' })
    net_amount: number;
  
    @OneToMany(() => OrderDetails, orderDetails => orderDetails.order)
    orderDetails: OrderDetails[];
  
    @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    created_at: Date;
  
    @UpdateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' })
    updated_at: Date;
  
    @DeleteDateColumn({ type: 'timestamp', nullable: true })
    deleted_at: Date;
  }

export { status_enum };
  