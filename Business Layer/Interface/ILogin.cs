using BL.DtoEntities;
using System;
using System.Collections.Generic;
using System.Text;

namespace BL.Interface
{
    public interface ILogin
    {
        IEnumerable<DtoLogin> AdminLogin();
        void InsertAdmin(DtoLogin admin);
    }
}
