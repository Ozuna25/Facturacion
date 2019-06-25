using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace Facturacion.Models
{
    public class Factura
    {
        [Key]
        public int Id { get; set; }
        public string Codigo { get; set; }
        [ForeignKey("Clientes")]
        public int ClienteId { get; set; }
        public string Descripcion { get; set; }
        public DateTime Fecha { get; set; }
        public float Subtotal { get; set; }
        public float Itbis { get; set; }
        public float Total { get; set; }

    }
}
