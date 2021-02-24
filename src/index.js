module.exports = function check(str, bracketsConfig) {

    const stack = [];

    let newStr = str.split('');
    newStr.forEach((bracket, index) => {
        if (index === 0) {
            stack.push(bracket);
            return;
        }

        let lastBracket = bracketsConfig
            .find(typeBracket => stack[stack.length - 1] === typeBracket[0]);
        lastBracket = lastBracket && lastBracket[1];

        if (bracket !== lastBracket) {
            stack.push(bracket);
        } else {
            stack.pop();
        }
    });

    return stack.length === 0;
};
