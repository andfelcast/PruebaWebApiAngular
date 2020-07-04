import { Component, OnInit } from '@angular/core';
import { DoctorService } from 'src/app/services/doctor.service';
import { Doctor } from 'src/app/classes/doctor';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-doctores',
  templateUrl: './lista-doctores.component.html',
  styleUrls: ['./lista-doctores.component.css']
})
export class ListaDoctoresComponent implements OnInit {

  lstDoctores: Doctor[];
  valido: boolean = false;

  constructor(private doctorService : DoctorService,
              private router: Router) { }

  ngOnInit(): void {
    this.Listado();
  }

  Listado(): void {
    this.doctorService.Listar().subscribe((data:Doctor[]) => {
      this.lstDoctores = data;
    }             
    );    
  }

  Crear():void{    
    this.router.navigate(['/CreaDoctor']);
  }

  Detalle(id:number){
    this.router.navigate(['/Doctor',id]);

  }

  Editar(id:number){
    alert(id.toString());
  }

  

}
