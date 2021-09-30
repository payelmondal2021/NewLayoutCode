using BL.DtoEntities;
using DAL.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;


namespace BL.Interface
{
    public interface IChipSet
    {
        void InsertChipSet(DtoChipSet chipSet);
        void UpdateChipSet(DtoChipSet chipSet);
        void DeleteChipSet(DtoChipSet chipSet);
        IEnumerable<DtoChipSet> DisplayChipSet();
    }
}
