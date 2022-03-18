document.getElementById('dropdown').addEventListener('click',()=>{
    let content = document.getElementById('dropdown-region');
    if (content.style.display=='flex'){
        content.style.display='none';
    }else{
        content.style.display='flex';
    }
    
})