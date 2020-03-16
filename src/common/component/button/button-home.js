import React from 'react';
import { Button } from 'antd';
import './style.css';

function ButtonHome({
    type, text, disabled, borderRadius = 25,
    background = '#4D5AF2', textColor = "white", border = 'none',
    margin = '0px', marginLeft, marginRight, marginTop, marginBottom,
    className,onClick
})  //untuk membuat komponen kita membuat sebuah fungsi yang ada, dari fungsi itu nantinya kita definisikan apa saja yang mau
//dibuat secara fleksibel seperti tipenya apa, text atau yg lain, untuk mengetahui itu bisa liat di dokumentasinya ant design
{
    return (
        <Button
            type={type}
            className={className}
            disabled={disabled}
            style={{
                backgroundColor: background,
                color: textColor,
                borderRadius: borderRadius,
                border: border,
                margin: margin,
                marginLeft: marginLeft,
                marginRight: marginRight,
                marginTop: marginTop,
                marginBottom: marginBottom,
            }}
            onClick={onClick}
        >
            {text}
        </Button>
    );
}

export default ButtonHome;