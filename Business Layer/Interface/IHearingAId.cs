using BL.DtoEntities;
using DAL.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;


namespace BL.Interface
{
    public interface IHearingAId
    {
        void InsertHearingAId(DtoHearingAId hearingAId);
        void UpdateHearingAId(DtoHearingAId hearingAId);
        void DeleteHearingAId(DtoHearingAId hearingAId);
        IEnumerable<DtoHearingAId> DisplayHearingAId();
        IEnumerable<DtoHearingAId> GetHearingAidByStatus();
    }
}
