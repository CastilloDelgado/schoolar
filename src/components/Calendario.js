import React from 'react'

const Calendario = ({ calendario_url }) => {
    return (
        <div className="container-fluid w-100 h-100 pb-3 pb-md-5 mx-0 px-0" style={{ height: "50vh", minHeight: "500px" }}>
            <iframe src={calendario_url}
                style={{ border: "0", width: "100%", height: "50vh", minHeight: "800px", frameBorder: "0", scrolling: "no" }}>
                    
                </iframe>
        </div>

    )
}

export default Calendario