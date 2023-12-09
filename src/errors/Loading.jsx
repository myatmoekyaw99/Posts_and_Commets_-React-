function Loading() {
    return ( 
        <button type="button" className="p-2 rounded-lg" disabled>
            <svg className="animate-spin h-5 w-5 mr-2 inline-block border-2 border-gray-400  border-b-white rounded-full" viewBox="0 0 24 24">
            </svg>
            Loading...
        </button>
     );
}

export default Loading;