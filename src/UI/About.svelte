<style>
    .about__img{
        width:300px;
        border-radius: .5rem;
        margin-left: 1.5rem;
    }
    .about__description{
        text-align: center;
        margin-bottom: var(--mb-2-5);
        margin-top: 1.5rem;
    }
    .about__info{
        display: flex;
        justify-content: space-evenly;
        margin-bottom: var(--mb-2-5);
    }
    .about__info-title{
        font-size: var(--h2-font-size);
        font-weight: var(--font-semi-bold);
        color:var(--title-color);
    }
    .about__info-name{
        font-size:var(--smaller-font-size);
    }
    .about__info-title,
    .about__info-name{
        display: block;
        text-align: center;
    }
    .about__buttons{
      display:flex;
      justify-content: center;
    }
    @media screen and (min-width : 568px){
        .about__container{
            grid-template-columns: repeat(2,1fr);
        }
    }
    @media screen and (max-width : 567px){
        .about__img{
            justify-self: center;
            align-self: center;
            margin-left: 0;
        }
    }
</style>


<section class="about section" id="about">
    <h2 class="section__title">About This Event</h2>
    <span class="section__subtitle">QR Hunt Introduction</span>

    <div class="about__container container grid">
        <img src="https://scontent.falg7-1.fna.fbcdn.net/v/t1.15752-9/312752398_1614962935584928_4195992057672981650_n.png?stp=dst-png_p1080x2048&_nc_cat=111&ccb=1-7&_nc_sid=ae9488&_nc_eui2=AeEd5w5O1y8xCA5ArINPpUpsRWcRzFNKkPtFZxHMU0qQ--V_2VTg-lKJboGPLuL8ELCeu_EZgUoB_CdsLyU_Pw-7&_nc_ohc=uLsRd8kkaNQAX_n8FaH&_nc_ht=scontent.falg7-1.fna&oh=03_AdSZ_E1HQSAM-dQyTWFwNA_tz329dko0rr9ipJm_hZWrpQ&oe=64418839" alt="logo" class="about__img">
        <div class="about__data">
            <p class="about__description">
                The idea of QR Hunt is presenting to participants a roadmap for the development of applications based on "QR" technology while relying on our workshops and entertainment for a better understanding of this subject.
            <br> <br> Our event will contain : </p>
            <div class="about__info">
                <div>
                    <span class="about__info-title">03</span>
                    <span class="about__info-name">Workshops</span>
                </div>

                <div>
                    <span class="about__info-title">03</span>
                    <span class="about__info-name">Talks</span>
                </div>
        
                <div>
                    <span class="about__info-title">01</span>
                    <span class="about__info-name">Mini Game</span>
                </div>
                
            </div>
            
            <div class="about__buttons">
                <!-- svelte-ignore security-anchor-rel-noreferrer -->
                <a href="https://docs.google.com/document/d/1OJtmTMwlLOiIZGcAjHDRpL-tlwj9m7dZPw2abRoE4RM/edit" target="_blank" class="button button--flex">
                    Full Description<i class="uil uil-download-alt button__icon"></i>
                </a>
            </div>

        </div>
    </div>
</section>