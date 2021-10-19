using BL.DtoEntities;
using BL.Interface;
using BL.MappingEntity;
using DAL;
using DAL.Entities;
using System;
using System.Collections.Generic;
using System.Text;


namespace AudiologyHardwareInventory.BusinessLayer
{
    public class FamilyTypeOperation : IFamilyType
    {
        private readonly IRepository<FamilyType> _familyTypeRepository = null;
        private readonly FamilyTypeMappingEntity _mappingEntity = null;

        public FamilyTypeOperation()
        {
            _familyTypeRepository = new GenericRepository<FamilyType>();
            _mappingEntity = new FamilyTypeMappingEntity();
        }
        public void DeleteFamilyType(DtoFamilyType familyType)
        {
            var familyTypedata = _mappingEntity.ConvertToFamilyTypeEntity(familyType);
            _familyTypeRepository.Delete(familyTypedata);
        }

        public IEnumerable<DtoFamilyType> DisplayFamilyType()
        {
            var familyType = _familyTypeRepository.Select();
            var dtoFamilyType = _mappingEntity.ConvertToDtoFamilyType(familyType);
            return dtoFamilyType;
        }

        public void InsertFamilyType(DtoFamilyType familyType)
        {
            var familyTypeData = _mappingEntity.ConvertToFamilyTypeEntity(familyType);
            _familyTypeRepository.Create(familyTypeData);
        }

        public void UpdateFamilyType(DtoFamilyType familyType)
        {
            var familyTypeData = _mappingEntity.ConvertToFamilyTypeEntity(familyType);
            _familyTypeRepository.Update(familyTypeData);
        }
    }
}
