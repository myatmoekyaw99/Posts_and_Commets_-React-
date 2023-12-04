import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";
import { useRouteError } from "react-router-dom";

function ErrorPage() {

    const error = useRouteError();
    console.log(error);

    return ( 
        <div id="error-page" className="bg-black min-w-full h-[100%] overflow-hidden">
            <MatrixLtr/>
            <MatrixBtt/>
            <ExclamationTriangleIcon className="fixed top-[30%] left-[48%] w-16 h-10 stroke-1 animate-spin contrast-200 stroke-green-600"/>
            <div className="relative p-2 w-[30%] animate-bounce border border-green-500 rounded-lg mx-auto my-[228px] text-center text-white font-medium text-lg">
                <h1>Oops!</h1>
                <p>Sorry, an unexpected error has occured</p>
                <p className="mt-2 bg-clip-text contrast-200 text-green-500 text-sm font-mono"><i>{error.status} {error.statusText || error.message}</i></p>
            </div>
            <MatrixTtb/>
            <MatrixRtl/>
        </div>
        
     );
}

export default ErrorPage;

export function MatrixRtl(){
    return (
        <div className="sticky bottom-0 w-full flex justify-start contrast-200 overflow-hidden mx-0">
            <h1 className="text-lg animate-matrix_rtl tracking-[3px] whitespace-nowrap text-green-500">10101010101010101010101010101010101010</h1>
            <h1 className="text-lg animate-matrix_rtl tracking-[3px] whitespace-nowrap text-green-500">10101010101010101010101010101010101010</h1>
            <h1 className="text-lg animate-matrix_rtl tracking-[3px] whitespace-nowrap text-green-500">10101010101010101010101010101010101010</h1>
            <h1 className="text-lg animate-matrix_rtl tracking-[3px] whitespace-nowrap text-green-500">10101010101010101010101010101010101010</h1>
        </div>
    );
}

export function MatrixLtr(){
    return (
        <div className="sticky top-0 left-1 z-50 w-full contrast-200 flex justify-start overflow-hidden mx-0">
            <h1 className="text-lg animate-matrix_ltr tracking-[3px] whitespace-nowrap text-green-500">01010101010101010101010101010101010101</h1>
            <h1 className="text-lg animate-matrix_ltr tracking-[3px] whitespace-nowrap text-green-500">01010101010101010101010101010101010101</h1>
            <h1 className="text-lg animate-matrix_ltr tracking-[3px] whitespace-nowrap text-green-500">01010101010101010101010101010101010101</h1>
            <h1 className="text-lg animate-matrix_ltr tracking-[3px] whitespace-nowrap text-green-500">01010101010101010101010101010101010101</h1>
        </div>
    );
}

export function MatrixTtb(){
    return (
        <div className="absolute top-0 right-1 w-[10px] h-[100vh] overflow-hidden contrast-200">
            <p className="w-[10px] break-words text-lg animate-matrix_ttb text-green-500">0101010101010101010101</p>
            <p className="w-[10px] break-words text-lg animate-matrix_ttb text-green-500">0101010101010101010101</p>
            <p className="w-[10px] break-words text-lg animate-matrix_ttb text-green-500">0101010101010101010101</p>
            <p className="w-[10px] break-words text-lg animate-matrix_ttb text-green-500">0101010101010101010101</p>
            {/* <p className="w-[10px] break-words text-lg text-green-500">01010101010101010101010101010101010101</p> */}
        </div>
    );
}


export function MatrixBtt(){
    return (
        <div className="absolute top-0 left-1 w-[10px] h-[100vh] overflow-hidden contrast-200">
            <p className="w-[10px] break-words text-lg animate-matrix_btt text-green-500">0101010101010101010101</p>
            <p className="w-[10px] break-words text-lg animate-matrix_btt text-green-500">0101010101010101010101</p>
            <p className="w-[10px] break-words text-lg animate-matrix_btt text-green-500">0101010101010101010101</p>
            <p className="w-[10px] break-words text-lg animate-matrix_btt text-green-500">0101010101010101010101</p>
            {/* <p className="w-[10px] break-words text-lg text-green-500">01010101010101010101010101010101010101</p> */}
        </div>
    );
}
