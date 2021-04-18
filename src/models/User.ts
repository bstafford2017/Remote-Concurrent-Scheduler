import { ObjectType, Field, InputType } from 'type-graphql'
import { prop, getModelForClass } from '@typegoose/typegoose'

@ObjectType()
export default class User {
  @Field()
  @prop()
  id: string | null

  @Field()
  @prop()
  username: string | null

  @Field()
  @prop()
  password: string | null

  @Field()
  @prop()
  fname: string | null

  @Field()
  @prop()
  lname: string | null

  @Field()
  @prop()
  admin: boolean | null
}

@InputType()
export class UserInput {
  @Field()
  username: string

  @Field()
  password: string

  @Field()
  fname: string

  @Field()
  lname: string

  @Field()
  admin: boolean
}

export const UserModel = getModelForClass(User)
