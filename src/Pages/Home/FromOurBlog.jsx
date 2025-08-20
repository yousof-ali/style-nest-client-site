import React, { useEffect, useState } from 'react';
import { SiNginx } from 'react-icons/si';
import BlogCard from '../../Components/BlogCard';

const FromOurBlog = () => {
    const [blog,setBlog] = useState([]);
    useEffect(() => {
           fetch('/Blog.json')
           .then(res => res.json())
           .then(result => {
            setBlog(result)
           })
    },[])
    return (
        <div className='max-w-7xl px-4 mx-auto py-16'>
            <div>
               <h2 className='section-heading text-center'>FROM OUR BLOG</h2>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mt-6 gap-6 lg:gap-8'>
                {
                    blog.map((single,indx) => <BlogCard data={single} key={indx}></BlogCard>)
                }
            </div>
        </div>
    );
};

export default FromOurBlog;