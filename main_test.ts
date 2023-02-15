import { assertEquals } from "https://deno.land/std@0.177.0/testing/asserts.ts";
import { add, subtract, multiply } from "./main.ts";

Deno.test(function addTest() {
  assertEquals(add(2, 3), 5);
});

Deno.test(function subtractTest() {
  assertEquals(subtract(2, 3), -1);
});

Deno.test(function multiplyTest() {
  assertEquals(multiply(2, 3), 6);
});
