/* 
 * Create a Class call SocialMediaPosting
 * This class would be a parent class
 */
class SocialMediaPosting {
    displayContent() {
        console.log('The Content was posted!!')
    }
}

/* 
 * Create a Class call FacebookPosted
 * This class would be a would be inheritance from the parent class
 */
class FacebookPosted extends SocialMediaPosting {
    displayContent() {
        console.log('The Content of Facebook was posted!!')
    }
}

/* 
 * Create a Class call InstagramPosted
 * This class would be a would be inheritance from the parent class
 */
class InstagramPosted extends SocialMediaPosting {
    displayContent() {
        console.log('The Content of Instagram was posted!!')
    }
}

/* 
 * Create Object based on those Classes above
 * putting the Object initialization into array
 */
const objectPost = [new FacebookPosted, new InstagramPosted]

// print into the console by looping all elements
console.log(objectPost.forEach(el => el.displayContent()))