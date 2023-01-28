import { environment } from './../../environments/environment';
import { Usuario } from './../shared/models/Usuario';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { delay, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  private readonly API: string = `${environment.API}usuarios`


  constructor(private httpCliente: HttpClient) { }

  list(): Observable<Usuario[]>{
    return this.httpCliente.get<Usuario[]>(this.API).pipe(delay(3000))
  }

}
