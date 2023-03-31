interface MenuItem {
    title: string;
    cost: number;
    ingredients: string[];
    description?: string
    beverage: boolean;
}

const MenuItems : MenuItem[] = [
  {
    title: "Seafood Paella",
    cost: 14,
    ingredients: [
      "Seafood Medley: Oysters, Shrimp, Clams, & Calamari",
      "Bell Peppers",
      "Garlic",
      "Onions",
      "Tomatoes",
      "Smoked Paprika",
      "Saffron",
    ],
    beverage: false,
  },
  {
    title: "Vegetarian Paella",
    cost: 11,
    ingredients: [
      "Mushrooms",
      "Garlic",
      "Bell Peppers",
      "Onions",
      "Tomatoes",
      "Smoked Paprika",
      "Saffron",
    ],
    beverage: false,
  },
  {
    title: "Iced Watermelon",
    cost: 5,
    ingredients: [
      "Fresh Watermelon",
      "Rosewater",
    ],
    beverage: true,
  },
  {
    title: "Iced Lavender Matcha Latte",
    cost: 6,
    ingredients: [
      "Organic Matcha Powder",
      "Almond Milk",
      "Oat Milk",
      "Housemade Lavender Syrup",
    ],
    beverage: true,
  },
];
const marketMenuPageUpload = () => {
  const content = document.querySelector("#content");
  const contentContainter = document.createElement("div");

  contentContainter.classList.add("container", "menu-grid");
  MenuItems.forEach((item) => {
    const menuItemCard = document.createElement("div");
    menuItemCard.classList.add("menu-item");
    menuItemCard.innerHTML = `<h3>${item.title}</h3>
            <h4>${item.cost}</h4>

            <h5>${item.ingredients}</h5>`;
    contentContainter.append(menuItemCard);
    contentContainter.id = "content";
    content.append(contentContainter);
  });
};

export default marketMenuPageUpload;

// function item(item: any, arg1: number) {
//   throw new Error("Function not implemented.");
// }
