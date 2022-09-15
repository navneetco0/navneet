export const useScrollnav=(id)=>{
    const violation = document.getElementById(id.split(' ').join('')); 
    window.scrollTo({top:violation.offsetTop,
        behavior:"smooth"
    });
}