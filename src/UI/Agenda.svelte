<script>
    let chooseDay="day1";
</script>

<style>
    .agenda__tabs{
        display: flex;
        justify-content: space-evenly;
        margin-bottom: var(--mb-2);
    }
    .agenda__button{
        font-size:var(--h3-font-size);
        font-weight:var(--font--medium);
        cursor:pointer;
    }
    .agenda__button:hover{
        color:var(--first-color);

    }
    .agenda__icon{
        font-size:1.8rem;
        margin-right: var(--mb-0-25);
    }
    .agenda__data{
        display:grid;
        grid-template-columns: 1fr max-content 1fr;
        column-gap: 1.5rem;
    }
    .agenda__title{
        font-size:var(--normal-font-size);
        font-weight: var(--font-medium);
    }
    .agenda__subtitle{
        display: inline-block;
        font-size: var(--small-font-size);
        margin-bottom: var(--mb-1);
    }
    .agenda__calendar{
        font-size: var(--smaller-font-size);
        color:var(--text-color-light);
    }
    .agenda__rounder{
        display: inline-block;
        width: 13px;
        height: 13px;
        background-color: var(--first-color);
        border-radius: 50%;
    }
    .agenda__line{
        display:block;
        width: 1px;
        height: 100%;
        background-color:var(--first-color);
        transform: translate(6px,-7px);
    }
    .agenda__buttonActive{
        color:var(--first-color);
    }
    @media screen and (min-width : 568px){
        .agenda__sections{
            display:grid;
            grid-template-columns: .6fr;
            justify-content: center;
        }
    }
</style>

