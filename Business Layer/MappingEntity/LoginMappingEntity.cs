using BL.DtoEntities;
using DAL.Entities;
using System;
using System.Collections.Generic;
using System.Text;

namespace BL.MappingEntity
{
    public class LoginMappingEntity
    {
        public IEnumerable<DtoLogin> ConvertToDtoLogin(IEnumerable<Login> item)
        {
            var dtoLogin = new List<DtoLogin>();
            foreach (Login login in item)
            {
                var dtoLoginData = new DtoLogin();
                dtoLoginData.UserName = login.UserName;
                dtoLoginData.Password = login.Password;
                dtoLoginData.Role = login.Role;
                dtoLogin.Add(dtoLoginData);
            }
            return dtoLogin;
        }
        public Login ConvertToLoginEntity(DtoLogin item)
        {
            Login login = null;
            login = new Login();
            login.UserName = item.UserName;
            login.Password = item.Password;
            login.Role = item.Role;
            return login;
        }
    }
}
