using footprint.Data.Entity;
using GraphQL.Types;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace footprint.Data.GraphQL.Types
{
    public class TransportType : ObjectGraphType<TransportFootPrint>
    {
        public TransportType()
        {
            Field(t => t.TID);
            Field(t => t.Petrol);
            Field(t => t.Desiel);
            Field(t => t.Month);
            Field(t => t.Year);
            Field(t => t.Taxis);
            Field(t => t.Lpg);
            Field(t => t.Bus);
            Field(t => t.Autorickshaw);
            Field(t => t.Carbontransport);
            Field(t => t.Train);




        }
    }
}
