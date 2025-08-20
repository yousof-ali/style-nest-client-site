import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import 'react-tabs/style/react-tabs.css';
import ProductCard from '../../Components/ProductCard';
import PageHero from '../../Components/PageHero';
import collectionshero from "../../assets/images/collectionshero.jpg"
import useAxiosPublic from '../../Hooks/useAxiosPublic';
import { IoFilter } from 'react-icons/io5';
import { Trash } from 'lucide-react';
import { MdDone } from 'react-icons/md';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Collentions = () => {
    const [collections, setCollections] = useState([]);
    const [tempcollection, setTempcollection] = useState([]);
    const { id } = useParams();
    const [activeTab, setActiveTab] = useState('all');
    const category = ["All", "Mens", "Womens", 'KIds']
    const axiosPublic = useAxiosPublic();
    const [opneFilterSidebar, setOpenFilterSidebar] = useState(false);

    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = 5;

    const handlePrevious = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handleNext = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePageClick = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const renderPageNumbers = () => {
        const pageNumbers = [];

        for (let i = 1; i <= totalPages; i++) {
            pageNumbers.push(
                <button
                    key={i}
                    onClick={() => handlePageClick(i)}
                    className={`mx-1 px-4 py-2 text-[0.9rem] sm:text-[1rem] rounded-full transform transition-all duration-300 ${currentPage === i
                            ? "bg-green-500 text-white scale-110 shadow-md"
                            : "bg-transparent text-green-500 hover:bg-green-100"
                        }`}
                >
                    {i}
                </button>
            );
        }

        return pageNumbers;
    };

    useEffect(() => {
        axiosPublic.get('/products')
            .then(res => {
                setTempcollection(res.data);
                // if (activeTab == 'all') {
                //     setCollections(res.data);
                // } else if (activeTab == 'mens') {
                //     const filter = res.data.filter(data => data.category === 'men');
                //     setCollections(filter)
                // } else if (activeTab == 'womens') {
                //     const filter = res.data.filter(data => data.category === 'women');
                //     setCollections(filter)
                // } else {
                //     setCollections([])
                // }
                setCollections(res.data)
            })
    }, [activeTab, axiosPublic])

    return (
        <div>
            <PageHero img={collectionshero} subtitle={activeTab.toUpperCase()} title={'COLLECTIONS'}></PageHero>
            <div className="py-8 max-w-7xl px-4  m-auto flex items-center gap-5 ">
                {/* <ul className="flex items-center ">
                    {
                        category.map((single,indx) =>  <li key={indx}
                        className={`${activeTab === single.toLowerCase() ?
                                "border border-b-transparent rounded-tr rounded-tl" : "border-b"
                            } px-6 py-2 border-[#d1d1d1] text-text transition duration-300 cursor-pointer`}
                        onClick={() => setActiveTab(single?.toLocaleLowerCase())}
                    >
                        {single}
                    </li> )
                    }
                
                
                </ul> */}
                <div className='flex  w-full items-center lg:justify-end justify-between'>
                    <div className='lg:hidden'>


                        <button className='flex cursor-pointer gap-2' onClick={() => setOpenFilterSidebar(true)}><IoFilter
                            className='text-2xl' /> FILTER</button>
                    </div>
                    <div>
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend"></legend>
                            <select
                                defaultValue="default"
                                className="select font-semibold focus:outline-0 focus:ring-0 outline-0 border-0 border-b-2 rounded-none"
                            >
                                <option value="default" disabled>
                                    Default
                                </option>
                                <option value="man">Man</option>
                                <option value="women">Women</option>
                                <option value="kids">Kids</option>
                            </select>
                        </fieldset>
                    </div>

                </div>
            </div>
            <div className='grid max-w-7xl px-4 mx-auto gap-4 items-start grid-cols-1 lg:grid-cols-4'>
                <div className='col-span-1 hidden py-6 px-3 lg:block rounded-md border-gray-200 border'>
                    <div className='flex items-center gap-2 pb-4 border-gray-200 border-b'>
                        <IoFilter className='text-2xl' />
                        <h4 className='font-bold text-xl'>FILTER BY</h4>
                    </div>


                    <div className='mt-8'>
                        <h5 className='text-base font-semibold'>PRICE</h5>
                        <div className='flex justify-between gap-3 mt-3 items-center'>
                            <input className='outline-0 w-1/2 border border-gray-200 p-2' type="number" placeholder='0' />
                            <span>-</span>
                            <input className='outline-0 w-1/2 border border-gray-200 p-2' type="number" placeholder='120' />
                        </div>
                    </div>

                    <div className='mt-8'>
                        <h5 className='text-base font-semibold uppercase'>Availability</h5>
                        <div className=' mt-3 space-y-2 flex flex-col text-gray-500'>
                            <div>
                                <input id='instock' type="checkbox" /> <label htmlFor="instock">In stock</label>
                            </div>
                            <div>
                                <input id='instockout' type="checkbox" /> <label htmlFor="instockout">Out of stock</label>
                            </div>
                        </div>
                    </div>

                    <div className='mt-8'>
                        <h5 className='text-base font-semibold uppercase'>Brand</h5>
                        <div className=' mt-3 space-y-2 flex flex-col text-gray-500'>
                            <div>
                                <input id='burberry' type="checkbox" /> <label htmlFor="burberry">Burberry</label>
                            </div>
                            <div>
                                <input id='kenzo' type="checkbox" /> <label htmlFor="kenzo">Kenzo</label>
                            </div>
                            <div>
                                <input id='louis' type="checkbox" /> <label htmlFor="louis">Louis Vuittion</label>
                            </div>
                            <div>
                                <input id='tomford' type="checkbox" /> <label htmlFor="tomford">Tomford</label>
                            </div>
                            <div>
                                <input id='vinova' type="checkbox" /> <label htmlFor="vinova">Vinova</label>
                            </div>

                        </div>
                    </div>

                    <div className='mt-8'>
                        <h5 className='text-base font-semibold uppercase'>Size</h5>
                        <div className=' mt-3 space-y-2 flex flex-col text-gray-500'>
                            <div>
                                <input id='sizeM' type="checkbox" /> <label htmlFor="sizeM">M</label>
                            </div>
                            <div>
                                <input id='sizeL' type="checkbox" /> <label htmlFor="sizeL">L</label>
                            </div>
                            <div>
                                <input id='sixeXL' type="checkbox" /> <label htmlFor="sixeXL">XL</label>
                            </div>
                            <div>
                                <input id='sizeXXL' type="checkbox" /> <label htmlFor="sizeXXL">XXL</label>
                            </div>
                            <div>
                                <input id='sizeX' type="checkbox" /> <label htmlFor="sizeX">X</label>
                            </div>

                        </div>
                    </div>

                    <div className='mt-8 flex items-center gap-3 '>
                        <button className='btn bg-red-400 text-white text-sm'>Clear All</button>
                        <button className='btn bg-green-500 text-sm text-white'>Apply</button>
                    </div>

                </div>
                <div className='grid col-span-3  grid-cols-2 gap-4 sm:grid-cols-3'>

                    {
                        collections.map((single, indx) => <ProductCard key={indx} single={single}></ProductCard>)
                    }

                </div>
            </div>
            {
                opneFilterSidebar && (
                    <>
                        <div className="fixed lg:hidden backdrop-blur-xs inset-0 bg-black/40 z-40" onClick={() => setOpenFilterSidebar(false)}></div>

                        <div
                            className="fixed lg:hidden top-0 left-0 h-screen w-72 bg-white z-50 p-6 transition-transform duration-300"
                        >
                            <div className='flex items-center gap-2 pb-4 border-gray-200 border-b'>
                                <IoFilter className='text-2xl' />
                                <h4 className='font-bold text-xl'>FILTER BY</h4>
                            </div>


                            <div className='mt-8'>
                                <h5 className='text-base font-semibold'>PRICE</h5>
                                <div className='flex justify-between gap-3 mt-3 items-center'>
                                    <input className='outline-0 w-1/2 border border-gray-200 p-2' type="number" placeholder='0' />
                                    <span>-</span>
                                    <input className='outline-0 w-1/2 border border-gray-200 p-2' type="number" placeholder='120' />
                                </div>
                            </div>

                            <div className='mt-8'>
                                <h5 className='text-base font-semibold uppercase'>Availability</h5>
                                <div className=' mt-3 space-y-2 flex flex-col text-gray-500'>
                                    <div>
                                        <input id='instock' type="checkbox" /> <label htmlFor="instock">In stock</label>
                                    </div>
                                    <div>
                                        <input id='instockout' type="checkbox" /> <label htmlFor="instockout">Out of stock</label>
                                    </div>
                                </div>
                            </div>

                            <div className='mt-8'>
                                <h5 className='text-base font-semibold uppercase'>Brand</h5>
                                <div className=' mt-3 space-y-2 flex flex-col text-gray-500'>
                                    <div>
                                        <input id='burberry' type="checkbox" /> <label htmlFor="burberry">Burberry</label>
                                    </div>
                                    <div>
                                        <input id='kenzo' type="checkbox" /> <label htmlFor="kenzo">Kenzo</label>
                                    </div>
                                    <div>
                                        <input id='louis' type="checkbox" /> <label htmlFor="louis">Louis Vuittion</label>
                                    </div>
                                    <div>
                                        <input id='tomford' type="checkbox" /> <label htmlFor="tomford">Tomford</label>
                                    </div>
                                    <div>
                                        <input id='vinova' type="checkbox" /> <label htmlFor="vinova">Vinova</label>
                                    </div>

                                </div>
                            </div>

                            <div className='mt-8'>
                                <h5 className='text-base font-semibold uppercase'>Size</h5>
                                <div className=' mt-3 space-y-2 flex flex-col text-gray-500'>
                                    <div>
                                        <input id='sizeM' type="checkbox" /> <label htmlFor="sizeM">M</label>
                                    </div>
                                    <div>
                                        <input id='sizeL' type="checkbox" /> <label htmlFor="sizeL">L</label>
                                    </div>
                                    <div>
                                        <input id='sixeXL' type="checkbox" /> <label htmlFor="sixeXL">XL</label>
                                    </div>
                                    <div>
                                        <input id='sizeXXL' type="checkbox" /> <label htmlFor="sizeXXL">XXL</label>
                                    </div>
                                    <div>
                                        <input id='sizeX' type="checkbox" /> <label htmlFor="sizeX">X</label>
                                    </div>

                                </div>
                            </div>

                            <div className='mt-8 flex items-center gap-3 '>
                                <button className='btn bg-red-400 text-white text-sm'>Clear All</button>
                                <button className='btn bg-green-500 text-sm text-white'>Apply</button>
                            </div>
                        </div>
                    </>
                )
            }

            <div className="flex items-center flex-wrap  justify-center my-8 space-x-1 sm:space-x-2">
                <button
                    onClick={handlePrevious}
                    disabled={currentPage === 1}
                    className="mx-1 px-3.5 py-3.5 rounded-full bg-white text-green-500 hover:bg-green-100 transition-all duration-300 dark:bg-slate-700 dark:disabled:bg-slate-800 dark:hover:bg-slate-600 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                >
                    <FaChevronLeft />
                </button>
                {renderPageNumbers()}
                <button
                    onClick={handleNext}
                    disabled={currentPage === totalPages}
                    className="mx-1 px-3.5 py-3.5 rounded-full bg-white text-green-500 hover:bg-green-100 transition-all duration-300 dark:bg-slate-700 dark:disabled:bg-slate-800 dark:hover:bg-slate-600 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                >
                    <FaChevronRight />
                </button>
            </div>
        </div>
    );
};

export default Collentions;