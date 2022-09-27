using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GraphQL;
using GraphQL.Types;
using footprint.Data.GraphQL.Types;
using footprint.Repository;
using footprint.Data.Entity;

namespace footprint.Data.GraphQL
{
    public class FootPrintQuery : ObjectGraphType
    {
        public FootPrintQuery(DomesticFootprintRepository DomesticRepository, TransportFootprintRepository transportRepository,UserRepository userRepository)
        {
            Field<ListGraphType<DomesticType>>(
                "domestic",
                resolve: context => DomesticRepository.GetDomesticFootprints()
                );

            Field<ListGraphType<DomesticType>>(
               "domesticFootprintByMonth",
               arguments: new QueryArguments(new QueryArgument<NonNullGraphType<StringGraphType>> { Name = "month" }),
               resolve: context =>
               {
                   var month = context.GetArgument<string>("month");
                   return DomesticRepository.GetDomesticFootprintByMonth(month);
               }

               );
            Field<ListGraphType<TransportType>>(
                "transport",
                resolve: context => transportRepository.GetTransportFootPrints()
                );

            Field<ListGraphType<TransportType>>(
               "transportFootprintByMonth",
               arguments: new QueryArguments(new QueryArgument<NonNullGraphType<StringGraphType>> { Name = "month" }),
               resolve: context =>
               {
                   var month = context.GetArgument<string>("month");
                   return transportRepository.GetTransportFootprintByMonth(month);
               }

               );
            Field<ListGraphType<UserType>>(
               "userByEmail",
               arguments: new QueryArguments(new QueryArgument<NonNullGraphType<StringGraphType>> { Name = "email" }),
               resolve: context =>
               {
                   var email = context.GetArgument<string>("email");
                   return userRepository.GetUserByEmail(email);
               }

               );
            Field<ListGraphType<UserType>>(
                "user",
                resolve: context => userRepository.GetUser()
                );

        }
    }
}