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
    public class ProductosService : IProductosServices
    {
        private readonly FacturaDbContext _facturaDbContext;

        public ProductosService(FacturaDbContext facturaDbContext)
        {
            _facturaDbContext = facturaDbContext;
        }

   
        public List <Productos> GetAll()
        {
            try
            {
                return _facturaDbContext.Productos.ToList();
            }
            catch (Exception)
            {
                return new List<Productos>();
            }
        }


        public Productos Get(int id)
        {
            try {

                return this.GetAll().Where(Productos => Productos.Id.Equals(id)).Single();

            } catch (Exception){

                return new Productos();
            }
        }
      
        public async Task<bool> Post([FromBody] Productos productos)
        {
            try
            {
                var producto = new Productos();
               producto.Descripcion = productos.Descripcion;
               producto.Precio = productos.Precio;

                _facturaDbContext.Productos.Add(producto);
                await _facturaDbContext.SaveChangesAsync();

                return true;
            }
            catch(Exception)
            {
                return false;
            }
        }
      
        public async Task <bool> Put (int id, Productos productos)
        {
            try
            {
                var viejoProducto = await _facturaDbContext.Productos.Where(c => c.Id == id).FirstOrDefaultAsync();
                viejoProducto.Descripcion = productos.Descripcion;
                viejoProducto.Precio = productos.Precio;

                _facturaDbContext.Productos.Update(viejoProducto);
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
            var productos = _facturaDbContext.Productos.Find(id);

            _facturaDbContext.Productos.Remove(productos);
            _facturaDbContext.SaveChanges();
        }

     
    }
}
