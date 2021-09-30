
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
    public class ChipSetController : Controller
    {
        private readonly ILogger<TeamController> _logger;
        private readonly IChipSet _chipSet;


        public ChipSetController(ILogger<TeamController> logger, IChipSet _chipSet)
        {
            _logger = logger;
            this._chipSet = _chipSet;
        }

        [HttpGet]
        public IEnumerable<DtoChipSet> Get()
        {
            var chipSet = _chipSet.DisplayChipSet();
            return chipSet;
        }

        [HttpPost]
        [Route("Create")]
        public void CreateChipSet([FromBody] DtoChipSet chipset)
        {
           
            _chipSet.InsertChipSet(chipset);
        }

        [HttpPost]
        [Route("Update")]
        public void UpdateChipSet([FromBody] DtoChipSet chipset)
        {
            _chipSet.UpdateChipSet(chipset);
            // return Json("Done");
        }

        [HttpPost]
        [Route("Delete")]
        public void DeleteChipSet([FromBody] DtoChipSet chipSet)
        {
            _chipSet.DeleteChipSet(chipSet);
        }



    }
}
