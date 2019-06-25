using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Facturacion.Models;
using Facturacion.Services.Interfaces;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Facturacion.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ClientesController : ControllerBase
    {
        private readonly IClientesServices _clientesServices;
        private readonly FacturaDbContext _factura;

        public ClientesController(IClientesServices clientesServices, FacturaDbContext facturaDbContext)
        {
            _clientesServices = clientesServices;
            _factura = facturaDbContext;
        }

        // GET: api/Clientes
        [HttpGet]
        public IActionResult GetClientes()
        {
            var clientes = _clientesServices.GetAll();
            if (clientes.Count == 0) return NotFound();
            return Ok(clientes);
        }

        // GET: api/Clientes/5
        [HttpGet("{id}")]
        public IActionResult GetCliente([FromRoute] int id)
        {
            if (!ModelState.IsValid) return BadRequest(ModelState);

            var cliente = _clientesServices.Get(id);
            if (cliente == null) return NotFound();

            return Ok(cliente);
        }

        [HttpPost]
        public async Task<bool> Post(Clientes cliente)
        {

            var seAgrego = await _clientesServices.Post(cliente);

            return seAgrego;
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> Put(int id, Clientes clientes)
        {
            var seActualizo = await _clientesServices.Put(id, clientes);

            return Ok(seActualizo);
        }
        // DELETE: api/Clientes/5
        [HttpDelete("{id}")]
        public void DeleteCliente(int id)
        {
            _clientesServices.Delete(id);
        }
    }
}