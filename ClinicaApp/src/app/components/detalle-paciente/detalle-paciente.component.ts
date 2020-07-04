import { Component, OnInit } from '@angular/core';
import { PacienteService } from 'src/app/services/paciente.service';
import { Paciente } from 'src/app/classes/paciente';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detalle-paciente',
  templateUrl: './detalle-paciente.component.html',
  styleUrls: ['./detalle-paciente.component.css']
})
export class DetallePacienteComponent implements OnInit {

  id: string;
  paciente: Paciente = new Paciente();
  
  constructor(private pacienteService: PacienteService, 
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {    
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');                 
    });
    this.ObtenerInfo(this.id); 
  }

  ObtenerInfo(id:string){
    this.pacienteService.ObtenerDetalle(id).subscribe((data:Paciente) => {
      this.paciente = data      
    });
    
  }

  Volver(){
    this.router.navigate(['/Pacientes']);
  }

}
