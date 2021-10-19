using BL.DtoEntities;
using DAL.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace BL.MappingEntity
{
    public class FamilyTypeMappingEntity
    {
        public IEnumerable<DtoFamilyType> ConvertToDtoFamilyType(IEnumerable<FamilyType> item)
        {
            var dtoFamilyTypeList = new List<DtoFamilyType>();
            foreach (FamilyType entity in item)
            {
                var c = new DtoFamilyType();
                c.FamilyTypeId = entity.FamilyTypeId;
                c.FamilyName = entity.FamilyName;
                c.Description = entity.Description;
                dtoFamilyTypeList.Add(c);
            }
            return dtoFamilyTypeList;
        }
        public FamilyType ConvertToFamilyTypeEntity(DtoFamilyType item)
        {
            FamilyType familytype = null;
            familytype = new FamilyType();
            familytype.FamilyTypeId = item.FamilyTypeId;
            familytype.FamilyName = item.FamilyName;
            familytype.Description = item.Description;
            return familytype;
        }
    }
}
