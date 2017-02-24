import {Entity, PrimaryColumn, Column, OneToMany} from 'typeorm';
import {Race} from './race';

@Entity('events')
export class Event {

    @PrimaryColumn('int', {generated: true}) id: number;


    @OneToMany(type => Race, race => race.event) races: Race[];

}
