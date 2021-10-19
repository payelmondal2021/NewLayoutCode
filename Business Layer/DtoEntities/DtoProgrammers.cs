using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace BL.DtoEntities
{
    public class DtoProgrammers
    {
        [Key]
        public int ProgrammerId { get; set; }
        public string ProgrammerName { get; set; }
        public string Description { get; set; }
    }
}
