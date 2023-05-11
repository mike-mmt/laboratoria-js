const { questionsChatGpt } = require('./questions-chat-gpt.js');

const sorted = questionsChatGpt.sort((a, b) => a.user.name > b.user.name ? 1 : -1);

const result = sorted.reduce((acc, currentQuestion) => {
    const curUser = currentQuestion.user.name.toLowerCase();  
    if (curUser in acc) {
        acc[curUser]["count"] += 1;
        acc[curUser]["questions"] = [...acc[curUser].questions, currentQuestion.question];
    } else {
        const newUserObj = {}
        newUserObj["count"] = 1;
        newUserObj["questions"] = [currentQuestion.question];
        acc[curUser] = newUserObj;
    }
    return acc;
}, {});


console.log(result);