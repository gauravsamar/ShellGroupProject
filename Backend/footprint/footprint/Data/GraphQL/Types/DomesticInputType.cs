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
            Field<StringGraphType>("year");
            Field<NonNullGraphType<StringGraphType>>("lpg");
            Field<NonNullGraphType<StringGraphType>>("cng");
            Field<NonNullGraphType<StringGraphType>>("carbondomestic");

        }


    }
}
