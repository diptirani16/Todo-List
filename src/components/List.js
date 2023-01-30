import React from "react";

export default function List(props) {
    return (
        <>
            <section className="container px-6 py-4 mx-auto">
                <div className="grid gap-2 mb-8 md:grid-cols-1 lg:grid-cols-1">
                    {props.todo.length == 0 ? "No todos to display" :
                        props.todo.map((t, idx) => {
                            return (
                                <div className="flex items-center p-2 bg-white border-2 border-gray-200 rounded-lg shadow-sm dark:bg-gray-800">
                                    <div className="basis-1/12 ">
                                        <p className="m-2 text-sm font-medium text-white-900">{idx+1}.</p>
                                    </div>
                                    <div className="basis-5/6">
                                        <p className="m-2 text-sm font-medium text-gray-900 text-left">{t.note}</p>
                                    </div>
                                    <div>
                                        <button className="m-2 text-sm group relative w-full flex justify-center
                py-1 px-2 border border-transparent text-sm font-medium
                rounded-md text-white bg-red-600 hover:bg-red-700
                focus:outline-none focus:ring-2 focus:ring-offset-2
                focus:ring-red-500" onClick={() => props.onDone(t)}>Done</button>
                                    </div>
                                </div>

                            )
                        })
                    }
                </div>
            </section>

        </>
    )
}