export const restaurantes = [
    {
        id: 'scarpetta',
        name: 'Scarpetta',
        tagLine: 'Pasta Artesanal',
        description: 'Auténtica tradición Italiana con pastas frescas elaboradas en el momento. Cada plato es una obra maestra culinaria del Chef Ejecutivo Adjid Vargas.',
        menu: {
            'Pastas': [
                { name: 'Pasta 1', description: 'Descripción de la Pasta 1', price: 200},
                { name: 'Pasta 2', description: 'Descripción de la Pasta 2', price: 250},
            ],
            "Entradas": [
                { name: 'Entrada 1', description: 'Descripción de la Entrada 1', price: 180 },
            ]
        },
        deliveryLinks: {
            uberEats: "#",
            rappi: "#",
        }
    },
    {
        id: 'asador-dona-tina',
        name: 'Asador Doña Tina',
        tagLine: 'Cocina Mexicana Tradicional Nivel Gourmet',
        description: 'Sabores traicionales de Mexico elevados a la alta cocina. El Chef Ejecutivo Adjid Vargas honra las recetas tradicionales con ingredientes de la mas alta calidad.',
        menu: {
            'Especialidades': [
                { name: 'Plato 1', description: 'Descripción del Plato 1', price: 200},
                { name: 'Plato 2', description: 'Descripción del Plato 2', price: 250},
            ],
            "Postres": [
                { name: 'Postre 1', description: 'Descripción del Postre 1', price: 180 },
                { name: 'Postre 2', description: 'Descripción del Postre 2', price: 200 },
            ]
        },
        deliveryLinks: {
            uberEats: "#",
            rappi: "#",
        }
    },
    {
        id: 'hamburger-place',
        name: 'Hamburger Place',
        tagLine: 'Smash Burgers Calidad Gourmet',
        description: 'La hamburguesa perfecta existe. Carne de la mas alta calidad, técnica impecable y la firma inconfundible del Chef Ejecutivo Adjid Vargas.',
        menu: {
            'Hamburguesas': [
                { name: 'Hamburguesa 1', description: 'Descripción de la Hamburguesa 1', price: 200},
                { name: 'Hamburguesa 2', description: 'Descripción de la Hamburguesa 2', price: 250},
            ],
            "Side": [
                { name: 'Papas a la francesa', description: 'Descripción del side 1', price: 100 },
            ]
        },
        deliveryLinks: {
            uberEats: "#",
            rappi: "#",
        }
    },
]