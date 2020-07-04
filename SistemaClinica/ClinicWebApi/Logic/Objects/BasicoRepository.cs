using ClinicWebApi.Data;
using ClinicWebApi.Logic.Interfaces;
using ClinicWebApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ClinicWebApi.Logic.Objects
{
    public class BasicoRepository: IBasicoRepository
    {
        private ClinicaDbContext dbContext = new ClinicaDbContext();
        public List<Especialidad> ListarEspecialidades() {
            return dbContext.Especialidades.ToList();
        }
    }
}
