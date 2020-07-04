import { Component, OnInit } from '@angular/core';
import { PacienteService } from 'src/app/services/paciente.service';
import { Paciente } from 'src/app/classes/paciente';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-pacientes',
  templateUrl: './lista-pacientes.component.html',
  styleUrls: ['./lista-pacientes.component.css']
})
export class ListaPacientesComponent implements OnInit {

  lstPacientes: Paciente[];

  constructor(private pacienteService : PacienteService,
              private router: Router) { 
  }

  ngOnInit(): void {
    this.Listado();
  }

  Listado(): void {
    this.pacienteService.Listar().subscribe((data:Paciente[]) => {
      this.lstPacientes = data;
    });
  }

  Crear():void{    
    this.router.navigate(['/CreaPaciente']);
  }
  
  Detalle(id:number):void{
    this.router.navigate(['/Paciente',id]);
  }

  Editar(id:number):void{
    this.router.navigate(['/EditaPaciente',id]);
  }

  Borrar(id:number){    
    const ans = confirm('¿Desea borrar el paciente seleccionado?');
    if (ans) {      
      this.pacienteService.Borrar(id.toString()).subscribe((data:any) => {        
        location.reload();
      });      
    }
  }

}
