import React, {Component} from 'react'; 
// import react merupakan bawaan dari react itu sendiri
import LandingComponent from '../modules/landing-component'
{/*import landingcomponent merupakan child dari parent landingpage, di
file landingpage, kita butuh sebuah componen yang akan digunakan untuk menampilkan halamannya
oleh karena itu kita membutuhkan landing component yang ada di folder modules. */}

class LandingPage extends Component {
    state ={
        visible: false,
    }
    //state digunakan untuk membuat inisial data yang ada dihalaman landing, dia dibuat di file landing-page.js
    //pada file ini kita membuat variabel visible yang kita buat nilai awalnya false, variabel ini nantinya akan
    //digunakan untuk menampilkan modal yang akan digunakan nanti

    componentDidMount(){

    }
    //componentdimount nanti saja ya wkwk

    showModal = () => {
        this.setState({
          visible: true,
        });
    };
    //showmodal ini merupakan function, dia memliki fungsi untuk mengubah state visible yang awalnya false,
    //menjadi true, jadi ketika modalnya diklik akan keluar modalnya.

    handleOk = e => {
        console.log(e);
        this.setState({
          visible: false,
        });
      };
    
      handleCancel = e => {
        console.log(e);
        this.setState({
          visible: false,
        });
      };
    //handleOk dan handleCancel digunakan untuk close modal

    render(){
        return (
            <LandingComponent
                initialData = {this.state} //ini maksudnya membuat varibel initalData yg isinya semua state yang telah dibuat
                showModal = {this.showModal} //ini maksudnya membuat variabel showmodal yang akan dipanggil, this.showmodal mksdnya itu manggil functin show modal, karena masih satu halaman pakainya this.
                handleCancel = {this.handleCancel} //sama seperti showmodal
                handleOk = {this.handleOk} //sama seperti showmodal
            />
            //nah di sini kita mereturn component yang sudah kita import di atas di dalam landingcomponent itu
            //kita bisa memasukkan data atau function yang kita perlukan, fungsi yang kita perlukan akan menjadi
            //sebuah properti jika kita panggil di landing-component.js
        );
    }
}

export default LandingPage;