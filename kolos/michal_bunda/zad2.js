const { questionsChatGpt } = require('./questions-chat-gpt.js');
// const { users } = re

class QuestionService {
    constructor(questionsArray) {
        this.questions = questionsArray;
    }

    getQuestionById(id) {
        const result = this.questions.find(x => x.id === id);
        return result ? result : null;
    }

    createNewQuestion(question, userId) {
        const newId = this.questions.reduce((acc, value) => {
            return value.id > acc ? value.id : acc;
        },1) + 1;
        const newQuestionObject = {
            id: newId,
            timestamp: new Date(),
            question: question,
            user: {
                id: userId
            }
        }
        this.questions.push(newQuestionObject);
    }

    updateAnswer(id, answer) {
        const result = this.questions.find(x => x.id === id);
        if (result) {
            result["answer"] = answer;
        }
    }

    updateQuestion(newQuestion) {
        const result = this.questions.find(x => x.id === newQuestion.id);
        if (result && "id" in newQuestion && "question" in newQuestion && "user" in newQuestion) {
            result.id = newQuestion.id;
            result.question = newQuestion.question;
            result.user = users.find(x => x.id === newQuestion.user.id);
        } else {
            console.log("Operacja nie powiodła się");
        }
    }

    // deleteQuestion(questionId) {
    //     const resultIndex = this.questions.indexOf(x => x.id === id);
    //     this.questions
    // }

    getQuestionsByUser(userId) {
        return this.questions.reduce((acc, value) => {
            return value.user.id === userId ? [...acc, { id: value.id, question: value.question }] : acc;
        }, [])
    }
}

const questionService = new QuestionService(questionsChatGpt);

console.log(questionService.getQuestionById(1));
console.log(questionService.getQuestionById(31));

questionService.createNewQuestion("na pewno?", 4);

questionService.updateAnswer(21, "tak")

console.log(questionService.getQuestionById(21));


console.log(questionService.getQuestionsByUser(1));

const newQuestion = {
    id: 20,
    question: "a",
    user: {
        id:1
    }
}

questionService.updateQuestion(newQuestion);

console.log(questionService.getQuestionsByUser(1));