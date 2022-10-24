<script>
    export let classtype="";
</script>

<style>
    .scrollup{
        position: fixed;
        right:1rem;
        bottom: -20%;
        background-color: var(--first-color);
        opacity: .8;
        padding: 0 .3rem;
        border-radius: .4rem;
        z-index: var(--z-tooltip);
        transition: .4s;
    }
    .scrollup:hover{
        background-color: var(--first-color-alt);
    }
    .scrollup__icon{
        font-size: 1.5rem;
        color: #FFF;
    }
    .show-scroll{
        bottom: 5rem;
    }
</style>

<!-- svelte-ignore a11y-invalid-attribute -->
<a href="#" class="{classtype} scrollup">
    <i class="uil uil-arrow-up scrollup__icon"></i>
</a>