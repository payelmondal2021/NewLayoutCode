using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace BL.DtoEntities
{
    public class DtoChipSet
    {
        [Key]
        public int ChipSetId { get; set; }
        public string ChipSetName { get; set; }
        public string Description { get; set; }
    }
}
