using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace ClinicWebApi.Models
{
    [Table("Doctor")]
    public class Doctor
    {
        [Key]
        [Required]
        [Column(TypeName = "int")]
        public int IdDoctor { get; set; }

        [Column(TypeName = "nvarchar(50)")]
        public string Nombres { get; set; }

        [Required]
        [ForeignKey("Especialidad")]
        public int IdEspecialidad { get; set; }

        [Required]
        [Column(TypeName = "nvarchar(10)")]
        public string NumCredencial { get; set; }
        
        [Column(TypeName = "nvarchar(30)")]
        [Required]
        public string Hospital { get; set; }

        public Especialidad Especialidad { get; set; }

        public IEnumerable<PacienteXDoctor> PacienteXDoctores { get; set; }
    }
}
