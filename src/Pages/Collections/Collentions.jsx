import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import 'react-tabs/style/react-tabs.css';
import ProductCard from '../../Components/ProductCard';
import PageHero from '../../Components/PageHero';
import collectionshero from "../../assets/images/collectionshero.jpg"
import useAxiosPublic from '../../Hooks/useAxiosPublic';

const Collentions = () => {
    const [collections, setCollections] = useState([]);
    const [tempcollection,setTempcollection] = useState([]);
    const { id } = useParams();
    const [activeTab, setActiveTab] = useState('all');
    const category = ["All","Mens","Womens",'KIds']
    const axiosPublic = useAxiosPublic();

    useEffect(() => {
        axiosPublic.get('/products')
        .then(res => {
            setTempcollection(res.data);
            if(activeTab=='all'){
                setCollections(res.data);
            }else if(activeTab == 'mens'){
                  const filter = res.data.filter(data => data.category === 'men');
                  setCollections(filter)
            }else if(activeTab == 'womens'){
                const filter = res.data.filter(data => data.category === 'women');
                setCollections(filter)
          }else{
            setCollections([])
          }
        })
    },[activeTab,axiosPublic])

    return (
        <div>
            <PageHero img={collectionshero} subtitle={activeTab.toUpperCase()} title={'COLLECTIONS'}></PageHero>
            <div className="py-8  mb-4 flex items-center gap-5 ">
                <ul className="flex items-center ">
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
                
                
                </ul>
            </div>
            <div className='grid px-2 grid-cols-2 gap-4 lg:grid-cols-4'>
                
                    {
                        collections.map((single,indx) => <ProductCard key={indx} single={single}></ProductCard>)
                    }
                
            </div>
        </div>
    );
};

export default Collentions;