using ClinicWebApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ClinicWebApi.Logic.Interfaces
{
    public interface IBasicoRepository
    {
        List<Especialidad> ListarEspecialidades();
    }
}
