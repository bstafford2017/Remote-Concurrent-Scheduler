import { ObjectType, Field, InputType } from 'type-graphql'
import { prop, getModelForClass } from '@typegoose/typegoose'

@ObjectType()
export default class User {
  @Field()
  @prop()
  id: string

  @Field()
  @prop()
  username: string

  @Field()
  @prop()
  password: string

  @Field()
  @prop()
  fname: string

  @Field()
  @prop()
  lname: string

  @Field()
  @prop()
  admin: boolean
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
