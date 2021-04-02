import { ObjectType, Field } from 'type-graphql'
import { prop, Typegoose } from 'typegoose'

@ObjectType()
export default class User extends Typegoose {
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

export const UserModel = new User().getModelForClass(User)
