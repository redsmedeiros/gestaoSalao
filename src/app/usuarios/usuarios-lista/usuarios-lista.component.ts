import { AlertModalComponent } from './../../shared/alert-modal/alert-modal.component';
import { catchError, empty, Observable, Subject } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { UsuariosService } from './../usuarios.service';
import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/shared/models/Usuario';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { AlertModalService } from 'src/app/shared/alert-modal/alert-modal.service';

@Component({
  selector: 'app-usuarios-lista',
  templateUrl: './usuarios-lista.component.html',
  styleUrls: ['./usuarios-lista.component.scss']
})
export class UsuariosListaComponent implements OnInit {

  usuarios$!: Observable<Usuario[]>
  error$ = new Subject<boolean>()
  bsModalRef!: BsModalRef


  constructor(
    private usuarioService: UsuariosService,
    private ActivatedRoute: ActivatedRoute,
    private alertService: AlertModalService
    ) {

  }

  ngOnInit(): void {

   this.onRefresh()

  }

  searchUsuarios(searchTerm: string){
       //let teste = this.usuarios.filter( busca => busca.name.toLowerCase().includes(searchTerm.toLowerCase()))
       //console.log(teste)
     // return this.usuarios.filter( busca => busca.name.toLowerCase().includes(searchTerm.toLowerCase()))

  }

  onRefresh(): void{
    this.usuarios$ = this.usuarioService.list().pipe(
      catchError( error => {
        console.error(error)
        //this.error$.next(true)
        this.handleError()
        return empty()
      })
    )
  }

  handleError(): void{
    this.alertService.showAlertDanger('Erro ao carregar, tente novamente mais tarde.')
  }

}
