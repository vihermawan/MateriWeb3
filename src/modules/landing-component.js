import React, { Component } from 'react'; //import dari react biasa
import { Layout, Row, Col, Modal } from 'antd'; //import dari ant seperti biasa
import '../assets/css/landing.css' //import css dari folder css yang ada di folder assets
import Navbar from '../common/layout/navbar-landing' //import komponen navbar dari folder layout yang ada di folder common 
import ButtonHome from '../common/component/button/button-home'; //import komponen buttonhome yang ada di dalamn folder component yang ada di folder common

const { Content } = Layout; // membuat konstanta content yang berasal dari bawaan layout ant design, bisa dicek di dokumentasi antdesign

class LandingComponent extends Component{
    render(){
        const image1 = require(`../assets/images/picture.svg`); //membuat variabel image 1 dimana isinya merupakan importan gambar yang ada dari folder images
        const {initialData,showModal,handleOk,handleCancel} = this.props; {/* ini merupakan fungsi" yang sudah di definsiikan di landing-page.js 
        kemudian kita panggil di halaman landing-component.js ketika kita memamnggil komponent dari parent komponen, komponen yang dipanggil
        akan menjadi sebuah properti, kemudian kita dapat menggunakan properti itu dihalaman ini.
        */}
        return(
            <Layout className="landing-container">
                <Navbar/>  {/* ini merupakan component navbar yang kita import dari folder layout yang ada di common*/}
                <Content style={{ overflow: "hidden" }}> {/* ini merupakan component content yang sudah di define sebelumnya*/}
                    <Row className="section-container">
                        <Col lg={12} md={12} sm={12}>
                            <div className="image-big-container">
                                <img
                                    src={image1}
                                    alt="Home 1"
                                    style={{maxWidth: '80%'}}
                                />
                            </div>
                        </Col>
                        <Col lg={12} md={12} sm={12}>
                            <Row>
                                <Col span={24}>
                                    <div className="title-container">
                                        <span className="text-soft-blue title-biggest bold">About Me</span>
                                        <br/>
                                        <span className="text-soft-blue title-big bold">Vicky Hermawan</span>
                                    </div>
                                </Col>
                                <Col span={24}>
                                    <div className="image-hidden">
                                        <img
                                            src={image1}
                                            alt="Home 1"
                                            style={{maxWidth: '100%'}}
                                        />
                                    </div>
                                    <div className="description-container desc-medium">
                                        Hanya mahasiswa yang suka motret, desain dan code, sesekali tukang workaholic. 
                                        Suka explore alam, apps, desain apapun itu. 
                                        Hit me at : 
                                    </div>
                                </Col>
                                <Col span={24}>
                                    <div className="button-section-1-container">                                
                                        <ButtonHome
                                            text="Show Me"
                                            className='button-participate'
                                            onClick = {showModal}
                                        />{/* ini merupakan component button yang kita sudah definisikan di atas atas nama buttonhome*/}
                                        <ButtonHome
                                            text="Another Information"
                                            background="white"
                                            textColor="#4D5AF2"
                                            border="1px solid #4D5AF2"
                                            marginLeft={16}
                                            className='button-participate'
                                        />
                                    </div>
                                </Col>
                                <Modal
                                    title="Contact"
                                    visible={initialData.visible}
                                    onOk={handleOk}
                                    onCancel={handleCancel}
                                    className = "modal-notif"
                                    >
                                    <p className="text-notif">Anda dapat mengirimkan atau bertanya di vickyhermawan99@mail.ugm.ac.id</p>
                                </Modal>{/* ini merupakan modal yang didalamnya memuat beberapa fungsi yang sudah di definisikan di atas sebagai this.props*/}
                            </Row>
                        </Col>  
                    </Row>
                </Content>
            </Layout>
        );
    }
}

export default LandingComponent;