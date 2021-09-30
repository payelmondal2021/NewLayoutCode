using System;
using Newtonsoft.Json;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Threading.Tasks;
using BL.DtoEntities;
using BL.Interface;
using DAL;
using DAL.Entities;
using Microsoft.EntityFrameworkCore;
using AutoMapper;
using BL.MappingEntity;

namespace AudiologyHardwareInventory.BusinessLayer
{
    public class TeamOperations :  ITeam
    {
        private readonly IRepository<Team> _teamRepository = null;
        private readonly TeamMappingEntity _mappingEntity = null;


        public TeamOperations()
        {
            _teamRepository = new GenericRepository<Team>();
            _mappingEntity= new TeamMappingEntity();          
        }
      

        public IEnumerable<DtoTeam>  DisplayTeamStatus()
        {           
            var  team= _teamRepository.Select();
            var dtoTeam=_mappingEntity.ConvertToDtoTeam(team);
            return dtoTeam;
        }

        public void InsertNewTeam(DtoTeam teamDetails)
        {
            var team = _mappingEntity.ConvertToTeamEntity(teamDetails);
            _teamRepository.Create(team);
        }
        public void UpdateTeam(DtoTeam teamDetails)
        {
            var team = _mappingEntity.ConvertToTeamEntity(teamDetails);
            _teamRepository.Update(team);
        }
        public void DeleteTeam(DtoTeam teamDetails)
        {
            var team = _mappingEntity.ConvertToTeamEntity(teamDetails);
            _teamRepository.Delete(team);
        }
    }
}
