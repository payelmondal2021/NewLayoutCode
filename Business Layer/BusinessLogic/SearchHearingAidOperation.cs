using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;
using BL.DtoEntities;
using BL.Interface;
using BL.MappingEntity;
using DAL;
using DAL.Entities;
using Microsoft.EntityFrameworkCore;



namespace AudiologyHardwareInventory.BusinessLayer
{
    public class SearchHearingAidOperation:IHearingAidSearch
    {
        private readonly IHearingAId _hearingAId;
        public SearchHearingAidOperation(IHearingAId _hearingAId)
        {
            this._hearingAId = _hearingAId;
        }
        public IEnumerable<DtoHearingAId> SearchHearingAid(int brandId, int platformId, int teamId)
        {
            System.Linq.Expressions.Expression<Func<DtoHearingAId, bool>> conditionBrandId = null;
            System.Linq.Expressions.Expression<Func<DtoHearingAId, bool>> conditionPlatformId = null;
            System.Linq.Expressions.Expression<Func<DtoHearingAId, bool>> conditionTeamId = null;
            System.Linq.Expressions.Expression<Func<DtoHearingAId, bool>> combinedCondition = null;

           
            if (brandId != 0)
            {
                conditionBrandId = e => e.BrandId == brandId;
            }
            else
            {
                conditionBrandId = e => e.BrandId == -1;
            }
            if (platformId != 0)
            {
                conditionPlatformId = e => e.PlatformId == platformId;
            }
            else
            {
                conditionPlatformId = e => e.PlatformId == -1;
            }
            if (teamId != 0)
            {
                conditionTeamId = e => e.TeamId == teamId;
            }
            else
            {
                conditionTeamId = e => e.TeamId == -1;
            }
                    
            if (brandId != 0 && platformId != 0 && teamId != 0)
            {
                combinedCondition = LinqKit.PredicateBuilder.And(conditionBrandId, conditionPlatformId);
                combinedCondition = LinqKit.PredicateBuilder.And(combinedCondition, conditionTeamId);
            }
            else if (brandId != 0 || platformId != 0 || teamId != 0)
            {
                combinedCondition = LinqKit.PredicateBuilder.Or(conditionBrandId, conditionPlatformId);
                combinedCondition = LinqKit.PredicateBuilder.Or(combinedCondition, conditionTeamId);
            }
            else if (brandId == 0 && platformId == 0 && teamId == 0)
            {
                combinedCondition = LinqKit.PredicateBuilder.And(conditionBrandId, conditionPlatformId);
                combinedCondition = LinqKit.PredicateBuilder.And(combinedCondition, conditionTeamId);
            }
            var hearingAid = _hearingAId.GetHearingAidByStatus().AsQueryable();
            
             var searchOutput = hearingAid.Where(combinedCondition);

            
            return searchOutput;
        }
    }
}
