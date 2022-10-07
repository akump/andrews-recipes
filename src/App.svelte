<script>
  import recipes from "./recipes";
</script>

<main>
  <h1 class="header">Andrew's Recipes</h1>
  {#each recipes as recipe}
    <li>
      <a target="_blank" href={recipe.url}>
        {recipe.displayName}
      </a>
    </li>
  {/each}
</main>

<style>
  main {
    padding-left: 8px;
    padding-bottom: 50px;
  }

  .header {
    color: whtie;
    font-size: 4em;
    font-weight: 100;
    margin-top: 0;
    margin-bottom: 1rem;
  }

  a {
    color: #CCCCCC;
  }
  li {
    padding: 2px;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>
