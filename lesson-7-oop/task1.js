"use strict";

(function () {
    function Question(question, answers, correct) {
        this.question = question;
        this.answers = answers;
        this.correct = correct;
    }

    var question1 = new Question('К какому типу данных относится число ?',
        ['string', 'number','function', 'object'], 1);
    var question2 = new Question('В каком языке программировнаия используется prototype в качестве наследования в ooп?',
        ['С++', 'Java', 'JavaScript', 'Pascal'], 2);
    var question3 = new Question('В JS фигурными скобками обозначается {} ?',
        ['Хэш', 'Массив', 'Функция', 'Ccылка'], 0);

    var questions = [question1, question2, question3];

    Question.prototype.questionDisplay = function () {
        console.log(this.question);
        for (var i = 0; i < this.answers.length; i++) {
            console.log(i + ") " + this.answers[i]);
        }
    }

    Question.prototype.answerChoice = function (ans) {
        if (ans == this.correct) {
            console.log('correct answer');
            console.log('=================');
        } else {
            console.log('no correct answer');
            console.log('=================');
        }
    }

    function randomQuestion() {
        var rQ = Math.floor(Math.random() * questions.length);
        questions[rQ].questionDisplay();
        var a = prompt('Введите правильный ответ 0,1,2,3');
        console.log('=================');
        console.log('Вы ввели : ' + a);
        questions[rQ].answerChoice(a);
    }

    randomQuestion();

}) ();
