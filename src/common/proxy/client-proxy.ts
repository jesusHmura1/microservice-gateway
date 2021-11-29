import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { ClientProxy, ClientProxyFactory, Transport } from "@nestjs/microservices";
import { RabbitMQ } from "../constants";

@Injectable()
export class ClientProxySuperFlights {
    constructor(private readonly config:ConfigService){}

    clientProxyUsers(): ClientProxy{
        return ClientProxyFactory.create({
            transport: Transport.RMQ,
            options:{
                urls: this.config.get('AMQP_URL'),
                queue: RabbitMQ.UserQueue,
            }
        })
    }

    clientProxyPassengers(): ClientProxy{
        return ClientProxyFactory.create({
            transport: Transport.RMQ,
            options:{
                urls: this.config.get('AMQP_URL'),
                queue: RabbitMQ.FlightQueue,
            }
        })
    }

    clientProxyFlights(): ClientProxy{
        return ClientProxyFactory.create({
            transport: Transport.RMQ,
            options:{
                urls: this.config.get('AMQP_URL'),
                queue: RabbitMQ.PassengerQueue,
            }
        })
    }
}