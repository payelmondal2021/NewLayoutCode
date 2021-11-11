using BL.DtoEntities;
using System;
using System.Collections.Generic;
using System.Linq.Expressions;
using System.Text;

namespace BL.Interface
{
    public interface IHearingAidSearch
    {
        IEnumerable<DtoHearingAId> SearchHearingAid(int brandId, int platformId, int teamId);
    }
}
