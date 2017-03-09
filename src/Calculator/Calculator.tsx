import * as React from "react";
import CalculatorEngine from "./CalculatorEngine";

export interface ICalculatorComponentState {
    firstNum: number;
    secondNum: number;
}

export default class CalculatorComponent extends React.Component<undefined, ICalculatorComponentState> {
    constructor() {
        super();

        this.state = {
            firstNum: 100,
            secondNum: 200
        };
    }
    
    public render(): JSX.Element {
        return <div>
                    <div>
                        <input value={this.state.firstNum} />
                    </div>
                    <div>
                        <input value={this.state.secondNum} />
                    </div>
                    <div>
                        <span> 
                            {CalculatorEngine.sum(this.state.firstNum, this.state.secondNum)} 
                        </span>
                    </div>
                </div>
    }
}