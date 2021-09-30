using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace DAL.Entities
{
    public class ChipSet
    {
        [Key]
        public int ChipSetId { get; set; }
        public string ChipSetName { get; set; }
        public string Description { get; set; }
    }
}
