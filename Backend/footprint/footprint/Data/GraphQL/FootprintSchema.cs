using GraphQL.Types;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using footprint.Data.GraphQL.Types;
using footprint.Data.GraphQL;


namespace footprint.Data.GraphQL
{
    public class FootprintSchema : Schema
    {
        public FootprintSchema(IServiceProvider resolver) : base(resolver)
        {
            Query = (IObjectGraphType)resolver.GetService(typeof(FootPrintQuery));
            Mutation = (IObjectGraphType)resolver.GetService(typeof(FootprintMutation));
        }
    }
}