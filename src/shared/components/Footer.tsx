export default function Footer() {
  return (
    <footer className="bg-neutral-900 py-10 text-gray-400">
      <div className="container mx-auto grid gap-8 px-4 md:grid-cols-3">
        <div>
          <h4 className="text-yellow-500 text-xl font-extrabold">LANDAS</h4>
          <p className="mt-2 max-w-sm text-sm">Premium work and casual apparel for teams and individuals.</p>
        </div>

        <div>
          <h5 className="mb-2 font-semibold text-white">Customer Support</h5>
          <p className="text-lg text-white">1661-6244</p>
          <p className="text-sm">Mon to Fri 09:00 to 18:00</p>
          <p className="text-sm">support@landas.com</p>
        </div>

        <div>
          <h5 className="mb-2 font-semibold text-white">Follow</h5>
          <ul className="space-y-1 text-sm">
            <li><a href="#">Instagram</a></li>
            <li><a href="#">YouTube</a></li>
          </ul>
        </div>
      </div>

      <p className="mt-8 text-center text-xs text-gray-500">© {new Date().getFullYear()} LANDAS. All rights reserved.</p>
    </footer>
  );
}