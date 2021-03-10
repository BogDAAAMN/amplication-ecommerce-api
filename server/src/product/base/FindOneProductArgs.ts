import { ArgsType, Field } from "@nestjs/graphql";
import { ProductWhereUniqueInput } from "./ProductWhereUniqueInput";

@ArgsType()
class FindOneProductArgs {
  @Field(() => ProductWhereUniqueInput, { nullable: false })
  where!: ProductWhereUniqueInput;
}

export { FindOneProductArgs };
