using ClinicWebApi.Data;
using ClinicWebApi.Logic.Interfaces;
using ClinicWebApi.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ClinicWebApi.Logic.Objects
{
    public class DoctorRepository : IDoctorRepository
    {
        private ClinicaDbContext dbContext = new ClinicaDbContext();
        
        public List<Doctor> ListarDoctores() {
            return dbContext.Doctores.Include(x => x.Especialidad).ToList();
        }
        public Doctor ObtenerDoctor(int id) {
            return dbContext.Doctores.Include(x => x.Especialidad).FirstOrDefault(x => x.IdDoctor == id);
        }
        public int CrearDoctor(Doctor objDoctor) {
            dbContext.Doctores.Add(objDoctor);
            dbContext.SaveChanges();
            return 1;
        }
    }
}
