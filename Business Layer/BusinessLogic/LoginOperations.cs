using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BL.DtoEntities;
using BL.Interface;
using BL.MappingEntity;
using DAL;
using DAL.Entities;
using Microsoft.EntityFrameworkCore;


namespace AudiologyHardwareInventory.BusinessLayer
{
    public class LoginOperations:ILogin
    {
        private readonly IRepository<Login> _loginRepository = null;
        private readonly LoginMappingEntity _mappingEntity = null;
        
        public LoginOperations()
        {
            _loginRepository = new GenericRepository<Login>();
            _mappingEntity = new LoginMappingEntity();
        }       
        public IEnumerable<DtoLogin> AdminLogin()
        {
            var login = _loginRepository.Select();
            var dtoLogin = _mappingEntity.ConvertToDtoLogin(login);
            return dtoLogin;
        }
    }
}
