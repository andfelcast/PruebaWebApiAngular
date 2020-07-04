import { Component, OnInit } from '@angular/core';
import { Doctor } from 'src/app/classes/doctor';
import { Especialidad } from 'src/app/classes/especialidad';
import { DoctorService } from 'src/app/services/doctor.service';
import { BasicoService } from 'src/app/services/basico.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-crear-doctor',
  templateUrl: './crear-doctor.component.html',
  styleUrls: ['./crear-doctor.component.css']
})
export class CrearDoctorComponent implements OnInit {


  constructor(private doctorService: DoctorService, 
              private basicoService: BasicoService,
              private router: Router) { 
    this.objDoctor = new Doctor();
    this.listarEspecialidades();
  }

  
DoctorForm: FormGroup;
submitted = false;

objDoctor: Doctor;
lstEspecialidades: Especialidad[];

ngOnInit(): void {
  this.DoctorForm = new FormGroup(
  {
    idDoctor: new FormControl(null),
    nombre: new FormControl("",[Validators.required]),
    numCredencial: new FormControl("",[Validators.required]),
    especialidad: new FormControl("",[Validators.required]),
    hospital: new FormControl("",[Validators.required]),    
  });
  }

  listarEspecialidades(): void{
    this.basicoService.ListarEspecialidades().subscribe((data:Especialidad[]) => 
      this.lstEspecialidades = data);
  }

  Insertar(){
    this.submitted = true;  
    
    if (this.DoctorForm.invalid) {  
      return;  
    }     
    this.objDoctor = new Doctor();
    this.objDoctor.nombres = this.DoctorForm.get('nombre').value;
    this.objDoctor.numCredencial = this.DoctorForm.get('numCredencial').value;
    this.objDoctor.idEspecialidad = this.DoctorForm.get('especialidad').value;
    this.objDoctor.hospital = this.DoctorForm.get('hospital').value;
    
    this.doctorService.Insertar(this.objDoctor).subscribe((data: any) => {
      this.Volver();
    });
    }

  Volver(){
    this.router.navigate(['/Doctores']);
  }


}
