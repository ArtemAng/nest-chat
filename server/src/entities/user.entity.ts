import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @ApiProperty({
    type: 'string',
    format: 'uuid',
    description: 'User id',
    nullable: false
  })
  @PrimaryGeneratedColumn('uuid')
  public id: string;

  @ApiProperty({
    type: 'string',
    format: 'email',
    description: 'User email',
    nullable: false
  })
  @Column({
    name: 'email',
    type: 'text',
    unique: true,
    nullable: false
  })
  public email: string;
}
