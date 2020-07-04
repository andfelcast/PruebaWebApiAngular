using ClinicWebApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ClinicWebApi.Logic.Interfaces
{
    public interface IDoctorRepository
    {
        List<Doctor> ListarDoctores();
        Doctor ObtenerDoctor(int id);
        int CrearDoctor(Doctor objDoctor);
    }
}
