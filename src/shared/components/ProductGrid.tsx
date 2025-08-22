const products = Array.from({ length: 8 }).map((_, i) => ({
  id: i + 1,
  title: "Green Puffer Jacket",
  price: "$120.00",
  rating: 4,
  img: "https://media.istockphoto.com/id/1675700642/photo/puffer-jacket-isolated-winter-jacket.jpg?s=612x612&w=0&k=20&c=5k7M0nCLzcHpAYGY-ikOcF7YFKpybf7QWUOKehluVCs=",
}));

function Stars({ value }: { value: number }) {
  return (
    <div aria-label={`${value} out of 5 stars`}>
      {Array.from({ length: value }).map(() => "★").join("")}
      {Array.from({ length: 5 - value }).map(() => "☆").join("")}
    </div>
  );
}

export default function ProductGrid() {
  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
      {products.map((p) => (
        <div key={p.id} className="flex flex-col items-center rounded-2xl border bg-white p-4 shadow-sm">
          <img src={p.img} alt={p.title} className="h-48 w-40 object-cover" />
          <h3 className="mt-3 line-clamp-2 text-center text-sm font-semibold md:text-base">{p.title}</h3>
          <div className="mt-1 text-gray-600">{p.price}</div>
          <div className="mt-1 text-yellow-500">
            <Stars value={p.rating} />
          </div>
        </div>
      ))}
    </div>
  );
}