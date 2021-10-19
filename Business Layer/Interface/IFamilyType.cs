using BL.DtoEntities;
using DAL.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;


namespace BL.Interface
{
    public interface IFamilyType
    {
        void InsertFamilyType(DtoFamilyType familyType);
        void UpdateFamilyType(DtoFamilyType familyType);
        void DeleteFamilyType(DtoFamilyType familyType);
        IEnumerable<DtoFamilyType> DisplayFamilyType();
    }
}
