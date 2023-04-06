// Sample data for the user table
[
  {
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@example.com",
    password: "password",
    isAdmin: true,
    addresses: [
      {
        name: "Home",
        addressLine1: "123 Main St",
        city: "New York",
        state: "NY",
        country: "USA",
        postalCode: "10001",
      },
      {
        name: "Office",
        addressLine1: "456 Business Blvd",
        addressLine2: "Suite 100",
        city: "New York",
        state: "NY",
        country: "USA",
        postalCode: "10001",
      },
    ],
    orders: [
      {
        status: "shipped",
        total: 50.0,
        items: [
          {
            name: "Product A",
            description: "Lorem ipsum dolor sit amet",
            price: 10.0,
            quantity: 2,
          },
          {
            name: "Product B",
            description: "Consectetur adipiscing elit",
            price: 15.0,
            quantity: 1,
          },
        ],
      },
      {
        status: "pending",
        total: 30.0,
        items: [
          {
            name: "Product C",
            description:
              "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
            price: 10.0,
            quantity: 3,
          },
        ],
      },
    ],
  },
  {
    firstName: "Jane",
    lastName: "Doe",
    email: "jane.doe@example.com",
    password: "password",
    isAdmin: false,
    addresses: [
      {
        name: "Home",
        addressLine1: "789 Elm St",
        city: "Los Angeles",
        state: "CA",
        country: "USA",
        postalCode: "90001",
      },
    ],
    orders: [
      {
        status: "shipped",
        total: 20.0,
        items: [
          {
            name: "Product D",
            description: "Ut enim ad minim veniam",
            price: 5.0,
            quantity: 4,
          },
        ],
      },
    ],
  },
];

// Sample data for the Order table
[
  {
    user: {
      firstName: "John",
      lastName: "Doe",
      email: "john.doe@example.com",
      password: "password",
      isAdmin: true,
    },
    items: [
      {
        name: "Product A",
        description: "Lorem ipsum dolor sit amet",
        price: 10.0,
        quantity: 2,
      },
      {
        name: "Product B",
        description: "Consectetur adipiscing elit",
        price: 15.0,
        quantity: 1,
      },
    ],
  },
  {
    user: {
      firstName: "Jane",
      lastName: "Doe",
      email: "jane.doe@example.com",
      password: "password",
      isAdmin: false,
    },
    items: [
      {
        name: "Product C",
        description:
          "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
        price: 10.0,
        quantity: 3,
      },
    ],
  },
];

// Sample data for OrderItem

[
  {
    order: {
      user: {
        firstName: "John",
        lastName: "Doe",
        email: "john.doe@example.com",
        password: "password",
        isAdmin: true,
      },
      items: [
        {
          name: "Product A",
          description: "Lorem ipsum dolor sit amet",
          price: 10.0,
          quantity: 2,
        },
        {
          name: "Product B",
          description: "Consectetur adipiscing elit",
          price: 15.0,
          quantity: 1,
        },
      ],
    },
    product: {
      name: "Product A",
      description: "Lorem ipsum dolor sit amet",
      price: 10.0,
      image: "https://example.com/product-a.jpg",
      brand: {
        name: "Brand A",
        description: "Lorem ipsum dolor sit amet",
        logo: "https://example.com/brand-a.jpg",
      },
      category: {
        name: "Category A",
        description: "Lorem ipsum dolor sit amet",
      },
    },
    quantity: 2,
  },
  {
    order: {
      user: {
        firstName: "John",
        lastName: "Doe",
        email: "john.doe@example.com",
        password: "password",
        isAdmin: true,
      },
      items: [
        {
          name: "Product A",
          description: "Lorem ipsum dolor sit amet",
          price: 10.0,
          quantity: 2,
        },
        {
          name: "Product B",
          description: "Consectetur adipiscing elit",
          price: 15.0,
          quantity: 1,
        },
      ],
    },
    product: {
      name: "Product B",
      description: "Consectetur adipiscing elit",
      price: 15.0,
      image: "https://example.com/product-b.jpg",
      brand: {
        name: "Brand B",
        description: "Consectetur adipiscing elit",
        logo: "https://example.com/brand-b.jpg",
      },
      category: {
        name: "Category A",
        description: "Lorem ipsum dolor sit amet",
      },
    },
    quantity: 1,
  },
  {
    order: {
      user: {
        firstName: "Jane",
        lastName: "Doe",
        email: "jane.doe@example.com",
        password: "password",
        isAdmin: false,
      },
      items: [
        {
          name: "Product C",
          description:
            "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
          price: 10.0,
          quantity: 3,
        },
      ],
    },
    product: {
      name: "Product C",
      description:
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      price: 10.0,
      image: "https://example.com/product-c.jpg",
      brand: {
        name: "Brand A",
        description: "Lorem ipsum dolor sit amet",
        logo: "https://example.com/brand-a.jpg",
      },
      category: {
        name: "Category B",
        description: "Consectetur adipiscing elit",
      },
    },
    quantity: 3,
  },
];

