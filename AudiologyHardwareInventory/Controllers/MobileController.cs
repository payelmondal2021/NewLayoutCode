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
    public class MobileController : Controller
    {
        private readonly IMobile _mobile;

        public MobileController(IMobile mobile)
        {
            this._mobile = mobile;
        }

        [HttpGet]
        public IEnumerable<DtoMobile> Get()
        {
            var mobile = _mobile.DisplayMobile();
            return mobile;
        }

        [HttpPost]
        [Route("Create")]
        public void CreateMobile([FromBody] DtoMobile mobile)
        {

            _mobile.InsertMobile(mobile);
        }

        [HttpPost]
        [Route("Update")]
        public void UpdateMobile([FromBody] DtoMobile mobile)
        {
            _mobile.UpdateMobile(mobile);
        }

        [HttpPost]
        [Route("Delete")]
        public void DeleteMobile([FromBody] DtoMobile mobile)
        {
            _mobile.DeleteMobile(mobile);
        }

    }
}
