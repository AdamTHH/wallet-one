export const links: { title: string, href: string }[] = [
    { title: "Hírfolyam", href: "/hirfolyam" },
    { title: "Tesztek", href: "/tesztek" },
]

export const noImage = "https://t4.ftcdn.net/jpg/02/51/95/53/360_F_251955356_FAQH0U1y1TZw3ZcdPGybwUkH90a3VAhb.jpg"

//ha túl hosszú lenne a szöveg
declare global {
    interface String {
        max(maxLength: number): string;
    }
}

String.prototype.max = function (maxLength: number): string {
    if (this.length <= maxLength) {
        return this.toString();
    }
    return this.slice(0, maxLength - 3) + '...';
};
//ha túl hosszú lenne a szöveg

export const defaultProducts = [
    {
        title: "Slim Bifold Wallet",
        description: "Sleek leather wallet with RFID protection, perfect for minimalists. Features multiple card slots, a bill compartment, and a slim profile that easily fits in your pocket. Crafted from genuine leather for durability and style.",
        image: "https://www.cool-mania.hu/data/product/2a/707a1a43c72da01a58e80517efe26d.jpg",
        date: "2024-03-15"
    },
    {
        title: "Travel Passport Holder",
        description: "Spacious wallet designed to hold passports, boarding passes, and multiple currencies. Features RFID-blocking technology, multiple card slots, and a zippered compartment for coins. Made from durable, water-resistant material for worry-free travel.",
        image: "https://cdn.packhacker.com/2023/01/7a2c1be1-wallet-2.jpg",
        date: "2024-03-15"
    },
    {
        title: "Smart Tracking Wallet",
        description: "High-tech wallet with built-in Bluetooth tracker to never lose your essentials. Features a slim design, multiple card slots, and a companion app for real-time location tracking. The rechargeable battery lasts up to 3 months, ensuring your wallet is always findable. Compatible with both iOS and Android devices.",
        image: "https://www.storus.com/cdn/shop/products/SmartWalletSmoothfrontandbacksides_1024x1024.jpg?v=1616526171",
        date: "2024-04-10"
    },
    {
        title: "Eco-Friendly Cork Wallet",
        description: "Sustainable and vegan wallet made from cork, lightweight and water-resistant. Features a unique texture and natural variations in color. Eco-conscious choice that doesn't compromise on style or functionality. Durable and easy to clean, making it perfect for everyday use or outdoor adventures.",
        image: "https://ecothes.com/wp-content/uploads/2021/09/Best-Sustainable-and-Eco-Friendly-Wallets.jpg",
        date: "2024-03-22"
    },
];

export const defaultNews = [
    {
        title: "New Product Launch: Slim Bifold Wallet",
        description: "Introducing our latest addition to our collection - the Slim Bifold Wallet. This sleek and modern design features a slim profile that easily fits in your pocket. With multiple card slots, a bill compartment, and RFID protection, this wallet is perfect for everyday use. Crafted from genuine leather, this wallet is durable and stylish, making it the perfect addition to your accessory collection.",
        date: "2024-03-15"
    },
    {
        title: "Travel-Ready Passport Holder",
        description: "Are you planning a trip? Our Travel Passport Holder is the perfect accessory for your next adventure. This spacious wallet is designed to hold passports, boarding passes, and multiple currencies. With RFID-blocking technology, multiple card slots, and a zippered compartment for coins, this wallet is the perfect companion for your travels. Made from durable, water-resistant material, this wallet is built to withstand the rigors of travel.",
        date: "2024-03-15"
    },
    {
        title: "Smart Tracking Wallet",
        description: "Stay connected and organized with our Smart Tracking Wallet. This high-tech wallet features a built-in Bluetooth tracker that allows you to never lose your essentials. With a slim design, multiple card slots, and a companion app for real-time location tracking, this wallet is the perfect companion for your busy lifestyle. The rechargeable battery lasts up to 3 months, ensuring your wallet is always findable. Compatible with both iOS and Android devices, this wallet is the ultimate in convenience and style.",
        date: "2024-04-10"
    }
]