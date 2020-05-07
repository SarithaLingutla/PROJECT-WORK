import React from "react";
const Wishlist = (props) => {
  return (
    <div>
      <div className="row shadow mb-1 my-2">
        <div className="col-lg-3 p-5">
          <img src={props.sw3} width="150px" height="150px" alt="" />
          {/* <img src ="https://picsum/75"></img>  alternate img source from net*/}
        </div>
        <div className="col-lg-8 pl-3 " height="100px">
          <h4 className="text-primary">{props.sw1}</h4>
          <p>{props.sw2}</p>
          <p>
            <b>Category : {props.sw5}</b>
          </p>
          <p>
            <b>price : {props.sw6}</b>
          </p>
          <button type="button" class="btn btn-outline-danger">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
