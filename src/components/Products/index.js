import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Wrapper } from "./Products.styles";
import { convertMoney } from "../../helpers";
const Products = ({ data }) => {
    return (
        <Wrapper>
            <div>
                <img className="image" src={data.image} alt="" />
                <h2 className="title">{data.title}</h2>
                <h5 className="description">{data.description}</h5>
                <div className="bottom-description">
                    <div className="left-content">
                        <div className="left-content-title">Gia chi tu</div>
                        <div className="left-content-price">{convertMoney(data.price)}</div>
                    </div>
                    <div className="right-content">
                        <span>Mua ngay</span>
                        <FontAwesomeIcon
                            icon={["fas", "arrow-right"]}
                            style={{ fontSize: "1rem" }}
                        ></FontAwesomeIcon>
                    </div>
                </div>
            </div>
        </Wrapper>
    );
};

export default Products;
