using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BL.DtoEntities;
using DAL.Entities;

namespace BL.Interface
{
    public interface ITeam
    {
        IEnumerable<DtoTeam>  DisplayTeamStatus();
        void InsertNewTeam(DtoTeam teamDetails);
        void UpdateTeam(DtoTeam teamDetails);
        void DeleteTeam(DtoTeam teamDetails);

    }
}
