<script>
  import { Tabs, Tab, TabList, TabPanel } from "svelte-tabs";
  import Recipes from "./Recipes.svelte";
  import Other from "./Other.svelte";
  import recipes from "./recipes";

  let reversedRecipes = recipes.reverse();
</script>

<main>
  <h1 class="header">Andrew's Recipes</h1>
  <Tabs>
    <TabList>
      <Tab>Recipes</Tab>
      <Tab>Other things</Tab>
    </TabList>
    <TabPanel>
      <Recipes recipes={reversedRecipes} />
    </TabPanel>
    <TabPanel>
      <Other />
    </TabPanel>
  </Tabs>
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

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>
