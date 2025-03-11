import matchers from "npm:@testing-library/jest-dom/matchers";
import { cleanup } from "@testing-library/react";

import {
  setupWuiMock,
  TestMock,
} from "jsr:@wui/web-user-interface-lib/TestMock";
import { afterEach, beforeEach, expect, vi } from "npm:vitest";

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

  vi.useFakeTimers();

});


