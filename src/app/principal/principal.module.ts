import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { AsincronaComponent } from './asincrona/asincrona.component';



@NgModule({
  declarations: [
    UsuariosComponent,
    AsincronaComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    UsuariosComponent,
    AsincronaComponent
  ]
})
export class PrincipalModule { }
