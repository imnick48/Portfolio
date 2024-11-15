const blog = document.getElementById('blog');
blog.addEventListener("click", () => {
    window.location.href = 'https://github.com/imnick48/Blogapp';
});
const movie=document.getElementById('MovieReview')
movie.addEventListener("click",()=>{
    window.location.href=('https://github.com/imnick48/movie_review')
})

const movie_sentiment=document.getElementById('Movie_Sentiment')
movie_sentiment.addEventListener("click",()=>{
    window.location.href=('https://github.com/imnick48/Movie_sentiment_analysis')
})
const anthem=document.getElementById('similar_anthem')
anthem.addEventListener("click",()=>{
    window.location.href=("https://github.com/imnick48/Similar_anthem");
})
const recomendation=document.getElementById('Recomendation')
recomendation.addEventListener("click",()=>{
    window.location.href=("https://github.com/imnick48/Recomender_System");
})
const twt_class=document.getElementById('Twitter_class')
twt_class.addEventListener("click",()=>{
    window.location.href=("https://github.com/imnick48/Twitter_Comments_Classification");
})
function showsidebar(){
    const sidebar=document.querySelector('.sidebar');
    sidebar.style.display='flex';
}
function unshowsidebar(){
    const sidebar=document.querySelector('.sidebar');
    sidebar.style.display='none';
}