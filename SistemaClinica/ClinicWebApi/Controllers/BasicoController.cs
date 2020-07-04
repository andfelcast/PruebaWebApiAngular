using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ClinicWebApi.Models;
using Microsoft.AspNetCore.Mvc;
using ClinicWebApi.Logic.Interfaces;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace ClinicWebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BasicoController : ControllerBase
    {
        private IBasicoRepository repository;

        public BasicoController(IBasicoRepository _repository)
        {
            this.repository = _repository;
        }

        // GET: api/<BasicoController>
        [HttpGet]
        public IEnumerable<Especialidad> Get()
        {
            return repository.ListarEspecialidades();
        }        
    }
}
