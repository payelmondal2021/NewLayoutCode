
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System.Collections.Generic;
using BL.DtoEntities;
using BL.Interface;

namespace AudiologyHardwareInventory.Controllers
{

    [Route("api/[controller]")]
    [ApiController]
    public class TeamController : Controller
    {
        private readonly ILogger<TeamController> _logger;
        private readonly ITeam _team;



        public TeamController(ILogger<TeamController> logger, ITeam team)
        {
            _logger = logger;
            this._team = team;
        }
        [HttpGet]
        public IEnumerable<DtoTeam> Get()
        {
            var team = _team.DisplayTeamStatus();
            return team;
        }

       

        [HttpPost]
        [Route("Create")]
        public void CreateTeam([FromBody] DtoTeam team)
        {

            _team.InsertNewTeam(team);
        }

        [HttpPost]
        [Route("Update")]
        public void UpdateTeam([FromBody] DtoTeam team)
        {
            _team.UpdateTeam(team);
        }

        [HttpPost]
        [Route("Delete")]
        public void DeleteTeam([FromBody] DtoTeam team)
        {
            _team.DeleteTeam(team);
        }
    }
}
