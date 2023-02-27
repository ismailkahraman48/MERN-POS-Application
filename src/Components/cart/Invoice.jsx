import { Form, Input, Select, Card, Button } from "antd";
import Modal from "antd/es/modal/Modal"

const onFinish = (values) => {
    console.log('Success:', values);
};
const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
};

const Invoice = ({ isModalOpen, setIsModalOpen }) => {
    return (
        <>
            <Modal
                title="Sipariş Oluştur"
                open={isModalOpen}
                footer={false}
                onCancel={() => setIsModalOpen(false)}
            >
                {/* FORM */}
                <Form layout="vertical" onFinish={onFinish} onFinishFailed={onFinishFailed}>
                    {/* User name Input */}
                    <Form.Item label="Müşteri Ad" name={'customerName'}
                        rules={[
                            {
                                required: true,
                                message: 'Lütfen Kullanıcı Adınızı Girin!',
                            },
                        ]}>
                        <Input placeholder="Müşteri Ad" />
                    </Form.Item>

                    {/* Phone Number Input */}
                    <Form.Item label="Tel No" name={'phoneNumber'}
                        rules={[
                            {
                                required: true,
                                message: 'Lütfen Tel No Girin!',
                            },
                        ]}>
                        <Input placeholder="+90 (555)-00-00-00" />
                    </Form.Item>

                    {/* Payment Method Input */}
                    <Form.Item label="Ödeme Yöntemi" name={'paymentMethod'}
                        rules={[
                            {
                                required: true,
                                message: 'Lütfen Ödeme Yöntemi Seçiniz!',
                            },
                        ]}>
                        <Select placeholder="Ödeme Yöntemi Seçiniz">
                            <Select.Option value="nakit">Nakit</Select.Option>
                            <Select.Option value="kredikarti">Kredi Kartı</Select.Option>
                        </Select>
                    </Form.Item>

                    {/* Summary Card */}
                    <div>
                        <Card>
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
                                // onClick={""}
                                htmlType='submit'>
                                Sipariş Ver
                            </Button>
                        </Card>
                    </div>
                </Form>

            </Modal>
        </>

    )
}

export default Invoice;