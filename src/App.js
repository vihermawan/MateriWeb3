import React from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import { Card } from 'antd';
import logo from './logo.svg';
import './App.css';
const { Header, Content, Footer } = Layout;

const cardData = [
  {
    nama : "Muklas",
    job : "Mahasiswa"
  },
  {
    nama : "Siapa",
  }
]

function App() {
  
 

  return (
    

    <div className="App">
      {
        cardData.map( data =>
          <Card title="Card title" bordered={false} style={{ width: 300 }}>
            <p>{data.nama}</p>
          </Card>
      )
    }
    </div>
  );
}

export default App;
