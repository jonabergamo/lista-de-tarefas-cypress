"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Calculator() {
  const [display, setDisplay] = useState("0");
  const [currentOperation, setCurrentOperation] = useState<string | null>(null);
  const [previousValue, setPreviousValue] = useState<number | null>(null);
  const [resetDisplay, setResetDisplay] = useState(false);

  const handleNumberClick = (number: string) => {
    if (display === "0" || resetDisplay) {
      setDisplay(number);
      setResetDisplay(false);
    } else {
      setDisplay(display + number);
    }
  };

  const handleOperationClick = (operation: string) => {
    if (previousValue === null) {
      setPreviousValue(parseFloat(display));
    } else {
      calculateResult();
    }
    setCurrentOperation(operation);
    setResetDisplay(true);
  };

  const handleDecimalClick = () => {
    if (!display.includes(".")) {
      setDisplay(display + ".");
    }
  };

  const handleClearClick = () => {
    setDisplay("0");
    setCurrentOperation(null);
    setPreviousValue(null);
    setResetDisplay(false);
  };

  const calculateResult = () => {
    if (previousValue !== null && currentOperation !== null) {
      const current = parseFloat(display);
      let result;
      switch (currentOperation) {
        case "+":
          result = previousValue + current;
          break;
        case "-":
          result = previousValue - current;
          break;
        case "*":
          result = previousValue * current;
          break;
        case "/":
          result = previousValue / current;
          break;
        default:
          return;
      }
      setDisplay(result.toString());
      setPreviousValue(null);
      setCurrentOperation(null);
    }
  };

  const buttons = [
    "7",
    "8",
    "9",
    "/",
    "4",
    "5",
    "6",
    "*",
    "1",
    "2",
    "3",
    "-",
    "0",
    ".",
    "=",
    "+",
  ];

  return (
    <Card className="w-full max-w-md mx-auto h-full">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center">
          Calculadora
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="bg-muted p-4 rounded-md mb-4 text-right">
          <span className="text-2xl text-muted-foreground font-mono">
            {display}
          </span>
        </div>
        <div className="grid grid-cols-4 gap-2">
          <Button
            variant="outline"
            className="col-span-4"
            onClick={handleClearClick}
          >
            C
          </Button>
          {buttons.map((btn) => (
            <Button
              key={btn}
              variant={
                ["*", "/", "-", "+", "="].includes(btn) ? "default" : "outline"
              }
              className={
                currentOperation == btn ? "bg-primary/50 text-white" : ""
              }
              onClick={() => {
                if (btn === "=") {
                  calculateResult();
                } else if (["+", "-", "*", "/"].includes(btn)) {
                  handleOperationClick(btn);
                } else if (btn === ".") {
                  handleDecimalClick();
                } else {
                  handleNumberClick(btn);
                }
              }}
            >
              {btn}
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
