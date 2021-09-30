using BL.DtoEntities;
using DAL.Entities;
using System.Collections.Generic;

namespace BL.MappingEntity
{
    public class TeamMappingEntity
    {
        public IEnumerable<DtoTeam> ConvertToDtoTeam(IEnumerable<Team> item)
        {
            var dtoTeamList = new List<DtoTeam>();

            foreach (Team entity in item)
            {
                var c = new DtoTeam();
                c.TeamId = entity.TeamId;
                c.TeamName = entity.TeamName;
                c.Description = entity.Description;
                c.TeamMembers = entity.TeamMembers;             
                dtoTeamList.Add(c);
            }
            return dtoTeamList;
        }
        public Team ConvertToTeamEntity(DtoTeam item)
        {
                Team team=null; 
            
                team = new Team();
                team.TeamId = item.TeamId;
                team.TeamName = item.TeamName;
                team.Description = item.Description;
                team.TeamMembers = item.TeamMembers;
                          
            return team;
        }
    }
}
