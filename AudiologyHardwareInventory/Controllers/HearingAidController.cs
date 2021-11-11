using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System.Collections.Generic;
using BL.DtoEntities;
using BL.Interface;

namespace AudiologyHardwareInventory.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class HearingAidController : Controller
    {
        private readonly IHearingAId _hearingAid;

        public HearingAidController(IHearingAId hearingAid)
        {
            this._hearingAid = hearingAid;
        }
        [HttpGet]
        public IEnumerable<DtoHearingAId> Get()
        {
            var hearingAid = _hearingAid.DisplayHearingAId();
            return hearingAid;
        }
        [HttpGet]
        [Route("GetHeadingAidStatus")]
        public IEnumerable<DtoHearingAId> GetHeadingAidStatus()
        {
            var hearingAid = _hearingAid.GetHearingAidByStatus();
            return hearingAid;
        }

        [HttpPost]
        [Route("Create")]
        public void CreateHearingAid([FromBody] DtoHearingAId hearingAid)
        {

            _hearingAid.InsertHearingAId(hearingAid);
        }

        [HttpPost]
        [Route("Update")]
        public void UpdateHearingAid([FromBody] DtoHearingAId hearingAid)
        {
            _hearingAid.UpdateHearingAId(hearingAid);
        }

        [HttpPost]
        [Route("Delete")]
        public void DeleteHearingAid([FromBody] DtoHearingAId hearingAid)
        {
            _hearingAid.DeleteHearingAId(hearingAid);
        }
    }
}
