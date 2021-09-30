using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace BL.DtoEntities
{
    public class DtoImages
    {
        [Key]
        public int ImageUrlId { get; set; }
        
        public int Id { get; set; }

        //[ForeignKey("Id")]
        //public HearingAId HearingAId { get; set; }

        //[ForeignKey("Id")]
        //public Mobile Mobile { get; set; }

        public string ImageUrl { get; set; }

        public int HardwareTypeId { get; set; }
        [ForeignKey("HardwareTypeId")]
        public DtoHardwareType HardwareType { get; set; }
    }
}
