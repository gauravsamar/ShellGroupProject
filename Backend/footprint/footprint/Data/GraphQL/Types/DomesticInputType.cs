using GraphQL.Types;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace footprint.Data.GraphQL.Types
{
    public class DomesticInputType : InputObjectGraphType
    {
        public DomesticInputType()
        {
            Name = "domesticInput";
            Field<NonNullGraphType<StringGraphType>>("month");
            Field<IntGraphType>("year");
            Field<NonNullGraphType<FloatGraphType>>("lpg");
            Field<NonNullGraphType<FloatGraphType>>("cng");
            Field<NonNullGraphType<FloatGraphType>>("carbondomestic");
            Field<NonNullGraphType<FloatGraphType>>("electricity");
            Field<NonNullGraphType<IntGraphType>>("UID");

        }


    }
}
