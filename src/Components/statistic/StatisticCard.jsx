import React from 'react'

const StatisticCard = ({ title, amount, img }) => {
    return (
        <>
            <div className="card-item bg-gray-800 p-8 flex gap-5 rounded-xl">
                <div className="card-item-container flex gap-x-4">
                    <div className="left-side">
                        <img className="w-16 h-16 p-1 bg-white rounded-full " src={img} alt="" />
                    </div>
                    <div className="right-side text-white flex flex-col">
                        <p className="font-medium text-gray-400 text-lg mb-2">{title}</p>
                        <p className="text-xl font-semibold text-gray-200">{amount}</p>
                    </div>
                </div>

            </div>


        </>
    )
}

export default StatisticCard