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
import { UserMSG } from "src/common/constants";
import { IUser } from "src/common/interfaces/user.interfaces";
import { ClientProxySuperFlights } from "src/common/proxy/client-proxy";
import { UserDTO } from "./dto/user.dto";

@Controller("api/v2/user")
export class UserController {
  constructor(private readonly clientProxy: ClientProxySuperFlights) {}
  private _clientProxyUser = this.clientProxy.clientProxyUsers();

  @Post()
  Created(@Body() user: UserDTO): Observable<IUser> {
    return this._clientProxyUser.send(UserMSG.CREATE, user);
  }

  @Get()
  FindAll(): Observable<IUser[]> {
    return this._clientProxyUser.send(UserMSG.FIND_ALL, "");
  }

  @Get(":id")
  FindOne(@Param("id") id: string): Observable<IUser> {
    return this._clientProxyUser.send(UserMSG.FIND_ONE, id);
  }

  @Put(":id")
  Update(@Param("id") id: string, @Body() user: UserDTO): Observable<IUser> {
    return this._clientProxyUser.send(UserMSG.UPDATE, {id, user});
  }

  @Delete(":id")
  UserDelete(@Param("id") id: string): Observable<any> {
    return this._clientProxyUser.send(UserMSG.DELETED, id);
  }
}
