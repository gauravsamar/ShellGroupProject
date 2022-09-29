using GraphQL.Types;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace footprint.Data.GraphQL.Types
{
    public class TransportInputType:InputObjectGraphType
    {
        public TransportInputType()
        {
            Name = "transportInput";
            Field<NonNullGraphType<StringGraphType>>("month");
            Field<IntGraphType>("year");
            Field<NonNullGraphType<FloatGraphType>>("petrol");
            Field<FloatGraphType>("Desiel");
            Field<NonNullGraphType<FloatGraphType>>("taxis");
            Field<NonNullGraphType<FloatGraphType>>("lpg");
            Field<NonNullGraphType<FloatGraphType>>("bus");
            Field<NonNullGraphType<FloatGraphType>>("train");
            Field<NonNullGraphType<IntGraphType>>("uID");
            Field<NonNullGraphType<FloatGraphType>>("autorickshaw");
            Field<NonNullGraphType<FloatGraphType>>("carbontransport");

        }

       
    }
}
