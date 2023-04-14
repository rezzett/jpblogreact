import {useState} from "react";

export default (cb) => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    const fetching = () => {
        setIsLoading(true);
        cb().then(() => setIsLoading(false)).catch(e => setError(e.message));
    }

    return [fetching, isLoading, error];
}