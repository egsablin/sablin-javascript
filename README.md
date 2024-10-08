## Technical task for the traineeship candidates: QA Automation

## Task #1: Make up an algorithm

* If the entered number is greater than 7, then print “Hello”
* If the entered name matches “John”, then output “Hello, John”, if not, then output "There is no such name"
* There is a numeric array at the input, it is necessary to output array elements that are multiples of 3

Github Repository: https://github.com/egsablin/sablin-javascript

For execution you should install NodeJS.

Steps:

1. Clone the Repository:

```bash
git clone https://github.com/egsablin/sablin-javascript.git
```

2. Navigate to the Project Directory:

```bash
cd sablin-javascript
```

3. Install Dependencies:

```bash
npm install
```

4. Run the Application

```bash
node app.js
```

## Task #2: Answer the questions

Given bracket sequence: [((())()(())]]
Can this sequence be considered correct?
If the answer to the previous question is “no”, then what needs to be changed in it to make it correct?

Answer to the question: No, it is not correct. We need to remove one of the closing square brackets ] at the end, making the correct sequence: [((())()(())]

Explanation: Every opening bracket should have a corresponding closing bracket, and they should be properly nested.