<script>
// @ts-nocheck

    import About from "./UI/About.svelte";
    import Contact from "./UI/Contact.svelte";
    import Footer from "./UI/Footer.svelte";
    import Main from "./UI/Main.svelte";
    import NavBar from "./UI/NavBar.svelte";
    import Agenda from "./UI/Agenda.svelte";
    import ScrollTopButton from "./UI/ScrollTopButton.svelte";
    import Workshops from "./UI/Workshops.svelte";
    import Talks from "./UI/Talks.svelte";
    
    let scrollUpClass;
    // ------------------------------------------//
    // -------------------------------------------//

    function ScrollingUp(){
        if (this.scrollY >= 560) scrollUpClass="show-scroll";
        else scrollUpClass="";
    }
    window.addEventListener("scroll",ScrollingUp);
    
    

</script>

<NavBar />
<Main />
<About />
<Talks />
<Workshops/>
<Agenda/>
<Contact/>
<Footer/>
<ScrollTopButton classtype={scrollUpClass}/>

