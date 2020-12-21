import { ConnectionOptions, Connection, createConnection, getConnection } from "typeorm";
import "reflect-metadata";

export const isProd : boolean = process.env.NODE_ENV === 'production';

let HOST = "localhost";
let USER = "root";
let PASSWORD = "!Book!17";
let DB = "characterbook2";

if (isProd) {
  HOST = "SG-characterbook-38678.servers.mongodirector.com";
  USER = "CedPC";
  DB = "characterbook";
  PASSWORD = "AAnubis210!";
} else if (process.env.NODE_ENV === "developpement") {
  HOST = "localhost";
  USER = "root";
}

export const config: ConnectionOptions = {
    name: 'characterbook2',
    type: 'mysql',
    port: 3306,
    host: HOST,
    username: USER,
    password: PASSWORD,
    database: DB,
    synchronize: !isProd,
    logging: !isProd,
    entities: [
        'lib/entity/**/*.js'
    ],
};

export const connect = async () => {
    let connection: Connection;
    try {
        connection = getConnection(config.name);
        console.log(
        "\x1b[36m%s\x1b[0m",
        "Connection has been established successfully."
        );
    } catch (error) {
        try {
            connection = await createConnection(config);
            console.log(
            "\x1b[36m%s\x1b[0m",
            "Connection has been created successfully."
            );
        } catch (error) {
            console.error("Unable to connect to the database:", error);
        }
    }

    return connection;
}