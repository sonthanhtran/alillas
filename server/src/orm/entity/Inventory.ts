import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { ShoeHue, Shoes, ShoeSize } from ".";

@Entity()
export class Inventory {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  shoesId: number;

  @Column()
  shoeHueId: number;

  @Column()
  shoeSizeId: number;

  @ManyToOne(() => Shoes, (shoes) => shoes.inventory)
  shoes: Shoes;

  @ManyToOne(() => ShoeHue, (shoeHue) => shoeHue.inventory)
  shoeHue: ShoeHue;

  @ManyToOne(() => ShoeSize, (shoeSize) => shoeSize.inventory)
  shoeSize: ShoeSize;
}
