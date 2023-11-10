import { Given } from "@wdio/cucumber-framework";

import {
  waitForWebContext,
  waitForNativeContext,
} from "../helpers/waitForContext";
import { Navigation } from "./pageobjects/component/NavigationComponent";

Given("I am on the Home screen", async () => {
  console.log("---// CHECK: getting native context");
  const nativeContext = await waitForNativeContext(driver);
  // await browser.pause(3000);
});

Given("I open Home sceen", async () => {
  console.log("---// CHECK: open Home screen");
  // await browser.pause(3000);
  await Navigation.clickHomeScreen();
});

Given("I open Webview screen", async () => {
  console.log("---// CHECK: open Webview screen");
  // await browser.pause(3000);
  await Navigation.clickWebviewSceen();
});

Given("I open Login screen", async () => {
  console.log("---// CHECK: open Login screen");
  // await browser.pause(3000);
  await Navigation.clickLoginSceen;
});

Given("I open Forms screen", async () => {
  console.log("---// CHECK: open Forms screen");
  // await browser.pause(3000);
  await Navigation.clickFormsScreen();
});

Given("I open Swipe sceen", async () => {
  console.log("---// CHECK: open Swipe screen");
  // await browser.pause(3000);
  await Navigation.clickSwipeScreen();
});

Given("I open Drag screen", async () => {
  console.log("---// CHECK: open Drag screen");
  // await browser.pause(3000);
  await Navigation.clickDragScreen();
});

Given("Close the test session", async () => {
  console.log("---// CHECK: Close the test session");
  // await browser.pause(3000);
});
