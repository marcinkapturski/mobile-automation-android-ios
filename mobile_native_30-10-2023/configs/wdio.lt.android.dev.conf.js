require("dotenv").config();

const { config } = require("./wdio.shared.conf");

config.key = process.env.LAMBDATEST_USER;
config.key = process.env.LAMBDATEST_KEY;

config.capabilities = [
  {
    build: "Sample Build Name",
    platformName: "android",
    deviceName: "Galaxy S20",
    isRealMobile: true,
    platformVersion: "10",
    automationName: "UiAutomator2",
    visual: true,
    network: true,
    video: true,
    name: process.env.TEST_TYPE || "Maintenance",
    project: "Sample Project",
    deviceOrientation: "portrait",
    autoGrantPermissions: true,
    autoAcceptAlerts: true,
    console: true,
    coloredLogs: true,
    terminal: true,
    path: "/wd/hub",
    hostname: "mobile-hub.lambdatest.com",
    logFile: "./logs/lt.log",
    app: "lt://APP10160361451697931096653217",
    devicelog: true,
  },
];
config.outputDir = "./logs";
config.logPath = "./logs";
config.logLevel = "info";
config.logLevels = {
  webdriver: "info",
  "@wdio/appium-service": "info",
};
config.coloredLogs = true;
config.screenshotPath = "./errorShots/";
config.baseUrl = "";
config.connectionRetryTimeout = 500000;
config.connectionRetryCount = 3;
config.specs = ["../features/**"];
config.framework = "cucumber";
config.cucumberOpts = {
  require: ["./step-definitions_android/**.js"],
  backtrace: false,
  requireModule: [],
  dryRun: false,
  failFast: false,
  snippets: true,
  source: true,
  strict: false,
  tagExpression: "",
  ignoreUndefinedDefinitions: false,
  scenarioLevelReporter: true,
};

exports.config = config;
