let content = document.getElementById('dropdown-region');
document.getElementById('dropdown').addEventListener('click',()=>{
    if (content.style.display=='flex'){
        content.style.display='none';
    }else{
        content.style.display='flex';
    }
})
let items = document.querySelectorAll('.dropdown-region__item');
// console.log(items);
items.forEach(item=>{
    item.addEventListener('click',async()=>{
        // console.log(item.textContent)
        if (content.style.display=='flex'){
            content.style.display='none';
            document.getElementById('dropdown').textContent=`${item.textContent}`
            if(searchInput.value ==''){
                await fillDatas('All',item.textContent);
            }else{
                await fillDatas(searchInput.value,item.textContent);
            }
            
        }else{
            content.style.display='flex';
        }
    })
})