import { Component, OnInit } from '@angular/core';
import { UserservicesService } from 'src/app/services/userservices.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  constructor(private servicio:UserservicesService) { }

  cadena = ""
  listado = new Array()
  ngOnInit(): void {
    this.servicio.getAll().subscribe({
      next:(userAll)=>{
        this.cadena = userAll
        for(let n=0;n<userAll.length;n++){
          this.listado.push(userAll[n])
        }
      },
      error:(error)=> console.error(error)
      ,
      complete:()=> console.info("el preceso se completo")
      ,
    })
  }

}
