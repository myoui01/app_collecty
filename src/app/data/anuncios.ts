// Define an interface for a post
export interface Post {
    id: string;
    title: string;
    seller: string;
    price: number;
    description: string;
    group: string;
    shippingFee: number;
    imageUrl: string;
    status: string; // New property for the status
}

// Define your "database" of posts
export const posts: Post[] = [
    {

        id: "1",
        title: "CEG With You-Th",
        seller: "Val Cegs",
        price: 20.99,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis in purus enim. Nunc magna dolor, condimentum ac ipsum eu, porttitor lacinia lectus. Etiam pellentesque nulla egestas, tincidunt dui at, mattis nunc. Etiam vitae augue vitae nisl ornare dignissim consectetur ultrices sapien. Suspendisse ornare vulputate erat, vehicula porttitor risus ornare et. Sed molestie magna sed iaculis cursus. Aenean bibendum nulla vitae ante finibus tempus.",
        group: "TWICE",
        shippingFee: 5.99,
        imageUrl: "https://i.imgur.com/g8ZdcYY.png",
        status: "Pronto"
    },
    {
        id: "2",
        title: "CEG With You-Th",
        seller: "Val Cegs",
        price: 55.50,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis in purus enim. Nunc magna dolor, condimentum ac ipsum eu, porttitor lacinia lectus. Etiam pellentesque nulla egestas, tincidunt dui at, mattis nunc. Etiam vitae augue vitae nisl ornare dignissim consectetur ultrices sapien. Suspendisse ornare vulputate erat, vehicula porttitor risus ornare et. Sed molestie magna sed iaculis cursus. Aenean bibendum nulla vitae ante finibus tempus.",
        group: "TWICE",
        shippingFee: 3.99,
        imageUrl: "https://i.imgur.com/KlZLl7U.png",
        status: "Pendente"
    },
    {
        id: "3",
        title: "CEG With You-Th",
        seller: "Val Cegs",
        price: 55.50,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis in purus enim. Nunc magna dolor, condimentum ac ipsum eu, porttitor lacinia lectus. Etiam pellentesque nulla egestas, tincidunt dui at, mattis nunc. Etiam vitae augue vitae nisl ornare dignissim consectetur ultrices sapien. Suspendisse ornare vulputate erat, vehicula porttitor risus ornare et. Sed molestie magna sed iaculis cursus. Aenean bibendum nulla vitae ante finibus tempus.",
        group: "TWICE",
        shippingFee: 3.99,
        imageUrl: "https://i.imgur.com/eKHTW4F.png",
        status: "Pendente"
    },
    {
        id: "4",
        title: "CEG With You-Th",
        seller: "Val Cegs",
        price: 55.50,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis in purus enim. Nunc magna dolor, condimentum ac ipsum eu, porttitor lacinia lectus. Etiam pellentesque nulla egestas, tincidunt dui at, mattis nunc. Etiam vitae augue vitae nisl ornare dignissim consectetur ultrices sapien. Suspendisse ornare vulputate erat, vehicula porttitor risus ornare et. Sed molestie magna sed iaculis cursus. Aenean bibendum nulla vitae ante finibus tempus.",
        group: "TWICE",
        shippingFee: 3.99,
        imageUrl: "https://i.imgur.com/Mgnuqr0.png",
        status: "Pendente"
    },
    {
        id: "5",
        title: "CEG With You-Th",
        seller: "Val Cegs",
        price: 55.50,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis in purus enim. Nunc magna dolor, condimentum ac ipsum eu, porttitor lacinia lectus. Etiam pellentesque nulla egestas, tincidunt dui at, mattis nunc. Etiam vitae augue vitae nisl ornare dignissim consectetur ultrices sapien. Suspendisse ornare vulputate erat, vehicula porttitor risus ornare et. Sed molestie magna sed iaculis cursus. Aenean bibendum nulla vitae ante finibus tempus.",
        group: "TWICE",
        shippingFee: 3.99,
        imageUrl: "https://i.imgur.com/pQj0q0f.png",
        status: "Pendente"
    },
];
