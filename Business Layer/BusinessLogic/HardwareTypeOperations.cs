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
    public class HardwareTypeOperations:IHardwareType
    {
       
        private readonly IRepository<HardwareType> _hardwareTypeRepository = null;
        private readonly HardwareTypeMappingEntity _mappingEntity = null;

        public HardwareTypeOperations()
        {
            _hardwareTypeRepository = new GenericRepository<HardwareType>();
            _mappingEntity = new HardwareTypeMappingEntity();
        }
        public void InsertHardwareType(DtoHardwareType hardwareType)
        {
            var hardwareTypeData = _mappingEntity.ConvertToHardwareTypeEntity(hardwareType);
            _hardwareTypeRepository.Create(hardwareTypeData);
        }
        public void UpdateHardwareType(DtoHardwareType hardwareType)
        {
            var hardwareTypeData = _mappingEntity.ConvertToHardwareTypeEntity(hardwareType);
            _hardwareTypeRepository.Update(hardwareTypeData);
        }
        public void DeleteHardwareType(DtoHardwareType hardwareType)
        {
            var hardwareTypeData = _mappingEntity.ConvertToHardwareTypeEntity(hardwareType);
            _hardwareTypeRepository.Delete(hardwareTypeData);
        }
        public IEnumerable<DtoHardwareType> DisplayHardwareType()
        {
           var hardwareType = _hardwareTypeRepository.Select();
           var dtoTeam = _mappingEntity.ConvertToDtoHardwareType(hardwareType);
            return dtoTeam;
        }

    }
}
