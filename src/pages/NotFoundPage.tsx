import { Link } from "react-router-dom";  
import { ROUTE } from "../routes/route";  

export default function NotFoundPage() {  
  return (  
    <div className="min-h-dvh grid place-items-center p-8 text-center">  
      <div>  
        <h1 className="text-3xl font-bold mb-2">Page Not Found</h1>  
        <p className="text-gray-600 mb-6">The page you are looking for doesn't exist.</p>  
        <Link to={ROUTE.HOME} className="inline-block rounded-xl bg-yellow-400 px-5 py-2 font-semibold text-white hover:bg-yellow-500">  
          Go Home  
        </Link>  
      </div>  
    </div>  
  );  
}  