import React, { Component } from 'react'; 
import { Layout, Row, Col, Modal } from 'antd'; 
import '../assets/css/portofolio.css' 
import Navbar from '../common/layout/navbar-landing' 
import ButtonHome from '../common/component/button/button-home'; 

const { Content } = Layout; // membuat konstanta content 
const whyData = [
    {
        // // image: require(`../../../assets/images/tracking.png`),
        title: 'Buku Foto KKN PPM UGM',
        description: 'Bersama DPKM UGM saya bekerja sama untuk membuat buku foto yang akan dijadikan souvenir DIES NATALIS UGM'
    },
    {
        // // image: require(`../../../assets/images/certificate.png`),
        title: 'Sistem Informasi PSKS',
        description: 'Sistem yang saya kerjakan untuk kepentingan waktu magang di kementrian sosial'
    },
    {
        // // image: require(`../../../assets/images/paperless.png`),
        title: 'Sistem Informasi Manajemen Gudang Koperasi "KOPMA UGM" ',
        description: 'Di sini saya mengerjakan sistem manajemen manajemen untuk swalayan Kopma UGM'
    },
    {
        // // image: require(`../../../assets/images/simplifying.png`),
        title: 'Payung App',
        description: 'Apps untuk menjadi payung bagi penyandang disabilitas dan juga bagi penyandang cacat'
    },
    {
        // image: require(`../../../assets/images/news.png`),
        title: 'Social Media Marketing',
        description: 'Saya menjadi social media agency di salah satu startup di Yogyakarta'
    },
    {
        // image: require(`../../../assets/images/both-time.png`),
        title: 'Sistem Manajemen Event ft Gamatehcno',
        description: 'Masih dalam pengerjaan dan proses menuju wisuda'
    }
]

class PortofolioComponent extends Component{
    render(){
        return(
            <Layout className="landing-container">
                <Content style={{ overflow: "hidden" }}> 
                    <Row className="section-container">
                            <Col lg={24}>
                                <div className="text-soft-blue title-big bold discover-container">
                                    Sudah Pernah Ngerjain Apa Aja ?
                                </div>
                            </Col>
                            <Col lg={24}>
                                <div className="text-black description-discover">
                                  Beberapa pekerjaan saya kerjakan karena keterpaksaan dan cuan hehe, here we go :
                                </div>
                            </Col>
                            <Col lg={24}>
                                <hr style={{
                                    minHeight: 8,
                                    backgroundColor: '#4D5AF2',
                                    border: 'none',
                                    maxWidth: 150,
                                    borderRadius: 26,
                                }}/>
                            </Col>                        
                            <Col lg={24} className="mt-20">
                                <Row
                                    type="flex" justify="center"
                                    className="card-why-container"
                                >
                                    {
                                        whyData.map( data =>
                                            <Col lg={8} md={12} sm={12} className="">
                                                <div className="card-why-content">
                                                    <img src={data.image}  className="card-why-image"/>
                                                    <div className="text-soft-blue semi-bold mt-10">
                                                        {data.title}
                                                    </div>
                                                    <div className="mt-10" style={{maxWidth:'260px'}}>
                                                        {data.description}
                                                    </div>
                                                </div>
                                            </Col>
                                        )
                                    }
                                </Row>
                            </Col>
                        </Row>
                </Content>
            </Layout>
        );
    }
}

export default PortofolioComponent;