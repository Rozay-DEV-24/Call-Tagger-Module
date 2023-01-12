import React from 'react';

function openPopup() {
    window.open("http://www.example.com", "PopupWindow", "width=600,height=600,scrollbars=yes");
  }

function MyButton() {
  return <button onClick={openPopup}>Open Popup</button>
}

export default MyButton;