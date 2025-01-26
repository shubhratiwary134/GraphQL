const express = require("express")
const expressGraphQL = require('express-graphql')
const {GraphQLSchema,GraphQLObjectType,GraphQLString} = require('graphql')
const app = express()

const schema = new GraphQLSchema({
    query: new GraphQLObjectType({
        name:"helloshubhra",
        fields:()=>({
            message:{
                type:GraphQLString,
                resolve:()=>'hello world'}
        })
    })
})

app.use("/graphQL",expressGraphQL.graphqlHTTP({
    schema:schema,
    graphiql: true,
}))

app.listen(5000,()=>console.log("hey there server is running"))