"use client";
import {ProgressLoader} from "nextjs-progressloader"

const LoadingIndicator = () => {
    return (
        <ProgressLoader color="#DDB771" showSpinner={false} height={4} />
    )
}

export default LoadingIndicator;
