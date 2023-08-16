const recipes = [
  {
    displayName: "Lemon poppy seed muffins",
    url: "https://www.lecremedelacrumb.com/lemon-poppyseed-muffins/",
  },
  {
    displayName: "Chicken pad thai - not authentic",
    url: "https://www.lecremedelacrumb.com/chicken-pad-thai/",
  },
  {
    displayName: "Pot roast",
    url: "https://damndelicious.net/2018/04/12/instant-pot-pot-roast/",
  },
  {
    displayName: "Fried rice",
    url: "https://www.thekitchn.com/pork-fried-rice-recipe-23024692",
  },
  {
    displayName: "Hash browns",
    url: "https://www.allrecipes.com/recipe/220520/classic-hash-browns/",
  },
  {
    displayName: "Pot stickers",
    url: "https://www.allrecipes.com/recipe/261153/perfect-pot-stickers/",
  },
  {
    displayName: "Fettuccine alfredo",
    url: "https://www.allrecipes.com/recipe/23431/to-die-for-fettuccine-alfredo/",
  },
  {
    displayName: "Pesto",
    url: "https://www.recipetineats.com/pesto/",
  },
  {
    displayName: "Chocolate fondue",
    url: "https://www.melskitchencafe.com/perfect-chocolate-fondue/",
  },
  {
    displayName: "Coq au vin fondue",
    url: "https://www.allrecipes.com/recipe/244142/coq-au-vin-broth-fondue/",
  },
  {
    displayName: "Hot chocolate",
    url: "https://www.livewellbakeoften.com/stove-top-hot-chocolate/",
  },
  {
    displayName: "Tonkatsu ramen",
    url: "https://www.seriouseats.com/rich-and-creamy-tonkotsu-ramen-broth-from-scratch-recipe",
  },
  {
    displayName: "Yaki udon",
    url: "https://drivemehungry.com/yaki-udon-stir-fried-udon-noodles/",
  },
  {
    displayName: "Pasta sauce",
    url: "https://cookfasteatwell.com/easy-pasta-sauce-recipe/",
  },
  {
    displayName: "Baked oatmeal",
    url: "https://sallysbakingaddiction.com/baked-oatmeal/",
  },
  {
    displayName: "Salsa",
    url: "https://www.cookingclassy.com/fresh-homemade-salsa/",
  },
  {
    displayName: "Tortillas",
    url: "https://thecafesucrefarine.com/best-ever-homemade-flour-tortillas/",
  },
  {
    displayName: "Bloomin onion",
    url: "https://www.pinterest.com/pin/99008891797535369/feedback/?invite_code=afcb73b35cb64cc4aae943ced1b7b525&sender_id=99009029216408492",
  },
  {
    displayName: "White bread",
    url: "https://www.youtube.com/watch?v=SZpB_Z9RqIY&t=3s",
  },
  {
    displayName: "Peanut butter cheesecake",
    url: "https://www.youtube.com/watch?v=mOVUc8A2YIk&t=1s",
  },
  {
    displayName: "Turkey burgers",
    url: "https://www.delish.com/cooking/recipe-ideas/a19664658/best-turkey-burger-recipe/",
  },
  {
    displayName: "Chicken pad thai - more authentic",
    url: "https://www.recipetineats.com/chicken-pad-thai/",
  },
  {
    displayName: "Mac and cheese",
    url: "https://www.joshuaweissman.com/post/1-dollar-mac-and-cheese",
  },
  {
    displayName: "Butter/tikka masala chicken",
    url: "https://www.joshuaweissman.com/post/2-dollar-curry-butter-chicken-but-cheaper",
  },
  {
    displayName: "Sriracha",
    url: "https://www.youtube.com/watch?v=vgK3EpXROks",
  },
  {
    displayName: "Ciabata",
    url: "https://www.allrecipes.com/recipe/256997/chef-johns-no-knead-ciabatta/",
  },
  {
    displayName: "Moka pot",
    url: "https://www.youtube.com/watch?v=rpyBYuu-wJI",
  },
  {
    displayName: "Home brew guide",
    url: "https://www.youtube.com/watch?v=h8jLYH0VmfE",
  },
  {
    displayName: "Pickled red onions",
    url: "https://www.loveandlemons.com/pickled-red-onions/",
  },
  {
    displayName: "Dill pickles",
    url: "https://www.loveandlemons.com/dill-pickles-recipe/",
  },
  {
    displayName: "Twice baked potatoes",
    url: "https://imgur.com/a/QNH8k6A",
  },
  {
    displayName: "Bourbon slushes",
    url: "https://imgur.com/a/nic88LA",
  },
  {
    displayName: "Sweet potato fries with chili mayo",
    url: "https://imgur.com/a/FbPXZ6s",
  },
  {
    displayName: "Whipped cream",
    url: "https://pastebin.com/d596vMJh",
  },
  {
    displayName: "White bread in stand mixer",
    url: "https://www.youtube.com/watch?v=lipLAgZkWN0&t=351s",
  },
  {
    displayName: "Applesauce in instant pot",
    url: "https://tastesbetterfromscratch.com/instant-pot-applesauce/#recipe",
  },
  {
    displayName: "Chicken/potatoes/green beans in instant pot",
    url: "https://www.simplylakita.com/instant-pot-chicken-potatoes-green-beans/#recipe",
  },
  {
    displayName: "Soft pretzels",
    url: "https://preppykitchen.com/soft-pretzels-recipe/",
  },
  {
    displayName: "Bagels",
    url: "https://www.joshuaweissman.com/post/new-york-style-bagels",
  },
  {
    displayName: "Veggie dip",
    url: "https://www.everydaymadefresh.com/best-veggie-dip-ever-2/",
  },
  {
    displayName: "Pizza dough",
    url: "https://www.delish.com/cooking/recipe-ideas/a24893663/homemade-pizza-recipe/",
  },
  {
    displayName: "Kt's chocolate chip cookies",
    url: "https://www.seriouseats.com/super-thick-chocolate-chip-cookie-recipe",
  },
  {
    displayName: "Chocolate chip cookies",
    url: "https://preppykitchen.com/chewy-chocolate-chip-cookies/#recipe",
  },
  {
    displayName: "Beer cheese",
    url: "https://www.spendwithpennies.com/beer-cheese-dip/#wprm-recipe-container-169972",
  },
  {
    displayName: "Hot Honey Salmon",
    url: "https://mikeshothoney.com/blogs/recipes/hot-honey-cedar-plank-salmon",
  },
  {
    displayName: "Boiled eggs",
    url: "https://www.seriouseats.com/the-secrets-to-peeling-hard-boiled-eggs",
  },
  {
    displayName: "Jam",
    url: "https://www.allrecipes.com/recipe/38410/strawberry-jam/",
  },
  {
    displayName: "Hamburger buns",
    url: "https://www.allrecipes.com/recipe/233652/homemade-hamburger-buns/",
  },
  {
    displayName: "English muffins",
    url: "https://preppykitchen.com/english-muffins/",
  },
  {
    displayName: "Ice cream sandwiches",
    url: "https://www.allrecipes.com/article/chef-johns-classic-chocolate-ice-cream-sandwich/",
  },
  {
    displayName: "Mango salsa",
    url: "https://cookieandkate.com/fresh-mango-salsa-recipe/",
  },
  {
    displayName: "Chocolate granola",
    url: "https://www.allrecipes.com/recipe/264951/chef-johns-chocolate-granola/",
  },
  {
    displayName: "Ricotta",
    url: "https://www.allrecipes.com/recipe/284000/chef-johns-homemade-ricotta-cheese/",
  },
  {
    displayName: "Creamy garlic shrimp",
    url: "https://littlesunnykitchen.com/garlic-shrimp-pasta/",
  },
  {
    displayName: "Chipotle chicken",
    url: "https://barefeetinthekitchen.com/chipotle-chicken-marinade/#wprm-recipe-container-22001",
  },
  {
    displayName: "Beef stew",
    url: "https://cooking.nytimes.com/recipes/4735-old-fashioned-beef-stew",
  },
  {
    displayName: "Vanilla bundt cake",
    url: "https://preppykitchen.com/vanilla-bundt-cake/",
  },
  {
    displayName: "Cider",
    url: "https://www.gimmesomeoven.com/homemade-apple-cider/",
  },
  {
    displayName: "Beef and brocc slow cooker",
    url: "https://tasty.co/recipe/slow-cooker-beef-and-broccoli",
  },
  {
    displayName: "Panko chicken",
    url: "https://www.allrecipes.com/recipe/239428/crispy-panko-chicken-breasts/",
  },
  {
    displayName: "Whole turkey",
    url: "https://foodwishes.blogspot.com/2011/11/kiss-turkey.html",
  },
  {
    displayName: "Oven crisp fries",
    url: "https://www.youtube.com/watch?v=MvnYBCDaEKU",
  },
  {
    displayName: "Vietnamese spring roll",
    url: "https://www.loveandlemons.com/spring-rolls/",
  },
  {
    displayName: "Meringue cookies",
    url: "https://preppykitchen.com/meringue-cookies/#recipe",
  },
  {
    displayName: "Black forest cake",
    url: "https://preppykitchen.com/1479-2/",
  },
  {
    displayName: "Bruschetta",
    url: "https://www.allrecipes.com/recipe/54165/balsamic-bruschetta/",
  },
  {
    displayName: "Braised chicken thighs",
    url: "https://www.delish.com/cooking/recipe-ideas/a30503020/braised-chicken-thighs-recipe/",
  },
  {
    displayName: "Pita",
    url: "https://www.allrecipes.com/recipe/232719/chef-johns-pita-bread/",
  },
  {
    displayName: "Hummus",
    url: "https://www.youtube.com/shorts/9JUo6-cYbc4",
  },
  {
    displayName: "Mascarpone",
    url: "https://www.allrecipes.com/recipe/8451392/homemade-mascarpone-cheese/",
  },
  {
    displayName: "Malfatti",
    url: "https://www.greatitalianchefs.com/recipes/malfatti-recipe-tomato-sauce",
  },
  {
    displayName: "Cacio e pepe",
    url: "https://www.seriouseats.com/spaghetti-cacio-e-pepe-recipe",
  },
  {
    displayName: "Stromboli",
    url: "https://thestayathomechef.com/stromboli/",
  },
  {
    displayName: "Stromboli/calzone sauce",
    url: "https://i.imgur.com/EVUKWzd.jpg",
  },
  {
    displayName: "Soy glazed chicken",
    url: "https://tiffycooks.com/soy-glazed-chicken-20-minutes-only/",
  },
  {
    displayName: "Cheese fondue",
    url: "https://www.allrecipes.com/recipe/283561/classic-cheese-fondue/",
  },
  {
    displayName: "Chipotle barbacoa",
    url: "https://pastebin.com/qZ2RJ112",
  },
  {
    displayName: "Smash burger technique",
    url: "https://www.seriouseats.com/ultra-smashed-cheeseburger-recipe-food-lab",
  },
  {
    displayName: "Mapo chicken",
    url: "https://www.seriouseats.com/mapo-chicken-recipe",
  },
  {
    displayName: "Szechuan chicken",
    url: "https://www.kitchensanctuary.com/szechuan-chicken/",
  },
  {
    displayName: "Braised short ribs",
    url: "https://tastesbetterfromscratch.com/braised-short-ribs/",
  },
  {
    displayName: "Chicken noodle soup",
    url: "https://preppykitchen.com/chicken-noodle-soup/",
  },
  {
    displayName: "Chorizo and cheese empanadas",
    url: "https://imgur.com/a/MlgO8Vg",
  },
  {
    displayName: "Chimichurri sauce",
    url: "https://imgur.com/a/z3lBJpl",
  },
  {
    displayName: "Charred sweet corn salad",
    url: "https://imgur.com/a/QxFrP6G",
  },
  {
    displayName: "Watermelon agua fresca",
    url: "https://imgur.com/a/3iFz2Kv",
  },
  {
    displayName: "Chipotle's corn salsa",
    url: "https://www.youtube.com/watch?v=zyIMpFJrRhA",
  },
  {
    displayName: "Turkey sausage",
    url: "https://thebigmansworld.com/turkey-sausage/#wprm-recipe-container-63314",
  },
  {
    displayName: "Whipped feta",
    url: "https://www.seriouseats.com/whipped-feta-dip",
  },
  {
    displayName: "French toast",
    url: "https://www.seriouseats.com/perfect-quick-easy-french-toast",
  },
  {
    displayName: "Burrata prosciutto sandwhiches",
    url: "https://tatyanaseverydayfood.com/burrata-prosciutto-sandwiches/",
  },
  {
    displayName: "Roasted beet salad",
    url: "https://www.onceuponachef.com/recipes/roasted-beet-salad-with-goat-cheese-walnuts-honey-dijon-vinaigrette.html",
  },
  {
    displayName: "Hollandaise",
    url: "https://www.seriouseats.com/foolproof-2-minute-hollandaise-recipe",
  },
  {
    displayName: "Pork belly bao",
    url: "https://themeatmen.sg/kong-bak-pau-braised-pork-buns/",
  },
  {
    displayName: "Stir fry sauce",
    url: "https://www.forkinthekitchen.com/stir-fry-sauce-recipe/#recipe",
  },
  {
    displayName: "Chicken tinga",
    url: "https://www.youtube.com/watch?v=DqTsb9N3cqY",
  },
  {
    displayName: "Teriyaki Sauce",
    url: "https://www.youtube.com/watch?v=XKN9y5i7ZP8",
  },
  {
    displayName: "Crackers",
    url: "https://www.youtube.com/watch?v=z5oetzEMNqk",
  },
];

export default recipes;
