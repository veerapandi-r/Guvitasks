var container = document.createDocumentFragment();
var e_0 = document.createElement("div");
var e_1 = document.createElement("div");
e_1.setAttribute("id", "calculator");
var e_2 = document.createElement("div");
e_2.setAttribute("id", "displayM");
e_1.appendChild(e_2);
var e_3 = document.createElement("div");
e_3.setAttribute("id", "screen");
var e_4 = document.createElement("div");
e_4.setAttribute("id", "outputScr");
e_3.appendChild(e_4);
var e_5 = document.createElement("div");
e_5.setAttribute("id", "inputScr");
e_5.appendChild(document.createTextNode("0"));
e_3.appendChild(e_5);
e_1.appendChild(e_3);
var e_6 = document.createElement("div");
e_6.setAttribute("id", "brand");
var e_7 = document.createElement("a");
e_7.setAttribute("href", "#");
e_7.appendChild(document.createTextNode("Made by Maaz"));
e_6.appendChild(e_7);
e_1.appendChild(e_6);
var e_8 = document.createElement("div");
e_8.setAttribute("id", "buttons");
var e_9 = document.createElement("div");
e_9.setAttribute("id", "mc");
e_9.appendChild(document.createTextNode("MC"));
e_8.appendChild(e_9);
var e_10 = document.createElement("div");
e_10.setAttribute("id", "mr");
e_10.appendChild(document.createTextNode("MR"));
e_8.appendChild(e_10);
var e_11 = document.createElement("div");
e_11.setAttribute("id", "ms");
e_11.appendChild(document.createTextNode("MS"));
e_8.appendChild(e_11);
var e_12 = document.createElement("div");
e_12.setAttribute("id", "mp");
e_12.appendChild(document.createTextNode("M+"));
e_8.appendChild(e_12);
var e_13 = document.createElement("div");
e_13.setAttribute("id", "mm");
e_13.appendChild(document.createTextNode("M-"));
e_8.appendChild(e_13);
var e_14 = document.createElement("div");
e_14.setAttribute("id", "backspace");
var e_15 = document.createElement("b");
e_15.appendChild(document.createTextNode("←"));
e_14.appendChild(e_15);
e_8.appendChild(e_14);
var e_16 = document.createElement("div");
e_16.setAttribute("id", "ce");
e_16.appendChild(document.createTextNode("CE"));
e_8.appendChild(e_16);
var e_17 = document.createElement("div");
e_17.setAttribute("id", "c");
e_17.appendChild(document.createTextNode("C"));
e_8.appendChild(e_17);
var e_18 = document.createElement("div");
e_18.setAttribute("id", "plusminus");
e_18.appendChild(document.createTextNode("±"));
e_8.appendChild(e_18);
var e_19 = document.createElement("div");
e_19.setAttribute("id", "sqroot");
var e_20 = document.createElement("b");
e_20.appendChild(document.createTextNode("√"));
e_19.appendChild(e_20);
e_8.appendChild(e_19);
var e_21 = document.createElement("div");
e_21.setAttribute("id", "seven");
e_21.appendChild(document.createTextNode("7"));
e_8.appendChild(e_21);
var e_22 = document.createElement("div");
e_22.setAttribute("id", "eight");
e_22.appendChild(document.createTextNode("8"));
e_8.appendChild(e_22);
var e_23 = document.createElement("div");
e_23.setAttribute("id", "nine");
e_23.appendChild(document.createTextNode("9"));
e_8.appendChild(e_23);
var e_24 = document.createElement("div");
e_24.setAttribute("id", "divide");
var e_25 = document.createElement("b");
e_25.appendChild(document.createTextNode("/"));
e_24.appendChild(e_25);
e_8.appendChild(e_24);
var e_26 = document.createElement("div");
e_26.setAttribute("id", "percent");
e_26.appendChild(document.createTextNode("%"));
e_8.appendChild(e_26);
var e_27 = document.createElement("div");
e_27.setAttribute("id", "four");
e_27.appendChild(document.createTextNode("4"));
e_8.appendChild(e_27);
var e_28 = document.createElement("div");
e_28.setAttribute("id", "five");
e_28.appendChild(document.createTextNode("5"));
e_8.appendChild(e_28);
var e_29 = document.createElement("div");
e_29.setAttribute("id", "six");
e_29.appendChild(document.createTextNode("6"));
e_8.appendChild(e_29);
var e_30 = document.createElement("div");
e_30.setAttribute("id", "times");
e_30.appendChild(document.createTextNode("*"));
e_8.appendChild(e_30);
var e_31 = document.createElement("div");
e_31.setAttribute("id", "reciprocal");
e_31.appendChild(document.createTextNode("1/x"));
e_8.appendChild(e_31);
var e_32 = document.createElement("div");
e_32.setAttribute("id", "one");
e_32.appendChild(document.createTextNode("1"));
e_8.appendChild(e_32);
var e_33 = document.createElement("div");
e_33.setAttribute("id", "two");
e_33.appendChild(document.createTextNode("2"));
e_8.appendChild(e_33);
var e_34 = document.createElement("div");
e_34.setAttribute("id", "three");
e_34.appendChild(document.createTextNode("3"));
e_8.appendChild(e_34);
var e_35 = document.createElement("div");
e_35.setAttribute("id", "minus");
e_35.appendChild(document.createTextNode("-"));
e_8.appendChild(e_35);
var e_36 = document.createElement("div");
e_36.setAttribute("id", "equals");
e_36.appendChild(document.createTextNode("="));
e_8.appendChild(e_36);
var e_37 = document.createElement("div");
e_37.setAttribute("id", "zero");
e_37.appendChild(document.createTextNode("0"));
e_8.appendChild(e_37);
var e_38 = document.createElement("div");
e_38.setAttribute("id", "decpoint");
e_38.appendChild(document.createTextNode("."));
e_8.appendChild(e_38);
var e_39 = document.createElement("div");
e_39.setAttribute("id", "plus");
e_39.appendChild(document.createTextNode("+"));
e_8.appendChild(e_39);
e_1.appendChild(e_8);
e_0.appendChild(e_1);
var e_40 = document.createElement("div");
e_40.setAttribute("id", "notes");
var e_41 = document.createElement("ul");
var e_42 = document.createElement("li");
e_42.appendChild(document.createTextNode("Use keyboard or calculator buttons!"));
e_41.appendChild(e_42);
var e_43 = document.createElement("li");
e_43.appendChild(document.createTextNode("Letter c works as calculator button C; Delete as CE; n as ±; s as √; r as 1/x."));
e_41.appendChild(e_43);
var e_44 = document.createElement("li");
e_44.appendChild(document.createTextNode("Input numbers are limited to ten digits before decimal point and five digits after."));
e_41.appendChild(e_44);
var e_45 = document.createElement("li");
e_45.appendChild(document.createTextNode("To calculate x percent of y simply enter x%y."));
e_41.appendChild(e_45);
var e_46 = document.createElement("li");
e_46.appendChild(document.createTextNode("If new value is not entered, the value currently displayed in the input (lower) part of the calculator screen is used in it's place."));
e_41.appendChild(e_46);
e_40.appendChild(e_41);
e_0.appendChild(e_40);
container.appendChild(e_0);
document.body.appendChild(container);

