import { useState } from "react";
import { BoxQuestions } from "../component/BoxComponent"

export const Faq=()=>{
    const [filter, setFilter] = useState("all");
    return (
        <>
        <ul className="flex items-center gap-3 overflow-x-auto">
            <li
              onClick={() => setFilter("all")}
              className={`py-1 px-3 font-medium bg-slate-200 rounded-2xl text-black cursor-pointer ${
                filter === "all" && "!bg-blue-700 !text-white"
              }`}
            >
              All
            </li>
            <li
              onClick={() => setFilter("service")}
              className={`py-1 px-3 font-medium bg-slate-200 rounded-2xl text-black cursor-pointer ${
                filter === "service" && "!bg-blue-700 !text-white"
              }`}
            >
              Service
            </li>
            <li
              onClick={() => setFilter("general")}
              className={`py-1 px-3 font-medium bg-slate-200 rounded-2xl text-black cursor-pointer ${
                filter === "general" && "!bg-blue-700 !text-white"
              }`}
            >
              General
            </li>
            <li
              onClick={() => setFilter("account")}
              className={`py-1 px-3 font-medium bg-slate-200 rounded-2xl text-black cursor-pointer ${
                filter === "account" && "!bg-blue-700 !text-white"
              }`}
            >
              Account
            </li>
          </ul>
          <div className="flex flex-col gap-3 mt-5">
            <BoxQuestions
              description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet, veniam!"
              questionsTitle="Can I access my courses offline?"
            />
            <BoxQuestions
              description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates voluptatem ad suscipit, est autem ut sapiente tempore incidunt nulla illo, numquam excepturi et fuga!"
              questionsTitle="How do i enroll a course?"
            />
            <BoxQuestions
              description="Lorem ipsum dolor sit amet consectetur adipisicing consectetur adipisicing.!"
              questionsTitle="Is there a way to track my progress?"
            />
            <BoxQuestions
              description="Lorem ipsum dolor sit amet consectetur adipisicing consectetur adipisicing.!"
              questionsTitle="How do i reach out for help or support?"
            />
            <BoxQuestions
              description="Lorem ipsum dolor sit amet consectetur adipisicing Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, delectus. consectetur adipisicing.!"
              questionsTitle="Is my data safe and secure?"
            />
            <BoxQuestions
              description="Lorem ipsum dolor sit amet consectetur adipisicing Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, delectus. consectetur adipisicing.!"
              questionsTitle="Do you offer a certificate?"
            />
            <BoxQuestions
              description="Lorem ipsum dolor sit amet consectetur adipisicing Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, delectus. consectetur adipisicing.!"
              questionsTitle="Are there any subscriptions?"
            />
          </div>
        </>
    )
}