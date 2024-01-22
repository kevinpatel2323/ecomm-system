import { Category } from 'src/category/entities/category.entity';
import { OrderDetail } from 'src/order-details/entities/order-detail.entity';
import { Social } from 'src/socials/entities/social.entity';
import { Variant } from 'src/variants/entities/variant.entity';
import {
  Column,
  Entity,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  PrimaryGeneratedColumn,
  OneToMany,
  OneToOne,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

@Entity({ name: 'products' })
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  userId: number;

  @Column()
  categoryId: number;

  @Column()
  name: string;

  @Column()
  weight: number;

  @Column()
  collection: string;

  @Column()
  description: string;

  @Column()
  quantity: number;

  @Column()
  price: number;

  @Column()
  size: number;

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

  @OneToOne(() => OrderDetail, (orderDetail) => orderDetail.product)
  orderDetail: OrderDetail;

  @OneToMany(()=>Social, (social) => social.product)
  socials: Social[]

  @OneToOne(() => Variant, (variant) => variant.product)
  variant: Variant;

  @ManyToOne(()=>Category, (category) => category.products)
  @JoinColumn({ name: 'categoryId' })
  category: Category;
  
}