// sample data for brand
[
  {
    name: "Brand A",
    description: "Lorem ipsum dolor sit amet",
    logo: "https://example.com/brand-a.jpg",
  },
  {
    name: "Brand B",
    description: "Consectetur adipiscing elit",
    logo: "https://example.com/brand-b.jpg",
  },
  {
    name: "Brand C",
    description:
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    logo: "https://example.com/brand-c.jpg",
  },
];

// sample data for product
[
  {
    brand: {
      name: "Brand A",
      description: "Lorem ipsum dolor sit amet",
      logo: "https://example.com/brand-a.jpg",
    },
    product: {
      name: "Product A",
      description: "Lorem ipsum dolor sit amet",
      price: 10.0,
      image: "https://example.com/product-a.jpg",
      category: {
        name: "Category A",
        description: "Lorem ipsum dolor sit amet",
      },
    },
  },
  {
    brand: {
      name: "Brand B",
      description: "Consectetur adipiscing elit",
      logo: "https://example.com/brand-b.jpg",
    },
    product: {
      name: "Product B",
      description: "Consectetur adipiscing elit",
      price: 15.0,
      image: "https://example.com/product-b.jpg",
      category: {
        name: "Category A",
        description: "Lorem ipsum dolor sit amet",
      },
    },
  },
  {
    brand: {
      name: "Brand A",
      description: "Lorem ipsum dolor sit amet",
      logo: "https://example.com/brand-a.jpg",
    },
    product: {
      name: "Product C",
      description:
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      price: 10.0,
      image: "https://example.com/product-c.jpg",
      category: {
        name: "Category B",
        description: "Consectetur adipiscing elit",
      },
    },
  },
  {
    brand: {
      name: "Brand C",
      description:
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      logo: "https://example.com/brand-c.jpg",
    },
    product: {
      name: "Product D",
      description: "Ut enim ad minim veniam",
      price: 20.0,
      image: "https://example.com/product-d.jpg",
      category: {
        name: "Category B",
        description: "Consectetur adipiscing elit",
      },
    },
  },
][
  //   sample data for reviews

  ({
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at lacus in magna consequat finibus sit amet quis est. Sed convallis felis ut faucibus sollicitudin. Duis dapibus quis dolor eu efficitur.",
    rating: 3.5,
    user: {
      name: "John Doe",
      email: "johndoe@example.com",
      password: "password",
      address: "123 Main St, Anytown, USA",
      phone: "+1 555-555-5555",
    },
    product: {
      name: "Product A",
      description: "Lorem ipsum dolor sit amet",
      price: 10.0,
      image: "https://example.com/product-a.jpg",
    },
  },
  {
    text: "Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    rating: 4.0,
    user: {
      name: "Jane Smith",
      email: "janesmith@example.com",
      password: "password",
      address: "456 Oak St, Anytown, USA",
      phone: "+1 555-555-5555",
    },
    product: {
      name: "Product B",
      description: "Consectetur adipiscing elit",
      price: 15.0,
      image: "https://example.com/product-b.jpg",
    },
  },
  {
    text: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    rating: 5.0,
    user: {
      name: "Bob Johnson",
      email: "bobjohnson@example.com",
      password: "password",
      address: "789 Pine St, Anytown, USA",
      phone: "+1 555-555-5555",
    },
    product: {
      name: "Product C",
      description:
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      price: 10.0,
      image: "https://example.com/product-c.jpg",
    },
  },
  {
    text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    rating: 4.5,
    user: {
      name: "Alice Brown",
      email: "alicebrown@example.com",
      password: "password",
      address: "101 Elm St, Anytown, USA",
      phone: "+1 555-555-5555",
    },
    product: {
      name: "Product D",
      description: "Ut enim ad minim veniam",
      price: 20.0,
      image: "https://example.com/product-d.jpg",
    },
  })
];
