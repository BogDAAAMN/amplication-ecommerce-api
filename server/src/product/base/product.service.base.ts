import { PrismaService } from "nestjs-prisma";
import {
  FindOneProductArgs,
  FindManyProductArgs,
  ProductCreateArgs,
  ProductUpdateArgs,
  ProductDeleteArgs,
  Subset,
} from "@prisma/client";

export class ProductServiceBase {
  constructor(protected readonly prisma: PrismaService) {}
  findMany<T extends FindManyProductArgs>(
    args: Subset<T, FindManyProductArgs>
  ) {
    return this.prisma.product.findMany(args);
  }
  findOne<T extends FindOneProductArgs>(args: Subset<T, FindOneProductArgs>) {
    return this.prisma.product.findOne(args);
  }
  create<T extends ProductCreateArgs>(args: Subset<T, ProductCreateArgs>) {
    return this.prisma.product.create<T>(args);
  }
  update<T extends ProductUpdateArgs>(args: Subset<T, ProductUpdateArgs>) {
    return this.prisma.product.update<T>(args);
  }
  delete<T extends ProductDeleteArgs>(args: Subset<T, ProductDeleteArgs>) {
    return this.prisma.product.delete(args);
  }
}
