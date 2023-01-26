import React from "react";

export default function Form() {
    return (
        <>
            <div class="container mx-auto px-4">
                <form className="mt-8 space-y-6" action="#" method="POST">
                    <input type="hidden" name="remember" defaultValue="true" />
                    <div class="flex flex-row">
                    <div className="basis-5/6 px-1 rounded-md shadow-sm -space-y-px">
                        <label htmlFor="text" className="sr-only">
                            Add New Note
                        </label>
                        <input
                            id="text"
                            name="text"
                            type="text"
                            autoComplete="text"
                            required
                            className="appearance-none rounded-none relative block
                  w-full px-3 py-2 border border-gray-300
                  placeholder-gray-500 text-gray-900 rounded-t-md
                  focus:outline-none focus:ring-indigo-500
                  focus:border-indigo-500 focus:z-10 sm:text-sm"
                            placeholder="Add New Note"
                        />
                    </div>
                    <div className="basis-1/6 px-1">
                        <button
                            type="submit"
                            className="group relative w-full flex justify-center
                py-2 px-4 border border-transparent text-sm font-medium
                rounded-md text-white bg-indigo-600 hover:bg-indigo-700
                focus:outline-none focus:ring-2 focus:ring-offset-2
                focus:ring-indigo-500"
                        >
                            ADD
                        </button>
                    </div>
                    </div>
                </form>
            </div>
        </>
    )
}
