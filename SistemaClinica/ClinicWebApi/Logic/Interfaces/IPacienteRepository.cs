using ClinicWebApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ClinicWebApi.Logic.Interfaces
{
    public interface IPacienteRepository
    {
        List<Paciente> ListarPacientes();
        Paciente ObtenerPaciente(int idPaciente);
        int CrearPaciente(Paciente objPaciente);
        int ActualizarPaciente(int id, Paciente objPaciente);
        int BorrarPaciente(int idPaciente);
    }
}
