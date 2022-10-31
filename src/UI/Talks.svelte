<script>
    let QrDivOpen=false;
    let appDivOpen=false;
    let projectDivOpen=false;
</script>

<style>
  .talks__container{
    row-gap:0;
  }  
  .talks__header{
    display:flex;
    align-items: flex-start;
    justify-content: center;
    margin-bottom: var(--mb-2-5);
    cursor:pointer;
  }
  .talks__icon,
  .talks__arrow{
    font-size: 2rem;
    color:var(--first-color);
  }
  .talks__icon{
    margin-right:var(--mb-0-75) ;
  }
  .talks__title{
    font-size: var(--h3-font-size);
  }
  .talks__subtitle{
    font-size:var(--small-font-size);
    color:var(--text-color-light);
  }
  .talks__arrow{
    margin-left:4rem;
    transition: .4s;
  }
  .talks__arrow2{
    margin-left: 2.7rem;
  }
  .talks__arrow3{
    margin-left: 1.7rem;
  }
  
  .talks__list{
    row-gap:1.5rem;
    padding-left:2.7rem;
  }
  .talks__close .talks__list{
    height: 0;
    overflow: hidden;
  }
  .talks__open .talks__list{
    height: max-content;
    margin-bottom: var(--mb-2-5);
  }
  .talks__open .talks__arrow{
    transform: rotate(-180deg);
  }
  @media screen and (min-width : 568px){
    .talks__container{
      display: flex;
      justify-content: center;
    } 
  }
  
  
</style>

<section class="talks section" id="talks">
    <h2 class="section__title">Talks</h2>
    <span class="section__subtitle">Content of our talks</span>
    
    <div class="talks__container container grid">
        <div>
            <!-- Talk 1 -->
            <div class="{QrDivOpen===true ? 'talks__open' : 'talks__close'} talks__content">
                <div class="talks__header" on:keypress on:click={()=> QrDivOpen=!QrDivOpen}>
                    <i class="uil uil-align-center talks__icon"></i>
                    <div style="margin-left: 1rem">
                        <h1 class="talks__title">Figuring Out What is QR</h1>
                        <span class="talks__subtitle">Day 1 <span style="margin-left : 1rem">09:20am - 10:40am</span></span>
                    </div>
                    <i class="uil uil-angle-down talks__arrow talks__arrow1"></i>
                </div>
                <div class="talks__list grid">
                  
                  <ul style="text-align: center; list-style-type:circle">
                    <li>In this talk, we will precise what is exactly "QR".</li>
                    <li>A brief history about it.</li>
                    <li>Why you should learn it and prerequisites needed.</li>
                    <li>A Q/A session will be organized at the end.</li>
                  </ul>
                </div>
            </div>

            <!-- Talk 2 -->
            <div class="{projectDivOpen===true ? 'talks__open' : 'talks__close'} talks__content">
              <div class="talks__header" on:keypress on:click={()=> projectDivOpen=!projectDivOpen}>
                  <i class="uil uil-align-center talks__icon"></i>
                  <div style="margin-left: 1rem">
                      <h1 class="talks__title">Project | Time Management</h1>
                      <span class="talks__subtitle">Day 1<span style="margin-left : 1rem">01:30pm - 03:00pm</span></span>
                  </div>
                  <i class="uil uil-angle-down talks__arrow talks__arrow3"></i>
              </div>
              <div class="talks__list grid">
                <ul style="text-align: center; list-style-type:circle">
                  <li>Introducing project management techniques.</li>
                  <li>Learning how to manage time and deadlines.</li>
                  <li>The concept of teamwork.</li>
                </ul>
              </div>
          </div>

            <!-- Talk 3 -->
            <div class="{appDivOpen===true ? 'talks__open' : 'talks__close'} talks__content">
                <div class="talks__header" on:keypress on:click={()=> appDivOpen=!appDivOpen} >
                    <i class="uil uil-align-center talks__icon"></i>
                    <div style="margin-left: 1rem">
                        <h1 class="talks__title">Application Development</h1>
                        <span class="talks__subtitle">Day 2 <span style="margin-left : 1rem">09:00am - 12:00pm</span></span>
                    </div>

                    <i class="uil uil-angle-down talks__arrow talks__arrow2 "></i>
                </div>
                <div class="talks__list grid">
                  <ul style="text-align: center; list-style-type:circle">
                    <li>In this talk, we will learn about app development.</li>
                    <li>Discorvering what's UI/UX.</li>
                    <li>Presenting the app development technologies.</li>
                    <li>Introduction to Flutter.</li>
                  </ul>
                </div>
            </div>
            


        </div>
    </div>
</section>