function buttonPressedVisual(b) {
    $(b).css("-webkit-box-shadow", "0");
    $(b).css("-moz-box-shadow", "0");
    $(b).css("box-shadow", "initial");
    $(b).css("border", "1px solid #222");
    setTimeout(function() {
      $(b).css("-webkit-box-shadow", "0 3px 1px rgba(0,0,0,0.2),0 -2px 3px rgba(0,0,0,0.3) inset, 0 -2px 0 white inset");
      $(b).css("-moz-box-shadow", "0 3px 1px rgba(0,0,0,0.2),0 -2px 3px rgba(0,0,0,0.3) inset, 0 -2px 0 white inset");
      $(b).css("box-shadow", "0 3px 1px rgba(0,0,0,0.2),0 -2px 3px rgba(0,0,0,0.3) inset, 0 -2px 0 white inset");
      $(b).css("border", "0");
    }, 200);
  }
  function valid(key) {
    var validKeys = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", ".", "=", "%", "+", "-", "*", "/", "Backspace", "Delete", "Enter", "n", "N", "c", "C", "s", "S", "r", "R"];
    if (validKeys.indexOf(key) > -1) return true;
    return false;
  }
  //-------------------------------
  function addDigit(key, strInput) {
    var b = 10; 
    var a = 5; 
    var str = "";
    var decPointIndex = null;
    if (strInput[0] === "-") b++;
    if (strInput.match(/\./) === null) {
      if (strInput === "0") {
        if (key !== "0") strInput = "";
        else return strInput;
      }
      if (strInput.length < b) strInput += key;
    } else {
      decPointIndex = strInput.indexOf(".");
      str = strInput.substring(decPointIndex + 1);
      if (str.length < a) strInput += key;
    }
    $("#inputScr").html(strInput);
    return strInput;
  }
  function addDecimalPoint(strInput) {
    if (strInput.match(/\./) === null) {
      var n = 11;
      if (strInput[0] === "-") n++;
      if (strInput.length < n) {
        if (strInput === "") strInput = "0";
        strInput += ".";
        $("#inputScr").html(strInput);
      }
    } 
    return strInput;
  }
  function backspc(strInput) {
    if (strInput !== "") {
      var backspaceResultsInZero = (strInput.length === 2 && strInput[0] === "-") || strInput.length === 1;
      if (backspaceResultsInZero) strInput = "0";
      else strInput = strInput.substr(0, strInput.length - 1);
      $("#inputScr").html(strInput);
    }
    return strInput;
  }
  function fixOut(x) {
    if (x.length > 30) {
      x = x.substring(x.length - 30);
      x = "&laquo;" + x;
    }
    return x;
  }
  $(document).ready(function() {
    window.focus();
  
    var strInput = ""; //entered number
    var strOutput = ""; //holds output data for sqrt and 1/x
    var printed = ""; //data printed in the output screen
    var result = 0; //final result calculated up to last + or -
    var tempResult = null; //result after last + or -
    var current = 0; //holds active value, ie. strInput, result or tempResult
    var operation = ""; //active operation, can be any operation
    var prevOp = ""; //can be empty, + or -, holds last used lower order operation
    var prevOpTwo = ""; //empty, * or /, holds last used higher order operation
    var percentage = 0; //number of percents to be calculated with %
    var memory = null; //memory, null if not active
    function clearEntry() {
      strInput = "";
      current = 0;
      $("#inputScr").html("0");
      return;
    };
    function fix(x) {
      x = Number(x);
      x = x.toFixed(5);
      x = Number(x);
      return x;
    }
    function negate() {
      if (strInput !== "0") {
        if (strInput !== "") {
          if (strInput[0] === "-") strInput = strInput.substring(1);
          else strInput = "-" + strInput;
          $("#inputScr").html(strInput);
        } else {
          current *= -1;
          $("#inputScr").html(fix(current));
        }
      };
    };
    function clear() {
      strInput = "";
      strOutput = "";
      current = 0;
      printed = "";
      result = 0;
      tempResult = null;
      operation = "";
      prevOp = "";
      prevOpTwo = "";
      percentage = 0;
      $("#outputScr").html("");
      $("#inputScr").html("0");
    }
    function checkPrevOpTwo() {
      switch (prevOpTwo) {
        case "":
          switch (prevOp) {
            case "":
              result = current;
              break;
            case "+":
              result += current;
              break;
            case "-":
              result -= current;
              break;
          }
          break;
        case "*":
          switch (prevOp) {
            case "":
              result = tempResult * current;
              break;
            case "+":
              result += tempResult * current;
              break;
            case "-":
              result -= tempResult * current;
              break;
          }
          break;
        case "/":
          switch (prevOp) {
            case "":
              result = tempResult / current;
              break;
            case "+":
              result += tempResult / current;
              break;
            case "-":
              result -= tempResult / current;
              break;
          }
          break;
      }
    }
    function checkPrevOpTwoTemp() {
      switch (prevOpTwo) {
        case "":
          tempResult = current;
          break;
        case "*":
          tempResult *= current;
          break;
        case "/":
          tempResult /= current;
          break;
      }
    }
    function add() {
      if (strInput === "" && operation === "" && current === 0) printed = "0+";
      else {
        if (strInput === "" && operation === "" && current !== 0) {
          printed = fix(current) + "+";
          result = current;
        } else {
          if (strInput !== "" && operation === "") {
            printed = strInput + "+";
            result = Number(strInput);
          } else {
            if (strInput !== "") current = Number(strInput);
            switch (operation) {
              case "+":
                printed += fix(current) + "+";
                result += current;
                break;
              case "-":
                printed += fix(current) + "+";
                result -= current;
                break;
              case "*":
                printed += fix(current) + "+";
                switch (prevOp) {
                  case "":
                    result = tempResult * current;
                    break;
                  case "+":
                    result += tempResult * current;
                    break;
                  case "-":
                    result -= tempResult * current;
                    break;
                }
                break;
              case "/":
                if (current === 0) {
                  clear();
                  $("#inputScr").html("Cannot divide by zero");
                  return;
                }
                printed += fix(current) + "+";
                switch (prevOp) {
                  case "":
                    result = tempResult / current;
                    break;
                  case "+":
                    result += tempResult / current;
                    break;
                  case "-":
                    result -= tempResult / current;
                    break;
                }
                break;
              case "sqrt":
              case "1/":
                printed += strOutput + "+";
                checkPrevOpTwo();
                break;
              case "%":
                printed += fix(percentage) + "%" + fix(current) + "+";
                current = percentage * current / 100;
                checkPrevOpTwo();
                percentage = 0;
                break;
            } 
          }
        }
      }
      current = result;
      $("#outputScr").html(fixOut(printed));
      $("#inputScr").html(fix(current));
      operation = "+";
      prevOp = "+";
      prevOpTwo = "";
      tempResult = null;
      strInput = "";
      strOutput = "";
    }
    function subtract() {
      if (strInput === "" && operation === "" && current === 0) printed = "0-";
      else {
        if (strInput === "" && operation === "" && current !== 0) {
          printed = fix(current) + "-";
          result = current;
        } else {
          if (strInput !== "" && operation === "") {
            printed = strInput + "-";
            result = Number(strInput);
          } else {
            if (strInput !== "") current = Number(strInput);
            switch (operation) {
              case "+":
                printed += fix(current) + "-";
                result += current;
                break;
              case "-":
                printed += fix(current) + "-";
                result -= current;
                break;
              case "*":
                printed += fix(current) + "-";
                switch (prevOp) {
                  case "":
                    result = tempResult * current;
                    break;
                  case "+":
                    result += tempResult * current;
                    break;
                  case "-":
                    result -= tempResult * current;
                    break;
                }
                break;
              case "/":
                if (current === 0) {
                  clear();
                  $("#inputScr").html("Cannot divide by zero");
                  return;
                }
                printed += fix(current) + "-";
                switch (prevOp) {
                  case "":
                    result = tempResult / current;
                    break;
                  case "+":
                    result += tempResult / current;
                    break;
                  case "-":
                    result -= tempResult / current;
                    break;
                }
                break;
              case "sqrt":
              case "1/":
                printed += strOutput + "-";
                checkPrevOpTwo();
                break;
              case "%":
                printed += fix(percentage) + "%" + fix(current) + "-";
                current = percentage * current / 100;
                checkPrevOpTwo();
                percentage = 0;
                break;
            } 
          }
        }
      }
      current = result;
      $("#outputScr").html(fixOut(printed));
      $("#inputScr").html(fix(current));
      operation = "-";
      prevOp = "-";
      prevOpTwo = "";
      tempResult = null;
      strInput = "";
      strOutput = "";
    }
    function calculate() {
      if (strInput === "" && operation === "" && current !== "") return;
      if (strInput !== "" && operation === "") {
        printed = strInput + "=";
        result = Number(strInput);
      } else {
        if (strInput !== "") current = Number(strInput);
        switch (operation) {
          case "+":
            printed += fix(current) + "=";
            result += current;
            break;
          case "-":
            printed += fix(current) + "=";
            result -= current;
            break;
          case "*":
            printed += fix(current) + "="
            switch (prevOp) {
              case "":
                result = tempResult * current;
                break;
              case "+":
                result += tempResult * current;
                break;
              case "-":
                result -= tempResult * current;
                break;
            }
            break;
          case "/":
            if (current === 0) {
              clear();
              $("#inputScr").html("Cannot divide by zero");
              return;
            }
            printed += fix(current) + "="
            switch (prevOp) {
              case "":
                result = tempResult / current;
                break;
              case "+":
                result += tempResult / current;
                break;
              case "-":
                result -= tempResult / current;
                break;
            }
            break;
          case "sqrt":
          case "1/":
            printed += strOutput + "=";
            checkPrevOpTwo();
            break;
          case "%":
            printed += fix(percentage) + "%" + fix(current) + "=";
            current = percentage * current / 100;
            checkPrevOpTwo();
            percentage = 0;
            break;
        } 
      }
      current = result;
      $("#outputScr").html(fixOut(printed));
      $("#inputScr").html(fix(current));
      operation = "";
      result = 0;
      prevOp = "";
      prevOpTwo = "";
      tempResult = null;
      strInput = "";
      printed = "";
    }
    function multiply() {
      if (strInput === "" && operation === "" && current === 0) printed = "0*";
      else {
        if (strInput === "" && operation === "" && current !== 0) {
          printed = fix(current) + "*";
          tempResult = current;
        } else {
          if (strInput !== "" && operation === "") {
            printed = strInput + "*";
            tempResult = Number(strInput);
          } else {
            if (strInput !== "") current = Number(strInput);
            switch (operation) {
              case "+":
              case "-":
                printed += fix(current) + "*";
                tempResult = current;
                break;
              case "*":
                printed += fix(current) + "*";
                tempResult *= current;
                break;
              case "/":
                if (current === 0) {
                  clear();
                  $("#inputScr").html("Cannot divide by zero");
                  return;
                }
                printed += fix(current) + "*";
                tempResult /= current;
                break;
              case "sqrt":
              case "1/":
                printed += strOutput + "*";
                checkPrevOpTwoTemp();
                break;
              case "%":
                printed += fix(percentage) + "%" + fix(current) + "*";
                current = percentage * current / 100;
                checkPrevOpTwoTemp();
                percentage = 0;
                break;
            } 
          }
        }
      }
      current = tempResult;
      $("#outputScr").html(fixOut(printed));
      $("#inputScr").html(fix(current));
      operation = "*";
      prevOpTwo = "*";
      strInput = "";
      strOutput = "";
    }
    function divideBy() {
  
      if (strInput === "" && operation === "" && current === 0) printed = "0/";
      else {
        if (strInput === "" && operation === "" && current !== 0) {
          printed = fix(current) + "/";
          tempResult = current;
        } else {
          if (strInput !== "" && operation === "") {
            printed = strInput + "/";
            tempResult = Number(strInput);
          } else {
            if (strInput !== "") current = Number(strInput);
            switch (operation) {
              case "+":
              case "-":
                printed += fix(current) + "/";
                tempResult = current;
                break;
              case "*":
                printed += fix(current) + "/";
                tempResult *= current;
                break;
              case "/":
                if (current === 0) {
                  clear();
                  $("#inputScr").html("Cannot divide by zero");
                  return;
                }
                printed += fix(current) + "/";
                tempResult /= current;
                break;
              case "sqrt":
              case "1/":
                printed += strOutput + "/";
                checkPrevOpTwoTemp();
                break;
              case "%":
                printed += fix(percentage) + "%" + fix(current) + "/";
                current = percentage * current / 100;
                checkPrevOpTwoTemp();
                percentage = 0;
                break;
            } // end of switch operation
          }
        }
      }
      current = tempResult;
      $("#outputScr").html(fixOut(printed));
      $("#inputScr").html(fix(current));
      operation = "/";
      prevOpTwo = "/";
      strInput = "";
      strOutput = "";
    }
    function squareRoot() {
      if (strInput !== "") current = Number(strInput);
      if (current < 0) {
        clear();
        $("#inputScr").html("Invalid input");
        return;
      }
      if (operation === "%") {
        strOutput = "sqrt(" + fix(percentage) + "%" + fix(current) + ")";
        current = percentage * current / 100;
        current = Math.sqrt(current);
        percentage = 0;
      } else {
        strOutput = "sqrt(" + fix(current) + ")";
        current = Math.sqrt(current);
      }
      $("#outputScr").html(fixOut(printed + strOutput));
      $("#inputScr").html(fix(current));
      operation = "sqrt";
      strInput = "";
    }
    function oneDividedBy() {
      if (strInput !== "") current = Number(strInput);
      if (current === 0) {
        clear();
        $("#inputScr").html("Cannot divide by zero");
        return;
      }
      if (operation === "%") {
        strOutput = "rec(" + fix(percentage) + "%" + fix(current) + ")";
        current = percentage * current / 100;
        current = 1 / current;
        percentage = 0;
      } else {
        strOutput = "rec(" + fix(current) + ")";
        current = 1 / current;
      }
      $("#outputScr").html(fixOut(printed + strOutput));
      $("#inputScr").html(fix(current));
      operation = "1/";
      strInput = "";
    }
    function percentOf() {
      if (strInput !== "") {
        current = Number(strInput);
        strInput = "";
      }
      if (operation === "%") current = percentage * current / 100;
      percentage = current;
      $("#outputScr").html(fixOut(printed + fix(percentage) + "%"));
      $("#inputScr").html(fix(current));
      operation = "%";
    }
    //----------------
    // register a keystroke
    //----------------
    document.addEventListener("keydown", function(e) {
      if (valid(e.key)) {
        if (e.key >= "0" && e.key <= "9") strInput = addDigit(e.key, strInput);
        if (e.key === ".") strInput = addDecimalPoint(strInput);
        if (e.key === "Backspace") strInput = backspc(strInput);
        if (e.key === "Delete") clearEntry();
        if (e.key.toLowerCase() === "n") negate();
        if (e.key.toLowerCase() === "c") clear();
        if (e.key === "+") add();
        if (e.key === "-") subtract();
        if (e.key === "Enter") calculate();
        if (e.key === "*") multiply();
        if (e.key === "/") divideBy();
        if (e.key.toLowerCase() === "s") squareRoot();
        if (e.key.toLowerCase() === "r") oneDividedBy();
        if (e.key === "%") percentOf();
      }
    })
    $("#buttons div").on("click", function() {
      buttonPressedVisual(this);
    })
    $("#one").on("click", function() {
      strInput = addDigit("1", strInput);
    })
    $("#two").on("click", function() {
      strInput = addDigit("2", strInput);
    })
    $("#three").on("click", function() {
      strInput = addDigit("3", strInput);
    })
    $("#four").on("click", function() {
      strInput = addDigit("4", strInput);
    })
    $("#five").on("click", function() {
      strInput = addDigit("5", strInput);
    })
    $("#six").on("click", function() {
      strInput = addDigit("6", strInput);
    })
    $("#seven").on("click", function() {
      strInput = addDigit("7", strInput);
    });
    $("#eight").on("click", function() {
      strInput = addDigit("8", strInput);
    })
    $("#nine").on("click", function() {
      strInput = addDigit("9", strInput);
    })
    $("#zero").on("click", function() {
      strInput = addDigit("0", strInput);
    })
    $("#decpoint").on("click", function() {
      strInput = addDecimalPoint(strInput);
    })
    $("#plusminus").on("click", function() {
      negate();
    })
    $("#backspace").on("click", function() {
      strInput = backspc(strInput);
    })
    $("#ce").on("click", function() {
      clearEntry();
    })
    $("#c").on("click", function() {
        clear();
      }) 
    $("#ms").on("click", function() {
        if (strInput === "") {
          if (current !== 0) {
            memory = current;
            $("#displayM").html("M");
          }
        } else
        if (Number(strInput) != 0) {
          memory = Number(strInput);
          current = memory;
          strInput = "";
          $("#displayM").html("M");
        };
      })
    $("#mc").on("click", function() {
        $("#displayM").html("");
        memory = null;
      })
    $("#mr").on("click", function() {
        if (memory !== null) {
          current = memory;
          strInput = "";
          $("#inputScr").html(fix(current));
        }
      })
      //--------------
      // add currently active value
      // to the existing memory
      // if there is no existing memory 
      // procede as if memory is 0
    $("#mp").on("click", function() {
        if (strInput === "") {
          if (current !== 0) {
            if (memory === null) memory = 0;
            memory += current;
            $("#displayM").html("M");
            $("#displayM").append("+");
            setTimeout(function() {
              $("#displayM").html("M");
            }, 1000);
          }
        } else
        if (Number(strInput) !== 0) {
          if (memory === null) memory = 0;
          memory += Number(strInput);
          $("#displayM").html("M");
          $("#displayM").append("+");
          setTimeout(function() {
            $("#displayM").html("M");
          }, 1000);
        };
      }) 
    $("#mm").on("click", function() {
        if (strInput === "") {
          if (current !== 0) {
            if (memory === null) memory = 0;
            memory -= current;
            $("#displayM").html("M");
            $("#displayM").append("-");
            setTimeout(function() {
              $("#displayM").html("M");
            }, 1000);
          }
        } else
        if (Number(strInput) !== 0) {
          if (memory === null) memory = 0;
          memory -= Number(strInput);
          $("#displayM").html("M");
          $("#displayM").append("-");
          setTimeout(function() {
            $("#displayM").html("M");
          }, 1000);
        };
      }) //end if mm click
      //-----------------------------------------------------
    $("#plus").on("click", function() {
        add();
      })
      //---------------------------------  
    $("#minus").on("click", function() {
        subtract();
      })
      //---------------------------------------------------  
    $("#equals").on("click", function() {
        calculate();
      })
      //--------------------------------------------
    $("#times").on("click", function() {
        multiply();
      })
      //-----------------------------------------------
    $("#divide").on("click", function() {
        divideBy();
      })
      //-----------------------------------------
    $("#sqroot").on("click", function() {
        squareRoot();
      })
      //----------------------------------------
    $("#reciprocal").on("click", function() {
        oneDividedBy();
      })
      //----------------------------------------
    $("#percent").on("click", function() {
      percentOf();
    })
  
  });