using BL.DtoEntities;
using DAL.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;


namespace BL.Interface
{
    public interface IMobile
    {
        void InsertMobile(DtoMobile mobile);
        void UpdateMobile(DtoMobile mobile);
        void DeleteMobile(DtoMobile mobile);
        IEnumerable<DtoMobile> DisplayMobile();
    }
}
