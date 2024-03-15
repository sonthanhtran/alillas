import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Inventory } from ".";

@Entity()
export class ShoeHue {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(() => Inventory, (inventory) => inventory.shoeHue)
  inventory: Inventory[];
}
