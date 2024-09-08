const email=document.getElementById('Email')
email.addEventListener("click",()=>{
    window.location.href=('https://mail.google.com/mail/u/1/#inbox?compose=GTvVlcSMTRwtBrdKZgQblPvfvlwkMvpsSwSDBPGMrDFFSpFfvlbDbdlvNGcsDMbdfVWkNGBTrsWZB')
})

const git=document.getElementById('Github')
git.addEventListener("click",()=>{
    window.location.href=('https://github.com/imnick48')
})

const twitter=document.getElementById('Twitter')
twitter.addEventListener("click",()=>{
    window.location.href=('https://x.com/sagnick48')
})


const insta=document.getElementById('Instagram')
insta.addEventListener("click",()=>{
    window.location.href=('https://www.instagram.com/sagnick_/')
})



const li=document.getElementById('Linkedin')
li.addEventListener("click",()=>{
    window.location.href=('https://www.linkedin.com/in/sagnick-das-71268b176/')
})




const fb=document.getElementById('FaceBook')
fb.addEventListener("click",()=>{
    window.location.href=('https://www.facebook.com/sagnick48')
})
function showsidebar(){
    const sidebar=document.querySelector('.sidebar');
    sidebar.style.display='flex';
}
function unshowsidebar(){
    const sidebar=document.querySelector('.sidebar');
    sidebar.style.display='none';
}