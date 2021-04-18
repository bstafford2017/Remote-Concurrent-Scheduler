import { Resolver, Query, Arg, Mutation, Ctx, Authorized } from 'type-graphql'
import User, { UserInput } from '../models/User'
import { selectUser, selectUsers } from '../services/user'
import Context from '../context'
import jwt from 'jsonwebtoken'
import { isAuthenticated, getUserFromToken } from '../services/user'

@Resolver(() => User)
export default class UserResolver {
  @Query(() => User, { nullable: true })
  async auth(@Ctx() context: Context): Promise<User> {
    return getUserFromToken(context)
  }

  @Query(() => User, { nullable: true })
  async user(
    @Arg('username') username: string,
    @Arg('password') password: string,
    @Ctx() context: Context
  ): Promise<User> {
    const user: User = await selectUser(username, password)
    const token = jwt.sign(
      {
        id: user.id,
        username: user.username,
        password: user.password,
        fname: user.fname,
        lname: user.lname,
        admin: user.admin
      },
      process.env.SECRET_KEY
    )
    context.res.cookie('token', token, {
      maxAge: 600000
    })
    return user
  }

  @Authorized(isAuthenticated)
  @Query(() => [User])
  async users(): Promise<Array<User>> {
    return await selectUsers()
  }

  // @Mutation()
  // async user(@Arg('input') user: UserInput) {}
}
