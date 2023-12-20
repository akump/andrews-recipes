<script>
  export let recipes;

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

<input
  type="search"
  id="myInput"
  on:input={search}
  placeholder="Search for recipes..."
  title="Type in a recipe"
/>
<ul id="myUL">
  {#each recipes as recipe}
    <li id="recipeList">
      <a target="_blank" href={recipe.url}>
        {recipe.displayName}
      </a>
    </li>
  {/each}
</ul>
