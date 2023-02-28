/* Lógica para manejo de menúes desplegables */

/* recuperar la ul con los links para ponerlos visibles u ocultos segun el tamaño de la ventana */
(function(){
    // const listElements = document.querySelectorAll('.menu__item--show');
    // const list = document.querySelector('.navul');
    // const list = document.querySelector('header ul');
    const menu = document.querySelector('.btn-hamburguesa');
    const menuPpal = document.querySelector('header ul');

    const addMostrar = ()=>{
            menuPpal.classList.toggle('mostrar');
    }

    if(window.innerWidth < 768){
            menu.addEventListener('click', addMostrar);
    }

    // if(window.innerWidth <= 768){
    //     addClick();
    // }

    if(window.innerWidth >= 768){
        if(menuPpal.classList.contains('mostrar'))
            menuPpal.classList.remove('mostrar');

    }else{
        menu.addEventListener('click', ()=> menuPpal.classList.toggle('mostrar'));            
        menu.addEventListener('click', addMostrar);
        // addClick();
    }

    window.addEventListener('resize', ()=>{
        if(window.innerWidth >= 768){
            if(menuPpal.classList.contains('mostrar'))
                menuPpal.classList.remove('mostrar');

        }else{
            // menu.addEventListener('click', ()=> menuPpal.classList.toggle('mostrar'));            
            menu.addEventListener('click', addMostrar);
            // addClick();
        }
    });


})();

