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