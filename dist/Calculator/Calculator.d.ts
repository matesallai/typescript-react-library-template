/// <reference types="react" />
import * as React from "react";
export interface ICalculatorComponentState {
    firstNum: number;
    secondNum: number;
}
export default class CalculatorComponent extends React.Component<undefined, ICalculatorComponentState> {
    constructor();
    render(): JSX.Element;
}
