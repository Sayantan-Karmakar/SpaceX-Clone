let bars=document.getElementById('menuicon');
let navigation=document.getElementById('navigation');
let menuClose=0;
function menu(){
        if(menuClose==0){
            menuClose=1;
            bars.classList.remove('fa-bars');
            bars.classList.add('fa-times');
            document.getElementById('menubar').style.animation="in 0.5s";
            document.getElementById('menubar').style.display="block";        
        }else{
            menuClose=0;
            bars.classList.remove('fa-times');
            bars.classList.add('fa-bars');
            document.getElementById('menubar').style.animation="out 0.5s";
            document.getElementById('menubar').style.display="none";
        }
 
}
let lastScroll=window.scrollY;
window.addEventListener('scroll',()=>{
    if(lastScroll<window.scrollY){
        navigation.style.display="none";
    }else if(lastScroll<130){
        navigation.style.display="block";
        navigation.style.backgroundColor="rgba(0,0,0,0)";
        navigation.style.transition="0.5s ease";
    }else{
        navigation.style.display="block";
        navigation.style.backgroundColor="#000000";
    }
    lastScroll=window.scrollY;
})

let contents=document.querySelectorAll(".section_description");
let details=document.querySelectorAll(".details");
let slides=document.querySelectorAll(".slide_description");
const observer=new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
        entry.target.classList.toggle('show',entry.isIntersecting);
    })
},{
    rootMargin: "100px",
})
contents.forEach(content=>{
    observer.observe(content);
})
details.forEach(detail=>{
    observer.observe(detail);
})
slides.forEach(slide=>{
    observer.observe(slide);
})