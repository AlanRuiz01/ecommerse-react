
const products = [
  { id: 1, name: "Conjunto para Hockey", price: 500000, image: "/images/hockey.jpg" },
  { id: 2, name: "Remeras Basicas", price: 200000, image: "/images/remera basica.jpg" },
  { id: 4, name: "Sueters", price: 100000, image: "/images/sueters.jpg" },
  { id: 5, name: "Summer Style", price: 150000, image: "/images/summer.jpg" },
  { id: 6, name: "Traje", price: 1500000, image: "/images/traje.jpg" },
];

// eslint-disable-next-line react/prop-types
export default function MainContent({addToCart}) {
  return (
    <main className="flex-grow container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-6">Lista de Productos</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product.id} className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <img
              src={product.image}
              alt={product.name}
              width={400}
              height={100}
              className="h-48 w-full object-cover"
            />
            <div className="p-4">
              <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
              <p className="text-muted-foreground mb-4">Gs.{product.price}</p>
              <button 
                className="w-full bg-blue-500 text-white px-4 py-2 rounded"
                onClick={() => addToCart(product)}
              >
                Añadir al carro
              </button>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
