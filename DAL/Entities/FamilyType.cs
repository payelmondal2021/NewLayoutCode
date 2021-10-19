﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace DAL.Entities
{
    public class FamilyType
    {
        [Key]
        public int FamilyTypeId { get; set; }
        public string FamilyName { get; set; }
        public string Description {get;set;}
    }
}
