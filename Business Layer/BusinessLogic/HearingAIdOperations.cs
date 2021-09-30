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
    public class HearingAIdOperations:IHearingAId
    {        
        private readonly IRepository<HearingAId> _hearingAIdRepository = null;
        private readonly HearingAIdMappingEntity _mappingEntity = null;

        public HearingAIdOperations()
        {
             _hearingAIdRepository = new GenericRepository<HearingAId>();
             _mappingEntity = new HearingAIdMappingEntity();
        }
        
        public void InsertHearingAId(DtoHearingAId hearingAId)
        {
             var hearingAIdData = _mappingEntity.ConvertToHearingAIdEntity(hearingAId);
            _hearingAIdRepository.Create(hearingAIdData);
        }
        public void UpdateHearingAId(DtoHearingAId hearingAId)
        {
             var hearingAIdData = _mappingEntity.ConvertToHearingAIdEntity(hearingAId);
            _hearingAIdRepository.Update(hearingAIdData);
        }
        public void DeleteHearingAId(DtoHearingAId hearingAId)
        {
             var hearingAIdData = _mappingEntity.ConvertToHearingAIdEntity(hearingAId);
            _hearingAIdRepository.Delete(hearingAIdData);
        }
        public IEnumerable<DtoHearingAId> DisplayHearingAId()
        {
            var hearingAId =  _hearingAIdRepository.Select();
            var dtoHearingAId = _mappingEntity.ConvertToDtoHearingAId(hearingAId);
            return dtoHearingAId;
        }
        public IEnumerable<DtoHearingAId> FilterDisplayForStatus()
        {
            var hearingAId = _hearingAIdRepository.Select();
            hearingAId = hearingAId.Where(x => x.Status != "Disabled");
            var dtoHearingAId = _mappingEntity.ConvertToDtoHearingAId(hearingAId);
            return dtoHearingAId;
        }

    }
}
