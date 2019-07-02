using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Facturacion.Models
{
    public class Productos
    {
        public int Id { get; set; }
        public string Descripcion { get; set; }
        public float Precio { get; set; }
        public DateTime FechaCreacion { get; set; } = DateTime.Now;
    }
}
