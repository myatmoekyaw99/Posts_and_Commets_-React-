import { useRouteError } from "react-router-dom";

function ErrorPage() {

    const error = useRouteError();

    return ( 
        <div>
            <marquee className="tra text-center mt-20 text-green-600">10101010101010101010101010101010101010</marquee>
            <div className="text-center mt-40 text-white font-medium text-lg">
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occured</p>
            <p className="text-red-500"><i>{error.statusText || error.message}</i></p>
            </div>
        </div>
        
     );
}

export default ErrorPage;