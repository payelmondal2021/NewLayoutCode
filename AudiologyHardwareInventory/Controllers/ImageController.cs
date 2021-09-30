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
    public class ImageController : Controller
    {
        private readonly IImages _images;
        public ImageController(IImages images)
        {
            this._images = images;
        }
        [HttpGet]
        public IEnumerable<DtoImages> Get()
        {
            var image = _images.DisplayImages();
            return image;
        }

        [HttpPost]
        [Route("Create")]
        public void CreateImage([FromBody] DtoImages image)
        {

            _images.InsertImages(image);
        }

        [HttpPost]
        [Route("Update")]
        public void UpdateImage([FromBody] DtoImages image)
        {
            _images.UpdateImages(image);
            // return Json("Done");
        }

        [HttpPost]
        [Route("Delete")]
        public void DeleteImage([FromBody] DtoImages image)
        {
            _images.DeleteImages(image);
        }
    }
}
