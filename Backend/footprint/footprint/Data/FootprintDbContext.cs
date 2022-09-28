using footprint.Data.Entity;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace footprint.Data
{
    public class FootprintDbContext : DbContext
    {
        public FootprintDbContext(DbContextOptions<FootprintDbContext> options) : base(options)
        {
            this.Database.EnsureCreated();
        }
        
        public DbSet<TransportFootPrint> TransprotFootPrints { get; set; }
        public DbSet<DomesticFootPrint> DomesticFootPrints { get; set; }

        public DbSet<User> Users { get; set; }
    }

}
