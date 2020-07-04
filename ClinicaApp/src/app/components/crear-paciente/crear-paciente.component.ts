import { Component, OnInit } from '@angular/core';
import { PacienteService } from 'src/app/services/paciente.service';
import { DoctorService } from 'src/app/services/doctor.service';
import { FormGroup, FormControl, Validators, FormBuilder, FormArray } from '@angular/forms';
import { Paciente } from 'src/app/classes/paciente';
import { Router } from '@angular/router';
import { Doctor } from 'src/app/classes/doctor';
import { PacienteXDoctor } from 'src/app/classes/paciente-xdoctor';

@Component({
  selector: 'app-crear-paciente',
  templateUrl: './crear-paciente.component.html',
  styleUrls: ['./crear-paciente.component.css']
})
export class CrearPacienteComponent implements OnInit {

  constructor(private pacienteService: PacienteService,
              private doctorService: DoctorService,
              private router: Router,
              private fb: FormBuilder) { }

  PacienteForm: FormGroup;
  submitted = false;
  EventValue:any = "Guardar";
  objPaciente:Paciente;  
  arrDoctores: Array<any> = [];

  ngOnInit(): void {
    this.PacienteForm = new FormGroup(
      {
        idPaciente: new FormControl(null),
        nombre: new FormControl("",[Validators.required]),
        numDocumento: new FormControl("",[Validators.required]),
        numSeguroSocial: new FormControl("",[Validators.required]),
        direccion: new FormControl("",[Validators.required]),
        codPostal: new FormControl(null),
        telefono: new FormControl("",[Validators.required]),
        correo: new FormControl("",[Validators.required]),
        doctores: this.fb.array([])
      }
    );
    this.ListarDoctores();
  }

  private ListarDoctores(): void {
    this.doctorService.Listar().subscribe((data:Doctor[]) => {    
      data.forEach(element => {
        this.arrDoctores.push({
          name: element.nombres,
          value: element.idDoctor
        })
      });
    }             
    );    
  }

  onCheckboxChange(e) {
    const checkArray: FormArray = this.PacienteForm.get('doctores') as FormArray;
  
    if (e.target.checked) {      
      checkArray.push(new FormControl(e.target.value));
    } else {
      let i: number = 0;
      checkArray.controls.forEach((item: FormControl) => {
        if (item.value == e.target.value) {
          checkArray.removeAt(i);          
          return;
        }
        i++;
      });
    }
  }

  Insertar(){
    this.submitted = true;  
    
     if (this.PacienteForm.invalid) {  
            return;  
     }     
     this.objPaciente = new Paciente();
     this.objPaciente.nombres = this.PacienteForm.get('nombre').value;
     this.objPaciente.numDocumento = this.PacienteForm.get('numDocumento').value;
     this.objPaciente.numSeguroSocial = this.PacienteForm.get('numSeguroSocial').value;
     this.objPaciente.direccion = this.PacienteForm.get('direccion').value;
     this.objPaciente.telContacto = this.PacienteForm.get('telefono').value;
     this.objPaciente.codPostal = this.PacienteForm.get('codPostal').value;
     this.objPaciente.email = this.PacienteForm.get('correo').value;
          
     let checkArray: FormArray = this.PacienteForm.get('doctores') as FormArray;
     if(checkArray.controls.length > 0){
       this.objPaciente.pacienteXDoctores = [];
       for(let i = 0; i < checkArray.controls.length; i++){
         let pacienteDoctor = new PacienteXDoctor();
         pacienteDoctor.IdDoctor = checkArray.controls[i].value;
         this.objPaciente.pacienteXDoctores.push(pacienteDoctor);
       }
     }
     
    this.pacienteService.Insertar(this.objPaciente).subscribe((data: any) => {
        this.Volver();
    });
  }

  Volver(){
    this.router.navigate(['/Pacientes']);
  }

  

}
