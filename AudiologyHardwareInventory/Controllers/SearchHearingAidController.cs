using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using System.Net.Http;
using BL.DtoEntities;
using BL.Interface;


namespace AudiologyHardwareInventory.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SearchHearingAidController : Controller
    {
        private readonly IHearingAidSearch _hearingAidSearch;
        public SearchHearingAidController(IHearingAidSearch hearingAidSearch)
        {
            this._hearingAidSearch = hearingAidSearch;
        }

        //[HttpPost]
        //[Route("GetSearchHearingAid")]
        //public IEnumerable<DtoTeam> getdata([FromBody] DtoSearchField title)
        //{
        //    var chipSet = _team.DisplayTeamStatus();
        //    return chipSet;
        //}

        [HttpPost]
        [Route("GetSearchResult")]
        public IEnumerable<DtoHearingAId> SearchHearingAid([FromBody] DtoSearchField data)
        {
            int brandId = data.BrandId;
            int platformId = data.PlatformId;
            int teamId = data.TeamId;
            //var hearingAid = _hearingAId.GetHearingAidByStatus().AsQueryable();

            var searchOutput= _hearingAidSearch.SearchHearingAid(brandId,platformId,teamId);
            return searchOutput;         
        }











        //[HttpGet]
        //public IEnumerable<DtoHearingAId> GetHearingAidList()
        //{
        //    int brandId = 1;
        //    int platformId = 4;
        //    int teamId = 1;
        //    var hearingAid = _hearingAid.FilterDisplayForStatus().AsQueryable();
        //    IEnumerable<DtoHearingAId> hearingAidSearch = null;
        //    IEnumerable<DtoHearingAId> hearingAidByPlatform = null;
        //    IEnumerable<DtoHearingAId> hearingAidByTeam = null;
        //    List<DtoHearingAId> searchResult = new List<DtoHearingAId>();


        //    //List<DtoHearingAId> filter = new List<DtoHearingAId>()
        //    //{
        //    //    new DtoHearingAId { BrandId = 1  },

        //    //};
        //    //ParameterExpression param = Expression.Parameter(typeof(Person), "t");
        //    //var deleg = ExpressionBuilder.GetExpression<DtoHearingAId>(filter).Compile();
        //    //var filteredCollection = hearingAid.Where(deleg).ToList();

        //    ////try 1
        //    //Func<DtoHearingAId, bool> pred = null;
        //    //Func<DtoHearingAId, bool> condition2 = null;

        //    //if (brandId != 0)
        //    //{
        //    //    pred = p => p.BrandId == brandId;
        //    //}
        //    //if (platformId != 0)
        //    //{
        //    //    condition2 = p => p.PlatformId == platformId;
        //    //}
        //    ////

        //    if (brandId != 0)
        //    {
        //        hearingAidSearch = hearingAid.Where(x => x.BrandId == 1);
        //        foreach (var i in hearingAidSearch)
        //        {
        //            searchResult.Add(i);
        //        }

        //    }
        //    if (platformId != 0)
        //    {
        //        hearingAidByPlatform = hearingAid.Where(x => x.PlatformId == platformId).ToList();
        //        foreach (var i in hearingAidByPlatform)
        //        {
        //            searchResult.Add(i);
        //        }
        //    }
        //    if (teamId != 0)
        //    {
        //        hearingAidByTeam = hearingAid.Where(x => x.TeamId == teamId);
        //        foreach (var i in hearingAidByTeam)
        //        {
        //            searchResult.Add(i);
        //        }
        //    }
        //    searchResult = searchResult.Distinct().ToList();
        //    return searchResult;
        //}
    }
}
