import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { HttpLink, InMemoryCache } from '@apollo/client';

import gql from 'graphql-tag';
import { ApolloClient, ApolloProvider, split} from '@apollo/client';
// import { UserType } from './types/userType';
@Injectable({
  providedIn: 'root'
})
export class GraphqlService {
//   public users: UserType[];
//   public user: UserType;
//   public createUser: UserType;
//   public updatedUser: UserType;
//   constructor(private apollo: Apollo, httpLink: HttpLink) {
//     apollo.create({
//         link:  new HttpLink({ uri: 'http://localhost:3000/graphql' }),
//         cache: new InMemoryCache()
//     })
//   }

//   public getUsers = () => {
//     this.apollo.query({
//       query: gql`query getUsers{
//       users{
//         name,
//         email
//       }
//     }`
//     }).subscribe(result => {
//       this.users = result.data as UserType[];
//     console.log(this.users);
//     })
//   }


}