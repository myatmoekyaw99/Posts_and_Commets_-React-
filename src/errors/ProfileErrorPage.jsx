import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";
import { useRouteError } from "react-router-dom";

function ProfileErrorPage() {

    const error = useRouteError();

    return ( 
        <div id="error-page" className="text-gray-400 text-center mx-auto my-52">
        <ExclamationTriangleIcon className="mx-auto w-16 h-10 stroke-1 animate-bounce contrast-200 stroke-red-600"/>
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p className="text-red-600">
            <i>{error.status} {error.statusText || error.message}</i>
        </p>
        </div>
     );
}

export default ProfileErrorPage;

