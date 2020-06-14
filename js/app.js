// If Else Condition

const firstName = 'John';
const isMarry = true;

function getProfile(firstName, isMarry) {
    if(isMarry){
        return firstName + ' already Married';
    }else {
        return firstName + ' is Single';
    }
}

const app = getProfile(firstName, isMarry)

// output the contents
document.getElementById('app').innerHTML = app;