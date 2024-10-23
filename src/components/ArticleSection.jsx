import { React,useState } from "react";

import { blogPosts } from "@/data/BlogPosts";
import { Search } from 'lucide-react';
import { Input } from "@/components/ui/input"

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import BlogCard from "./BlogCards";

function ArticleSection() {
  const categories = ["Highlight", "Cat", "Inspiration", "General"];

  const [selectCategory, setSelectCategory] = useState('Highlight');

  const handleSelectChange = (value) => {
    setSelectCategory(value)
  }

  return (
    <section className="bg-[#F9F8F6] lg:px-32 px-0">

      <h3 className="mb-8 text-2xl font-[Poppins] font-semibold px-3">
        Latest articles
      </h3>

      <div className="flex items-center flex-col lg:flex-row justify-between bg-[#EFEEEB] py-4 lg:px-6 rounded-md px-3 gap-4">

        <div className="bg-[#EFEEEB] gap-2 font-[Poppins] text-[#75716B] font-medium items-center border-none hidden lg:flex">
          
          {categories.map((button,index)=>{ const isSelected = button === selectCategory;
            return (
                <button key={index}  
                className={`py-3 px-5 rounded-md transition-all duration-300 ease-in-out
                          ${isSelected ? 'bg-[#DAD6D1] text-[#43403B]' 
                            : 'bg-[#EFEEEB] text-[#75716B] hover:bg-[#F5F5F4] hover:scale-105'}`
                          }
                  onClick={() => setSelectCategory(button)}
                  disabled={isSelected}
                    >{button}
                </button>
            )})}
        </div>


        <div className="lg:w-1/3 w-full flex items-center bg-white py-2 gap-1 border border-[#DAD6D1] rounded-sm">

          <Input
            placeholder="search"
          />

          <Search className="text-[#26231E] lg:text-[#75716B] size-5" />
        </div>

        <div className="w-full flex flex-col gap-1 text-[#75716B] text-base font-medium font-[Poppins] lg:hidden">
            <label htmlFor="Category">Category</label>
            
          <Select onValueChange={handleSelectChange}> 
            <SelectTrigger className="w-full">
              <SelectValue placeholder={selectCategory} />
            </SelectTrigger>

            <SelectContent >
              {categories.map((categorie,index)=>{
                return(
                    <SelectItem key={index} value={categorie} className="text-[#75716B] text-base font-medium font-[Poppins]">{categorie}</SelectItem>
                  )
                })}
              </SelectContent>

          </Select>
        </div>
      </div>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-12 px-4 lg:px-0">
        {blogPosts.map(blogPost =>(
            <BlogCard
                key={blogPost.index}
                image={blogPost.image}
                title={blogPost.title}
                category={blogPost.category}
                description={blogPost.description}
                author={blogPost.author}
                date={blogPost.date}
            />
        ))}
    </div>

    <div className="w-full flex items-center justify-center py-12 lg:py-16">
        <button 
            className="bg-transparent hover:bg-transparent text-[#26231E] underline"
                >View more
        </button>
    </div>
    </section>
  );
}

export default ArticleSection;