<section class="agenda section" id="agenda">
    <h2 class="section__title">Agenda</h2>
    <span class="section__subtitle">The event agenda</span>
    
    <div class="agenda__container container">
        <div class="agenda__tabs"> 
            <div class="{chooseDay==="day1" ? "agenda__buttonActive" : ""} agenda__button button--flex" on:keypress on:click={() =>{chooseDay="day1"}} >
                <i class="uil uil-history-alt agenda__icon"></i>
                Day 1
            </div>

            <div class=" {chooseDay==="day2" ? "agenda__buttonActive" : ""} agenda__button button--flex" on:keypress on:click={() =>{chooseDay="day2"}}>
                <i class="uil uil-history-alt agenda__icon"></i>
                Day 2
            </div>

            <div class="{chooseDay==="day3" ? "agenda__buttonActive" : ""} agenda__button button--flex" on:keypress on:click={() =>{chooseDay="day3"}} >
                <i class="uil uil-history-alt agenda__icon"></i>
                Day 3
            </div>

        </div>

        <div class="agenda__sections">
            {#if (chooseDay==="day1")}
            <!-- DAY 1 OF THE AGENDA -->
            <div class="agenda__content">
                <!-- agenda 1 -->
                <div class="agenda__data">
                    <div>
                        <h3 class="agenda__title">Opening Ceremony</h3>
                        <span class="agenda__subtitle">Auditorium - USTHB</span>
                        <div class="agenda__calendar">
                            <i class="uil uil-calendar-alt"></i> 09:00am - 09:20am
                        </div>
                    </div>

                    <div>
                        <span class="agenda__rounder"></span>
                        <span class="agenda__line"></span>
                    </div>
                </div>
                
                <!-- agenda 2 -->
                <div class="agenda__data">
                    <div></div>

                    <div>
                        <span class="agenda__rounder"></span>
                        <span class="agenda__line"></span>
                    </div>

                    <div>
                        <h3 class="agenda__title">Talk :<br>Figuring Out What is QR</h3>
                        <span class="agenda__subtitle">Auditorium - USTHB</span>
                        <div class="agenda__calendar">
                            <i class="uil uil-calendar-alt"></i> 09:20am - 10:40am
                        </div>
                    </div>

                </div>

                <!-- agenda 3 -->
                <div class="agenda__data">
                    <div>
                        <h3 class="agenda__title">Workshop :<br> QR Algorithms </h3>
                        <span class="agenda__subtitle">Cyber Space - USTHB</span>
                        <div class="agenda__calendar">
                            <i class="uil uil-calendar-alt"></i> 10:40am - 12:30pm
                        </div>
                    </div>

                    <div>
                        <span class="agenda__rounder"></span>
                        <span class="agenda__line"></span>
                    </div>
                </div>

                <!-- agenda 4 -->
                <div class="agenda__data">
                    <div></div>

                    <div>
                        <span class="agenda__rounder"></span>
                        <span class="agenda__line"></span>
                    </div>

                    <div>
                        <h3 class="agenda__title">Lunch Break</h3>
                        <span class="agenda__subtitle">USTHB</span>
                        <div class="agenda__calendar">
                            <i class="uil uil-calendar-alt"></i> 12:30pm - 01:30pm
                        </div>
                    </div>
                </div>

                <!-- agenda 5 -->
                <div class="agenda__data">
                    <div>
                        <h3 class="agenda__title">Talk :<br> Project Management </h3>
                        <span class="agenda__subtitle">Auditorium - USTHB</span>
                        <div class="agenda__calendar">
                            <i class="uil uil-calendar-alt"></i> 01:30pm - 03:00pm
                        </div>
                    </div>

                    <div>
                        <span class="agenda__rounder"></span>
                    </div>
                </div>
            </div>
            {:else}
                {#if (chooseDay==="day2")}
                <!-- DAY 2 OF THE AGENDA -->
                <div class="agenda__content">
                    <!-- agenda 1 -->
                    <div class="agenda__data">
                        <div>
                            <h3 class="agenda__title">Talk :<br>UI/UX | App Dev</h3>
                            <span class="agenda__subtitle">Auditorium - USTHB</span>
                            <div class="agenda__calendar">
                                <i class="uil uil-calendar-alt"></i> 09:00am - 12:00pm
                            </div>
                        </div>

                        <div>
                            <span class="agenda__rounder"></span>
                            <span class="agenda__line"></span>
                        </div>
                    </div>
                    
                    <!-- agenda 2 -->
                    <div class="agenda__data">
                        <div></div>

                        <div>
                            <span class="agenda__rounder"></span>
                            <span class="agenda__line"></span>
                        </div>

                        <div>
                            <h3 class="agenda__title">Lunch Break</h3>
                            <span class="agenda__subtitle">USTHB</span>
                            <div class="agenda__calendar">
                                <i class="uil uil-calendar-alt"></i> 12:00pm - 01:00pm
                            </div>
                        </div>

                    </div>

                    <!-- agenda 3 -->
                    <div class="agenda__data">
                        <div>
                            <h3 class="agenda__title">Workshop:<br>UI/UX</h3>
                            <span class="agenda__subtitle">Cyber Space - USTHB</span>
                            <div class="agenda__calendar">
                                <i class="uil uil-calendar-alt"></i> 01:00pm - 03:00pm
                            </div>
                        </div>

                        <div>
                            <span class="agenda__rounder"></span>
                        </div>
                    </div>

                </div>
                {:else}
                <!-- DAY 3 OF THE AGENDA -->
                <div class="agenda__content">
                    <!-- agenda 1 -->
                    <div class="agenda__data">
                        <div>
                            <h3 class="agenda__title">Workshop :<br>QR App Development</h3>
                            <span class="agenda__subtitle">Auditorium - USTHB</span>
                            <div class="agenda__calendar">
                                <i class="uil uil-calendar-alt"></i> 09:00am - 12:00pm
                            </div>
                        </div>

                        <div>
                            <span class="agenda__rounder"></span>
                            <span class="agenda__line"></span>
                        </div>
                    </div>
                    
                    <!-- agenda 2 -->
                    <div class="agenda__data">
                        <div></div>

                        <div>
                            <span class="agenda__rounder"></span>
                            <span class="agenda__line"></span>
                        </div>

                        <div>
                            <h3 class="agenda__title">Lunch Break</h3>
                            <span class="agenda__subtitle">USTHB</span>
                            <div class="agenda__calendar">
                                <i class="uil uil-calendar-alt"></i> 12:00pm - 01:00pm
                            </div>
                        </div>

                    </div>

                    <!-- agenda 3 -->
                    <div class="agenda__data">
                        <div>
                            <h3 class="agenda__title">Mini Game :<br>Treasure Hunt</h3>
                            <span class="agenda__subtitle">Open Space - USTHB</span>
                            <div class="agenda__calendar">
                                <i class="uil uil-calendar-alt"></i> 01:00pm - 03:00pm
                            </div>
                        </div>

                        <div>
                            <span class="agenda__rounder"></span>
                            <span class="agenda__line"></span>
                        </div>
                    </div>

                    <!-- agenda 4 -->
                    <div class="agenda__data">
                        <div></div>

                        <div>
                            <span class="agenda__rounder"></span>
                            <span class="agenda__line"></span>
                        </div>

                        <div>
                            <h3 class="agenda__title">Announcement :<br>Winners | Awarding Prizes</h3>
                            <span class="agenda__subtitle">Auditorium - USTHB</span>
                            <div class="agenda__calendar">
                                <i class="uil uil-calendar-alt"></i> 03:00pm - 03:15pm
                            </div>
                        </div>

                    </div>

                    <!-- agenda 5 -->
                    <div class="agenda__data">
                        <div>
                            <h3 class="agenda__title">Closing Ceremony</h3>
                            <span class="agenda__subtitle">Auditorium - USTHB</span>
                            <div class="agenda__calendar">
                                <i class="uil uil-calendar-alt"></i> 03:15pm - 03:30pm
                            </div>
                        </div>

                        <div>
                            <span class="agenda__rounder"></span>
                        </div>
                    </div>

                </div>
                {/if}

            {/if}
        </div>
    </div>
</section>