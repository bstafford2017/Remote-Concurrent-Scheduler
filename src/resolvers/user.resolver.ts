import { Resolver, Query, Arg, Mutation } from 'type-graphql'
import User, { UserInput } from '../models/User'
import { selectUser } from '../services/user'

@Resolver(() => User)
export default class UserResolver {
  @Query(() => User)
  async user(
    @Arg('username') username: string,
    @Arg('password') password: string
  ): Promise<User> {
    return await selectUser(username, password)
  }

  // @Mutation()
  // async user(@Arg('input') user: UserInput) {}
}
