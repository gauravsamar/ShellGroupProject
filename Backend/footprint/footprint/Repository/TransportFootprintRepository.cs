using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using footprint.Data;
using footprint.Data.Entity;

namespace footprint.Repository
{
    public class TransportFootprintRepository
    {
        public FootprintDbContext _dbContext;
        public TransportFootprintRepository(FootprintDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public IEnumerable<TransportFootPrint> GetTransportFootPrints()
        {
            return _dbContext.TransprotFootPrints;
        }

        public IEnumerable<TransportFootPrint> GetTransportFootprintByMonth(string Month)
        {
            return _dbContext.TransprotFootPrints.Where(i => i.Month == Month);
        }
        public IEnumerable<TransportFootPrint> GetTransportFootprintByYearAndUser(int Year, int UID)
        {
            return _dbContext.TransprotFootPrints.Where(i => i.Year == Year && i.UID == UID);
        }

        public TransportFootPrint AddTransportFootprint(TransportFootPrint transportFootPrint)
        {
            _dbContext.TransprotFootPrints.Add(transportFootPrint);
            _dbContext.SaveChanges();
            return transportFootPrint;
        }
        public IEnumerable<TransportFootPrint> GetTransportFootprintByYear(int Year)
        {
            return _dbContext.TransprotFootPrints.Where(i => i.Year == Year);
        }

    }
}