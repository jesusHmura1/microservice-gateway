import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from "@nestjs/common";
import { Observable } from "rxjs";
import { PassengerMSG } from "src/common/constants";
import { IPassenger } from "src/common/interfaces/passanger.interface";
import { ClientProxySuperFlights } from "src/common/proxy/client-proxy";
import { PassengerDTO } from "./dto/passenger.dto";

@Controller("api/v2/passenger")
export class PassengerController {
  constructor(private readonly clientProxy: ClientProxySuperFlights) {}
  private _clientProxyPassenger = this.clientProxy.clientProxyPassengers();

  @Post()
  Created(@Body() passenger: PassengerDTO): Observable<IPassenger> {
    return this._clientProxyPassenger.send(PassengerMSG.CREATE, passenger);
  }

  @Get()
  FindAll(): Observable<IPassenger[]> {
    return this._clientProxyPassenger.send(PassengerMSG.FIND_ALL, "");
  }

  @Get(":id")
  FindOne(@Param("id") id: string): Observable<IPassenger> {
    return this._clientProxyPassenger.send(PassengerMSG.FIND_ONE, id);
  }

  @Put(":id")
  Update(
    @Param("id") id: string,
    @Body() passenger: PassengerDTO
  ): Observable<IPassenger> {
    return this._clientProxyPassenger.send(PassengerMSG.UPDATE, {
      id,
      passenger,
    });
  }

  @Delete(":id")
  UserDelete(@Param("id") id: string): Observable<any> {
    return this._clientProxyPassenger.send(PassengerMSG.DELETED, id);
  }
}
