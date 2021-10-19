using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace BL.DtoEntities
{
    public class DtoPlatform
    {
        [Key]
        public int PlatformId { get; set; }
        public string PlatformName { get; set; }
        public string Description { get; set; }

        public string Alias { get; set; }
    }
}
