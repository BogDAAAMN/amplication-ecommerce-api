import { ArgsType, Field } from "@nestjs/graphql";
import { ProductWhereInput } from "./ProductWhereInput";

@ArgsType()
class FindManyProductArgs {
  @Field(() => ProductWhereInput, { nullable: true })
  where?: ProductWhereInput;
}

export { FindManyProductArgs };
