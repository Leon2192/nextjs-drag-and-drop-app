import { Draggable } from "react-beautiful-dnd";
import Image from "next/dist/client/image";
import {
    PlusIcon,
} from "@heroicons/react/outline";
import React from "react";

export function CardItem({ data, index }) {
    return (
        <Draggable index={index} draggableId={data.id.toString()}>
            {(provided) => (
                <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    className=" rounded-md p-3 m-3 mt-0 last:mb-0"
                >
                    {/*  
                    <label
                        className={`bg-gradient-to-r
              px-2 py-1 rounded text-white text-sm text-center
              ${data.priority === 0
                                ? "from-blue-600 to-blue-400"
                                : data.priority === 1
                                    ? "from-green-600 to-green-400"
                                    : "from-red-600 to-red-400"
                            }
              `}
                    >
                        {data.priority === 0
                            ? "Low Priority"
                            : data.priority === 1
                                ? "Medium Priority"
                                : "High Priority"}
                    </label> 
                    */}
                    <h5 className="text-md text-center text-white  my-3 text-lg leading-6">{data.title}</h5>
                    <div className="flex justify-center">


                        <ul className="flex space-x-3">
                            {data.assignees.map((ass, index) => {
                                return (
                                    <li key={index}>
                                        <Image
                                            src={ass.avt}
                                            width="90"
                                            height="90"
                                            objectFit="cover"
                                            className=" rounded-full"
                                        />
                                    </li>
                                );
                            })}
                            <li>
                                <button
                                    className="border border-dashed flex items-center w-9 h-9 border-gray-500 justify-center
                    rounded-full"
                                >
                                    <PlusIcon className="w-5 h-5 text-gray-500" />
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>

            )}
        </Draggable>
    );
}

export default CardItem;