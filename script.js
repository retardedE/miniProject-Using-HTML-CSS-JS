const usernameStory=document.querySelectorAll('.usernameStory')
let array= Array.from(usernameStory)
array.map(x=>{
    let username=x.textContent
    if(username.length>8){
        username=username.charAt(0)+username.charAt(1)+username.charAt(2)+username.charAt(3)+username.charAt(4)+username.charAt(5)+username.charAt(6)+username.charAt(7)+username.charAt(8)+'...'  
    }
    x.textContent=username
})




const likeBtn=document.querySelectorAll('#likeBtn')
let likesArray= Array.from(likeBtn)
for(let i=0;i<likesArray.length;i++){
    likesArray[i].addEventListener('click',()=>{
        likesArray[i].style.color='red'
    })
}


const commentsSection=document.querySelectorAll('.commentsSection')
const closeComments=document.querySelectorAll('#closeComments')
const openComments=document.querySelectorAll('#openComments')
let commentsArray= Array.from(openComments)
let commentsSections= Array.from(commentsSection)
let closesComments= Array.from(closeComments)





for(let i=0; i<commentsArray.length;i++){
    commentsArray[i].addEventListener('click',()=>{
        for(let i=0;i<commentsSections.length;i++){
            commentsSections[i].classList.remove('nonActiveComments')
            document.body.style.overflow='hidden'
        }
    })
}
for(let i=0; i<closesComments.length;i++){
    closesComments[i].addEventListener('click' , ()=>{
        for(let i=0;i<commentsSections.length;i++){
            commentsSections[i].classList.add('nonActiveComments')
            document.body.style.overflow='auto'
        }
    })
}

const openShare=document.querySelectorAll('#openShare')
const shareSection=document.querySelectorAll('.shareSection')
const CloseShare=document.querySelectorAll('#CloseShare')
const selectShare=document.querySelectorAll('#selectShare')
let isSelected=false
for(let i=0;i<openShare.length;i++){
    openShare[i].addEventListener('click', ()=>{
    shareSection[i].classList.remove('nonActiveShare')
    document.body.style.overflow='hidden'
    CloseShare[i].addEventListener('click', ()=>{
        shareSection[i].classList.add('nonActiveShare')
        document.body.style.overflow='auto'
    })
})
}
for(let i=0; i<selectShare.length;i++){
selectShare[i].addEventListener('click', ()=>{
    if(isSelected==false){
    selectShare[i].style.color='blue'
    isSelected==true   
    }else{
        selectShare[i].style.color='black'
        isSelected==false
    }
})
}

const userStory=document.querySelectorAll('.othersStory div')
const storyFullScreen=document.querySelectorAll('.storyFullScreen')
const closeStory=document.querySelectorAll('#closeStory')
let userStoryArray= Array.from(userStory)
let storyFullScreenArray= Array.from(storyFullScreen)
let closeStoryArray= Array.from(closeStory)
console.log(closeStoryArray)
console.log(storyFullScreenArray)
console.log(storyFullScreenArray)
userStoryArray.map(x=>{
    x.addEventListener('click', ()=>{
        let index = userStoryArray.indexOf(x);
        storyFullScreenArray[index].classList.remove('unActiveStory')
    })
})
closeStoryArray.map(x=>{
    x.addEventListener('click', ()=>{
        let index = closeStoryArray.indexOf(x);
        storyFullScreenArray[index].classList.add('unActiveStory')
    })
})