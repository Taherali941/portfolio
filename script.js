const checkbox = document.getElementById('menu-toggle')
const hamnav = document.getElementById('ham-nav')

checkbox.addEventListener('change',()=>{
      if(checkbox.checked){
        hamnav.style.display='block';
    }else {
        hamnav.style.display='none';
    }
})