import {Entity, PrimaryColumn, Column, ManyToOne, JoinColumn, EmbeddableEntity, Embedded} from 'typeorm';
import {Event} from './event';


@EmbeddableEntity()
export class Duration {
    @Column('int',{ name: 'duration_minutes'}) minutes: number;
    @Column('int',{ name: 'duration_hours'}) hours: number;
    @Column('int',{ name: 'duration_days'}) days: number;
}

@Entity('event_races')
export class Race {

    @PrimaryColumn('int', {generated: true}) id: number;

    @ManyToOne(type => Event, event => event.races)
    @JoinColumn({name: 'event_id'})
    event: Event;

    @Embedded(type => Duration) duration: Duration;
}

