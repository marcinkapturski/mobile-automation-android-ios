const { config } = require("./wdio.shared.conf");
const { join } = require("path");

config.capabilities = [
  {
    platformName: "Android",
    "appium:platformVersion": "12.0",
    "appium:deviceName": "emulator-5554",
    "appium:automationName": "UIAutomator2",
    "appium:appPackage": "com.wdiodemoapp",
    "appium:appActivity": "com.wdiodemoapp.SplashActivity",
    "appium:app": join(process.cwd(), "./app/Android-NativeDemoApp-0.4.0.apk"),
  },
];
config.connectionRetryTimeout = 90000;
config.connectionRetryCount = 0;
config.waitforTimeout = 90000;
config.timeout = 90000;
config.specs = [["../features/**"]];
config.cucumberOpts.require = ["./step-definitions_android/**.js"];
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
