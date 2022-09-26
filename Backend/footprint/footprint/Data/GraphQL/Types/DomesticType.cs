using footprint.Data.Entity;
using GraphQL.Types;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace footprint.Data.GraphQL.Types
{
    public class DomesticType: ObjectGraphType<DomesticFootPrint>
    {
        public DomesticType()
        {
            Field(t => t.DID);

            Field(t => t.Month);
            Field(t => t.Year);

            Field(t => t.Lpg);
            Field(t => t.Cng);
            Field(t => t.CarbonDomestic);
        }
        
    }
}
