using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BL.DtoEntities;
using DAL.Entities;

namespace BL.Interface
{
    public interface IMobileModels
    {
        void InsertMobileModels(DtoMobileModels mobileModels);
        void UpdateMobileModels(DtoMobileModels mobileModels);
        void DeleteMobileModels(DtoMobileModels mobileModels);
        IEnumerable<DtoMobileModels> DisplayMobileModels();
    }
}
