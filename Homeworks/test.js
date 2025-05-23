
// * Task: Comment Validation
// * Implement a function called validateComment(comment)
// * that checks whether a given comment contains any harassing or
// * offensive words from a predefined list.
// * The function should ensure input validation and detect harmful words using a simple for loop.
// *
// * 📋 **Requirements:**
// *
// * 1. The function must accept a single argument, comment.
// * 2. If the input is not a string, return the message:
// *    "Invalid input: Comment must be a string."
// * 3. The function should check whether comment contains any word from a predefined
// *    list of harassment-related words:
// *    ["idiot", "loser", "moron", "stupid", "dumb", "fool", "bully", "creep"]
// * 4. The check must be case-insensitive, meaning "Idiot" and "idiot" should be treated the same.
// * 5. Use a simple for loop for iteration (do not use array methods like .some(), .filter(), or .find()).
// *
// * ⚠️ If the comment contains any harassing word, return the message:
// *    "This comment can't be posted as it contains the word: '<bad word>'"
// *    The message should include the first detected harassing word.
// * 6. If the comment does not contain any offensive words, return the original comment prefixed with:
// *    "Comment posted successfully! " + comment
// */


    function validateComment(comment){
    if (typeof comment !== 'string') {
        return "Invalid input: Comment must be a string.";
    }

    const offensiveWords = ["idiot", "loser", "moron", "stupid", "dumb", "fool", "bully", "creep"];

    for (let i = 0; i < offensiveWords.length; i++) {
      
    if (comment.toLowerCase().includes(offensiveWords[i].toLowerCase())) {
            return `This comment can't be posted as it contains the word: '${offensiveWords[i]}'`;
        }
    }

     
    return "Comment posted successfully! " + comment;
}
     

// Example usage:
console.log(validateComment("You are stupid!")); 
console.log(validateComment("Great job on the project!")); 
console.log(validateComment(12345));



