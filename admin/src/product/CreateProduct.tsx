import * as React from "react";
import { useMutation } from "react-query";
import { useHistory } from "react-router-dom";
import { AxiosError } from "axios";
import { Formik } from "formik";
import {
  Form,
  EnumFormStyle,
  Button,
  FormHeader,
  Snackbar,
  ToggleField,
  TextField,
} from "@amplication/design-system";
import { api } from "../api";
import useBreadcrumbs from "../components/breadcrumbs/use-breadcrumbs";
import { Product } from "../api/product/Product";
import { ProductCreateInput } from "../api/product/ProductCreateInput";

const INITIAL_VALUES = {} as ProductCreateInput;

export const CreateProduct = (): React.ReactElement => {
  useBreadcrumbs("/products/new", "Create Product");
  const history = useHistory();

  const [create, { error, isError, isLoading }] = useMutation<
    Product,
    AxiosError,
    ProductCreateInput
  >(
    async (data) => {
      const response = await api.post("/api/products", data);
      return response.data;
    },
    {
      onSuccess: (data, variables) => {
        history.push(`${"/products"}/${data.id}`);
      },
    }
  );
  const handleSubmit = React.useCallback(
    (values: ProductCreateInput) => {
      void create(values);
    },
    [create]
  );
  return (
    <>
      <Formik initialValues={INITIAL_VALUES} onSubmit={handleSubmit}>
        <Form
          formStyle={EnumFormStyle.Horizontal}
          formHeaderContent={
            <FormHeader title={"Create Product"}>
              <Button type="submit" disabled={isLoading}>
                Save
              </Button>
            </FormHeader>
          }
        >
          <div>
            <ToggleField label="Available" name="available" />
          </div>
          <div>
            <TextField label="Description" name="description" textarea />
          </div>
          <div>
            <TextField label="Image" name="image" />
          </div>
          <div>
            <TextField label="Name" name="name" />
          </div>
          <div>
            <TextField type="number" label="Price" name="price" />
          </div>
        </Form>
      </Formik>
      <Snackbar open={isError} message={error?.response?.data?.message} />
    </>
  );
};
