import React, {useState, useEffect} from 'react';
import CardLoading from "../Components/CardLoading";
import api from "../api/api";

const Ping = () => {
    const [data, setData] = useState([]);
    const [displayedItems, setDisplayedItems] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [ip, setIp] = useState('');
    const [loading, setLoading] = useState(false);

    const fetchData = async (ip) => {
        try {
            const response = await api.post('/ping', {
                ip: ip
            });
            setData(response.data);
            setLoading(false)
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {

        // fetchData();
    }, []);

    useEffect(() => {
        const intervalId = setInterval(() => {
            if (data[currentIndex]) {
                setDisplayedItems((prevItems) => [...prevItems, data[currentIndex]]);
                setCurrentIndex((prevIndex) => prevIndex + 1);

                if (currentIndex === data.length - 1) {
                    clearInterval(intervalId);
                }
            }

        }, 1000);

        return () => clearInterval(intervalId);
    }, [data, currentIndex]);

    const handleChange = (event) => {
        setIp(event.target.value);
    };

    const handleOnSubmit = (e) => {
        e.preventDefault()
        setDisplayedItems([]);
        setLoading(true);
        fetchData(ip);
    };

    return (
        <main id="content-wrapper" className="my-8">
            <div className="container mx-auto px-6 h-screen">
                <section className="flex items-center pt-4">
                    <div className="max-w-screen-xl px-4 mx-auto lg:px-12 w-full">
                        <div className="relative bg-white shadow-md dark:bg-gray-800 sm:rounded-lg">
                            <div
                                className="flex flex-col items-center justify-between p-4 space-y-3 md:flex-row md:space-y-0 md:space-x-4">
                                <div className="w-full md:w-1/2">
                                    <form className="flex items-center">
                                        <label htmlFor="simple-search" className="sr-only">Search</label>
                                        <div className="relative w-full">
                                            <div
                                                className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                                <svg aria-hidden="true"
                                                     className="w-5 h-5 text-gray-500 dark:text-gray-400"
                                                     fill="currentColor" viewBox="0 0 20 20"
                                                     xmlns="http://www.w3.org/2000/svg">
                                                    <path fillRule="evenodd"
                                                          d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                                          clipRule="evenodd"/>
                                                </svg>
                                            </div>
                                            <input type="text" value={ip} onChange={handleChange} id="simple-search"
                                                   className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                                   placeholder="Search" required=""/>
                                        </div>
                                    </form>
                                </div>
                                <div
                                    className="flex flex-col items-stretch justify-end flex-shrink-0 w-full space-y-2 md:w-auto md:flex-row md:space-y-0 md:items-center md:space-x-3">
                                    <button type="submit" onClick={handleOnSubmit}
                                            className="flex items-center justify-center px-4 py-2 text-sm font-medium text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800">
                                        <svg className="h-3.5 w-3.5 mr-2" fill="currentColor" viewBox="0 0 20 20"
                                             xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                            <path clipRule="evenodd" fillRule="evenodd"
                                                  d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"/>
                                        </svg>
                                        Ping
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="flex items-center pt-20">
                    <div className="max-w-screen-xl px-4 mx-auto lg:px-12 w-full">
                        {loading && (
                            <CardLoading />
                        )}
                        <ul>
                            {displayedItems && displayedItems.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    </div>
                </section>
            </div>
        </main>
    );
};
export default Ping;