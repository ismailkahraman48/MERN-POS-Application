import { Button, Form, Input, Carousel } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'
import AuthCarousel from '../../Components/auth/AuthCaroulsel'


const Register = () => {
    return (
        <div className='h-screen' >
            <div className="flex justify-between h-full">
                <div className="left-side flex flex-col h-full justify-center xl:px-20 px-10 w-full relative ">
                    <h1 className='text-5xl font-bold text-center mb-5'>LOGO</h1>
                    <Form layout='vertical'>
                        <Form.Item
                            label="Kullanıcı Adı"
                            name={"username"}
                            rules={[
                                {
                                    required: true,
                                    message: "Kullanıcı adı alanı boş bırakılamaz!"
                                }
                            ]}>
                            <Input />
                        </Form.Item>
                        <Form.Item
                            label="E-mail"
                            name={"email"}
                            rules={[
                                {
                                    required: true,
                                    message: "Kullanıcı adı alanı boş bırakılamaz!"
                                }
                            ]}>
                            <Input />
                        </Form.Item>
                        <Form.Item
                            label="Şifre"
                            name={"password"}
                            rules={[
                                {
                                    required: true,
                                    message: "Şifre adı alanı boş bırakılamaz!"
                                }
                            ]}>
                            <Input.Password />
                        </Form.Item>
                        <Form.Item
                            label="Şifre Tekrar"
                            name={"passwordAgain"}
                            rules={[
                                {
                                    required: true,
                                    message: "Şifre tekrar alanı boş bırakılamaz!"
                                }
                            ]}>
                            <Input.Password />
                        </Form.Item>
                        <Form.Item>
                            <Button className='w-full mt-5' type='primary' size='large' htmlType='submit'>Kaydol</Button>
                        </Form.Item>
                    </Form>
                    <div className='flex flex-row justify-center absolute bottom-0 left-0 w-full mb-5'>
                        <span>Bir hesabınız var mı?&nbsp;</span>
                        <Link className='text-blue-700' to={"/login"}>Şimdi Giriş yap</Link>
                    </div>
                </div>
                <div className="xl:w-4/6 lg:w-3/5 md:w-1/2 md:flex hidden bg-[#6c63ff] h-full ">
                    <div className="carousel-container w-full h-full flex items-center">
                        <div className='w-full'>
                        <Carousel autoplay={true} className="!h-full px-6">
                            <AuthCarousel
                                img="/images/responsive.svg"
                                title="Responsive"
                                desc="Tüm Cihaz Boyutlarıyla Uyumluluk"
                            />
                            <AuthCarousel
                                img="/images/statistic.svg"
                                title="İstatistikler"
                                desc="Geniş Tutulan İstatistikler"
                            />
                            <AuthCarousel
                                img="/images/customer.svg"
                                title="Müşteri Memnuniyeti"
                                desc="Deneyim Sonunda Üründen Memnun Müşteriler"
                            />
                            <AuthCarousel
                                img="/images/admin.svg"
                                title="Yönetici Paneli"
                                desc="Tek Yerden Yönetim"
                            />
                        </Carousel>

                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Register