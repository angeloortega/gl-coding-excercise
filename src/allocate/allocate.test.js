import {
  salesOrdersStub,
  impossiblePurchaseOrdersStub,
  possiblePurchaseOrdersStub,
  expectedPossibleAllocationStub,
} from "@tests/stubs/allocate/allocationStubs";
import { allocate } from "@allocation";
import { expect } from "@jest/globals";

describe("Allocate stock", () => {
  let allocateMock;

  beforeEach(() => {
    jest.clearAllMocks();
    allocateMock = jest.fn(allocate);
  });

  it("should throw an error when allocation is not possible", () => {
    expect(() =>
      allocateMock(salesOrdersStub, impossiblePurchaseOrdersStub)
    ).toThrow("Insufficient supply to allocate all orders");
  });

  it("should allocate when possible, and match the correct allocation", () => {
    const result = allocateMock(salesOrdersStub, possiblePurchaseOrdersStub);
    expect(result).toStrictEqual(expectedPossibleAllocationStub);
  });

  it("should handle empty requests without throwing an error", () => {
    const result = allocateMock(undefined, undefined);
    expect(result).toStrictEqual([]);
  });
});
