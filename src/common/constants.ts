export enum RabbitMQ {
  UserQueue = "users",
  PassengerQueue = "passengers",
  FlightQueue = "flights",
}

export enum UserMSG {
  CREATE = "CREATED_USER",
  FIND_ALL = "FIND_ALL_USERS",
  FIND_ONE = "FIND_ONE_USER",
  UPDATE = "UPDATE_USER",
  DELETED = "DELETED_USER",
  VALID_USER = "VALID_USER",
}

export enum PassengerMSG {
  CREATE = "CREATED_PASSENGER",
  FIND_ALL = "FIND_ALL_PASSENGERS",
  FIND_ONE = "FIND_ONE_PASSENGER",
  UPDATE = "UPDATE_PASSENGER",
  DELETED = "DELETED_PASSENGER",
}

export enum FlightsMSG {
  CREATE = "CREATED_FLIGHT",
  FIND_ALL = "FIND_ALL_FLIGHTS",
  FIND_ONE = "FIND_ONE_FLIGHT",
  UPDATE = "UPDATE_FLIGHT",
  DELETED = "DELETED_FLIGHT",
}
