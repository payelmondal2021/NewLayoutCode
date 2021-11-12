using BL.Interface;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BL.DtoEntities;

namespace AudiologyHardwareInventory.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LoginController : Controller
    {
        private readonly ILogin _login;

        public LoginController(ILogin login)
        {
            this._login = login;
        }

        [HttpPost]
        [Route("GetLoginStatus")]
        public IEnumerable<DtoLogin> SearchHearingAid([FromBody] DtoLogin login)
        {
            string userName = login.UserName;
            string password = login.Password;
            var AdminLogin = _login.AdminLogin();
            var loginStatus= AdminLogin.Where(x => x.UserName == userName && x.Password == password);
            return loginStatus;
        }

        [HttpPost]
        [Route("Create")]
        public void InserAdmin([FromBody] DtoLogin admin)
        {
            _login.InsertAdmin(admin);
        }


    }
}
