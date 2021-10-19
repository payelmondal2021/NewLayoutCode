using System.Linq;
using System.Threading.Tasks;
using System.Net.Http;
using BL.DtoEntities;
using BL.Interface;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;

namespace AudiologyHardwareInventory.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProgrammerController : Controller
    {
        private readonly IProgrammers _programmers;
        public ProgrammerController(IProgrammers programmers)
        {
            this._programmers = programmers;
        }
        [HttpGet]
        public IEnumerable<DtoProgrammers> Get()
        {
            var programmers = _programmers.DisplayProgrammer();
            return programmers;
        }

        [HttpPost]
        [Route("Create")]
        public void Create([FromBody] DtoProgrammers programmers)
        {

            _programmers.InsertProgrammer(programmers);
        }

        [HttpPost]
        [Route("Update")]
        public void UpdateProgrammers([FromBody] DtoProgrammers programmers)
        {
            _programmers.UpdateProgrammer(programmers);
            // return Json("Done");
        }

        [HttpPost]
        [Route("Delete")]
        public void DeleteProgrammers([FromBody] DtoProgrammers programmers)
        {
            _programmers.DeleteProgrammer(programmers);
        }
    }
}
