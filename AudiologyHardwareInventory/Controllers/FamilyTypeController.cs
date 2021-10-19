using System.Linq;
using System.Threading.Tasks;
using System.Net.Http;
using BL.DtoEntities;
using BL.Interface;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;

namespace AudiologyHardwareInventorsy.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FamilyTypeController : Controller
    {
        private readonly IFamilyType _familyType;
        public FamilyTypeController(IFamilyType familyType)
        {
            this._familyType = familyType;
        }
        [HttpGet]
        public IEnumerable<DtoFamilyType> Get()
        {
            var familyType = _familyType.DisplayFamilyType();
            return familyType;
        }

        [HttpPost]
        [Route("Create")]
        public void CreateFamilyType([FromBody] DtoFamilyType familyType)
        {

            _familyType.InsertFamilyType(familyType);
        }

        [HttpPost]
        [Route("Update")]
        public void UpdateFamilyType([FromBody] DtoFamilyType familyType)
        {
            _familyType.UpdateFamilyType(familyType);
            // return Json("Done");
        }

        [HttpPost]
        [Route("Delete")]
        public void DeleteFamilyType([FromBody] DtoFamilyType familyType)
        {
            _familyType.DeleteFamilyType(familyType);
        }
    }
}
