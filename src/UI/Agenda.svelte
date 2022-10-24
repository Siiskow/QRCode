<script>
    let chooseJourney="education";
    let educationDiv;
    let workDiv;
    
</script>

<style>
    .qualification__tabs{
        display: flex;
        justify-content: space-evenly;
        margin-bottom: var(--mb-2);
    }
    .qualification__button{
        font-size:var(--h3-font-size);
        font-weight:var(--font--medium);
        cursor:pointer;
    }
    .qualification__button:hover{
        color:var(--first-color);

    }
    .qualification__icon{
        font-size:1.8rem;
        margin-right: var(--mb-0-25);
    }
    .qualification__data{
        display:grid;
        grid-template-columns: 1fr max-content 1fr;
        column-gap: 1.5rem;
    }
    .qualification__title{
        font-size:var(--normal-font-size);
        font-weight: var(--font-medium);
    }
    .qualification__subtitle{
        display: inline-block;
        font-size: var(--small-font-size);
        margin-bottom: var(--mb-1);
    }
    .qualification__calendar{
        font-size: var(--smaller-font-size);
        color:var(--text-color-light);
    }
    .qualification__rounder{
        display: inline-block;
        width: 13px;
        height: 13px;
        background-color: var(--first-color);
        border-radius: 50%;
    }
    .qualification__line{
        display:block;
        width: 1px;
        height: 100%;
        background-color:var(--first-color);
        transform: translate(6px,-7px);
    }
    .qualification__buttonActive{
        color:var(--first-color);
    }
    @media screen and (min-width : 568px){
        .qualification__sections{
            display:grid;
            grid-template-columns: .6fr;
            justify-content: center;
        }
    }
</style>

