import { Big } from "math";

export function add(a: number, b: number): number {
  return a + b;
}

export function subtract(a: number, b: number): number {
  return a - b;
}

export function addBig(a: Big, b: Big): Big {
  return a.plus(b);
}

if (import.meta.main) {
  console.log("Add 2 + 3 =", add(2, 3));
}
