using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace DAL.Entities
{
    public class HardwareType
    {
        [Key]
        public int HardwareTypeId { get; set; }
        public string HardwareName { get; set; }
        public string Description { get; set; }

    }
}
