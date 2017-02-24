const util = require('util');
import {Event} from './entities/event'
export const options: ConnectionOptions = {
    driver: {
        type: "postgres",
        host: "localhost",
        port: 5432,
        username: "postgres",
        password: "postgres",
        database: "test"
    },
    logging: {
        logQueries: true,
        logSchemaCreation: true
    },
    autoSchemaSync: false,
    entities: [
        __dirname + "/entities/*.ts"
    ],
};

import {createConnection, ConnectionOptions, Connection} from 'typeorm';
export function createMustraceConnection():  Promise<Connection> {
    return createConnection(options);
}

createMustraceConnection().then((connection) => {
    try {
        // const orgRepository = connection.getRepository(Organisation);
        // const orgs = await orgRepository.find();

        const eventRepository = connection.getRepository(Event);
        const sql = eventRepository.createQueryBuilder('event').innerJoinAndSelect('event.races', 'race').getSql();
        // const events = await eventRepository.find({
        //     races: {
        //     "metadata": "photo.metadata"
        // }});

        // const raceRepository = connection.getRepository(Race);

        console.log(sql);
    } catch (err) {
        console.log("err: ", err)
    }

}, error => console.log("Cannot connect: ", error));

