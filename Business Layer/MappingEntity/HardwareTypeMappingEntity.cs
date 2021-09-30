using BL.DtoEntities;
using DAL.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace BL.MappingEntity
{
    class HardwareTypeMappingEntity
    {
        public IEnumerable<DtoHardwareType> ConvertToDtoHardwareType(IEnumerable<HardwareType> item)
        {
            var dtoHardwareTypeList = new List<DtoHardwareType>();
            foreach (HardwareType hardwareType in item)
            {
                var dtoHardwareType = new DtoHardwareType();
                dtoHardwareType.HardwareTypeId = hardwareType.HardwareTypeId;
                dtoHardwareType.HardwareName = hardwareType.HardwareName;
                dtoHardwareType.Description = hardwareType.Description;
                dtoHardwareTypeList.Add(dtoHardwareType);
            }
            return dtoHardwareTypeList;
        }
        public HardwareType ConvertToHardwareTypeEntity(DtoHardwareType item)
        {
            HardwareType hardwareType = null;
            hardwareType = new HardwareType();
            hardwareType.HardwareTypeId = item.HardwareTypeId;
            hardwareType.HardwareName = item.HardwareName;
            hardwareType.Description = item.Description;
            return hardwareType;
        }
    }
}
