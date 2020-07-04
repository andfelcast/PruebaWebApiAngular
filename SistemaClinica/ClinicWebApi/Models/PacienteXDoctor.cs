using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace ClinicWebApi.Models
{
    [Table("PacienteXDoctor")]
    public class PacienteXDoctor
    {
        [Key]
        [Required]
        [Column(TypeName = "int")]
        public int IdPacienteXDoctor { get; set; }

        [Required]
        [ForeignKey("Paciente")]
        [Column(TypeName = "int")]
        public int IdPaciente { get; set; }

        [Required]
        [Column(TypeName = "int")]
        [ForeignKey("Doctor")]
        public int IdDoctor { get; set; }

        public Paciente Paciente { get; set; }

        public Doctor Doctor { get; set; }
    }
}
