import Header from "../Components/header/Header"
import { Table, Card, Button } from "antd";
import { useState } from "react";
import PrintBill from "../Components/bills/PrintBill";


const InvoicePage = () => {
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

      <h2 className="text-center text-2xl mb-4 font-bold">Faturalar</h2>

      <div>
        <Table bordered pagination={false} dataSource={dataSource} columns={columns} />

        <div className="card-total flex justify-end mt-4">
          <Card className="w-72">
            <Button
              className="w-full mt-2"
              size="large"
              type="primary"
              onClick={() => { setIsModalOpen(true) }}>
              Fatura Oluştur
            </Button>
          </Card>

        </div>
      </div>

      <PrintBill isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}/>
    </>
  )
}
export default InvoicePage;
