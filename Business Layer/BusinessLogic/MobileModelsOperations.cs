using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BL.DtoEntities;
using BL.Interface;
using DAL;
using DAL.Entities;
using Microsoft.EntityFrameworkCore;

namespace AudiologyHardwareInventory.BusinessLayer
{
    public class MobileModelsOperations:IMobileModels
    {
        private readonly IRepository<DtoMobileModels> _mobileModelRepository;
        public MobileModelsOperations(IRepository<DtoMobileModels> mobileModelRepository)
        {
            this._mobileModelRepository = mobileModelRepository;
        }

        public void InsertMobileModels(DtoMobileModels mobileModels)
        {
            _mobileModelRepository.Create(mobileModels);
        }
        public void UpdateMobileModels(DtoMobileModels mobileModels)
        {
            _mobileModelRepository.Update(mobileModels);
        }
        public void DeleteMobileModels(DtoMobileModels mobileModels)
        {
            _mobileModelRepository.Delete(mobileModels);
        }
        public IEnumerable<DtoMobileModels> DisplayMobileModels()
        {
           return _mobileModelRepository.Select();
        }
    }
}
