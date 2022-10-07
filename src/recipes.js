const recipes = [
    {
        displayName: "Lemon poppy seed muffins",
        url: "https://www.lecremedelacrumb.com/lemon-poppyseed-muffins/"
    },
    {
        displayName: "Chicken pad thai - not authentic",
        url: "https://www.lecremedelacrumb.com/chicken-pad-thai/"
    },
    {
        displayName: "Pot roast",
        url: "https://damndelicious.net/2018/04/12/instant-pot-pot-roast/"
    },
    {
        displayName: "Fried rice",
        url: "https://www.thekitchn.com/pork-fried-rice-recipe-23024692"
    },
    {
        displayName: "Hash browns",
        url: "https://www.allrecipes.com/recipe/220520/classic-hash-browns/"
    },
    {
        displayName: "Pot stickers",
        url: "https://www.allrecipes.com/recipe/261153/perfect-pot-stickers/"
    },
    {
        displayName: "Fettuccine alfredo",
        url: "https://www.allrecipes.com/recipe/23431/to-die-for-fettuccine-alfredo/"
    },
    {
        displayName: "Pesto",
        url: "https://www.recipetineats.com/pesto/"
    },
    {
        displayName: "Chocolate fondue",
        url: "https://www.simplyrecipes.com/recipes/chocolate_fondue/"
    },
    {
        displayName: "Coq au vin fondue",
        url: "https://www.allrecipes.com/recipe/244142/coq-au-vin-broth-fondue/"
    },
    {
        displayName: "Hot chocolate",
        url: "https://www.livewellbakeoften.com/stove-top-hot-chocolate/"
    },
    {
        displayName: "Tonkatsu ramen",
        url: "https://www.seriouseats.com/rich-and-creamy-tonkotsu-ramen-broth-from-scratch-recipe"
    }, {
        displayName: "Yaki udon",
        url: "https://drivemehungry.com/yaki-udon-stir-fried-udon-noodles/"
    },
    {
        displayName: "Pasta sauce",
        url: "https://cookfasteatwell.com/easy-pasta-sauce-recipe/"
    },
    {
        displayName: "Baked oatmeal",
        url: "https://sallysbakingaddiction.com/baked-oatmeal/"
    },
    {
        displayName: "Salsa",
        url: "https://www.cookingclassy.com/fresh-homemade-salsa/"
    },
    {
        displayName: "Tortillas",
        url: "https://thecafesucrefarine.com/best-ever-homemade-flour-tortillas/"
    },
    {
        displayName: "Bloomin onion",
        url: "https://www.pinterest.com/pin/99008891797535369/feedback/?invite_code=afcb73b35cb64cc4aae943ced1b7b525&sender_id=99009029216408492"
    },
    {
        displayName: "White bread",
        url: "https://www.youtube.com/watch?v=SZpB_Z9RqIY&t=3s"
    },
    {
        displayName: "Peanut butter cheesecake",
        url: "https://www.youtube.com/watch?v=mOVUc8A2YIk&t=1s"
    },
    {
        displayName: "Turkey burgers",
        url: "https://www.delish.com/cooking/recipe-ideas/a19664658/best-turkey-burger-recipe/"
    },
    {
        displayName: "Chicken pad thai - more authentic",
        url: "https://www.recipetineats.com/chicken-pad-thai/"
    },
    {
        displayName: "Mac and cheese",
        url: "https://www.joshuaweissman.com/post/1-dollar-mac-and-cheese"
    },
    {
        displayName: "Butter/tikka masala chicken",
        url: "https://www.joshuaweissman.com/post/2-dollar-curry-butter-chicken-but-cheaper"
    },
    {
        displayName: "Sriracha",
        url: "https://www.youtube.com/watch?v=vgK3EpXROks"
    },
    {
        displayName: "Ciabata",
        url: "https://www.allrecipes.com/recipe/256997/chef-johns-no-knead-ciabatta/"
    },
    {
        displayName: "Moka pot",
        url: "https://www.youtube.com/watch?v=rpyBYuu-wJI"
    },
    {
        displayName: "Home brew guide",
        url: "https://www.youtube.com/watch?v=h8jLYH0VmfE"
    },
    {
        displayName: "Pickled red onions",
        url: "https://www.loveandlemons.com/pickled-red-onions/"
    },
    {
        displayName: "Dill pickles",
        url: "https://www.loveandlemons.com/dill-pickles-recipe/"
    },
    {
        displayName: "Twice baked potatoes",
        url: "https://imgur.com/a/QNH8k6A"
    },
    {
        displayName: "Bourbon slushes",
        url: "https://imgur.com/a/nic88LA"
    },
    {
        displayName: "Sweet potatoe fries with chili mayo",
        url: "https://imgur.com/a/FbPXZ6s"
    },
    {
        displayName: "Whipped cream",
        url: "https://pastebin.com/d596vMJh"
    },
    {
        displayName: "White bread in stand mixer",
        url: "https://www.youtube.com/watch?v=lipLAgZkWN0&t=351s"
    },
    {
        displayName: "Applesauce in instant pot",
        url: "https://tastesbetterfromscratch.com/instant-pot-applesauce/#recipe"
    },
    {
        displayName: "Chicken/potatoes/green beans in instant pot",
        url: "https://www.simplylakita.com/instant-pot-chicken-potatoes-green-beans/#recipe"
    },
    {
        displayName: "Soft pretzels",
        url: "https://preppykitchen.com/soft-pretzels-recipe/"
    },
    {
        displayName: "Bagels",
        url: "https://www.joshuaweissman.com/post/new-york-style-bagels"
    },
    {
        displayName: "Veggie dip",
        url: "https://www.everydaymadefresh.com/best-veggie-dip-ever-2/"
    },
    {
        displayName: "Pizza dough",
        url: "https://www.delish.com/cooking/recipe-ideas/a24893663/homemade-pizza-recipe/"
    },
    {
        displayName: "Kt's chocolate chip cookies",
        url: "https://www.seriouseats.com/super-thick-chocolate-chip-cookie-recipe"
    },
    {
        displayName: "Chocolate chip cookies",
        url: "https://preppykitchen.com/chewy-chocolate-chip-cookies/#recipe"
    },
    {
        displayName: "Beer cheese",
        url: "https://www.spendwithpennies.com/beer-cheese-dip/#wprm-recipe-container-169972"
    },
    {
        displayName: "Hot Honey Salmon",
        url: "https://mikeshothoney.com/blogs/recipes/hot-honey-cedar-plank-salmon"
    },
    {
        displayName: "Boiled eggs",
        url: "https://www.seriouseats.com/the-secrets-to-peeling-hard-boiled-eggs"
    },
    {
        displayName: "Jam",
        url: "https://www.allrecipes.com/recipe/38410/strawberry-jam/"
    },
    {
        displayName: "Hamburger buns",
        url: "https://www.allrecipes.com/recipe/233652/homemade-hamburger-buns/"
    },
    {
        displayName: "English muffins",
        url: "https://preppykitchen.com/english-muffins/"
    },
    {
        displayName: "Ice cream sandwiches",
        url: "https://www.allrecipes.com/article/chef-johns-classic-chocolate-ice-cream-sandwich/"
    },
    {
        displayName: "Mango salsa",
        url: "https://cookieandkate.com/fresh-mango-salsa-recipe/"
    },
    {
        displayName: "Chocolate granola",
        url: "https://www.allrecipes.com/recipe/264951/chef-johns-chocolate-granola/"
    },
    {
        displayName: "Ricotta",
        url: "https://www.allrecipes.com/recipe/284000/chef-johns-homemade-ricotta-cheese/"
    },
    {
        displayName: "Creamy garlic shrimp",
        url: "https://littlesunnykitchen.com/garlic-shrimp-pasta/"
    },
    {
        displayName: "Chipotle chicken",
        url: "https://barefeetinthekitchen.com/chipotle-chicken-marinade/#wprm-recipe-container-22001"
    },
    {
        displayName: "Beef stew",
        url: "https://cooking.nytimes.com/recipes/4735-old-fashioned-beef-stew"
    },
    {
        displayName: "Vanilla bundt cake",
        url: "https://preppykitchen.com/vanilla-bundt-cake/"
    },
    {
        displayName: "Cider",
        url: "https://www.gimmesomeoven.com/homemade-apple-cider/"
    }
];

export default recipes;