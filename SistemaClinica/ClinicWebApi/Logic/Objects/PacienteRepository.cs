using ClinicWebApi.Data;
using ClinicWebApi.Logic.Interfaces;
using ClinicWebApi.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection.Metadata.Ecma335;
using System.Runtime.CompilerServices;
using System.Threading.Tasks;

namespace ClinicWebApi.Logic.Objects
{
    public class PacienteRepository: IPacienteRepository
    {
        private ClinicaDbContext dbContext = new ClinicaDbContext();
        
        public List<Paciente> ListarPacientes() {
            return dbContext.Pacientes.ToList();
        }
        public Paciente ObtenerPaciente(int idPaciente) {
            return dbContext.Pacientes.Include(x => x.PacienteXDoctores).ThenInclude(y => y.Doctor).ThenInclude(z => z.Especialidad).FirstOrDefault(x => x.IdPaciente == idPaciente);            
        }
        public int CrearPaciente(Paciente objPaciente) {
            dbContext.Pacientes.Add(objPaciente);
            dbContext.SaveChanges();
            return 1;
        }
        public int ActualizarPaciente(int id, Paciente objPaciente) {
            var paciente = dbContext.Pacientes.FirstOrDefault(x => x.IdPaciente == id);
            if (paciente != null)
            {
                if (paciente.Email != objPaciente.Email) paciente.Email = objPaciente.Email;
                if (paciente.CodPostal != objPaciente.CodPostal) paciente.CodPostal = objPaciente.CodPostal;
                if (paciente.Direccion != objPaciente.Direccion) paciente.Direccion = objPaciente.Direccion;
                if (paciente.Nombres != objPaciente.Nombres) paciente.Nombres = objPaciente.Nombres;
                if (paciente.NumDocumento != objPaciente.NumDocumento) paciente.NumDocumento = objPaciente.NumDocumento;
                if (paciente.NumSeguroSocial != objPaciente.NumSeguroSocial) paciente.NumSeguroSocial = objPaciente.NumSeguroSocial;
                if (paciente.TelContacto != objPaciente.TelContacto) paciente.TelContacto = objPaciente.TelContacto;
                dbContext.Pacientes.Update(paciente);
                dbContext.SaveChanges();
            }
            return 1;
        }
        public int BorrarPaciente(int idPaciente) {
            dbContext.PacientesXDoctor.RemoveRange(dbContext.PacientesXDoctor.Where(x => x.IdPaciente == idPaciente));
            dbContext.Pacientes.Remove(dbContext.Pacientes.FirstOrDefault(x => x.IdPaciente == idPaciente));
            dbContext.SaveChanges();
            return 1;
        }
    }
}
