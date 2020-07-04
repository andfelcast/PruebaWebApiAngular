import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListaPacientesComponent } from './components/lista-pacientes/lista-pacientes.component';
import { CrearPacienteComponent } from './components/crear-paciente/crear-paciente.component';
import { EditarPacienteComponent } from './components/editar-paciente/editar-paciente.component';
import { DetallePacienteComponent } from './components/detalle-paciente/detalle-paciente.component';
import { ListaDoctoresComponent } from './components/lista-doctores/lista-doctores.component';
import { DetalleDoctorComponent } from './components/detalle-doctor/detalle-doctor.component';
import { CrearDoctorComponent } from './components/crear-doctor/crear-doctor.component';
import { PacienteService } from './services/paciente.service';
import { DoctorService } from './services/doctor.service';
import { BasicoService } from './services/basico.service';

@NgModule({
  declarations: [
    AppComponent,
    ListaPacientesComponent,
    CrearPacienteComponent,
    EditarPacienteComponent,
    DetallePacienteComponent,
    ListaDoctoresComponent,
    DetalleDoctorComponent,
    CrearDoctorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [ PacienteService, DoctorService, BasicoService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
