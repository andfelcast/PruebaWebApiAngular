using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace ClinicWebApi.Models
{
    [Table("Paciente")]
    public class Paciente
    {        
        [Required]
        [Key]
        [Column(TypeName = "int")]
        public int IdPaciente { get; set; }

        [Required]
        [Column(TypeName = "nvarchar(50)")]
        public string Nombres { get; set; }

        [Required]
        [Column(TypeName = "nvarchar(10)")]
        public string NumDocumento { get; set; }

        [Required]
        [Column(TypeName = "nvarchar(10)")]
        public string NumSeguroSocial { get; set; }

        [Column(TypeName = "nvarchar(100)")]
        public string Direccion { get; set; }

        [Required]
        [Column(TypeName = "nvarchar(10)")]
        public string TelContacto { get; set; }

        [Column(TypeName = "nvarchar(8)")]
        public string CodPostal { get; set; }

        [Column(TypeName = "nvarchar(20)")]
        public string Email { get; set; }

        public IEnumerable<PacienteXDoctor> PacienteXDoctores { get; set; }
    }
}
