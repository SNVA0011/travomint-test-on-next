import React from "react";


const Billing=()=>{
    return(
        <div className="container billingdetail borderwithshadow">
         <h1>Billing Address Detail-</h1>
                <br/>
                {/* Passanger */}
               <div className="px-2">
               <div className="row passenger">
                    <div className="col-6">
                    Payment Method
                    </div>
                    <div className="col-3">
                    Payment Mode
                    </div>
                    <div className="col-3">
                    order Id
                    </div>
                    
                </div>
                <div className="row passangerinfo ">
                    <div className="col-6">
                    Payment Gateway
                    </div>
                    <div className="col-3">
                    Failure
                    </div>
                    <div className="col-3">
                    11
                    </div>
                    
                </div>
               </div>
        </div>
    )
}

export default Billing;