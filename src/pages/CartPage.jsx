import Header from "../Components/header/Header"
import { Table, Card, Button } from "antd";
import { useState } from "react";
import Invoice from "../Components/cart/Invoice"


const CartPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const dataSource = [
    {
      key: '1',
      name: 'Mike',
      age: 32,
      address: '10 Downing Street',
    },
    {
      key: '2',
      name: 'John',
      age: 42,
      address: '10 Downing Street',
    },
  ];

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
  ];


  return (
    <>
      <Header />
      <div>
        <Table bordered pagination={false} dataSource={dataSource} columns={columns} />

        <div className="card-total flex justify-end mt-4">
          <Card className="w-72">
            <div className="flex justify-between">
              <span>Ara Toplam</span>
              <span>554.00₺</span>
            </div>
            <div className="flex justify-between my-2">
              <p>KDV Toplam %8</p>
              <p className="text-red-600">-49.92₺</p>
            </div>
            <div className="flex justify-between my-2">
              <b>Toplam</b>
              <b>504.08₺</b>
            </div>
            <Button
              className="w-full mt-2"
              size="large"
              type="primary"
              onClick={() => { setIsModalOpen(true) }}>
              Sipariş Ver
            </Button>
          </Card>

        </div>
      </div>

      <Invoice
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
      />
    </>
  )
}
export default CartPage;
