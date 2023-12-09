import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('users')
export class Users {
    @PrimaryGeneratedColumn('increment', {name:'id'})
    readonly id?:number;

    @Column('varchar',{length:255, name:'first_name', nullable:false})
    readonly first_name : string
    @Column('varchar',{length:255, name:'last_name', nullable:false})
    readonly last_name : string
    @Column('varchar',{length:320, name:'email', nullable:false})
    readonly email : string
    @Column('varchar',{length:320, name:'password', nullable:false})
    readonly password : string

}