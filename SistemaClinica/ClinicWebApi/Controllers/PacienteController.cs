using System.Collections.Generic;
using ClinicWebApi.Data;
using ClinicWebApi.Logic.Interfaces;
using ClinicWebApi.Logic.Objects;
using ClinicWebApi.Models;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace ClinicWebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PacienteController : ControllerBase
    {
        //private PacienteRepository repository = new PacienteRepository(new ClinicaDbContext());
        private IPacienteRepository repository;
        public PacienteController(IPacienteRepository _repository)
        {
            this.repository = _repository;
        }
        // GET: api/<PacienteController>
        [HttpGet]        
        public IEnumerable<Paciente> Get()
        {
            return repository.ListarPacientes();
        }

        // GET api/<PacienteController>/5
        [HttpGet("{id}")]        
        public Paciente Get(int id)
        {
            return repository.ObtenerPaciente(id);
        }

        // POST api/<PacienteController>
        [HttpPost]
        //[Route("CrearPaciente")]
        public void Post([FromBody] Paciente objPaciente)
        {
            int res = repository.CrearPaciente(objPaciente);
        }

        // PUT api/<PacienteController>/5
        [HttpPut("{id}")]        
        public void Put(int id, [FromBody] Paciente objPaciente)
        {
            int res = repository.ActualizarPaciente(id, objPaciente);
        }

        // DELETE api/<PacienteController>/5
        [HttpDelete("{id}")]        
        public void Delete(int id)
        {
            int res = repository.BorrarPaciente(id);
        }
    }
}
