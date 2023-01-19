import { useState, useEffect } from "react";
import styled from "styled-components";
import { HiOutlineEmojiHappy } from "react-icons/hi";
import { AiOutlinePlus } from "react-icons/ai";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

import { useSelector, useDispatch } from "react-redux";
import firebase from "../../../firebase";

const ChatRoom = () => {
  const dispatch = useDispatch();
  const user = useSelector((state: any) => state.user.currentUser);

  const [show, setShow] = useState(false);
  const [name, setName] = useState("");
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <ChatRoomContainer>
      <div className="chatroom-wrap">
        <div>
          <HiOutlineEmojiHappy />
          chatRoom
        </div>
        <div onClick={handleShow}>
          <AiOutlinePlus />
        </div>
      </div>
      {/* 방 생성 모달 */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>create chatRoom</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form
          // onSubmit={handleSubmit}
          >
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>방 제목</Form.Label>
              <Form.Control
                onChange={(e) => setName(e.target.value)}
                type="text"
                placeholder="방 제목을 입력해주세요"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>방 설명</Form.Label>
              <Form.Control
                onChange={(e) => setName(e.target.value)}
                type="text"
                placeholder="방 설명을 적어주세요"
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="primary"
            // onClick={handleSubmit}
          >
            create
          </Button>
        </Modal.Footer>
      </Modal>
    </ChatRoomContainer>
  );
};

const ChatRoomContainer = styled.div`
  .chatroom-wrap {
    display: flex;
    justify-content: space-between;
  }
`;

export default ChatRoom;
