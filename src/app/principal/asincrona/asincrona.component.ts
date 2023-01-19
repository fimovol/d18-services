import { Component, OnInit } from '@angular/core';
import { UserservicesService } from 'src/app/services/userservices.service';

@Component({
  selector: 'app-asincrona',
  templateUrl: './asincrona.component.html',
  styleUrls: ['./asincrona.component.css']
})
export class AsincronaComponent implements OnInit {

  constructor(private servicios:UserservicesService) { }
  cadena = ""
  listado = new Array()
  ngOnInit(): void {
    this.servicios.getAsincrona().subscribe({
      next:(datos)=>{
        this.cadena = datos
        for(let n=0;n<datos.length;n++){
          this.listado.push(datos[n])
        }
      }
    })
  }

}
