using BL.DtoEntities;
using DAL.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace BL.MappingEntity
{
    class MobileMappingEntity
    {
        public IEnumerable<DtoMobile> ConvertToDtoMobile(IEnumerable<Mobile> item)
        {          
            var dtoMobileList = new List<DtoMobile>();
            foreach (Mobile entity in item)
            {
                var c = new DtoMobile();
                c.Id = entity.Id;
                c.MobileDeviceName = entity.MobileDeviceName;
                c.OSVersion = entity.OSVersion;
                c.ProcessorArchitecture = entity.ProcessorArchitecture;
                c.DisplayInInches = entity.DisplayInInches;
                c.SupportedProtocol = entity.SupportedProtocol;
                c.Resolution = entity.Resolution;
                c.TeamId = entity.TeamId;
                c.ChipSetId = entity.ChipSetId;
                c.BrandId = entity.BrandId;
                c.Status = entity.Status;
                c.Description = entity.Description;
                c.SerialNumber = entity.SerialNumber;
                dtoMobileList.Add(c);
            }
            return dtoMobileList;
        }
        public Mobile ConvertToMobileEntity(DtoMobile item)
        {
            Mobile mobile = null;
            mobile = new Mobile();
            mobile.Id = item.Id;
            mobile.MobileDeviceName = item.MobileDeviceName;
            mobile.OSVersion = item.OSVersion;
            mobile.ProcessorArchitecture = item.ProcessorArchitecture;
            mobile.DisplayInInches = item.DisplayInInches;
            mobile.SupportedProtocol = item.SupportedProtocol;
            mobile.Resolution = item.Resolution;
            mobile.TeamId = item.TeamId;
            mobile.ChipSetId = item.ChipSetId;
            mobile.BrandId = item.BrandId;
            mobile.Status = item.Status;
            mobile.Description = item.Description;
            mobile.SerialNumber = item.SerialNumber;
            return mobile;
        }
    }
}
