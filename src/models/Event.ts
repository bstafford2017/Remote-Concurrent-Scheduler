import { ObjectType, Field } from 'type-graphql'
import { prop, Typegoose } from 'typegoose'

@ObjectType()
export default class Event extends Typegoose {
  @Field()
  @prop()
  id: number

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

export const EventModel = new Event().getModelForClass(Event)
