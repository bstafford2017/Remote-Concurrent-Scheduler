import { Resolver, Query, Arg, Mutation } from 'type-graphql'
import User, { UserInput } from '../models/User'
import { selectUser, selectUsers } from '../services/user'

@Resolver(() => User)
export default class UserResolver {
  @Query(() => User)
  async user(
    @Arg('username') username: string,
    @Arg('password') password: string
  ): Promise<User> {
    return await selectUser(username, password)
  }

  @Query(() => [User])
  async users(): Promise<Array<User>> {
    return await selectUsers()
  }

  // @Mutation()
  // async user(@Arg('input') user: UserInput) {}
}
