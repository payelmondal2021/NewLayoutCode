using BL.DtoEntities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;


namespace BL.Interface
{
    public interface IPlatform
    {
        void InsertPlatform(DtoPlatform platform);
        void UpdatePlatform(DtoPlatform platform);
        void DeletePlatform(DtoPlatform platform);
        IEnumerable<DtoPlatform> DisplayPlatform();
    }
}
