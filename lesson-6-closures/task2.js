"use strict"

function interviewQuestion(prof) {
    return function (name) {
        if(prof === "designer") {
            console.log(name + " can you please explain what US design is?");
        } else if(prof === "teacher") {
            console.log("What subject do you teach " + name + "?");
        } else if(prof === "other") {
            console.log("Hello " + name + ", " + "what do you do?" );
        }
    }
}

interviewQuestion("designer")("John");
interviewQuestion("teacher")("John");
interviewQuestion("other")("John");