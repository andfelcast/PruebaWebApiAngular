import { Especialidad } from '../classes/especialidad';
import { PacienteXDoctor } from './paciente-xdoctor';

export class Doctor {
    idDoctor:number;
    nombres:string;
    idEspecialidad:number;
    numCredencial:string;
    hospital:string;
    especialidad: Especialidad;
    pacienteXDoctores: PacienteXDoctor[];    
}
