using Facturacion.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Facturacion.Services.Interfaces
{
    public interface IClientesServices
    {
        List<Clientes> GetAll();
        Clientes Get(int id);
        Task<bool> Post(Clientes clientes);
        Task<bool> Put(int id, Clientes cliente);
        void Delete(int id);
    }
}
