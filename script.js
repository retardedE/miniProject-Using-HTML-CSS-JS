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

const openShare=document.querySelector('#openShare')
const shareSection=document.querySelector('.shareSection')
const CloseShare=document.querySelector('#CloseShare')
const selectShare=document.querySelectorAll('#selectShare')
let isSelected=false
openShare.addEventListener('click', ()=>{
    shareSection.classList.remove('nonActiveShare')
    document.body.style.overflow='hidden'
})
CloseShare.addEventListener('click', ()=>{
    shareSection.classList.add('nonActiveShare')
    document.body.style.overflow='auto'
})
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
