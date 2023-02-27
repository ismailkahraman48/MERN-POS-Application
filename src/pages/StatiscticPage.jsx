import Header from "../Components/header/Header"
import StatisticCard from "../Components/statistic/StatisticCard"
import { useState, useEffect } from "react";
import { Area, Pie } from '@ant-design/plots';

const StatiscticPage = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        asyncFetch();
    }, []);

    const asyncFetch = () => {
        fetch('https://gw.alipayobjects.com/os/bmw-prod/360c3eae-0c73-46f0-a982-4746a6095010.json')
            .then((response) => response.json())
            .then((json) => setData(json))
            .catch((error) => {
                console.log('fetch data failed', error);
            });
    };
    const config = {
        data,
        xField: 'timePeriod',
        yField: 'value',
        xAxis: {
            range: [0, 1],
        },
    };

    const PieData = [
        {
            type: '分类一',
            value: 27,
        },
        {
            type: '分类二',
            value: 25,
        },
        {
            type: '分类三',
            value: 18,
        },
        {
            type: '分类四',
            value: 15,
        },
        {
            type: '分类五',
            value: 10,
        },
        {
            type: '其他',
            value: 5,
        },
    ];
    const PieConfig = {
        appendPadding: 10,
        data:PieData,
        angleField: 'value',
        colorField: 'type',
        radius: 0.9,
        label: {
            type: 'inner',
            offset: '-30%',
            content: ({ percent }) => `${(percent * 100).toFixed(0)}%`,
            style: {
                fontSize: 14,
                textAlign: 'center',
            },
        },
        interactions: [
            {
                type: 'element-active',
            },
        ],
    };

    return (
        <>
            <Header />
            <div className="px-6">
                <h2 className="text-center text-2xl mb-4 font-bold">İstatistikler</h2>
                <div>
                    <h2 className="text-xl">
                        hoşgeldin {" "}
                        <span className="text-green-700 font-bold text-xl">admin</span>
                    </h2>

                    <div className="card-container grid xl:grid-cols-4 md:grid-cols-2 my-10 gap-4">
                        <StatisticCard title={"Toplam Müşteri"} amount={"10"} img={"images/user.png"} />
                        <StatisticCard title={"Toplam Kazanç"} amount={"660.96 ₺"} img={"images/money.png"} />
                        <StatisticCard title={"Toplam Satış"} amount={"6"} img={"images/sale.png"} />
                        <StatisticCard title={"Toplam Ürün"} amount={"28"} img={"images/product.png"} />
                    </div>
                </div>

                <div className="stat-area grid md:grid-cols-2 grid-cols-1 border p-5">
                    <div className="basic-area-plot">
                        <Area {...config} />
                    </div>
                    <div className="basic-pie-plot">
                        <Pie {...PieConfig} />
                    </div>
                </div>

            </div>

        </>


    )
}

export default StatiscticPage