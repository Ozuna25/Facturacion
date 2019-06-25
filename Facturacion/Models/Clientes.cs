using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace Facturacion.Models
{
    public class Clientes
    {
        public int Id { get; set; }
        public string Nombres { get; set; }
        public string Apellidos { get; set; }
        public string Cedula { get; set; }
        public string Telefono { get; set; }
        public string Email { get; set; }
        public DateTime FechaNacimiento { get; set; }
        public DateTime FechaCreacion { get; set; } = DateTime.Now;
        public string Direccion { get; set; }

        
    }
}
