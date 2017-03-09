import CalculatorEngine from "../src/Calculator/CalculatorEngine";

describe("Calculator.Sum function",
    () => {
        it("Should add 2 numbers correctly",
            () => {
                expect(CalculatorEngine.sum(1, 2)).toEqual(3);
            });
    });