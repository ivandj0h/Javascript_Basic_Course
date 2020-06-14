// this is the first tutorial
// this sections is talking about variables on javascript

// variable declaration
// using constant keyword
const userName = 'Ivandjoh'

// using let keyword
let userAccount = 'ivandjoh'

function generateContents(userName, userAccount) {
    return `
    <h3>let & const variable</h3>
    to create a variable in Javascript you can use constant variable by declare<br />
    <b>const userName = '${userName}';</b><br />
    or you can use let by declare <br />
    <b>let userAccount = '${userAccount}';</b>
    `
}

const app = generateContents(userName, userAccount);


// output the contents
document.getElementById('app').innerHTML = app;