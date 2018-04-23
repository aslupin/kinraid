import React from 'react'
const Detail = (props) => {
    const btnDetail = {
        fontSize: '31px',
        color: '#5C9973',
        borderColor: '#5C9973'
      }
    const hovBtnDetail = {
        backgroundColor: '#5C9973'
    }
    return(
        <div>
        <button type="button" className="btn btn-outline-secondary" > รายละเอียด</button>
        </div>
    
    );
}
export default Detail;
