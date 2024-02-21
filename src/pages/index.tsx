import Image from "next/image";
import { Inter } from "next/font/google";
import Headers from "@/components/layouts/Headers";
import Cards from "@/components/common/Cards";
import Avatars from "@/components/common/Avatars";
import { SlOptionsVertical } from "react-icons/sl";
import Tags from "@/components/common/Tags";
import { GoComment } from "react-icons/go";
import { LuSend } from "react-icons/lu";
import Buttons from "@/components/common/Buttons";
import { GetPostTypes, usePosts } from "@/utils/api-services/posts";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { data, isLoading } = usePosts();
  return (
    <div className="flex flex-col gap-2">
      {!isLoading && data?.posts.map((post: GetPostTypes, index) => (
        <Cards key={index} classname="bg-white flex-col">
          <div className="flex items-center justify-between w-full p 2 border-b">
            <div className="flex items-center gap-2">
              <Avatars w={10} h={10} alt="photos" />
              <div className="p-2">
                <p className="font-bold">{post.title}</p>
                <p className="font-sembibold text-xs text-gray-400">
                  Test Name
                </p>
              </div>
            </div>
            <div className="flex-h-8 w 8 items-center justify-center rounded-sm hover:shadow-lg transition ease-in-out duration-300 cursor-pointer">
              <SlOptionsVertical />
            </div>
          </div>
          <div className="flex flex-col px-4 py-2 gap-2">
            <p>{post.body}</p>
            <p className="text-sm text-gray-400 cursor-pointer hover:underline hover:text-blue-500">
              {post.reactions} Reactions
            </p>
          </div>
          <div className="flex w-full px-2 gap-2 mb-2">
            {post.tags.map((tags, index) => (
              <Tags key={index} tagsTitle={tags} />
            ))}
          </div>
          <div className="w-full flex items-center border-t justify-center gap-4 p-2">
            <Buttons classname="flex items-center gap-2">
              <GoComment />
              Comment
            </Buttons>
            <Buttons classname="flex items-center gap-2">
              <LuSend />
              Share
            </Buttons>
          </div>
        </Cards>
      ))}
    </div>
  );
}
