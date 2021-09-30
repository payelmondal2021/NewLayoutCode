using DAL.Entities;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace BL.DtoEntities
{
    public class DtoHardware
    {
        [Key]
        public int HardwareId { get; set; }
        public string HardwareName { get; set; }
        public DtoImages Images { get; set; }
    }
}
