import { Category } from 'src/category/entities/category.entity';
import { Color } from 'src/colors/entities/color.entity';
import { Media } from 'src/media/entities/media.entity';
import { OrderDetail } from 'src/order-details/entities/order-detail.entity';
import { Social } from 'src/socials/entities/social.entity';
import { Tag } from 'src/tags/entities/tag.entity';
import { User } from 'src/users/entities/user.entity';
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
  ManyToMany,
  JoinTable,
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

  @OneToMany(() => Social, (social) => social.product)
  socials: Social[];

  @OneToOne(() => Variant, (variant) => variant.product)
  variant: Variant;

  @ManyToOne(() => Category, (category) => category.products)
  @JoinColumn({ name: 'categoryId' })
  category: Category;

  @ManyToOne(() => User, (user) => user.products)
  @JoinColumn({ name: 'userId' })
  user: User;

  @ManyToMany(() => Tag, (tag) => tag.products)
  @JoinTable({
    name: 'productHasTags',
    joinColumn: { name: 'productId', referencedColumnName: 'id' },
    inverseJoinColumn: { name: 'tagId', referencedColumnName: 'id' },
  })
  tags: Tag[];

  @ManyToMany(() => Color, (color) => color.products)
  @JoinTable({
    name: 'productsHasColors',
    joinColumn: { name: 'productId', referencedColumnName: 'id' },
    inverseJoinColumn: { name: 'colorId', referencedColumnName: 'id' },
  })
  colors: Color[];

  @ManyToMany(() => Media, (media) => media.products)
  @JoinTable({
    name: 'productsHasMedia',
    joinColumn: { name: 'productId', referencedColumnName: 'id' },
    inverseJoinColumn: { name: 'mediaId', referencedColumnName: 'id' },
  })
  media: Media[];
}
