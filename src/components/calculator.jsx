import React from 'react'
// import PropTypes from 'prop-types'
import Window from './window'
import Keyboard from './keyboard'
import {exprssionValidation} from "../mathEval/validation"

class Calculator extends React.Component {
  state = {
    numberKeys : [],
    operatorKeys : [],
    functionKeys : [],
    expression : [],
    calcualtionExpression :[],
    result : ""
  }
  constructor(){
    super();
    this.handleInput = this.handleInput.bind(this);
    this.handleDisplay = this.handleDisplay.bind(this);
  }
  componentDidMount(){
    console.log("calculator -- componentDidMount");
    // we set the numberKeys, operatorKeys, FunctionsKeys here.
    // In the future, this will come from the backend by calling ajax
    // we use this.setState to re-render the view
    /********below is hard code part, come from backend in the future*********/
    let operatorArray = [
      {
        lable : "+",
        value : "+",
        type : "nomarl"
      },
      {
        lable : "-",
        value : "-",
        type : "nomarl"
      },
      {
        lable : "*",
        value : "*",
        type : "nomarl"
      },
      {
        lable : "/",
        value : "/",
        type : "nomarl"
      },
      {
        lable : "=",
        value : "=",
        type : "equal"
      }];
    let functionKeys = [
      {
        lable : "A/C",
        type : "clear",
      },
      {
        lable : "+/-",
        type : "functionA",
        data : "reverse"
      },

    ];
    const numberKeys = [];
    for (let i = 0; i < 11; i++) {
      // console.log("i = ", i);
      const numberKeyObject = {
        lable : "",
        value : 0,
        size : 1
      }
      if (i === 1) {
        numberKeyObject.size = 2;
      }else {
        numberKeyObject.size = 1;
      }
      if (i === 0) {
        numberKeys.push({
          lable: ".",
          value : ".",
          size : "1",
          function : "dot"
        });
      }else {
        let number = i -1;
        numberKeyObject.value = number;
        numberKeyObject.lable = number+"";
        numberKeys.push(numberKeyObject);
      }

    }
    /****************************************************/
    this.setState({numberKeys,operatorKeys:operatorArray,functionKeys});

    /************************************************************************/
  }
  handleInput(key){
    const newCalculationExpression = [...this.state.calcualtionExpression];
    if (key.lable === "=") {
      const {flag,evalData} = exprssionValidation(newCalculationExpression)
      if (flag) {

        let answer = evalData;
        // console.log(answer);
        this.setState({calcualtionExpression:[],result:answer});
      }else {
        this.setState({calcualtionExpression:[],result:"NaN"});
      }
    }else {
      newCalculationExpression.push(key);
      if (this.state.result !== "") {
        this.setState({calcualtionExpression:newCalculationExpression,result:""});
      }else {
        this.setState({calcualtionExpression:newCalculationExpression});
      }
    }
  }
  handleDisplay(){
    const expressionArray = [];
    const {calcualtionExpression} = this.state;
    for (let elementObject of calcualtionExpression) {
      expressionArray.push(elementObject.value);
    }
    return expressionArray.join("");
  }
  render () {
    // destructor this.state
    const {numberKeys,operatorKeys,functionKeys,result} = this.state;
    console.log("render, the numberKeys is ", this.state.calcualtionExpression);
    let display = result === "" ?  this.handleDisplay() : result ;
    return (
      <React.Fragment>
        <Window data={display}/>
        <Keyboard numberKeys={numberKeys} operatorKeys={operatorKeys} functionKeys={functionKeys} onHandleInput={this.handleInput} onHandleCalculation={this.handleCalculation}/>
      </React.Fragment>
    );
  }
}

export default Calculator;
