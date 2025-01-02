// app/index.tsx
import { useVisitorData } from '@fingerprintjs/fingerprintjs-pro-react'
import { useEffect } from 'react';

export default function Home() {
    const { isLoading, error, data, getData } = useVisitorData(
        { extendedResult: true },
        { immediate: true }
    );

    useEffect(() => {
        console.log("Visitor Data Hook - isLoading:", isLoading);
        console.log("Visitor Data Hook - error:", error);
        console.log("Visitor Data Hook - data:", data);
    }, [isLoading, error, data]);


    console.log("isLoading:", isLoading);
    console.log("data:", data);
    console.log("error:", error);






    return (
        <div>
            <button onClick={() => getData({ ignoreCache: true })}>
                Reload data
            </button>
            <p>VisitorId: {isLoading ? 'Loading...' : data?.visitorId}</p>
            <p>Full visitor data:</p>
            <pre>{error ? error.message : JSON.stringify(data, null, 2)}</pre>
        </div>
    )
}
