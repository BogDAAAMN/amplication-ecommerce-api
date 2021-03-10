import React, { useMemo } from "react";
import { AxiosError } from "axios";
import { useQuery } from "react-query";
import { api } from "../api";
import { SelectField, SelectFieldProps } from "@amplication/design-system";
import { Product } from "../api/product/Product";

type Data = Product[];

type Props = Omit<SelectFieldProps, "options">;

export const ProductSelect = (props: Props) => {
  const { data } = useQuery<Data, AxiosError>(
    "select-/api/products",
    async () => {
      const response = await api.get("/api/products");
      return response.data;
    }
  );

  const options = useMemo(() => {
    return data
      ? data.map((item) => ({
          value: item.id,
          label: item.name && item.name.length ? item.name : item.id,
        }))
      : [];
  }, [data]);

  return <SelectField {...props} options={options} />;
};
