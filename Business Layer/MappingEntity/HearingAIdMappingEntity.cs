using BL.DtoEntities;
using DAL.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace BL.MappingEntity
{
    class HearingAIdMappingEntity
    {
       public IEnumerable<DtoHearingAId> ConvertToDtoHearingAId(IEnumerable<HearingAId> item)
        {
            var dtoHearingAIdList = new List<DtoHearingAId>();

            foreach (HearingAId hearingAId in item)
            {
                var dtoHearingAId = new DtoHearingAId();
                dtoHearingAId.Id = hearingAId.Id;
                dtoHearingAId.HearingAidName = hearingAId.HearingAidName;
                dtoHearingAId.SerialNumber = hearingAId.SerialNumber;
                dtoHearingAId.Description = hearingAId.Description;
                dtoHearingAId.AddedDate = hearingAId.AddedDate;
                dtoHearingAId.UpdatedDate = hearingAId.UpdatedDate;
                dtoHearingAId.DeletedDate = hearingAId.DeletedDate;
                dtoHearingAId.Status = hearingAId.Status;
                dtoHearingAId.BrandId = hearingAId.BrandId;
                dtoHearingAId.FirmwareVersion = hearingAId.FirmwareVersion;
                dtoHearingAId.Side = hearingAId.Side;
                dtoHearingAId.TeamId = hearingAId.TeamId;
                dtoHearingAId.PlatformId = hearingAId.PlatformId;
                dtoHearingAIdList.Add(dtoHearingAId);
            }
            return dtoHearingAIdList;
        }
        public HearingAId ConvertToHearingAIdEntity(DtoHearingAId item)
        {
            HearingAId hearingAId = null;

            hearingAId = new HearingAId();
            hearingAId.Id = item.Id;
            hearingAId.HearingAidName = item.HearingAidName;
            hearingAId.SerialNumber = item.SerialNumber;
            hearingAId.Description = item.Description;
            hearingAId.AddedDate = item.AddedDate;
            hearingAId.UpdatedDate = item.UpdatedDate;
            hearingAId.DeletedDate = item.DeletedDate;
            hearingAId.Status = item.Status;
            hearingAId.BrandId = item.BrandId;
            hearingAId.FirmwareVersion = item.FirmwareVersion;
            hearingAId.Side = item.Side;
            hearingAId.TeamId = item.TeamId;
            hearingAId.PlatformId = item.PlatformId;

            return hearingAId;
        }
    }
}
