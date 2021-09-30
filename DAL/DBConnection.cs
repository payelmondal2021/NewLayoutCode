using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace DAL
{
    public class DBConnection
    {
        public static HardwareInventoryContext CreateHardwareInventoryContext()
        {
            var context = new HardwareInventoryContext();
            return context;
        }
    }
}
