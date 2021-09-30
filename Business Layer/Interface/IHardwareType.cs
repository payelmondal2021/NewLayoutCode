using BL.DtoEntities;
using DAL.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;


namespace BL.Interface
{
    public interface IHardwareType
    {
        void InsertHardwareType(DtoHardwareType hardwareType);
        void UpdateHardwareType(DtoHardwareType hardwareType);
        void DeleteHardwareType(DtoHardwareType hardwareType);
        IEnumerable<DtoHardwareType> DisplayHardwareType();
    }
}
