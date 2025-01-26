const showMenu = (toggleId, NavId) =>{
    const toggle = document.getElementById(toggleId), 
          nav = document.getElementById(NavId)

    toggle.addEventListener('click', () =>{
        nav.classList.toggle('show-menu')
        toggle.classList.toggle('show-icon')
    })      
}

showMenu('nav-toggle','nav-menu')