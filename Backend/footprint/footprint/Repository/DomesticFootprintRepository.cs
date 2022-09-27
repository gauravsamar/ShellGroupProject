using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;


using footprint.Data;
using footprint.Data.Entity;

namespace footprint.Repository
{
    public class DomesticFootprintRepository
    {
        public FootprintDbContext _dbContext;
        public DomesticFootprintRepository(FootprintDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public IEnumerable<DomesticFootPrint> GetDomesticFootprints()
        {
            return _dbContext.DomesticFootPrints;
        }

        public IEnumerable<DomesticFootPrint> GetDomesticFootprintByMonth(string Month)
        {
            return _dbContext.DomesticFootPrints.Where(i => i.Month == Month);
        }
        public IEnumerable<DomesticFootPrint> GetDomesticFootprintByYear(int Year)
        {
            return _dbContext.DomesticFootPrints.Where(i => i.Year == Year);
        }

        public DomesticFootPrint AddDomesticFootPrint(DomesticFootPrint domesticFootPrint)
        {
            _dbContext.DomesticFootPrints.Add(domesticFootPrint);
            _dbContext.SaveChanges();
            return domesticFootPrint;
        }

    }
}