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
    public class PlatformController : Controller
    {
        private readonly IPlatform _platform;

        public PlatformController(IPlatform platform)
        {
            this._platform = platform;
        }

        [HttpGet]
        public IEnumerable<DtoPlatform> Get()
        {
            var platform = _platform.DisplayPlatform();
            return platform;
        }

        [HttpPost]
        [Route("Create")]
        public void CreatePlatform([FromBody] DtoPlatform platform)
        {

            _platform.InsertPlatform(platform);
        }

        [HttpPost]
        [Route("Update")]
        public void UpdatePlatForm([FromBody] DtoPlatform platform)
        {
            _platform.UpdatePlatform(platform);
            // return Json("Done");
        }

        [HttpPost]
        [Route("Delete")]
        public void DeletePlatform([FromBody] DtoPlatform platform)
        {
            _platform.DeletePlatform(platform);
        }

    }
}
