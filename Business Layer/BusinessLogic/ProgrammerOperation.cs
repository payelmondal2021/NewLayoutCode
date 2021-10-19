using BL.DtoEntities;
using BL.Interface;
using BL.MappingEntity;
using DAL;
using DAL.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace AudiologyHardwareInventory.BusinessLayer
{
    public class ProgrammersOperation: IProgrammers
    {
        private readonly IRepository<Programmers> _programmersRepository = null;
        private readonly ProgrammersMappingEntity _mappingEntity = null;

        public ProgrammersOperation()
        {
            _programmersRepository = new GenericRepository<Programmers>();
            _mappingEntity = new ProgrammersMappingEntity();
        }
        public void InsertProgrammer(DtoProgrammers programmers)
        {
            var programmersData = _mappingEntity.ConvertToProgrammersEntity(programmers);
            _programmersRepository.Create(programmersData);
        }
        public void UpdateProgrammer(DtoProgrammers programmers)
        {
            var programmersData = _mappingEntity.ConvertToProgrammersEntity(programmers);
            _programmersRepository.Update(programmersData);
        }
        public void DeleteProgrammer(DtoProgrammers programmers)
        {
            var programmersData = _mappingEntity.ConvertToProgrammersEntity(programmers);
            _programmersRepository.Delete(programmersData);
        }
        public IEnumerable<DtoProgrammers> DisplayProgrammer()
        {
            var programmers = _programmersRepository.Select();
            var dtoProgrammers = _mappingEntity.ConvertToDtoProgrammers(programmers);
            return dtoProgrammers;
        }
    }
}
