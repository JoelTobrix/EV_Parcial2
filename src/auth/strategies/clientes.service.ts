import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { USER } from '../models/models';
import { IClientes } from './clientes.interface';
import * as bcrypt from 'bcrypt';
import { ClientesDTO } from '../dto/clientes.dto';

@Injectable()
export class ClientesService {
  constructor(@InjectModel(USER.name) private readonly modelo: Model<IClientes>) {}

  async hashPassword(password: string): Promise<string> {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
  }

  async insertar(userDTO: ClientesDTO): Promise<IClientes> {
    const hash = await this.hashPassword(userDTO.password);
    const newUser = new this.modelo({ ...userDTO, password: hash });
    return await newUser.save();
  }

  async todos(): Promise<IClientes[]> {
    return await this.modelo.find();
  }

  async uno(id: string): Promise<IClientes> {
    return await this.modelo.findById(id);
  }

  async actualizar(id: string, clientesDTO: ClientesDTO): Promise<IClientes> {
    const hash = await this.hashPassword(clientesDTO.password);
    const cliente = { ...clientesDTO, password: hash };
    return await this.modelo.findByIdAndUpdate(id, cliente, { new: true });
  }

  async eliminar(id: string) {
    await this.modelo.findByIdAndDelete(id);
    return { status: HttpStatus.OK, msg: 'Usuario eliminado' };
  }
}
