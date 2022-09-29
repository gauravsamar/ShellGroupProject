using GraphQL;
using GraphQL.Types;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using footprint.Data.GraphQL.Types;
using footprint.Data.Entity;
using footprint.Data.GraphQL.Types;
using footprint.Data.GraphQL.Types;
using footprint.Data.GraphQL;
using footprint.Repository;
using footprint.Data.GraphQL;

namespace footprint.Data.GraphQL
{
    public class FootprintMutation : ObjectGraphType
    {
        public FootprintMutation(TransportFootprintRepository transportFootPrintRepository, UserRepository userRepository,DomesticFootprintRepository domesticFootprintRepository)
        {
            Field<TransportType>(
            "createtransport",
            arguments: new QueryArguments(new QueryArgument<NonNullGraphType<TransportInputType>> { Name = "transport" }),
            resolve: context =>
            {
                var transportFootPrint = context.GetArgument<TransportFootPrint>("transport");
                return transportFootPrintRepository.AddTransportFootprint(transportFootPrint);
            });
            Field<DomesticType>(
            "createDomestic",
            arguments: new QueryArguments(new QueryArgument<NonNullGraphType<DomesticInputType>> { Name = "domestic" }),
            resolve: context =>
            {
                var domesticfootPrint = context.GetArgument<DomesticFootPrint>("domestic");
                return domesticFootprintRepository.AddDomesticFootPrint(domesticfootPrint);
            });
          
            Field<UserType>(
            "createUser",
            arguments: new QueryArguments(new QueryArgument<NonNullGraphType<UserInputType>> { Name = "user" }),
            resolve: context =>
            {
                var user = context.GetArgument<User>("user");
                return userRepository.AddUser(user);
            });

            Field<BooleanGraphType>(
            "login",
            arguments: new QueryArguments(new QueryArgument<NonNullGraphType<UserInputType>> { Name = "user" }),
            resolve: context =>
            {
                var user = context.GetArgument<User>("user");
                return userRepository.login(user.Email, user.Password);
            });

            Field<BooleanGraphType>(
            "signup",
            arguments: new QueryArguments(new QueryArgument<NonNullGraphType<UserInputType>> { Name = "user" }),
            resolve: context =>
            {
                var user = context.GetArgument<User>("user");
                return userRepository.signup(user.Email);
            });

            Field<ListGraphType<UserType>>(
              "userByEmail",
              arguments: new QueryArguments(new QueryArgument<NonNullGraphType<StringGraphType>> { Name = "email" }),
              resolve: context =>
              {
                  var email = context.GetArgument<string>("email");
                  return userRepository.GetUserByEmail(email);
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
                  return domesticFootprintRepository.GetDomesticFootprintByYearAndUser(year, UID);
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
                  return transportFootPrintRepository.GetTransportFootprintByYearAndUser(year, UID);
              }



              );

        }
    }
}