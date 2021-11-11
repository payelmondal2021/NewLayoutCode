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
    public class BrandController : Controller
    {
        private readonly  IBrand _brand;
        public BrandController(IBrand brand)
        {
            this._brand = brand;
        }
        [HttpGet]
        public IEnumerable<DtoBrand> Get()
        {
            var brand = _brand.DisplayBrand();
            
            return brand;
        }

        [HttpPost]
        [Route("Create")]
        public void CreateBrand([FromBody] DtoBrand brand)
        {

            _brand.InsertBrand(brand);
        }

        [HttpPost]
        [Route("Update")]
        public void UpdateBrand([FromBody] DtoBrand brand)
        {
            _brand.UpdateBrand(brand);
            // return Json("Done");
        }

        [HttpPost]
        [Route("Delete")]
        public void DeleteBrand([FromBody] DtoBrand brand)
        {
            _brand.DeleteBrand(brand);
        }

    }
}
