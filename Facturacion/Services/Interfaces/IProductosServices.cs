using Facturacion.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Facturacion.Services.Interfaces
{
    public interface IProductosServices
    {
        List<Productos> GetAll();
        Productos Get(int id);
        Task<bool> Post(Productos productos);
        Task<bool> Put(int id, Productos producto);
        void Delete(int id);
    }
}
