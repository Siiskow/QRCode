<style>
    .contact__container{
        row-gap: 3rem;
    }
    .contact__information{
        display: flex;
        margin-bottom: var(--mb-2);
    }
    .contact__icon{
        font-size: 2rem;
        color:var(--first-color);
        margin-right: var(--mb-0-75);
    }
    .contact__title{
        font-size: var(--h3-font-size);
        font-weight: var(--font-medium);
    }
    .contact__subtitle{
        font-size: var(--small-font-size);
        color:var(--text-color-light);

    }
    .contact__content{
        background-color: var(--input-color);
        border-radius: .5rem;
        padding: .75rem 1rem .25rem;
    }
    .contact__label{
        font-size:var(--smaller-font-size);
        color:var(--title-color);
    }
    .contact__input{
        width: 100%;
        background-color: var(--input-color);
        color:var(--text-color);
        font-family: var(--body-font);
        font-size:var(--normal-font-size);
        border:none;
        outline:none;
        padding: .25rem .5rem .5rem 0;
    }
    @media screen and (min-width : 568px){
        .contact__container{
            grid-template-columns: repeat(2,1fr);
        }
    }
</style>

<section class="contact section" id="contact">
    <h2 class="section__title">Contact Us</h2>
    <span class="section__subtitle">Get in Touch</span>

    <div class="contact__container container grid">
        <div>
            <div class="contact__information">
                <i class="uil uil-phone contact__icon"></i>

                <div>
                    <h3 class="contact__title">Call Us</h3>
                    <span class="contact__subtitle">999-777-666</span>
                </div>

            </div>

            <div class="contact__information">
                <i class="uil uil-envelope contact__icon"></i>

                <div>
                    <h3 class="contact__title">Email</h3>
                    <span class="contact__subtitle">qrhunt.gdsc@gmail.com</span>
                </div>

            </div>

            <div class="contact__information">
                <i class="uil uil-map-marker contact__icon"></i>

                <div>
                    <h3 class="contact__title">Location</h3>
                    <span class="contact__subtitle">USTHB - Algiers</span>
                </div>

            </div>
        </div>
        <form action="" class="contact__form grid">
            <div class="contact__inputs grid">
                <div class="contact__content">
                    <label for="" class="contact__label">Name</label>
                    <input type="text" class="contact__input">
                </div>
                <div class="contact__content">
                    <label for="" class="contact__label">Email</label>
                    <input type="email" class="contact__input">
                </div>
            </div>

            <div class="contact__content">
                <label for="" class="contact__label">Object</label>
                <input type="text" class="contact__input">
            </div>
            <div class="contact__content">
                <label for="" class="contact__label">Message</label>
                <textarea name="" id="" cols="0" rows="7" class="contact__input"></textarea>
            </div>
            
            <a href="mailto:qrhunt.gdsc@gmail.com" class="button button--flex">
                Send Message
                <i class="uil uil-message button__icon"></i>
            </a>

        </form>
    </div>
</section>