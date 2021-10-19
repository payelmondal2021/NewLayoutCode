using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace DAL.Entities
{
    public class Programmers
    {
        [Key]
        public int ProgrammerId { get; set; }
        public string ProgrammerName { get; set; }
        public string Description { get; set; }
    }
}
