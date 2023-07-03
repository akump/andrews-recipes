<script>
  import { Tabs, Tab, TabList, TabPanel } from "svelte-tabs";
  import Recipes from "./Recipes.svelte";

  function search() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
      a = li[i].getElementsByTagName("a")[0];
      txtValue = a.textContent || a.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        li[i].style.display = "";
      } else {
        li[i].style.display = "none";
      }
    }
  }
</script>

<main>
  <h1 class="header">Andrew's Recipes</h1>
  <Tabs>
    <TabList>
      <Tab>Recipes</Tab>
      <Tab>Other things</Tab>
    </TabList>
    <TabPanel>
      <Recipes />
    </TabPanel>
    <TabPanel>
      <div>Coming soon...</div>
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
