using BL.DtoEntities;
using DAL.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace BL.MappingEntity
{
    class ChipSetMappingEntity
    {
        public IEnumerable<DtoChipSet> ConvertToDtoChipSet(IEnumerable<ChipSet> item)
        {
            var dtoChipSetList = new List<DtoChipSet>();
            foreach (ChipSet entity in item)
            {
                var c = new DtoChipSet();
                c.ChipSetId = entity.ChipSetId;
                c.ChipSetName = entity.ChipSetName;
                c.Description = entity.Description;
                dtoChipSetList.Add(c);
            }
            return dtoChipSetList;
        }
        public ChipSet ConvertToChipSetEntity(DtoChipSet item)
        {
            ChipSet chipSet = null;
            chipSet = new ChipSet();
            chipSet.ChipSetId = item.ChipSetId;
            chipSet.ChipSetName = item.ChipSetName;
            chipSet.Description = item.Description;
            return chipSet;
        }
    }
}
