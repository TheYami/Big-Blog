import React from "react";
import { Search } from 'lucide-react';

import {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar";

import { Input } from "@/components/ui/input"

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"

function ArticleSection() {
  return (
    <section className="lg:px-32 px-0">
      <h3 className="mb-8 text-2xl font-[Poppins] font-semibold px-3">
        Latest articles
      </h3>

      <div className="flex items-center flex-col lg:flex-row justify-between bg-[#EFEEEB] py-4 lg:px-6 rounded-md px-3 gap-4">
        <Menubar className="bg-[#EFEEEB] gap-2 font-[Poppins] text-[#75716B] items-center border-none hidden lg:flex">
          <MenubarMenu>
            <MenubarTrigger className="py-3 px-5 hover:bg-[#DAD6D1] hover:text-[#43403B]">
              Highlight
            </MenubarTrigger>

            <MenubarTrigger className="py-3 px-5 hover:bg-[#DAD6D1] hover:text-[#43403B]">
              Cat
            </MenubarTrigger>

            <MenubarTrigger className="py-3 px-5 hover:bg-[#DAD6D1] hover:text-[#43403B]">
              Inspiration
            </MenubarTrigger>

            <MenubarTrigger className="py-3 px-5 hover:bg-[#DAD6D1] hover:text-[#43403B]">
              Ganeral
            </MenubarTrigger>
          </MenubarMenu>
        </Menubar>

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
            <SelectContent>
              <SelectItem value="highligth">Highligth</SelectItem>
              <SelectItem value="cat">Cat</SelectItem>
              <SelectItem value="inspiration">Inspiration</SelectItem>
              <SelectItem value="general">Ganeral</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </section>
  );
}

export default ArticleSection;
