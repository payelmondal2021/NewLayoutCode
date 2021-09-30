
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using System.Net.Http;
using BL.Interface;
using BL.DtoEntities;


namespace AudiologyHardwareInventory.Controllers
{

    [Route("api/[controller]")]
    [ApiController]
    public class tesingController : Controller
    {
        private readonly ILogger<tesingController> _logger;
        private readonly ITeam _team;

        public tesingController(ILogger<tesingController> logger, ITeam team)
        {
            _logger = logger;
            this._team = team;
        }
       
        [HttpGet]
        public IEnumerable<DtoTeam>  Get()
        {
            var chipSet = _team.DisplayTeamStatus();
            return chipSet;
        }

        [HttpPost]
        [Route("Create")]
        public void CreateTeam([FromBody] DtoTeam team)
        {        
            _team.InsertNewTeam(team);
        }


        //[HttpPost]
        //[Route("Create")]
        //public void CreateTeam([FromBody] DtoTeam team)
        //{
        //    //var maxId = _team.DisplayTeamStatus().Max(a => a.TeamId);
        //    //team.TeamId = maxId + 1;
        //    _team.InsertNewTeam(team);
        //}

        //[HttpPost]
        //[Route("Update")]
        //public void UpdateTeam([FromBody] Team team)
        //{
        //    _team.UpdateTeam(team);
        //}

        //[HttpPost]
        //[Route("Delete")]
        //public void DeleteTeam([FromBody] Team team)
        //{
        //    _team.DeleteTeam(team);
        //}
    }
}
