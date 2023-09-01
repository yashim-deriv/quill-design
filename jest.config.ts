import type { JestConfigWithTsJest } from "ts-jest";

const config: JestConfigWithTsJest = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  resolver: "ts-jest-resolver",
  moduleNameMapper: {
    ".(css|less|scss)$": "identity-obj-proxy",
  },
};

export default config;
