import { assertEquals } from "https://deno.land/std@0.177.0/testing/asserts.ts";
import { add, subtract, multiply, addBig } from "./main.ts";
import { Big } from "math";

Deno.test(function addTest() {
  assertEquals(add(2, 3), 5);
});

Deno.test(function subtractTest() {
  assertEquals(subtract(2, 3), -1);
});

Deno.test(function multiplyTest() {
  assertEquals(multiply(2, 3), 6);
});

Deno.test(function addBigTest() {
  assertEquals(addBig(Big(0.1), Big(0.2)), Big(0.3));
});
