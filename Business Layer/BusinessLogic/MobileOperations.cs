using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BL.DtoEntities;
using BL.Interface;
using BL.MappingEntity;
using DAL;
using DAL.Entities;
using Microsoft.EntityFrameworkCore;

namespace AudiologyHardwareInventory.BusinessLayer
{
    public class MobileOperations:IMobile
    {
        private readonly IRepository<Mobile> _mobileRepository = null;
        private readonly MobileMappingEntity _mappingEntity = null;

        public MobileOperations()
        {
            _mobileRepository = new GenericRepository<Mobile>();
            _mappingEntity = new MobileMappingEntity();
        }

        public void InsertMobile(DtoMobile mobile)
        {
            var mobileData = _mappingEntity.ConvertToMobileEntity(mobile);
            _mobileRepository.Create(mobileData);
        }
        public void UpdateMobile(DtoMobile mobile)
        {
            var mobileData = _mappingEntity.ConvertToMobileEntity(mobile);
            _mobileRepository.Update(mobileData);
        }
        public void DeleteMobile(DtoMobile mobile)
        {
            var mobileData = _mappingEntity.ConvertToMobileEntity(mobile);
            _mobileRepository.Delete(mobileData);
        }
        public IEnumerable<DtoMobile> DisplayMobile()
        {
            var mobile = _mobileRepository.Select();
            var dtoMobile = _mappingEntity.ConvertToDtoMobile(mobile);
            return dtoMobile;
        }
    }
}
