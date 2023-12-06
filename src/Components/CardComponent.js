import React, {useState} from 'react';
import {useSpinner} from "../contexts/SpinnerContext";
import CardLoading from "./CardLoading";

const CardComponent = ({title, content, additional}) => {
    const {spinner} = useSpinner();
    const [clipboardText, setClipboardText] = useState('Copy');
    const [mouseEnter, setMouseEnter] = useState(false);

    const handleCopyClick = async () => {
        try {
            await navigator.clipboard.writeText(content);
            setClipboardText('Copied');
        } catch (err) {
            console.error('Unable to copy to clipboard.', err);
        }
        // copied
    };

    const handleMouseEnter = () => {
        setMouseEnter(!mouseEnter)
        setClipboardText('Copy')
    };

    return (
        <>
            <div
                className="group cursor-pointer relative flex flex-col bg-clip-border rounded-xl bg-gradient-to-tr from-gray-900 to-gray-800 text-white shadow-gray-900/20 shadow-md w-full max-w-[40rem] p-8">
                <div
                    className={`relative pb-8 m-0 ${additional ? 'mb-8 border-b' : ''} overflow-hidden text-center text-gray-700 bg-transparent rounded-none shadow-none bg-clip-border border-white/10`}>
                    {spinner && <CardLoading/>}
                    {!spinner && <>
                        <p className="block font-sans text-sm antialiased font-normal leading-normal text-white uppercase">
                            {title}
                        </p>
                        <h1 className="flex justify-center gap-1 mt-6 font-sans antialiased font-normal tracking-normal text-white text-7xl">
                            <span className="mt-2 text-4xl">{content}</span>
                        </h1>
                    </>
                    }
                </div>
                {additional &&
                    <div className="p-0">
                        <ul className="flex flex-col gap-4">
                            <li className="flex items-center gap-4">
                                    <span className="p-1 border rounded-full border-white/20 bg-white/20">
                                        <svg xmlns="http://www.w3.org/2000/svg"
                                             fill="none" viewBox="0 0 24 24"
                                             strokeWidth="2" stroke="currentColor"
                                             className="w-3 h-3">
                                        <path strokeLinecap="round" strokeLinejoin="round"
                                              d="M4.5 12.75l6 6 9-13.5"></path>
                                      </svg>
                                    </span>
                                <p className="block font-sans text-base antialiased font-normal leading-relaxed text-inherit">
                                    5 team members
                                </p>
                            </li>
                        </ul>
                    </div>
                }
                {!spinner &&
                    <div
                        className="hidden group-hover:block absolute top-0 left-0 w-full h-full bg-gradient-to-tr from-blue-900 to-blue-400 rounded-xl"
                        onClick={handleCopyClick} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseEnter}>
                        <div
                            className="w-full h-full relative m-0 overflow-hidden text-center text-gray-700 bg-transparent rounded-none shadow-none bg-clip-border border-white/10">
                            <h6 className="w-full h-full flex justify-center items-center font-sans antialiased font-normal tracking-normal text-white">
                                <svg className="w-3.5 h-3.5 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                     fill="currentColor" viewBox="0 0 18 20">
                                    <path
                                        d="M5 9V4.13a2.96 2.96 0 0 0-1.293.749L.879 7.707A2.96 2.96 0 0 0 .13 9H5Zm11.066-9H9.829a2.98 2.98 0 0 0-2.122.879L7 1.584A.987.987 0 0 0 6.766 2h4.3A3.972 3.972 0 0 1 15 6v10h1.066A1.97 1.97 0 0 0 18 14V2a1.97 1.97 0 0 0-1.934-2Z"></path>
                                    <path
                                        d="M11.066 4H7v5a2 2 0 0 1-2 2H0v7a1.969 1.969 0 0 0 1.933 2h9.133A1.97 1.97 0 0 0 13 18V6a1.97 1.97 0 0 0-1.934-2Z"></path>
                                </svg>
                                <span>{clipboardText}</span>
                            </h6>
                        </div>
                    </div>
                }

            </div>
        </>
    );
}

export default CardComponent;