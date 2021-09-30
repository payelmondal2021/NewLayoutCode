using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Linq;
using BL.DtoEntities;
using BL.Interface;

namespace AudiologyHardwareInventory.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class HardwareTypeController : Controller
    {
        private readonly IHardwareType _hardwareType;
        public HardwareTypeController(IHardwareType hardwareType)
        {
            this._hardwareType = hardwareType;
        }
        [HttpGet]
        public IEnumerable<DtoHardwareType> Get()
        {
            var hardwareType = _hardwareType.DisplayHardwareType();
            return hardwareType;
        }

        [HttpPost]
        [Route("Create")]
        public void CreateHardwareType([FromBody] DtoHardwareType hardwareType)
        {

            _hardwareType.InsertHardwareType(hardwareType);
        }

        [HttpPost]
        [Route("Update")]
        public void UpdateHardwareType([FromBody] DtoHardwareType hardwareType)
        {
            _hardwareType.UpdateHardwareType(hardwareType);
            // return Json("Done");
        }

        [HttpPost]
        [Route("Delete")]
        public void DeleteHardwareType([FromBody] DtoHardwareType hardwareType)
        {
            _hardwareType.DeleteHardwareType(hardwareType);
        }
    }
}
