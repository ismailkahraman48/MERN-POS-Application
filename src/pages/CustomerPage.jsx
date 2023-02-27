import Header from "../Components/header/Header"
import { Table } from "antd";




const CustomerPage = () => {


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
      <h2 className="text-center text-2xl mb-4 font-bold">Müşteriler</h2>
      <div>
        <Table bordered pagination={false} dataSource={dataSource} columns={columns} />

        <div className="card-total flex justify-end mt-4">
          

        </div>
      </div>

     
    </>
  )
}
export default CustomerPage;
