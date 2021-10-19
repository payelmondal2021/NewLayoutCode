using BL.DtoEntities;
using DAL.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace BL.MappingEntity
{
    class PlatformMappingEntity
    {
        public IEnumerable<DtoPlatform> ConvertToDtoPlatform(IEnumerable<Platform> item)
        {
            var dtoPlatformList = new List<DtoPlatform>();

            foreach (Platform entity in item)
            {
                var c = new DtoPlatform();
                c.PlatformId = entity.PlatformId;
                c.PlatformName = entity.PlatformName;
                c.Description = entity.Description;
                c.Alias = entity.Alias;
                dtoPlatformList.Add(c);
            }
            return dtoPlatformList;
        }
        public Platform ConvertToPlatformEntity(DtoPlatform item)
        {
            Platform platform = null;

            platform = new Platform();
            platform.PlatformId = item.PlatformId;
            platform.PlatformName = item.PlatformName;
            platform.Description = item.Description;
            platform.Alias = item.Alias;

            return platform;
        }
    }
}
