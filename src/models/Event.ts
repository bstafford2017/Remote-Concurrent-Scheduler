import { ObjectType, Field } from 'type-graphql'
import { prop, getModelForClass } from '@typegoose/typegoose'
import Room from '../models/Room'
import User from '../models/User'

@ObjectType()
export default class Event {
  @Field()
  @prop()
  id: string

  @Field()
  @prop()
  title: string

  @Field()
  @prop()
  date: string

  @Field()
  @prop()
  startTime: string

  @Field()
  @prop()
  endTime: string

  @Field()
  @prop()
  recur: string

  @prop()
  roomId: string

  @prop()
  userId: string

  @Field(() => Room)
  room?: Room

  @Field(() => User)
  user?: User
}

export const EventModel = getModelForClass(Event)
