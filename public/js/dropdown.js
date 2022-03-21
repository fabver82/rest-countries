let content = document.getElementById('dropdown-region');
document.getElementById('dropdown').addEventListener('click',()=>{
    if (content.style.display=='flex'){
        content.style.display='none';
    }else{
        content.style.display='flex';
    }
})
let items = document.querySelectorAll('.dropdown-region__item');


items.forEach(item=>{
    item.addEventListener('click',async()=>{
        if (content.style.display=='flex'){
            content.style.display='none';
            document.getElementById('dropdown').textContent=`${item.textContent}`;
            let icon = document.createElement('i');
            icon.classList.add("fa-solid","fa-circle-down","dropdown-region__icon");
            document.getElementById('dropdown').appendChild(icon)
            if(searchInput.value ==''){
                await filterDatas('All',item.textContent);
            }else{
                await filterDatas(searchInput.value,item.textContent);
            }
            
        }else{
            content.style.display='flex';
        }
    })
})