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
    public class ChipSetOperations: IChipSet
    {
        private readonly IRepository<ChipSet> _chipSetRepository=null;
        private readonly ChipSetMappingEntity _mappingEntity = null;
        // private readonly HardwareInventoryContext _hardwareInventoryContext = null;
        public ChipSetOperations()
        {
            //this._hardwareInventoryContext = DBConnection.CreateHardwareInventoryContext();
            //this._chipSRepository = chipSetRepository;
            _chipSetRepository = new GenericRepository<ChipSet>();
            _mappingEntity = new ChipSetMappingEntity();
            //this._hardwareInventoryContext = hardwareInventoryContext;
        }

        public void InsertChipSet(DtoChipSet chipSet)
        {
            var chipSetDetails = _mappingEntity.ConvertToChipSetEntity(chipSet);
            _chipSetRepository.Create(chipSetDetails);
        }
        public void UpdateChipSet(DtoChipSet chipSet)
        {
            var chipSetDetails = _mappingEntity.ConvertToChipSetEntity(chipSet);
            _chipSetRepository.Update(chipSetDetails);
        }
        public void DeleteChipSet(DtoChipSet chipSet)
        {
            var chipSetDetails = _mappingEntity.ConvertToChipSetEntity(chipSet);
            _chipSetRepository.Delete(chipSetDetails);
        }
        public IEnumerable<DtoChipSet> DisplayChipSet()
        {
          var chipSet=  _chipSetRepository.Select();
          var dtoChipSet = _mappingEntity.ConvertToDtoChipSet(chipSet);
          return dtoChipSet;
        }
    }
}
