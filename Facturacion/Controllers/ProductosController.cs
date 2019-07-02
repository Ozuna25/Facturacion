using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Facturacion.Models;
using Facturacion.Services.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace Facturacion.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductosController : ControllerBase
    {
        private readonly IProductosServices _productosServices;
        private readonly FacturaDbContext _factura;

        public ProductosController(IProductosServices productosServices, FacturaDbContext facturaDbContext)
        {
            _productosServices = productosServices;
            _factura = facturaDbContext;
        }

        // GET: api/Productos
        [HttpGet]
        public IActionResult GetProductos()
        {
            var productos = _productosServices.GetAll();
            if (productos.Count == 0) return NotFound();
            return Ok(productos);
        }

        // GET: api/Productos/5
        [HttpGet("{id}")]
        public IActionResult GetProducto([FromRoute] int id)
        {
            if (!ModelState.IsValid) return BadRequest(ModelState);

            var producto = _productosServices.Get(id);
            if (producto == null) return NotFound();

            return Ok(producto);
        }

        [HttpPost]
        public async Task<bool> Post(Productos producto)
        {

            var seAgrego = await _productosServices.Post(producto);

            return seAgrego;
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> Put(int id, Productos productos)
        {
            var seActualizo = await _productosServices.Put(id, productos);

            return Ok(seActualizo);
        }
        // DELETE: api/Productos/5
        [HttpDelete("{id}")]
        public void DeleteCliente(int id)
        {
            _productosServices.Delete(id);
        }
    }
}