<script>
    let QrDivOpen=false;
    let appDivOpen=false;
    let projectDivOpen=false;
</script>

<style>
  .skills__container{
    row-gap:0;
  }  
  .skills__header{
    display:flex;
    align-items: flex-start;
    justify-content: center;
    margin-bottom: var(--mb-2-5);
    cursor:pointer;
  }
  .skills__icon,
  .skills__arrow{
    font-size: 2rem;
    color:var(--first-color);
  }
  .skills__icon{
    margin-right:var(--mb-0-75) ;
  }
  .skills__title{
    font-size: var(--h3-font-size);
  }
  .skills__subtitle{
    font-size:var(--small-font-size);
    color:var(--text-color-light);
  }
  .skills__arrow{
    margin-left:4rem;
    transition: .4s;
  }
  .skills__arrow2{
    margin-left: 2.7rem;
  }
  .skills__arrow3{
    margin-left: 1.7rem;
  }
  
  .skills__list{
    row-gap:1.5rem;
    padding-left:2.7rem;
  }
  .skills__close .skills__list{
    height: 0;
    overflow: hidden;
  }
  .skills__open .skills__list{
    height: max-content;
    margin-bottom: var(--mb-2-5);
  }
  .skills__open .skills__arrow{
    transform: rotate(-180deg);
  }
  @media screen and (min-width : 568px){
    .skills__container{
      display: flex;
      justify-content: center;
    } 
  }
  
  
</style>

<section class="skills section" id="skills">
    <h2 class="section__title">Talks</h2>
    <span class="section__subtitle">Content of our talks</span>
    
    <div class="skills__container container grid">
        <div>
            
            <div class="{QrDivOpen===true ? 'skills__open' : 'skills__close'} skills__content">
                <div class="skills__header" on:keypress on:click={()=> QrDivOpen=!QrDivOpen}>
                    <i class="uil uil-align-center skills__icon"></i>
                    <div style="margin-left: 1rem">
                        <h1 class="skills__title">Figuring Out What is QR</h1>
                        <span class="skills__subtitle">Day 1 <span style="margin-left : 1rem">9:30am - 10:50am</span></span>
                    </div>
                    <i class="uil uil-angle-down skills__arrow skills__arrow1"></i>
                </div>
                <div class="skills__list grid">
                  
                  <ul style="text-align: center; list-style-type:circle">
                    <li>In this talk, we will precise what is exactly "QR".</li>
                    <li>A brief history about it.</li>
                    <li>Why you should learn it and prerequisites needed.</li>
                    <li>A Q/A session will be organized at the end.</li>
                  </ul>
                </div>
            </div>

            <div class="{appDivOpen===true ? 'skills__open' : 'skills__close'} skills__content">
                <div class="skills__header" on:keypress on:click={()=> appDivOpen=!appDivOpen} >
                    <i class="uil uil-align-center skills__icon"></i>
                    <div style="margin-left: 1rem">
                        <h1 class="skills__title">Application Development</h1>
                        <span class="skills__subtitle">Day 2 <span style="margin-left : 1rem">9:00am - 11:00am</span></span>
                    </div>

                    <i class="uil uil-angle-down skills__arrow skills__arrow2 "></i>
                </div>
                <div class="skills__list grid">
                  <ul style="text-align: center; list-style-type:circle">
                    <li>In this talk, we will learn about app development.</li>
                    <li>Discorvering what's UI/UX.</li>
                    <li>Presenting the app development technologies.</li>
                    <li>Introduction to Flutter.</li>
                  </ul>
                </div>
            </div>
            <div class="{projectDivOpen===true ? 'skills__open' : 'skills__close'} skills__content">
              <div class="skills__header" on:keypress on:click={()=> projectDivOpen=!projectDivOpen}>
                  <i class="uil uil-align-center skills__icon"></i>
                  <div style="margin-left: 1rem">
                      <h1 class="skills__title">Project | Time Management</h1>
                      <span class="skills__subtitle">Waiting</span>
                  </div>
                  <i class="uil uil-angle-down skills__arrow skills__arrow3"></i>
              </div>
              <div class="skills__list grid">
                <ul style="text-align: center; list-style-type:circle">
                  <li>Introducing project management techniques.</li>
                  <li>Learning how to manage time and deadlines.</li>
                  <li>The concept of teamwork.</li>
                </ul>
              </div>
          </div>
        </div>
    </div>
</section>