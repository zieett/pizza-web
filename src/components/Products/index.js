import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Wrapper } from "./Products.styles";
import { convertMoney } from "../../helpers";
import ReactModal from "react-modal";
import "./custom.css";
const Products = ({ data }) => {
    const [showModal, setShowModal] = useState(false);
    const handleModal = () => {
        setShowModal(!showModal);
    };
    const handleCloseModal = () => {
        setShowModal(false);
    };
    return (
        <Wrapper>
            <div>
                <img className="image" src={data.image} alt="" onClick={handleModal} />
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
            <ReactModal
                isOpen={showModal}
                contentLabel={"Example Modal"}
                shouldCloseOnEsc={true}
                className="Modal"
                overlayClassName="Overlay"
                ariaHideApp={false}
                shouldCloseOnOverlayClick={true}
                onRequestClose={handleCloseModal}
            >
                <div className="modal-wrapper">
                    <div className="modal-left-content">
                        <img src={data.image} alt="image" className="modal-img" />
                        <div className="modal-price">
                            <p>{convertMoney(data.price)}</p>
                        </div>
                    </div>
                    <div className="modal-right-content">
                        <div className="modal-right-content-wrapper">
                            <div className="right-content-top">
                                <div className="modal-title">
                                    <h1>{data.name}</h1>
                                </div>
                                <div className="modal-description">
                                    <h2>{data.description}</h2>
                                </div>
                                <div className="modal-note">
                                    <h3>GHI CHÚ</h3>
                                    <input type="text" placeholder="Nhập ghi chú của bạn tại đây" />
                                </div>
                            </div>
                            <div className="right-content-bottom">
                                <h3>Them vao gio hang</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </ReactModal>
        </Wrapper>
    );
};

export default Products;
