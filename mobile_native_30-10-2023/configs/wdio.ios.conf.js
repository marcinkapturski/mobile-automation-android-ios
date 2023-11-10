const { config } = require("./wdio.shared.conf");
const { join } = require("path");

config.capabilities = [
  {
    platformName: "iOS",
    "appium:platformVersion": "16.0",
    "appium:deviceName": "iPhone 14 Pro",
    "appium:automationName": "XCUITest",
    "appium:app": join(process.cwd(), "./apps/wdioNativeDemoApp.app"),
  },
];
config.connectionRetryTimeout = 90000;
config.connectionRetryCount = 90000;
config.waitforTimeout = 90000;
config.timeout = 90000;
config.specs = [["../features/**"]];
config.cucumberOpts.require = ["./step-definitions_ios/**.js"];
config.services = [
  [
    "appium",
    {
      args: {
        address: "localhost",
        port: 4723,
      },
      logPath: "./",
    },
  ],
];

exports.config = config;
