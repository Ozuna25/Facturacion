using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace Facturacion.Models
{
    public class FacturaDetalle
    {
        public int Id { get; set; }
        [ForeignKey("Factura")]
        public int FacturaId { get; set; }
        [ForeignKey("Productos")]
        public int ProductoId { get; set; }
        public float Precio { get; set; }
        public int Cantidad { get; set; }
        public float Subtotal { get; set; }

    }
}
