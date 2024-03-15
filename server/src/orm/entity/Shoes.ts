import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Inventory, ShoeCategory, ShoeSex } from ".";

@Entity()
export class Shoes {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToOne(() => ShoeCategory, (category) => category.shoes)
  category: ShoeCategory;

  @ManyToOne(() => ShoeSex, (shoeSex) => shoeSex.shoes)
  shoeSex: ShoeSex;

  @OneToMany(() => Inventory, (inventory) => inventory.shoes)
  inventory: Inventory[];
}
