import { Component, OnInit } from '@angular/core';
import { PacienteService } from 'src/app/services/paciente.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder, FormArray } from '@angular/forms';
import { Paciente } from 'src/app/classes/paciente';
import { DoctorService } from 'src/app/services/doctor.service';
import { Doctor } from 'src/app/classes/doctor';

@Component({
  selector: 'app-editar-paciente',
  templateUrl: './editar-paciente.component.html',
  styleUrls: ['./editar-paciente.component.css']
})
export class EditarPacienteComponent implements OnInit {

  constructor(private pacienteService: PacienteService,
    private doctorService: DoctorService,
    private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder) { }

  id: string;
  PacienteForm: FormGroup;
  submitted = false;
  EventValue:any = "Actualizar";
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
  this.route.paramMap.subscribe(params => {
    this.id = params.get('id');
    this.ObtenerInfo(this.id);                    
  });
  this.ActualizarForm();
  }

  ObtenerInfo(id:string){
    this.pacienteService.ObtenerDetalle(id).subscribe((data:Paciente) => {
      this.objPaciente = data;                     
      this.PacienteForm.patchValue({
        'idPaciente': this.id,
        'nombre': this.objPaciente.nombres,
        'numDocumento': this.objPaciente.numDocumento,
        'numSeguroSocial':this.objPaciente.numSeguroSocial,
          'direccion':this.objPaciente.direccion,
        'codPostal':this.objPaciente.codPostal,
          'telefono':this.objPaciente.telContacto,
        'correo':this.objPaciente.email        
      });
    });
        
  }

  private RevisarCheckBox(): FormArray{
    const checkArray = this.PacienteForm.get('doctores') as FormArray;
    if(this.objPaciente.pacienteXDoctores != null && this.objPaciente.pacienteXDoctores.length > 0)
    {
      this.objPaciente.pacienteXDoctores.forEach(element => {
        checkArray.push(new FormControl(element.IdDoctor.toString()));
      });
    }
    return checkArray;
  }

  ActualizarForm():void{
    this.PacienteForm.patchValue({
      'idPaciente': this.id,
      'nombre': this.objPaciente.nombres,
      'numDocumento': this.objPaciente.numDocumento,
      'numSeguroSocial':this.objPaciente.numSeguroSocial,
        'direccion':this.objPaciente.direccion,
      'codPostal':this.objPaciente.codPostal,
        'telefono':this.objPaciente.telContacto,
      'correo':this.objPaciente.email
    });
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

Actualizar(){
this.submitted = true;  

if (this.PacienteForm.invalid) {  
  return;  
}     
this.objPaciente = new Paciente();
this.objPaciente.idPaciente = this.PacienteForm.get('idPaciente').value;
this.objPaciente.nombres = this.PacienteForm.get('nombre').value;
this.objPaciente.numDocumento = this.PacienteForm.get('numDocumento').value;
this.objPaciente.numSeguroSocial = this.PacienteForm.get('numSeguroSocial').value;
this.objPaciente.direccion = this.PacienteForm.get('direccion').value;
this.objPaciente.telContacto = this.PacienteForm.get('telefono').value;
this.objPaciente.codPostal = this.PacienteForm.get('codPostal').value;
this.objPaciente.email = this.PacienteForm.get('correo').value;

this.pacienteService.Actualizar(this.id,this.objPaciente).subscribe((data: any) => {
this.Volver();
});
}

Volver(){
this.router.navigate(['/Pacientes']);
}

}
