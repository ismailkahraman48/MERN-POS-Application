import { Button, Modal } from 'antd'
import React from 'react'

const PrintBill = ({ isModalOpen, setIsModalOpen }) => {
    return (
        <>
            <Modal
                title="Fatura Oluştur"
                open={isModalOpen}
                footer={false}
                onCancel={() => setIsModalOpen(false)}
                width={800}>
                Fatura

                <section className='bg-zinc-800 py-20'>
                    <div className='max-w-5xl mx-auto bg-white px-6'>
                        <article className='overflow-hidden'>
                            <div>
                                <div className="logo text-4xl font-bold text-slate-700 my-6">LOGO</div>
                            </div>
                            <div className="bill-details my-6">
                                <div className='grid sm:grid-cols-4 grid-cols-2 gap-12'>
                                    <div className='text-md text-slate-500'>
                                        <p className='text-slate-700 font-bold'>Fatura Detayı:</p>
                                        <p>Unwrapped</p>
                                        <p>Fake Street 123</p>
                                        <p>İsmail Kahraman</p>
                                        <p>CA 1234</p>
                                    </div>
                                    <div className='text-md text-slate-500'>
                                        <p className='text-slate-700 font-bold'>Fatura:</p>
                                        <p>The Boring Company</p>
                                        <p> Tesla Street 007</p>
                                        <p> Frisco </p>
                                        <p> CA 0000</p>
                                    </div>
                                    <div className='text-md text-slate-500'>
                                        <div>
                                            <p className='text-slate-700 font-bold'>Fatura Numarası</p>
                                            <p>00412</p>
                                        </div>
                                        <div>
                                            <p className='text-slate-700 font-bold'>Veriliş Tarihi</p>
                                            <p>2022-11-11</p>
                                        </div>
                                    </div>
                                    <div className='text-md text-slate-500'>
                                        <div>
                                            <p className='text-slate-700 font-bold'>Şartlar</p>
                                            <p>10 gün</p>
                                        </div>
                                        <div>
                                            <p className='text-slate-700 font-bold'>Vade</p>
                                            <p>2023-11-11</p>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className="bill-table-area">
                                <table className='min-w-full divide-y divide-slate-500 overflow-hidden'>
                                    <thead>
                                        <tr className='border-b border-slate-200'>
                                            <th scope='col' className='py-3.5 pl-4 text-left text-sm font-normal text-slate-700 sm:pl-6 md:pl-0 sm:table-cell hidden'>Görsel</th>
                                            <th scope='col' className='py-3.5 pl-4 text-left text-sm font-normal text-slate-700 sm:pl-6 md:pl-0 sm:table-cell hidden'>Başlık</th>
                                            <th scope='col' className='py-3.5 pl-4 text-left text-sm font-normal text-slate-700 sm:pl-6 md:pl-0 sm:table-cell hidden'>Fiyat</th>
                                            <th scope='col' className='py-3.5 pl-4 text-left text-sm font-normal text-slate-700 sm:pl-6 md:pl-0 sm:table-cell hidden'>Adet</th>
                                            <th scope='col' className='py-3.5 pl-4 text-end text-sm font-normal text-slate-700 sm:pl-6 md:pl-0 sm:table-cell hidden'>Toplam</th>

                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className='border-t border-slate-200'>
                                            <td className='py-4'>
                                                <img
                                                    src="https://i.lezzet.com.tr/images-xxlarge-secondary/elma-nasil-yenir-221135ca-f383-474c-a4f5-ad02a45db978.jpg"
                                                    alt=""
                                                    className='w-12 h-12 object-cover' />
                                            </td>
                                            <td>
                                                <span>Elma</span>
                                            </td>
                                            <td>
                                                <span>5₺</span>
                                            </td>
                                            <td>
                                                <span>5</span>
                                            </td>
                                            <td className='text-end'>
                                                <span>25₺</span>
                                            </td>

                                        </tr>
                                    </tbody>
                                    <tfoot>
                                        <tr>
                                            <th className="text-right pt-6" colSpan="4" scope="row">
                                                <span className="font-normal text-slate-700">
                                                    Ara Toplam
                                                </span>
                                            </th>
                                            <th className="text-right pt-4" scope="row">
                                                <span className="font-normal text-slate-700">61₺</span>
                                            </th>
                                        </tr>
                                        <tr>
                                            <th className="text-right pt-4" colSpan="4" scope="row">
                                                <span className="font-normal text-slate-700">KDV</span>
                                            </th>
                                            <th className="text-right pt-4" scope="row">
                                                <span className="font-normal text-red-600">+4.88₺</span>
                                            </th>
                                        </tr>
                                        <tr>
                                            <th className="text-right pt-4" colSpan="4" scope="row">
                                                <span className="font-normal text-slate-700">Total</span>
                                            </th>
                                            <th className="text-right pt-4" scope="row">
                                                <span className="font-normal text-slate-700">65.88₺</span>
                                            </th>
                                        </tr>
                                    </tfoot>
                                </table>

                                <div className='py-6'>
                                    <div className='border-t border-slate-200'>
                                        <p className='text-sm font-light text-slate-700'>
                                            Ödeme koşulları 14 gündür. Paketlenmemiş Borçların Geç
                                            Ödenmesi Yasası 0000'e göre, serbest çalışanların bu süreden
                                            sonra borçların ödenmemesi durumunda 00.00 gecikme ücreti
                                            talep etme hakkına sahip olduklarını ve bu noktada bu ücrete
                                            ek olarak yeni bir fatura sunulacağını lütfen unutmayın.
                                            Revize faturanın 14 gün içinde ödenmemesi durumunda, vadesi
                                            geçmiş hesaba ek faiz ve %8 yasal oran artı %0,5 Bank of
                                            England tabanı olmak üzere toplam %8,5 uygulanacaktır.
                                            Taraflar Kanun hükümleri dışında sözleşme yapamazlar.
                                        </p>
                                    </div>
                                </div>
                            </div>

                        </article>
                    </div>
                </section>
                <div className='flex justify-end py-2'>
                    <Button type='primary' size='large'>Yazdır</Button>
                </div>
            </Modal>


        </>
    )
}

export default PrintBill