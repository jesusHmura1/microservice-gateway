import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { Observable } from "rxjs";
import { FlightsMSG, PassengerMSG } from "src/common/constants";
import { IFlight } from "src/common/interfaces/flight.interface";
import { IPassenger } from "src/common/interfaces/passanger.interface";
import { ClientProxySuperFlights } from "src/common/proxy/client-proxy";
import { PassengerDTO } from "src/passenger/dto/passenger.dto";
import { FlightDTO } from "./dto/flight.dto";

@Controller("api/v2/flight")
export class FlightController {
  constructor(private readonly clientProxy: ClientProxySuperFlights) {}
  private _clientProxyFlight = this.clientProxy.clientProxyFlights();

  @Post()
  Created(@Body() flight: FlightDTO): Observable<IFlight> {
    return this._clientProxyFlight.send(FlightsMSG.CREATE, flight);
  }

  @Get()
  FindAll(): Observable<IFlight[]> {
    return this._clientProxyFlight.send(FlightsMSG.FIND_ALL, "");
  }

  @Get(":id")
  FindOne(@Param("id") id: string): Observable<IFlight> {
    return this._clientProxyFlight.send(FlightsMSG.FIND_ONE, id);
  }

  @Put(":id")
  Update(
    @Param("id") id: string,
    @Body() flight: FlightDTO
  ): Observable<IFlight> {
    return this._clientProxyFlight.send(FlightsMSG.UPDATE, {
      id,
      flight,
    });
  }

  @Delete(":id")
  UserDelete(@Param("id") id: string): Observable<any> {
    return this._clientProxyFlight.send(FlightsMSG.DELETED, id);
  }
}
