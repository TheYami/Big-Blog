import React from "react";
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

  return (
    <section className="lg:px-32 px-0">

      <h3 className="mb-8 text-2xl font-[Poppins] font-semibold px-3">
        Latest articles
      </h3>

      <div className="flex items-center flex-col lg:flex-row justify-between bg-[#EFEEEB] py-4 lg:px-6 rounded-md px-3 gap-4">

        <div className="bg-[#EFEEEB] gap-2 font-[Poppins] text-[#75716B] items-center border-none hidden lg:flex">
          {categories.map((button,index)=>{
            return (
                <button key={index}  className="py-3 px-5 hover:bg-[#DAD6D1] hover:text-[#43403B] rounded-md"
                  >{button}
                </button>
            )})}
        </div>


        <div className="lg:w-1/3 w-full flex items-center bg-white p-3 gap-1 border border-[#DAD6D1] rounded-sm">

          <Input
            className="h-4 text-[#75716B] outline-none border-none"
            placeholder="search"
          />

          <Search className="text-[#75716B] size-3" />
        </div>

        <div className="w-full flex flex-col gap-1 text-[#75716B] font-[Poppins] lg:hidden">
            <label htmlFor="Category">Category</label>
            
          <Select className> 
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Highligth" />
            </SelectTrigger>

            <SelectContent >
              {categories.map((categorie,index)=>{
                return(
                    <SelectItem key={index} value={categorie}>{categorie}</SelectItem>
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
