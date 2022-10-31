<script>
    let form;

    function onSubmit() {
        setTimeout(function(){window.location.reload()},10);
    }

</script>

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
    button{
        border: none;
        padding: 0;
        font: inherit;
        cursor: pointer;
        outline: inherit;
        background-color: var(--first-color);
        color: #fff;
        padding: 1rem;
        border-radius: .5rem;
        font-weight: var(--font-medium);
        text-align: left;
    }
    @media screen and (min-width : 568px){
        .contact__container{
            grid-template-columns: repeat(2,1fr);
        }
    }
</style>

<section class="contact section" id="contact">
    <h2 class="section__title">Registration</h2>
    <span class="section__subtitle">Register in QR Hunt</span>

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
        <form on:submit={onSubmit} bind:this={form} target="_blank" action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSdhKXD6aJEXIG7Qtcprwg_hMwsjgCGDLC5BF1T2V7DANTYr5g/formResponse" method="POST" class="contact__form grid">
            <div class="contact__inputs grid">
                <div class="contact__content">
                    <label for="" class="contact__label">First Name</label>
                    <input type="text" class="contact__input" name="entry.1852383849" autocomplete="off" required>
                </div>
                <div class="contact__content">
                    <label for="" class="contact__label">Last Name</label>
                    <input type="text" class="contact__input" name="entry.546540787" autocomplete="off" required>
                </div>
            </div>

            <div class="contact__content">
                <label for="" class="contact__label">Email</label>
                <input type="email" pattern="[^@\s]+@[^@\s]+\.[^@\s]+" class="contact__input" name="emailAddress" autocomplete="off" required >
            </div>
            <div class="contact__content">
                <label for="" class="contact__label">Brief description about you !</label>
                <textarea name="entry.1908698987" id="" cols="0" rows="5" class="contact__input" autocomplete="off" required></textarea>
            </div>
            
            <button type="submit" class="button button--flex">Register <i class="uil uil-message button__icon"></i></button>

        </form>
        
    </div>
</section>