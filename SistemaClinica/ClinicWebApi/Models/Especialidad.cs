using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace ClinicWebApi.Models
{
    [Table("Especialidad")]
    public class Especialidad
    {
        [Key]
        [Required]
        [Column(TypeName = "int")]
        public int IdEspecialidad { get; set; }

        [Required]
        [Column(TypeName = "nvarchar(20)")]
        public string Nombre { get; set; }
    }
}
