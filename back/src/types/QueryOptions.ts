export type QueryOptions = {
  select: string;
  limit: number;
  sort: {
    [fieldName: string]: "asc" | "desc" | "ascending" | "descending" | 1 | -1;
  };
  where: Array<object>;
};