<section class="qualification section" id="qualification">
    <h2 class="section__title">Agenda</h2>
    <span class="section__subtitle">The event agenda</span>
    
    <div class="qualification__container container">
        <div class="qualification__tabs"> 
            <div class="{chooseJourney==="education" ? "qualification__buttonActive" : ""} qualification__button button--flex" on:keypress on:click={() =>{chooseJourney="education"}} >
                <i class="uil uil-history-alt qualification__icon"></i>
                Day 1
            </div>

            <div class=" {chooseJourney==="work" ? "qualification__buttonActive" : ""} qualification__button button--flex" on:keypress on:click={() =>{chooseJourney="work"}}>
                <i class="uil uil-history-alt qualification__icon"></i>
                Day 2
            </div>

            <div class="{chooseJourney==="education1" ? "qualification__buttonActive" : ""} qualification__button button--flex" on:keypress on:click={() =>{chooseJourney="education1"}} >
                <i class="uil uil-history-alt qualification__icon"></i>
                Day 3
            </div>

        </div>

        <div class="qualification__sections">
            {#if (chooseJourney==="education")}
            <!-- Qualification content 1 -->
            <div class="qualification__content">
                <!-- Qualification 1 -->
                <div class="qualification__data">
                    <div>
                        <h3 class="qualification__title">Opening Ceremony</h3>
                        <span class="qualification__subtitle">Auditorium ?</span>
                        <div class="qualification__calendar">
                            <i class="uil uil-calendar-alt"></i> 09:00am - 09:30am
                        </div>
                    </div>

                    <div>
                        <span class="qualification__rounder"></span>
                        <span class="qualification__line"></span>
                    </div>
                </div>
                
                <!-- Qualification 2 -->
                <div class="qualification__data">
                    <div></div>

                    <div>
                        <span class="qualification__rounder"></span>
                        <span class="qualification__line"></span>
                    </div>

                    <div>
                        <h3 class="qualification__title">Talk :<br>Figuring Out What is QR</h3>
                        <span class="qualification__subtitle">Auditorium ?</span>
                        <div class="qualification__calendar">
                            <i class="uil uil-calendar-alt"></i> 09:30am - 10:50am
                        </div>
                    </div>

                </div>

                <!-- Qualification 3 -->
                <div class="qualification__data">
                    <div>
                        <h3 class="qualification__title">Workshop :<br> QR Algorithms </h3>
                        <span class="qualification__subtitle">Auditorium</span>
                        <div class="qualification__calendar">
                            <i class="uil uil-calendar-alt"></i> 10:50am - 01:00pm
                        </div>
                    </div>

                    <div>
                        <span class="qualification__rounder"></span>
                        <!-- <span class="qualification__line"></span> -->
                    </div>
                </div>

                <!-- Qualification 4 -->
                <!-- <div class="qualification__data">
                    <div></div>

                    <div>
                        <span class="qualification__rounder"></span>
                        <span class="qualification__line"></span>
                    </div>

                    <div>
                        <h3 class="qualification__title">Master in UI/UX</h3>
                        <span class="qualification__subtitle">Peru - Institute</span>
                        <div class="qualification__calendar">
                            <i class="uil uil-calendar-alt"></i> 2019 - 2021
                        </div>
                    </div>

                </div> -->
            </div>
            {:else}
                {#if (chooseJourney==="work")}
                <!-- Qualification content 2 -->
                <div class="qualification__content">
                    <!-- Qualification 1 -->
                    <div class="qualification__data">
                        <div>
                            <h3 class="qualification__title">Talk :<br>UI/UX | App Dev</h3>
                            <span class="qualification__subtitle">Auditorium ?</span>
                            <div class="qualification__calendar">
                                <i class="uil uil-calendar-alt"></i> 09:00am - 11:00am
                            </div>
                        </div>

                        <div>
                            <span class="qualification__rounder"></span>
                            <span class="qualification__line"></span>
                        </div>
                    </div>
                    
                    <!-- Qualification 2 -->
                    <div class="qualification__data">
                        <div></div>

                        <div>
                            <span class="qualification__rounder"></span>
                            <span class="qualification__line"></span>
                        </div>

                        <div>
                            <h3 class="qualification__title">Lunch Break</h3>
                            <span class="qualification__subtitle">Anywhere ?</span>
                            <div class="qualification__calendar">
                                <i class="uil uil-calendar-alt"></i> 11:00am - 12:00pm
                            </div>
                        </div>

                    </div>

                    <!-- Qualification 3 -->
                    <div class="qualification__data">
                        <div>
                            <h3 class="qualification__title">Workshop:<br>UI/UX</h3>
                            <span class="qualification__subtitle">place?</span>
                            <div class="qualification__calendar">
                                <i class="uil uil-calendar-alt"></i> 12:00pm - 02:00pm
                            </div>
                        </div>

                        <div>
                            <span class="qualification__rounder"></span>
                            <!-- <span class="qualification__line"></span> -->
                        </div>
                    </div>

                </div>
                {:else}
                <!-- Qualification content 3 -->
                <div class="qualification__content">
                    <!-- Qualification 1 -->
                    <div class="qualification__data">
                        <div>
                            <h3 class="qualification__title">Workshop :<br>QR App Development</h3>
                            <span class="qualification__subtitle">Auditorium ?</span>
                            <div class="qualification__calendar">
                                <i class="uil uil-calendar-alt"></i> 09:00am - 12:00pm
                            </div>
                        </div>

                        <div>
                            <span class="qualification__rounder"></span>
                            <span class="qualification__line"></span>
                        </div>
                    </div>
                    
                    <!-- Qualification 2 -->
                    <div class="qualification__data">
                        <div></div>

                        <div>
                            <span class="qualification__rounder"></span>
                            <span class="qualification__line"></span>
                        </div>

                        <div>
                            <h3 class="qualification__title">Lunch Break</h3>
                            <span class="qualification__subtitle">Anywhere ?</span>
                            <div class="qualification__calendar">
                                <i class="uil uil-calendar-alt"></i> 12:00pm - 01:00pm
                            </div>
                        </div>

                    </div>

                    <!-- Qualification 3 -->
                    <div class="qualification__data">
                        <div>
                            <h3 class="qualification__title">Mini Game :<br>Treasure Hunt</h3>
                            <span class="qualification__subtitle">place?</span>
                            <div class="qualification__calendar">
                                <i class="uil uil-calendar-alt"></i> 01:00pm - 03:00pm
                            </div>
                        </div>

                        <div>
                            <span class="qualification__rounder"></span>
                            <span class="qualification__line"></span>
                        </div>
                    </div>

                    <!-- Qualification 4 -->
                    <div class="qualification__data">
                        <div></div>

                        <div>
                            <span class="qualification__rounder"></span>
                            <span class="qualification__line"></span>
                        </div>

                        <div>
                            <h3 class="qualification__title">Announcement :<br>Winners | Awarding Prizes</h3>
                            <span class="qualification__subtitle">Anywhere ?</span>
                            <div class="qualification__calendar">
                                <i class="uil uil-calendar-alt"></i> 03:00pm - 03:15pm
                            </div>
                        </div>

                    </div>

                    <!-- Qualification 5 -->
                    <div class="qualification__data">
                        <div>
                            <h3 class="qualification__title">Closing Ceremony</h3>
                            <span class="qualification__subtitle">place?</span>
                            <div class="qualification__calendar">
                                <i class="uil uil-calendar-alt"></i> 03:15pm - 03:30pm
                            </div>
                        </div>

                        <div>
                            <span class="qualification__rounder"></span>
                            <!-- <span class="qualification__line"></span> -->
                        </div>
                    </div>

                </div>
                {/if}
            {/if}
            
        </div>
    </div>
</section>