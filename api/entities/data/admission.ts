import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class Admission {
  @Field()
  type_admission: string;

  @Field()
  initial_test: number;

  @Field({ nullable: true })
  final_test?: number;
}