using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace BL.DtoEntities
{
    public class DtoHearingAId
    {
        [Key]
        public int Id { get; set; }
        public string HearingAidName { get; set; }
        public string SerialNumber { get; set; }

        public string Description { get; set; }
        public string AddedDate { get; set; }
        public string UpdatedDate { get; set; }
        public string DeletedDate { get; set; }

        public string Status { get; set; }

        [ForeignKey("Brand")]
        public int BrandId { get; set; }
        public DtoBrand Brand { get; set; }
        public string FirmwareVersion { get; set; }
        public string Side { get; set; }

        [ForeignKey("Teams")]
        public int TeamId { get; set; }

        public DtoTeam Team { get; set; }
        [ForeignKey("Platform")]
        public int PlatformId { get; set; }
        public DtoPlatform Platform { get; set; }


        [ForeignKey("FamilyType")]
        public int FamilyTypeId { get; set; }

        public DtoFamilyType FamilyType { get; set; }

        [ForeignKey("Programmers")]
        public int ProgrammerId { get; set; }

        public DtoProgrammers Programmers { get; set; }

        //[ForeignKey("Images")]
        //public int ImageUrlId { get; set; }
        //public Images Images { get; set; }
    }

}
