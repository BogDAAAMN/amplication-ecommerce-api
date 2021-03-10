import React from "react";
import { Link } from "react-router-dom";
import { AxiosError } from "axios";
import { useQuery } from "react-query";
import { api } from "../api";
import { Product } from "../api/product/Product";

type Props = { id: string };

export const ProductTitle = ({ id }: Props) => {
  const { data, isLoading, isError, error } = useQuery<
    Product,
    AxiosError,
    [string, string]
  >(["get-/api/products", id], async (key: string, id: string) => {
    const response = await api.get(`${"/api/products"}/${id}`);
    return response.data;
  });

  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error: {error?.message}</span>;
  }

  return (
    <Link to={`${"/api/products"}/${id}`} className="entity-id">
      {data?.name && data?.name.length ? data.name : data?.id}
    </Link>
  );
};
