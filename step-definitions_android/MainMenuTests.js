import { Given } from "@wdio/cucumber-framework";

import {
  waitForWebContext,
  waitForNativeContext,
} from "../helpers/waitForContext";

Given("I am on the Home screen", async () => {
  console.log("---// CHECK 1: getting native context");
  const nativeContext = await waitForNativeContext(driver);
});
