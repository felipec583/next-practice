export type Invoice = {
  id: number;
  customer: string;
  amount: number;
  dueDate: string;
  status: "Paid" | "Unpaid";
};
