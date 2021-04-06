import { ObjectType, Field } from 'type-graphql'
import { prop, getModelForClass } from '@typegoose/typegoose'

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

  @Field()
  @prop()
  room: string

  @Field()
  @prop()
  user: string
}

export const EventModel = getModelForClass(Event)
