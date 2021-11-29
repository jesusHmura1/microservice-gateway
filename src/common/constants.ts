export enum RabbitMQ {
  UserQueue = "users",
}

export enum UserMSG{
    CREATE='CREATED_USER',
    FIND_ALL='FIND_ALL_USERS',
    FIND_ONE='FIND_ONE_USER',
    UPDATE='UPDATE_USER',
    DELETED='DELETED_USER',
    VALID_USER='VALID_USER',
}