<script>
    let choosedModal="empty";
</script>
<style>
    .workshops__container{
        gap:1.5rem;
        grid-template-columns: repeat(2,1fr);
    }
    .workshops__content{
        position: relative;
        background-color: var(--container-color);
        padding: 3.5rem .5rem 1.25rem 1.5rem;
        border-radius: .25rem;
        box-shadow: 0 2px 4px rgba(0,0,0,.15);
        transition: .3s;

    }
    .workshops__content:hover{
        box-shadow: 0 4px 8px rbga(0,0,0,.15);
    }
    .workshops__icon{
        display: block;
        font-size: 1.5rem;
        color:var(--first-color);
        margin-bottom: var(--mb-1);
    }
    .workshops__title{
        font-size: var(--h3-font-size);
        margin-bottom: var(--mb-1);
        font-weight: var(--font-medium);
    }
    .workshops__button{
        cursor: pointer;
        font-size:var(--small-font-size);

    }
    .workshops__button:hover .button__icon{
        transform: translateX(.25rem);
    }
    .workshops__modal{
        position: fixed;
        top:0;
        left:0;
        right: 0;
        bottom: 0;
        background-color: rgba(0,0,0,.5);
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0 1rem;
        z-index: var(--z-modal);
        opacity: 0;
        visibility: hidden;
        transition: .3s;
    }
    .workshops__modal-content{
        position: relative;
        background-color: var(--container-color);
        padding: 1.5rem;
        border-radius: .5rem;
    }

    .workshops__modal-workshops{
        row-gap: 1rem;
    }
    .workshops__modal-service{
        display: flex;
    }
    .workshops__modal-title{
        font-size: var(--h3-font-size);
        font-weight: var(--font-medium);
        margin-bottom: var(--mb-1-5);
    }
    .workshops__modal-close{
        position: absolute;
        top:1rem;
        right: 1rem;
        font-size: 1.5rem;
        color:var(--first-color);
        cursor: pointer;
    }
    .workshops__modal-icon{
        color:var(--first-color);
        margin-right: var(--mb-0-25);
    }
    .active-modal{
        opacity: 1;
        visibility: visible;
    }
    .p__workshops{
        font-size: var(--small-font-size);
        padding-bottom: 1rem;
    }
    @media screen and (min-width :768px){
        .workshops__container{
            grid-template-columns: repeat(3 , 218px);
            justify-content: center;
        }
        .workshops__icon{
            font-size: 2rem;
        }
        .workshops__content{
            padding: 2.5rem 0 2rem 2.5rem;
        }
        .workshops__modal-content{
            width: 450px;
        }
    }
</style>


<!-- workshops -->
<section class="workshops section" id="workshops">
    <h2 class="section__title">Workshops</h2>
    <span class="section__subtitle">What you will learn</span>

    <div class="workshops__container container grid">

        <!-- Workshop 1 -->
        <div class="workshops__content">
            <div>
                <i class="uil uil-brackets-curly workshops__icon"></i>
                <h3 class="workshops__title">QR <br> Algorithms</h3>
            </div>
            <p class="p__workshops">Day 1 
                <br> 10:40am - 12:30pm</p>
            <span class="button button--flex button--small button--link workshops__button " on:keypress on:click={()=>choosedModal="QR"}>
                View More <i class="uil uil-arrow-right button__icon"></i>
            </span>

            <div class=" {choosedModal==="QR" ? "active-modal" : "" } workshops__modal">
                <div class="workshops__modal-content">
                    <h4 class="workshops__modal-title">QR<br> Algorithms</h4>
                    <i class="uil uil-times workshops__modal-close" on:keypress on:click={()=>choosedModal="empty"}></i>

                    <ul class="workshops__modal-workshops grid">
                        <li class="workshops__modal-service">
                            <i class="uil uil-check-circle workshops__modal-icon"></i>
                            <p>Discorvering the QR algorithms.</p>
                        </li>
                        <li class="workshops__modal-service">
                            <i class="uil uil-check-circle workshops__modal-icon"></i>
                            <p>Implementing the algorithms in our app.</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        <!-- Workshop 2 -->
        <div class="workshops__content">
            <div>
                <i class="uil uil-web-grid workshops__icon"></i>
                <h3 class="workshops__title">UI/UX <br> Workshop</h3>
                <p class="p__workshops">Day 2 
                    <br> 01:00pm - 03:00pm</p>
            </div>
            <span class="button button--flex button--small button--link workshops__button" on:keypress on:click={()=>choosedModal="UI"}  >
                View More <i class="uil uil-arrow-right button__icon"></i>
            </span>

            <div class="{choosedModal==="UI" ? "active-modal" : "" } workshops__modal ">
                <div class="workshops__modal-content">
                    <h4 class="workshops__modal-title">UI/UX <br> Workshop</h4>
                    <i class="uil uil-times workshops__modal-close " on:keypress on:click={()=>choosedModal="empty"}></i>

                    <ul class="workshops__modal-workshops grid">
                        <li class="workshops__modal-service">
                            <i class="uil uil-check-circle workshops__modal-icon"></i>
                            <p>Learning What is UI and UX.</p>
                        </li>
                        <li class="workshops__modal-service">
                            <i class="uil uil-check-circle workshops__modal-icon"></i>
                            <p>The difference between UI and UX.</p>
                        </li>
                        <li class="workshops__modal-service">
                            <i class="uil uil-check-circle workshops__modal-icon"></i>
                            <p>Learning how to create a good design</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        <!-- Workshop 3 -->
        <div class="workshops__content">
            <div>
                <i class="uil uil-android-alt workshops__icon"></i>
                <h3 class="workshops__title">Application <br> Developement</h3>
            </div>
            <p class="p__workshops">Day 3 
                <br> 09:00am - 12:00pm</p>
            <span class="button button--flex button--small button--link workshops__button" on:keypress on:click={()=>choosedModal="appDev"}>
                View More <i class="uil uil-arrow-right button__icon"></i>
            </span>

            <div class=" {choosedModal==="appDev" ? "active-modal" : "" } workshops__modal">
                <div class="workshops__modal-content">
                    <h4 class="workshops__modal-title">Application <br> Developement</h4>
                    <i class="uil uil-times workshops__modal-close" on:keypress on:click={()=>choosedModal="empty"}></i>

                    <ul class="workshops__modal-workshops grid">
                        <li class="workshops__modal-service">
                            <i class="uil uil-check-circle workshops__modal-icon"></i>
                            <p>Discorvering the technologie we'll use.</p>
                        </li>
                        <li class="workshops__modal-service">
                            <i class="uil uil-check-circle workshops__modal-icon"></i>
                            <p>Building a real application.</p>
                        </li>
                        <li class="workshops__modal-service">
                            <i class="uil uil-check-circle workshops__modal-icon"></i>
                            <p>Using UI/UX knowledge in your app.</p>
                        </li>
                        
                    </ul>
                </div>
            </div>
        </div>

    </div>
</section>