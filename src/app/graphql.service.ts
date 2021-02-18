import { Injectable } from '@angular/core';
import { Apollo, APOLLO_OPTIONS } from 'apollo-angular';
import { HttpLink, InMemoryCache } from '@apollo/client/core';
import gql from 'graphql-tag';
import { ApolloClient, split } from '@apollo/client/core';
import { UserType } from './types/userType';
import { shareReplay, pluck } from 'rxjs/operators';
import { ApolloTestingController, ApolloTestingModule } from "apollo-angular/testing";

@Injectable({
  providedIn: 'root'
})

export class GraphqlService {
  public users: UserType[];
  public user: UserType;
  public createUser: UserType;
  public updatedUser: UserType;

  constructor(private apollo: Apollo, httpLink: HttpLink) {

  }

  public getUsers = () => {
    this.apollo.query({
      query: gql`query getUsers{
      users{
        name,
        email
      }
    }`
    }).subscribe(result => {
      console.log(result);
      this.users = result.data as UserType[];
      console.log(this.users);
    }, error => {
      console.log(error);
    },
      () => {
        console.log('ok');
      })
  }
}


// this.httpService.makeRequest()
//     .subscribe(
//       result => {
//         // Handle result
//         console.log(result)
//       },
//       error => {
//         this.errors = error;
//       },
//       () => {
//         // 'onCompleted' callback.
//         // No errors, route to new page here
//       }
//     );




