<script>
    let navMenu;
    let navToggle;
    let navClose;
    let headerTag;
    let showMenu= window.innerWidth>=768 ? true : false;
    
    window.addEventListener('resize',()=>{
        if(window.innerWidth>=768){
            showMenu=true
        }
    })
    // ------------------------------
    let themeButton;
    const darkTheme="dark-theme";
    const iconTheme="uil-sun";

    const selectedTheme=localStorage.getItem('selected-theme');
    const selectedIcon=localStorage.getItem('selected-icon');

    const getCurrentTheme = () => {
        let currentTheme = document.body.classList.contains(darkTheme) ? 'dark' : 'light';
        return currentTheme;
    }
    const getCurrentIcon = () => {
        let currentIcon = themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun';
        return currentIcon;
    }

    if (selectedTheme) {
        document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme);
    }
    function themesToggle(){
        document.body.classList.toggle(darkTheme);
        themeButton.classList.toggle(iconTheme);
        localStorage.setItem('selected-theme',getCurrentTheme());
        localStorage.setItem('selected-icon',getCurrentIcon());
    }
        
    // ----------------------------------------------------------------------------
    function closeMenu(){
        if (window.innerWidth<768)
        showMenu=false;
    }
    function scrollHeader(){
        if(this.scrollY >=80) headerTag.classList.add("scroll-header");
        else headerTag.classList.remove("scroll-header")
    }
    window.addEventListener("scroll",scrollHeader);
</script>


<style>
    .gdsc-logo{
        width: 3rem;
    }
    .nav{
        max-width: 968px;
        height: var(--header-height);
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .nav__logo,
    .nav__toggle{
        color:var(--title-color);
        font-weight: var(--font-medium);
    }
    .nav__logo:hover{
        color:var(--first-color);

    }
    .nav__toggle{
        font-size:1.1rem;
        cursor: pointer;
    }
    .nav__toggle:hover{
        color: var(--first-color);
    }

    @media screen and (max-width:767px){
        .nav__menu{
            position: fixed;
            bottom:0;
            left: 0;
            width: 100%;
            background-color: var(--body-color);
            padding: 2rem 1.5rem 4rem;
            box-shadow: 0 -1px 4px rgba(0,0,0,.15);
            border-radius: 1.5rem 1.5rem 0 0;
            transition: .3s;
        }
        

    }
    .nav__list{
        grid-template-columns: repeat(3,1fr);
        gap:2rem;
    }
    .nav__link{
      display:flex;
      flex-direction: column;
      align-items: center;  
      font-size: var(--small-font-size);
      color: var(--title-color);
      font-weight: var (--font-medium);
    }
    .nav__link:hover{
        color:var(--first-color);  
    }
    .nav__icon{
        font-size:1.2rem ;
    }
    .nav__close{
        position:absolute;
        right:1.3rem;
        bottom:.5rem;
        font-size:1.5rem;
        cursor: pointer;
        color:var(--first-color);
    }
    .nav__close:hover{
        color:var(--first-color-alt);
    }
    button{
        background: none;
        color: inherit;
        border: none;
        padding: 0;
        font: inherit;
        cursor: pointer;
        outline: inherit;
    }
    .nav__btns{
        display: flex;
        align-items: center;
    }
    .change-theme{
        font-size: 1.25rem;
        color:var(--title-color);
        margin-right: var(--mb-1);
        cursor:pointer;
    }
    .change-theme:hover{
        color: var(--first-color);
    }
</style>

<header bind:this={headerTag}>
    <nav class="nav container">
        <a href="#" class="nav__logo"><img class="gdsc-logo" src="https://cdn-images-1.medium.com/max/1200/1*vZVM7utCuRiZ6-HDsNeYUA.png" alt=""></a>
        {#if showMenu}
        <div class="nav__menu" id="nav-menu">
            <ul class="nav__list grid">
                <li class="nav__item">
                    <a href="#home" class="nav__link" on:click={closeMenu} >
                        <i class="uil uil-estate nav__icon" ></i> Home
                    </a>
                </li>
                <li class="nav__item">
                    <a href="#about" class="nav__link" on:click={closeMenu}>
                        <i class="uil uil-user nav__icon"></i> About
                    </a>
                </li>
                <li class="nav__item">
                    <a href="#skills" class="nav__link" on:click={closeMenu}>
                        <i class="uil uil-file-alt nav__icon"></i> Talks
                    </a>
                </li>
                <li class="nav__item">
                    <a href="#services" class="nav__link" on:click={closeMenu}>
                        <i class="uil uil-briefcase-alt nav__icon"></i> Workshops
                    </a>
                </li>
                <li class="nav__item">
                    <a href="#qualification" class="nav__link" on:click={closeMenu}>
                        <i class="uil uil-scenery nav__icon"></i> Agenda
                    </a>
                </li>
                <li class="nav__item">
                    <a href="#contact" class="nav__link" on:click={closeMenu}>
                        <i class="uil uil-message nav__icon"></i> Contact Us
                    </a>
                </li>
            </ul>
                <i class="uil uil-times nav__close" id="nav-close" on:keypress on:click={closeMenu}></i>
        </div>
        {/if}
        <div class="nav__btns">
            <!-- Theme change button -->
            <i class="{selectedIcon === 'uil-moon' ? iconTheme : ''} uil uil-moon change-theme" on:keypress on:click={themesToggle} bind:this={themeButton}></i>

            <div class="nav__toggle" id="nav-toggle">
                    <i class="uil uil-apps"on:keypress on:click={()=>showMenu=true} ></i>
            </div>
        </div>
    </nav>
</header>