using footprint.Data;
using footprint.Data.Entity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace footprint.Data
{
    public static class InitialData
    {
        public static void Seed(this FootprintDbContext dbContext)
        {
            // add seeded datatbase on project run or with entity frame code run

            if (!dbContext.TransprotFootPrints.Any())
            {
                dbContext.TransprotFootPrints.Add(new TransportFootPrint
                {
                    Month = "January",
                    Year = 2022,
                    Petrol = 10.9F,
                    Desiel =10.9F, 
                    Lpg = 5F,
                    Taxis = 300,
                    Bus=20,
                    Autorickshaw=10.9F,
                    Train=11.9F,
                    Carbontransport = 25
                    
                });

                dbContext.TransprotFootPrints.Add(new TransportFootPrint
                {
                    Month = "Febrary",
                    Year = 2022,
                    Petrol = 10.9F,
                    Desiel = 10.9F,
                    Lpg = 5F,
                    Taxis = 300,
                    Bus = 20,
                    Autorickshaw = 10.9F,
                    Train = 11.9F,
                    Carbontransport = 25
                });

                dbContext.TransprotFootPrints.Add(new TransportFootPrint
                {
                    Month = "January",
                    Year = 2022,
                    Petrol = 10.9F,
                    Desiel = 10.9F,
                    Lpg = 5F,
                    Taxis = 300,
                    Bus = 20,
                    Autorickshaw = 10.9F,
                    Train = 11.9F,
                    Carbontransport = 25
                });

                dbContext.TransprotFootPrints.Add(new TransportFootPrint
                {
                    Month = "May",
                    Year = 2022,
                    Petrol = 10.9F,
                    Desiel = 10.9F,
                    Lpg = 5F,
                    Taxis = 300,
                    Bus = 20,
                    Autorickshaw = 10.9F,
                    Train = 11.9F,
                    Carbontransport = 25
                });

                dbContext.TransprotFootPrints.Add(new TransportFootPrint
                {
                    Month = "June",
                    Year = 2022,
                    Petrol = 10.9F,
                    Desiel = 10.9F,
                    Lpg = 5F,
                    Taxis = 300,
                    Bus = 20,
                    Autorickshaw = 10.9F,
                    Train = 11.9F,
                    Carbontransport = 25
                });

                dbContext.TransprotFootPrints.Add(new TransportFootPrint
                {
                    Month = "January",
                    Year = 2022,
                    Petrol = 10.9F,
                    Desiel = 10.9F,
                    Lpg = 5F,
                    Taxis = 300,
                    Bus = 20,
                    Autorickshaw = 10.9F,
                    Train = 11.9F,
                    Carbontransport = 25,
                });

                dbContext.SaveChanges();
            }
            if (!dbContext.DomesticFootPrints.Any())
            {
                dbContext.DomesticFootPrints.Add(new DomesticFootPrint
                {
                    Month = "May",
                    UID=1,
                    Year = 2022,
                    Lpg = 5F,
                    Cng = 6.8F,
                    CarbonDomestic = 25
                });
                dbContext.SaveChanges();
            }

            if (!dbContext.Users.Any())
            {
                dbContext.Users.Add(new User
                {
                    
                    Email = "john@gmail.com",
                    Password = "admin@123"

                }); ;

                dbContext.Users.Add(new User
                {
                    Email = "kevin@gmail.com",
                    Password = "admin@123"
                });

                dbContext.Users.Add(new User
                {
                    Email = "david@gmail.com",
                    Password = "admin@123"
                });

                dbContext.SaveChanges();
            }
           

        }
    }
}
