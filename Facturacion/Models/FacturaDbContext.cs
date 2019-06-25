using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Facturacion.Models
{
    public class FacturaDbContext: DbContext
    {
        public FacturaDbContext(DbContextOptions<FacturaDbContext>options):base(options) { }

        public DbSet<Clientes> Clientes { get; set; }
        public DbSet<Productos> Productos { get; set; }
        public DbSet<Factura> Facturas { get; set; }
        public DbSet<FacturaDetalle> FacturaDetalles { get; set; }
    }
}
