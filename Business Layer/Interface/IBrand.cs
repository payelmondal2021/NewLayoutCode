using BL.DtoEntities;
using DAL.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;


namespace BL.Interface
{
    public interface IBrand
    {
        void InsertBrand(DtoBrand manufacturer);
        void UpdateBrand(DtoBrand manufacturer);
        void DeleteBrand(DtoBrand manufacturer);
        IEnumerable<DtoBrand> DisplayBrand();
    }
}
