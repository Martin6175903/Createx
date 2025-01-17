import {Dispatch, SetStateAction, useRef} from "react";

interface ICourse {
    src: string;
    sphere: string;
    name: string;
    price: number;
    author: string;
}

interface IProps {
    setCourses: Dispatch<SetStateAction<ICourse[]>>
    coursesTitleObj: ICourse[]
}

const SearchCourse = ({setCourses, coursesTitleObj}: IProps) => {

    const inputRef = useRef<HTMLInputElement>(null);

    function searchSorted() {
        if (inputRef?.current?.value?.length === 0) setCourses(coursesTitleObj)

        const resCourses: ICourse[] = [];
        for (const course of coursesTitleObj) {
            if (course.name.toLowerCase().includes(inputRef?.current?.value as string)) resCourses.push(course);
        }

        setCourses(resCourses);
    }

    return (
        <div>
            <label className="relative group/edit cursor-pointer">
                <input ref={inputRef} className={"w-[315px] h-11 border-solid border-[1px] border-gray-400 rounded py-3 pl-4 pr-8 placeholder:text-[14px] placeholder:text-gray-600 duration-300 group-hover/edit:border-gray-700 focus-visible:outline-0 text-gray-800"} type="text"
                       placeholder={"Search course..."}/>
                <svg onClick={searchSorted} className="absolute right-4 top-[calc(50%-8px)]" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g>
                        <path d="M7.25016 2.16634C4.44272 2.16634 2.16683 4.44223 2.16683 7.24967C2.16683 10.0571 4.44272 12.333 7.25016 12.333C8.65276 12.333 9.92161 11.7658 10.842 10.8467C11.7642 9.92589 12.3335 8.6549 12.3335 7.24967C12.3335 4.44223 10.0576 2.16634 7.25016 2.16634ZM0.833496 7.24967C0.833496 3.70585 3.70634 0.833008 7.25016 0.833008C10.794 0.833008 13.6668 3.70585 13.6668 7.24967C13.6668 8.78248 13.1287 10.1905 12.2321 11.2939L14.9711 14.0278C15.2317 14.2879 15.2321 14.7101 14.972 14.9706C14.7119 15.2312 14.2898 15.2316 14.0292 14.9715L11.2888 12.2362C10.1863 13.13 8.78039 13.6663 7.25016 13.6663C3.70634 13.6663 0.833496 10.7935 0.833496 7.24967Z" fill="#9A9CA5"/>
                    </g>
                </svg>
            </label>
        </div>
    );
};

export default SearchCourse;