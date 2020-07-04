using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ClinicWebApi.Logic.Interfaces;
using ClinicWebApi.Models;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace ClinicWebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DoctorController : ControllerBase
    {
        private IDoctorRepository repository;
        public DoctorController(IDoctorRepository _repository) {
            this.repository = _repository;
        }
                
        // GET: api/<DoctorController>        
        [HttpGet]
        public IEnumerable<Doctor> Get()
        {
            return repository.ListarDoctores();
        }

        // GET api/<DoctorController>/5
        [HttpGet("{id}")]        
        public Doctor Get(int id)
        {
            return repository.ObtenerDoctor(id);
        }

        // POST api/<DoctorController>
        [HttpPost]
        public void Post([FromBody] Doctor value)
        {
            int res = repository.CrearDoctor(value);
        }        
    }
}
