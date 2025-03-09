/**
 currently the setup for vitest is not working!
 Problems:
 For some reason my library for wui gets blocked by browser compatibility although as far as i can tell i am not using anything
 That would warrant polyfill errors or similar problems

 Why not just use jest?
 Well i've though about that but jest has shown to be REALLY slow in my experience and even react tests
 run quasi-instantly with vitest. I would like to keep that speed if possible.




 TODO:
 - Fix why the setup is not working
 - remove the very aggressive testNamePattern in vite.config.ts and add more tests to it
 - definitely test if the mocking works correctly
 - Polyfilling also does not work, I am not using anything from the node API that would warrant this
 - switch to proper mocking from vitest https://vitest.dev/guide/mocking

 Suspicion:
 - I tried a lot of stuff with package.json and that went nowhere
 - I tried to "empty" the WuiMock files that made the issues, no dice
 - I tried looking into the tsconfig file from my module that compiles them, nope


 Definitely cleanup:
 - I also tried happy-dom and jsdom, if this ever gets running then remove one of them from the deps


 */

import { spy, stub } from "jsr:@std/testing/mock";
import matchers from "npm:@testing-library/jest-dom/matchers";

import {
  setupWuiMock,
  TestMock,
} from "npm:@wui/web-user-interface-node/TestMock";
import { afterEach, beforeAll, beforeEach, expect } from "npm:vitest";
import { cleanup } from "@testing-library/react";

expect.extend(matchers);

afterEach(() => {
  cleanup();
});

const failureCallbackMock = (_code: number, _msg: string) => {};

beforeEach(() => {
  // setup WuiQuery mock
  // this helper class makes simulating dataflow easier
  // we run this before every suit to reset all registered callbacks or IDs
  setupWuiMock(new TestMock(false, false, false, false), failureCallbackMock);

  // we can query the current mock with `getActiveMock();`
});

beforeAll(() => {
  // these stubs are global, apparently resetting their call count is not possible so counting it cannot be reliably
  // used for testing
  stub(globalThis.window, "WuiQuery");
  stub(globalThis.window, "WuiQueryCancel");

  spy(globalThis, "setTimeout");
  spy(globalThis, "clearTimeout");
  spy(globalThis, "setInterval");
  spy(globalThis, "clearInterval");

  // wrap console prints to check call counts
  spy(console, "debug");
  spy(console, "log");
  spy(console, "warn");
  spy(console, "error");
});
