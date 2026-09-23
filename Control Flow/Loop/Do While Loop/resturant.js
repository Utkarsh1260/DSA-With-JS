let prompt = require("prompt-sync")();


let Menu_Choose;
let item;
do {
  console.log("\n╔══════════════════════════════════════════════╗");
  console.log("║       🍽️  WELCOME TO THE EATY-EATY  🍽️       ║");
  console.log("║              🏪 RESTAURANT 🏪               ║");
  console.log("╚══════════════════════════════════════════════╝\n");

  // selecting Menu
  console.log(
    "╭──────────────────────────────────────────────╮\n" +
      "│          📋 OUR MENU CATEGORIES              │\n" +
      "╰──────────────────────────────────────────────╯\n\n" +
      "  🇮🇳  Press 1 for Indian Food\n" +
      "  🍔  Press 2 for Fast Food\n" +
      "  🥢  Press 3 for Chinese Food\n" +
      "  🍰  Press 4 for Desserts\n\n" +
      "  🚪  Press 5 for Exit\n\n"
  );

  // menu input
  Menu_Choose = Number(prompt("😊 Select the Menu From above List : "));
  switch (Menu_Choose) {
    case 1:
      console.log(
        "\n╔══════════════════════════════════════════════╗\n" +
          "║             🇮🇳 INDIAN FOOD 🇮🇳              ║\n" +
          "╚══════════════════════════════════════════════╝\n\n" +
          "  🧀  Press 1 for Paneer Butter Masala\n" +
          "  🥘  Press 2 for Dal Tadka\n" +
          "  🍛  Press 3 for Biryani\n" +
          "  🫓  Press 4 for Chole Bhature\n\n"
      );


      // selecting item
      item = Number(prompt("😊 Select the Item From above List : "));
      switch (item) {
        case 1:
          console.log("🍽️ Here is your Paneer Butter Masala 😋");
          break;
        case 2:
          console.log("🍽️ Here is your Dal Tadka 😋");
          break;
        case 3:
          console.log("🍽️ Here is your Biryani 😋");
          break;
        case 4:
          console.log("🍽️ Here is your Chole Bhature 😋");
          break;
      }

      console.log("\n──────────────────────────────────────────────\n");

      break;

    case 2:
      console.log(
        "\n╔══════════════════════════════════════════════╗\n" +
          "║               🍔 FAST FOOD 🍔                ║\n" +
          "╚══════════════════════════════════════════════╝\n\n" +
          "  🍕  Press 1 for Pizza\n" +
          "  🍔  Press 2 for Burger\n" +
          "  🍟  Press 3 for French Fries\n" +
          "  🥪  Press 4 for Sandwich\n\n"
      );

      item = Number(prompt("😊 Select the Item From above List : "));
      switch (item) {
        case 1:
          console.log("🍽️ Here is your Pizza 😋");
          break;
        case 2:
          console.log("🍽️ Here is your Burger 😋");
          break;
        case 3:
          console.log("🍽️ Here is your French Fries 😋");
          break;
        case 4:
          console.log("🍽️ Here is your Sandwich 😋");
          break;
      }

      console.log("\n──────────────────────────────────────────────\n");

      break;

    case 3:
      console.log(
        "\n╔══════════════════════════════════════════════╗\n" +
          "║             🥢 CHINESE FOOD 🥢               ║\n" +
          "╚══════════════════════════════════════════════╝\n\n" +
          "  🍚  Press 1 for Fried Rice\n" +
          "  🍜  Press 2 for Hakka Noodles\n" +
          "  🥡  Press 3 for Manchurian\n" +
          "  🥠  Press 4 for Spring Rolls\n\n"
      );

      item = Number(prompt("😊 Select the Item From above List : "));
      switch (item) {
        case 1:
          console.log("🍽️ Here is your Fried Rice 😋");
          break;
        case 2:
          console.log("🍽️ Here is your Hakka Noodles 😋");
          break;
        case 3:
          console.log("🍽️ Here is your Manchurian 😋");
          break;
        case 4:
          console.log("🍽️ Here is your Spring Rolls 😋");
          break;
      }

      console.log("\n──────────────────────────────────────────────\n");

      break;

    case 4:
      console.log(
        "\n╔══════════════════════════════════════════════╗\n" +
          "║               🍰 DESSERTS 🍰                ║\n" +
          "╚══════════════════════════════════════════════╝\n\n" +
          "  🍦  Press 1 for Ice Cream\n" +
          "  🥣  Press 2 for Gulab Jamun\n" +
          "  🍫  Press 3 for Brownie\n" +
          "  🎂  Press 4 for Cake\n\n"
      );

      item = Number(prompt("😊 Select the Item From above List : "));
      switch (item) {
        case 1:
          console.log("🍽️ Here is your Ice Cream 😋");
          break;
        case 2:
          console.log("🍽️ Here is your Gulab Jamun 😋");
          break;
        case 3:
          console.log("🍽️ Here is your Brownie 😋");
          break;
        case 4:
          console.log("🍽️ Here is your Cake 😋");
          break;
      }

      console.log("\n──────────────────────────────────────────────\n");

      break;

    case 5:
      console.log("\n╔══════════════════════════════════════════════╗");
      console.log("║             👋 THANK YOU! 👋                ║");
      console.log("║                                              ║");
      console.log("║      🍽️ Thank you for visiting               ║");
      console.log("║          Eaty-Eaty Restaurant! ❤️            ║");
      console.log("║                                              ║");
      console.log("║        😊 Have a wonderful day! 😊            ║");
      console.log("╚══════════════════════════════════════════════╝\n");
      break;
  }
} while (Menu_Choose !== 5);

