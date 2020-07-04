import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaPacientesComponent } from './components/lista-pacientes/lista-pacientes.component';
import { ListaDoctoresComponent } from './components/lista-doctores/lista-doctores.component';
import { DetalleDoctorComponent } from './components/detalle-doctor/detalle-doctor.component';
import { DetallePacienteComponent } from './components/detalle-paciente/detalle-paciente.component';
import { CrearPacienteComponent } from './components/crear-paciente/crear-paciente.component';
import { CrearDoctorComponent } from './components/crear-doctor/crear-doctor.component';
import { EditarPacienteComponent } from './components/editar-paciente/editar-paciente.component';


const routes: Routes = [
  { path: 'Pacientes', component: ListaPacientesComponent },
  { path: 'Doctores', component: ListaDoctoresComponent },
  { path: 'Doctor/:id', component: DetalleDoctorComponent },
  { path: 'Paciente/:id', component: DetallePacienteComponent },
  { path: 'CreaPaciente', component: CrearPacienteComponent },
  { path: 'CreaDoctor', component: CrearDoctorComponent },
  { path: 'EditaPaciente/:id', component: EditarPacienteComponent },
  { path: '',   redirectTo: '/Pacientes', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
