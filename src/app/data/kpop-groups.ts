// Define an interface for a K-pop group
export interface KpopGroup {
    name: string;
    imageSrc: string;
  }
  
  // Define your "database" of K-pop groups
  export const kpopGroups: KpopGroup[] = [
    {
        name: "aespa",
        imageSrc: "https://i.imgur.com/kD0yQUA.jpg"
      },
    {
      name: "BTS",
      imageSrc: "https://i.imgur.com/K7Iqsck.jpg"
    },
    {
      name: "TWICE",
      imageSrc: "https://i.imgur.com/kKNc1TC.jpg"
    },
    {
      name: "StrayKids",
      imageSrc: "https://i.imgur.com/Yk2kijx.jpg"
    },
    {
      name: "New Jeans",
      imageSrc: "https://i.imgur.com/Gv3B20B.jpg"
    },
    {
      name: "Le Sserafim",
      imageSrc: "https://i.imgur.com/HZdfwKp.jpg"
    },
    {
      name: "ATEEZ",
      imageSrc: "https://i.imgur.com/b2cFDzE.jpg"
    },
    // Add more groups as needed
  ];
  