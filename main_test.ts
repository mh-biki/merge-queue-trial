import { assertEquals } from "https://deno.land/std@0.177.0/testing/asserts.ts";
import { add, subtract, multiply, divide, addBig, subtractBig, multiplyBig } from "./main.ts";
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

Deno.test(function divideTest() {
  assertEquals(divide(2, 3), 2/3);
  assertEquals(divide(2, 0), Infinity);
});

Deno.test(function addBigTest() {
  assertEquals(addBig(Big(0.1), Big(0.2)), Big(0.3));
});

Deno.test(function subtractBigTest() {
  assertEquals(subtractBig(Big(0.1), Big(0.2)), Big(-0.1));
});

Deno.test(function multiplyBigTest() {
  assertEquals(multiplyBig(Big(0.1), Big(0.2)), Big(0.02));
});
