<script>
    let choosedModal="empty";
</script>
<style>
    .services__container{
        gap:1.5rem;
        grid-template-columns: repeat(2,1fr);
    }
    .services__content{
        position: relative;
        background-color: var(--container-color);
        padding: 3.5rem .5rem 1.25rem 1.5rem;
        border-radius: .25rem;
        box-shadow: 0 2px 4px rgba(0,0,0,.15);
        transition: .3s;

    }
    .services__content:hover{
        box-shadow: 0 4px 8px rbga(0,0,0,.15);
    }
    .services__icon{
        display: block;
        font-size: 1.5rem;
        color:var(--first-color);
        margin-bottom: var(--mb-1);
    }
    .services__title{
        font-size: var(--h3-font-size);
        margin-bottom: var(--mb-1);
        font-weight: var(--font-medium);
    }
    .services__button{
        cursor: pointer;
        font-size:var(--small-font-size);

    }
    .services__button:hover .button__icon{
        transform: translateX(.25rem);
    }
    .services__modal{
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
    .services__modal-content{
        position: relative;
        background-color: var(--container-color);
        padding: 1.5rem;
        border-radius: .5rem;
    }

    .services__modal-services{
        row-gap: 1rem;
    }
    .services__modal-service{
        display: flex;
    }
    .services__modal-title{
        font-size: var(--h3-font-size);
        font-weight: var(--font-medium);
        margin-bottom: var(--mb-1-5);
    }
    .services__modal-close{
        position: absolute;
        top:1rem;
        right: 1rem;
        font-size: 1.5rem;
        color:var(--first-color);
        cursor: pointer;
    }
    .services__modal-icon{
        color:var(--first-color);
        margin-right: var(--mb-0-25);
    }
    .active-modal{
        opacity: 1;
        visibility: visible;
    }
    .p__services{
        font-size: var(--small-font-size);
        padding-bottom: 1rem;
    }
    @media screen and (min-width :768px){
        .services__container{
            grid-template-columns: repeat(3 , 218px);
            justify-content: center;
        }
        .services__icon{
            font-size: 2rem;
        }
        .services__content{
            padding: 2.5rem 0 2rem 2.5rem;
        }
        .services__modal-content{
            width: 450px;
        }
    }
</style>


<!-- services -->
<section class="services section" id="services">
    <h2 class="section__title">Workshops</h2>
    <span class="section__subtitle">What you will learn</span>

    <div class="services__container container grid">
        <!-- service 1 -->
        <div class="services__content">
            <div>
                <i class="uil uil-web-grid services__icon"></i>
                <h3 class="services__title">UI/UX <br> Workshop</h3>
                <p class="p__services">Day 2 
                    <br> 12:00pm - 02:00pm</p>
            </div>
            <span class="button button--flex button--small button--link services__button" on:keypress on:click={()=>choosedModal="UI"}  >
                View More <i class="uil uil-arrow-right button__icon"></i>
            </span>

            <div class="{choosedModal==="UI" ? "active-modal" : "" } services__modal ">
                <div class="services__modal-content">
                    <h4 class="services__modal-title">UI/UX <br> Workshop</h4>
                    <i class="uil uil-times services__modal-close " on:keypress on:click={()=>choosedModal="empty"}></i>

                    <ul class="services__modal-services grid">
                        <li class="services__modal-service">
                            <i class="uil uil-check-circle services__modal-icon"></i>
                            <p>Learning What is UI and UX.</p>
                        </li>
                        <li class="services__modal-service">
                            <i class="uil uil-check-circle services__modal-icon"></i>
                            <p>The difference between UI and UX.</p>
                        </li>
                        <li class="services__modal-service">
                            <i class="uil uil-check-circle services__modal-icon"></i>
                            <p>Learning how to create a good design</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        <!-- service 2 -->
        <div class="services__content">
            <div>
                <i class="uil uil-android-alt services__icon"></i>
                <h3 class="services__title">Application <br> Developement</h3>
            </div>
            <p class="p__services">Day 3 
                <br> 09:00am - 12:00pm</p>
            <span class="button button--flex button--small button--link services__button" on:keypress on:click={()=>choosedModal="appDev"}>
                View More <i class="uil uil-arrow-right button__icon"></i>
            </span>

            <div class=" {choosedModal==="appDev" ? "active-modal" : "" } services__modal">
                <div class="services__modal-content">
                    <h4 class="services__modal-title">Application <br> Developement</h4>
                    <i class="uil uil-times services__modal-close" on:keypress on:click={()=>choosedModal="empty"}></i>

                    <ul class="services__modal-services grid">
                        <li class="services__modal-service">
                            <i class="uil uil-check-circle services__modal-icon"></i>
                            <p>Discorvering the technologie we'll use.</p>
                        </li>
                        <li class="services__modal-service">
                            <i class="uil uil-check-circle services__modal-icon"></i>
                            <p>Building a real application.</p>
                        </li>
                        <li class="services__modal-service">
                            <i class="uil uil-check-circle services__modal-icon"></i>
                            <p>Using UI/UX knowledge in your app.</p>
                        </li>
                        
                    </ul>
                </div>
            </div>
        </div>

        <!-- service 3 -->
        <div class="services__content">
            <div>
                <i class="uil uil-brackets-curly services__icon"></i>
                <h3 class="services__title">QR <br> Algorithms</h3>
            </div>
            <p class="p__services">Day 1 
                <br> 10:50am - 01:00pm</p>
            <span class="button button--flex button--small button--link services__button " on:keypress on:click={()=>choosedModal="QR"}>
                View More <i class="uil uil-arrow-right button__icon"></i>
            </span>

            <div class=" {choosedModal==="QR" ? "active-modal" : "" } services__modal">
                <div class="services__modal-content">
                    <h4 class="services__modal-title">QR<br> Algorithms</h4>
                    <i class="uil uil-times services__modal-close" on:keypress on:click={()=>choosedModal="empty"}></i>

                    <ul class="services__modal-services grid">
                        <li class="services__modal-service">
                            <i class="uil uil-check-circle services__modal-icon"></i>
                            <p>Discorvering the QR algorithms.</p>
                        </li>
                        <li class="services__modal-service">
                            <i class="uil uil-check-circle services__modal-icon"></i>
                            <p>Implementing the algorithms in our app.</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</section>