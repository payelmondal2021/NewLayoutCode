using BL.DtoEntities;
using System;
using System.Collections.Generic;
using System.Text;

namespace BL.Interface
{
    public interface IProgrammers
    {
        void InsertProgrammer(DtoProgrammers platform);
        void UpdateProgrammer(DtoProgrammers platform);
        void DeleteProgrammer(DtoProgrammers platform);
        IEnumerable<DtoProgrammers> DisplayProgrammer();
    }
}
