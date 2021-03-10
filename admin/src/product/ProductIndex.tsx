import * as React from "react";
import { Switch } from "react-router-dom";
import PrivateRoute from "../components/PrivateRoute";
import useBreadcrumbs from "../components/breadcrumbs/use-breadcrumbs";
import { ProductList } from "./ProductList";
import { CreateProduct } from "./CreateProduct";
import { Product } from "./Product";

export const ProductIndex = (): React.ReactElement => {
  useBreadcrumbs("/products/", "Products");

  return (
    <Switch>
      <PrivateRoute exact path={"/products/"} component={ProductList} />
      <PrivateRoute path={"/products/new"} component={CreateProduct} />
      <PrivateRoute path={"/products/:id"} component={Product} />
    </Switch>
  );
};
