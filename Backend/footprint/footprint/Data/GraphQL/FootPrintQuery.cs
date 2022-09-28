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
            Field<ListGraphType<DomesticType>>(
               "domesticFootprintByYear",
               arguments: new QueryArguments(new QueryArgument<NonNullGraphType<IntGraphType>> { Name = "year" }),
               resolve: context =>
               {
                   var year = context.GetArgument<int>("year");
                   return DomesticRepository.GetDomesticFootprintByYear(year);
               }

               );
            Field<ListGraphType<DomesticType>>(
               "domesticFootprintByYearAndUser",
               arguments: new QueryArguments(new QueryArgument<NonNullGraphType<IntGraphType>> { Name = "year" },
               new QueryArgument<NonNullGraphType<IntGraphType>> { Name = "UID" }),
               
               resolve: context =>
               {
                   var year = context.GetArgument<int>("year");
                   var UID = context.GetArgument<int>("UID");
                   return DomesticRepository.GetDomesticFootprintByYearAndUser(year,UID);
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
            Field<ListGraphType<TransportType>>(
               "transportFootprintByYear",
               arguments: new QueryArguments(new QueryArgument<NonNullGraphType<IntGraphType>> { Name = "year" }),
               resolve: context =>
               {
                   var year = context.GetArgument<int>("year");
                   return transportRepository.GetTransportFootprintByYear(year);
               }

               );
            Field<ListGraphType<TransportType>>(
               "transportFootprintByYearAndUser",
               arguments: new QueryArguments(new QueryArgument<NonNullGraphType<IntGraphType>> { Name = "year" },
               new QueryArgument<NonNullGraphType<IntGraphType>> { Name = "UID" }),

               resolve: context =>
               {
                   var year = context.GetArgument<int>("year");
                   var UID = context.GetArgument<int>("UID");
                   return transportRepository.GetTransportFootprintByYearAndUser(year, UID);
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