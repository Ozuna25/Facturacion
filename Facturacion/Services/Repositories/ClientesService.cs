using Facturacion.Models;
using Facturacion.Services.Interfaces;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Facturacion.Services.Repositories
{
    public class ClientesService : IClientesServices
    {
        private readonly FacturaDbContext _facturaDbContext;

        public ClientesService(FacturaDbContext facturaDbContext)
        {
            _facturaDbContext = facturaDbContext;
        }

   
        public List <Clientes> GetAll()
        {
            try
            {
                return _facturaDbContext.Clientes.ToList();
            }
            catch (Exception)
            {
                return new List<Clientes>();
            }
        }


        public Clientes Get(int id)
        {
            try {

                return this.GetAll().Where(Clientes => Clientes.Id.Equals(id)).Single();

            } catch (Exception){

                return new Clientes();
            }
        }
      
        public async Task<bool> Post([FromBody] Clientes clientes)
        {
            try
            {
                var cliente = new Clientes();
                cliente.Nombres = clientes.Nombres;
                cliente.Apellidos = clientes.Apellidos;
                cliente.Cedula = clientes.Cedula;
                cliente.Direccion = clientes.Direccion;
                cliente.Telefono = clientes.Telefono;
                cliente.Email = clientes.Email;
                cliente.FechaNacimiento = clientes.FechaNacimiento;
               

                _facturaDbContext.Clientes.Add(cliente);
                await _facturaDbContext.SaveChangesAsync();

                return true;
            }
            catch(Exception)
            {
                return false;
            }
        }
      
        public async Task <bool> Put (int id, Clientes clientes)
        {
            try
            {
                var viejoCliente = await _facturaDbContext.Clientes.Where(c => c.Id == id).FirstOrDefaultAsync();
                viejoCliente.Nombres = clientes.Nombres;
                viejoCliente.Apellidos = clientes.Apellidos;
                viejoCliente.Cedula = clientes.Cedula;
                viejoCliente.Direccion = clientes.Direccion;
                viejoCliente.Telefono = clientes.Telefono;
                viejoCliente.Email = clientes.Email;
                viejoCliente.FechaCreacion = clientes.FechaCreacion;
                viejoCliente.FechaNacimiento = clientes.FechaNacimiento;

                _facturaDbContext.Clientes.Update(viejoCliente);
                await _facturaDbContext.SaveChangesAsync();

                return true;

            }
            catch (Exception)
            {
                return false;
            }
        }

        public void Delete(int id)
        {
            var clientes = _facturaDbContext.Clientes.Find(id);

            _facturaDbContext.Clientes.Remove(clientes);
            _facturaDbContext.SaveChanges();
        }
    }
}
