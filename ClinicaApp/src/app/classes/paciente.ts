import { PacienteXDoctor } from '../classes/paciente-xdoctor';

export class Paciente {
    idPaciente:number;
    nombres:string;
    numDocumento:string;
    numSeguroSocial:string;
    direccion:string;
    telContacto:string;
    codPostal:string;
    email:string;
    pacienteXDoctores: Array<PacienteXDoctor>
}
