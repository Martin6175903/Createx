import {useRouteError} from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();
    
    return (
        <div id={"error-page"}>
            <div className="container">
                <div className="flex flex-col gap-4 justify-center items-center h-dvh">
                    <h1 className="text-8xl font-black">Oops!</h1>
                    <p className="text-4xl">Sorry, an unexpected error has occurred.</p>
                    <p className="text-3xl font-bold text-gray-600">
                        {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
                        {/*@ts-expect-error*/}
                        <i>{error.statusText || error.message}</i>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;