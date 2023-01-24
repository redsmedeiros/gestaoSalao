import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usuario-search',
  templateUrl: './usuario-search.component.html',
  styleUrls: ['./usuario-search.component.scss']
})
export class UsuarioSearchComponent implements OnInit {

  habilita: boolean = false

  textBtn = {
    buscar: 'Pesquisar',
    fechar: 'Fechar'
  }

  nome: string = ''
  cpf: string = ''
  email: string = ''

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  habilitar(): void{
    this.habilita = !this.habilita
    console.log(this.habilita)
  }

  search(nome?: string, cpf?: string, email?: string): void{
    if(nome){
      this.router.navigateByUrl('usuarios/usuario-search/'+ nome)
    }

    if(cpf){
      this.router.navigateByUrl('/usuario-search/'+ cpf)
    }

    if(email){
      this.router.navigateByUrl('/usuario-search/'+ email)
    }
  }

}
