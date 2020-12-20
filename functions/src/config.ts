import { ConnectionOptions, Connection, createConnection, getConnection } from "typeorm";
import "reflect-metadata";

export const prod = process.env.NODE_ENV === 'production';

let HOST = "localhost";
let USER = "root";
let PASSWORD = "!Book!17";
let DB = "characterbook2";

if (prod) {
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
    host: HOST,
    port: 3306,
    username: USER,
    password: PASSWORD,
    database: DB,
    // synchronize: prod,
    synchronize: true,
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
        connection = await createConnection(config);
        // console.error("Unable to connect to the database:", error);
    }

    return connection;
}