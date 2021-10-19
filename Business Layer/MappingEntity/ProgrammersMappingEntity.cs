using BL.DtoEntities;
using DAL.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace BL.MappingEntity
{
    class ProgrammersMappingEntity
    {
        public IEnumerable<DtoProgrammers> ConvertToDtoProgrammers(IEnumerable<Programmers> item)
        {
            var dtoProgrammers = new List<DtoProgrammers>();
            foreach (Programmers entity in item)
            {
                var c = new DtoProgrammers();
                c.ProgrammerId = entity.ProgrammerId;
                c.ProgrammerName = entity.ProgrammerName;
                c.Description = entity.Description;
                dtoProgrammers.Add(c);
            }
            return dtoProgrammers;
        }
        public Programmers ConvertToProgrammersEntity(DtoProgrammers item)
        {
            Programmers programmers = null;
            programmers = new Programmers();
            programmers.ProgrammerId = item.ProgrammerId;
            programmers.ProgrammerName = item.ProgrammerName;
            programmers.Description = item.Description;
            return programmers;
        }
    }
}
