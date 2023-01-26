import React from "react";

export default function List() {
    return (
        <>
            <section class="container px-6 py-4 mx-auto">
                <div class="grid gap-2 mb-8 md:grid-cols-1 lg:grid-cols-1">

                    <div class="flex items-center p-2 bg-white border-2 border-gray-200 rounded-lg shadow-sm dark:bg-gray-800">
                        <div class="basis-1/12 ">
                            <p class="m-2 text-sm font-medium text-white-900">1.</p>
                        </div>
                        <div className="basis-5/6">
                            <p class="m-2 text-sm font-medium text-gray-900">Get medicine from market.</p>
                        </div>
                        <div className="m-2">
                            <input type="checkbox" class="form-checkbox rounded text-pink-500" />
                        </div>
                        <div>
                            <p class="m-2 text-sm font-medium text-gray-900">Done</p>
                        </div>
                    </div>

                    <div class="flex items-center p-2 bg-white border-2 border-gray-200 rounded-lg shadow-sm dark:bg-gray-800">
                        <div class="basis-1/12 ">
                            <p class="m-2 text-sm font-medium text-white-900">1.</p>
                        </div>
                        <div className="basis-5/6">
                            <p class="m-2 text-sm font-medium text-gray-900">Get medicine from market.</p>
                        </div>
                        <div className="m-2">
                            <input type="checkbox" class="form-checkbox rounded text-pink-500" />
                        </div>
                        <div>
                            <p class="m-2 text-sm font-medium text-gray-900">Done</p>
                        </div>
                    </div>

                    <div class="flex items-center p-2 bg-white border-2 border-gray-200 rounded-lg shadow-sm dark:bg-gray-800">
                        <div class="basis-1/12 ">
                            <p class="m-2 text-sm font-medium text-white-900">1.</p>
                        </div>
                        <div className="basis-5/6">
                            <p class="m-2 text-sm font-medium text-gray-900">Get medicine from market.</p>
                        </div>
                        <div className="m-2">
                            <input type="checkbox" class="form-checkbox rounded text-pink-500" />
                        </div>
                        <div>
                            <p class="m-2 text-sm font-medium text-gray-900">Done</p>
                        </div>
                    </div>

                    
                </div>
            </section>

        </>
    )
}