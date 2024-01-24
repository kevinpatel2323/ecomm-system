import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, OneToMany } from 'typeorm';
import { Category } from '../../category/entities/category.entity';
import { size_enum } from '../entities/size.enum';
import { OrderDetails } from 'src/order_details/entities/order_detail.entity';
import { Variant } from 'src/variant/entities/variant.entity';
import { Social } from 'src/social/entities/social.entity';
// import { Media } from '../../media/entities/media.entity';
// import { Socials } from './socials.entity';
// import { Variants } from './variants.entity';
// import { Tags } from './tags.entity';

@Entity('products')
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 50, nullable: false })
  name: string;

  @Column({ type: 'int', nullable: false })
  weight: number;

  @Column({ type: 'int', nullable: false })
  quantity: number;

  @Column({ type: 'int', nullable: true })
  price: number;

  @Column({ type: 'varchar', length: 20, nullable: false })
  collection: string;

  @Column({ type: 'longtext', nullable: true })
  description: string;

  @Column({ type: 'enum', enum: size_enum })
  size: size_enum;

  // Uncomment and update the type if userId and colorId are part of your requirements
  // @Column({ type: 'int', nullable: true })
  // userId: number;

  // @Column({ type: 'int', nullable: true })
  // colorId: number;

  @Column({ type: 'int', nullable: false })
  category_id: number;

  @ManyToOne(() => Category, category => category.products)
  @JoinColumn({ name: 'category_id' })
  category: Category;


  @OneToMany(() => OrderDetails, orderDetails => orderDetails.product)
  orderDetails: OrderDetails[];

  @OneToMany(() => Variant, variant => variant.product)
  variants: Variant[];

  @OneToMany(() => Social, social => social.product)
  socials: Social[];
  
  @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;

  @UpdateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' })
  updated_at: Date;

  @DeleteDateColumn({ type: 'timestamp', nullable: true })
  deleted_at: Date;
    user_has_product: any;
}
