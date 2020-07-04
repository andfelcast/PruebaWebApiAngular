using ClinicWebApi.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Threading.Tasks;

namespace ClinicWebApi.Data
{
    public class ClinicaDbContext : DbContext
    {
        private string connString = @"Data Source=(local);Initial Catalog=ClinicaBD;Integrated Security=True";
        
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder) {
            optionsBuilder.UseSqlServer(this.connString);
        }

        public DbSet<Paciente> Pacientes { get; set; }

        public DbSet<Doctor> Doctores { get; set; }

        public DbSet<Especialidad> Especialidades { get; set; }       

        public DbSet<PacienteXDoctor> PacientesXDoctor { get; set; }
    }
}
