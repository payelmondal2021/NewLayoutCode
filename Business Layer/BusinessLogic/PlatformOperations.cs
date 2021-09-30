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
    public class PlatformOperations : IPlatform
    {

        private readonly IRepository<Platform> _platformRepository = null;
        private readonly PlatformMappingEntity _mappingEntity = null;

        public PlatformOperations()
        {
            _platformRepository = new GenericRepository<Platform>();
            _mappingEntity = new PlatformMappingEntity();
        }
        public void InsertPlatform(DtoPlatform platform)
        {
            var platformData = _mappingEntity.ConvertToPlatformEntity(platform);
            _platformRepository.Create(platformData);
        }
        public void UpdatePlatform(DtoPlatform platform)
        {
            var platformData = _mappingEntity.ConvertToPlatformEntity(platform);
            _platformRepository.Update(platformData);
        }
        public void DeletePlatform(DtoPlatform platform)
        {
            var platformData = _mappingEntity.ConvertToPlatformEntity(platform);
            _platformRepository.Delete(platformData);
        }
        public IEnumerable<DtoPlatform> DisplayPlatform()
        {
            var platform = _platformRepository.Select();
            var dtoPlatform = _mappingEntity.ConvertToDtoPlatform(platform);
            return dtoPlatform;
        }
    }
}
