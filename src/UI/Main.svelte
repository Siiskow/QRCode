<style>
    .home__container{
        gap:1rem;
    }
    .home__content{
        grid-template-columns: .5fr 3fr;
        padding-top : 3.5rem;
        align-items: center;
    }
    .home__social{
        display: grid;
        grid-template-columns: max-content;
        row-gap: 1rem;
    }
    .home__social-icon{
        font-size:1.25rem;
        color:var(--first-color);
    }
    .home__social-icon:hover{
        color:var(--first-color-alt);
    }
    .home__blob{
        width: 200px;
        fill:var(--first-color);
    }
    .home__blob-img{
        width:170px;
    }
    .home__data{
        grid-column: 1/3;
    }
    .home__title{
        font-size: 2.7rem;
    }
    .home__subtitle{
        font-size: var(--h3-font-size);
        color:var(--text-color);
        font-weight:var(--font-medium);
        margin-bottom: 0.75rem;
    }
    .home__description{
        margin-bottom: var(--mb-2);
    }
    .home__scroll{
        display: none; 
    }
    .home__scroll-button{
        color:var(--first-color);
        transition: .3s;
    }
    .home__scroll-button:hover{
        transform: translateY(.25rem);
    }
    .home__scroll-mouse{
        font-size: 2rem;
    }
    .home__scroll-name{
        font-size:var(--small-font-size);
        color:var(--title-color);
        font-weight: var(--font-medium);
        margin-right: var(--mb-0-25);
    }
    .home__scroll-arrow{
        font-size: 1.25rem;
    }
    @media screen and (min-width : 568px){
    .home__content{
        grid-template-columns : max-content 1fr 1fr;
    }
    .home__data{
        grid-column: initial;
    }
    .home__img {
        order:1;
        justify-self : center;
    }
}

</style>

<main class="main">
    <section class="home section" id="home">
        <div class="home__container container grid">
            <div class="home__content grid">
                <div class="home__social">
                    <!-- svelte-ignore security-anchor-rel-noreferrer -->
                    <a href="https://linkedin.com" target="_blank" class="home__social-icon">
                        <i class="uil uil-linkedin-alt"></i>
                    </a>
                    <!-- svelte-ignore security-anchor-rel-noreferrer -->
                    <a href="https://twitter.com" target="_blank" class="home__social-icon">
                        <i class="uil uil-twitter-alt"></i>
                    </a>
                    <!-- svelte-ignore security-anchor-rel-noreferrer -->
                    <a href="https://github.com" target="_blank" class="home__social-icon">
                        <i class="uil uil-github-alt"></i>
                    </a>
                </div>
                <div class="home__img">
                    <svg class="home__blob" viewBox="0 0 200 187" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                        <mask id="mask0" mask-type="alpha">
                            <path d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 165.547 
                            130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 129.362C2.45775 
                            97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 -0.149132 97.9666 
                            0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"/>
                        </mask>
                        <g mask="url(#mask0)">
                            <path d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 
                            165.547 130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 
                            129.362C2.45775 97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 
                            -0.149132 97.9666 0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"/>

                            <image class="home__blob-img" x="12" y="18" xlink:href="https://scontent.falg7-2.fna.fbcdn.net/v/t1.15752-9/305648106_651743913117709_561151155825561189_n.png?_nc_cat=106&ccb=1-7&_nc_sid=ae9488&_nc_eui2=AeF0iBHJ1dmQfM4K_xusGClQpC1Ozw1EqeCkLU7PDUSp4K9KPr3Z2xTzUQ25iwLgDrwvmMUhwSfR3zy0Wzu6mivo&_nc_ohc=7aVzpXrgJF4AX-JKx8G&_nc_ht=scontent.falg7-2.fna&oh=03_AdSUcyan1cIvKGNvdH97-Z8ncGNEBH0Q-ApBru5L4nERcg&oe=64416D72"/>
                        </g>
                    </svg>
                </div>

                <div class="home__data">
                    <h1 class="home__title">Hi, We're GDSC</h1>
                    <h3 class="home__subtitle">Google Developers Students Club </h3>
                    <p class="home__description">A community where you can apply new learnings to build great solutions for local problems. Advance your skills, career, and network. Give back to your community by helping others learn.</p>
                    <a href="#contact" class="button button--flex">
                        Register in our event <i class="uil uil-message button__icon"></i>
                    </a>
                </div>
            </div>
            <div class="home__scroll">
                <a href="#about" class="home__scroll-button button--flex">
                    <i class="uil uil-mouse-alt home__scroll-mouse"></i>
                    <span class="home__scroll-name">Scroll down</span>
                    <i class="uil uil-arrow-down home__scroll-arrow"></i>
                </a>
            </div>
        </div>
    </section>
</main>