document.addEventListener("DOMContentLoaded", function () {
    var startButton = document.getElementById("startButton");
    var quizContainer = document.getElementById("quizContainer");
    var resultContainer = document.getElementById("resultContainer");
    var scoreElement = document.getElementById("score");
    var score = 0;
    var questionIndex = 0;
    var questions = [
        {
            question: "Which keyword is used to declare a variable with a specific type in TypeScript?",
            choices: ["var", "let", "const", "type"],
            correctAnswer: "let",
        },
        {
            question: "Which type is used to represent the absence of a value in TypeScript?",
            choices: ["null", "undefined", "void", "empty"],
            correctAnswer: "void",
        },
        {
            question: "How do you specify a number type in TypeScript?",
            choices: ["num", "integer", "number", "float"],
            correctAnswer: "number",
        },
        {
            question: "What is the purpose of the 'any' type in TypeScript?",
            choices: ["To declare an object", "To allow any type of value", "To define a function", "To restrict types"],
            correctAnswer: "To allow any type of value",
        },
        {
            question: "Which operator is used for type assertion in TypeScript?",
            choices: ["as", "is", "assert", "typeof"],
            correctAnswer: "as",
        },
        {
            question: "How do you define an interface in TypeScript?",
            choices: ["interface", "struct", "class", "type"],
            correctAnswer: "interface",
        },
        {
            question: "What is the default access modifier for class properties in TypeScript?",
            choices: ["public", "private", "protected", "readonly"],
            correctAnswer: "public",
        },
        {
            question: "Which keyword is used to declare a constant in TypeScript?",
            choices: ["var", "const", "final", "let"],
            correctAnswer: "const",
        },
        {
            question: "How do you define a union type in TypeScript?",
            choices: ["&", "|", "*", "+"],
            correctAnswer: "|",
        },
        {
            question: "Which type represents both true and false values in TypeScript?",
            choices: ["boolean", "bit", "flag", "bool"],
            correctAnswer: "boolean",
        },
        {
            question: "Which keyword is used to handle exceptions in TypeScript?",
            choices: ["catch", "try", "throw", "error"],
            correctAnswer: "try",
        },
        {
            question: "How do you specify a function return type in TypeScript?",
            choices: [":", "=>", "returns", "<>"],
            correctAnswer: ":",
        },
        {
            question: "What is the purpose of 'readonly' in TypeScript?",
            choices: ["To make a property immutable", "To define a constant", "To create a variable", "To assign a type"],
            correctAnswer: "To make a property immutable",
        },
        {
            question: "How do you declare an optional property in an interface?",
            choices: ["?", "!", "optional", "None"],
            correctAnswer: "?",
        },
        {
            question: "Which utility type extracts a specific type from a union in TypeScript?",
            choices: ["Partial", "Extract", "Pick", "Exclude"],
            correctAnswer: "Extract",
        },
        {
            question: "How do you declare an array of numbers in TypeScript?",
            choices: ["number[]", "Array<number>", "Array[]", "numbers"],
            correctAnswer: "number[]",
        },
        {
            question: "What is the output type of the 'typeof' operator in TypeScript?",
            choices: ["string", "number", "boolean", "object"],
            correctAnswer: "string",
        },
        {
            question: "How do you define a tuple in TypeScript?",
            choices: ["[string, number]", "(string, number)", "{string, number}", "<string, number>"],
            correctAnswer: "[string, number]",
        },
        {
            question: "Which TypeScript feature helps catch errors during development before runtime?",
            choices: ["Type inference", "Static typing", "Dynamic typing", "Data binding"],
            correctAnswer: "Static typing",
        },
        {
            question: "How do you create an alias for a type in TypeScript?",
            choices: ["alias", "type", "interface", "as"],
            correctAnswer: "type",
        },
        {
            question: "Which method is used to compile TypeScript code to JavaScript?",
            choices: ["tsc", "node", "compile", "transpile"],
            correctAnswer: "tsc",
        },
        {
            question: "How do you declare a generic function in TypeScript?",
            choices: ["function<T>()", "function<>", "generic<T>", "template()"],
            correctAnswer: "function<T>()",
        },
        {
            question: "What does the 'unknown' type represent in TypeScript?",
            choices: ["Any value with unknown type", "Only undefined values", "Null values", "Object with no type"],
            correctAnswer: "Any value with unknown type",
        },
        {
            question: "Which utility type makes all properties in an object optional?",
            choices: ["Partial", "Required", "Pick", "Readonly"],
            correctAnswer: "Partial",
        },
        {
            question: "How do you exclude a type from a union in TypeScript?",
            choices: ["Exclude", "Pick", "Omit", "Remove"],
            correctAnswer: "Exclude",
        }
    ];
    function loadQuestion() {
        if (questionIndex >= questions.length) {
            quizContainer.style.display = "none";
            resultContainer.style.display = "block";
            scoreElement.textContent = "".concat(score, "/").concat(questions.length);
            return;
        }
        var currentQuestion = questions[questionIndex];
        var questionElement = document.getElementById("question");
        questionElement.textContent = currentQuestion.question;
        var choicesElement = document.getElementById("choices");
        choicesElement.innerHTML = "";
        currentQuestion.choices.forEach(function (choice) {
            var button = document.createElement("button");
            button.className = "choiceButton";
            button.textContent = choice;
            button.onclick = function () {
                if (choice === currentQuestion.correctAnswer) {
                    score++;
                }
                questionIndex++;
                loadQuestion();
            };
            choicesElement.appendChild(button);
        });
    }
    startButton.addEventListener("click", function () {
        startButton.style.display = "none";
        quizContainer.style.display = "block";
        loadQuestion();
    });
});
