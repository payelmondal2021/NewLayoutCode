﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Mime;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;
using DAL.Entities;

namespace DAL
{
    public class HardwareInventoryContext:DbContext
    {
        //public HardwareInventoryContext(DbContextOptions<HardwareInventoryContext> options) : base(options)
        //{

        //}
        public HardwareInventoryContext():base()
        {

        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
                //optionsBuilder.UseSqlServer(@"Server=MD2VGA1C\LOCAL_MS_SQL;Database=HardWareInventory;Trusted_Connection=True;MultipleActiveResultSets=True;");
                //optionsBuilder.UseNpgsql("Host=localhost;Database=TestDatabase;Username=postgres;Password=abcd");
                optionsBuilder.UseNpgsql("Host=localhost;Database=AUHardWareInventory;Username=postgres;Password=abcd");
            }

        }


        public DbSet<FamilyType> FamilyType { get; set; }
        public DbSet<Programmers> Programmers { get; set; }
        public DbSet<Team> Team { get; set; }
        public DbSet<Manufacturer> Manufacturer { get; set; }
        public DbSet<Platform> Platform { get; set; }
        public DbSet<HearingAId> HearingAId { get; set; }
        public DbSet<Images> Images { get; set; }
        public DbSet<ChipSet> ChipsSet { get; set; }
        public DbSet<Mobile> Mobile { get; set; }
        // public DbSet<MobileModels> MobileModels { get; set; }
        public DbSet<HardwareType> HardwareType { get; set; }
        public DbSet<Brand> Brand { get; set; }

    
    }
}
