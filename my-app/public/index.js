document.addEventListener("DOMContentLoaded", async () => {
    
    const $bars = document.querySelector('.bars');

    $bars.addEventListener('click', async () => {
        const $menu = document.getElementById('menu');
        if($menu.style.display === "none"){
            $menu.style.display = "flex";
        } else{
            $menu.style.display = "none";
        }
    })
})