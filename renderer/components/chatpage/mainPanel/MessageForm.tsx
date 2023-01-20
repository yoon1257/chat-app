import styled from "styled-components";
import Form from "react-bootstrap/Form";
import { Col, Container, Row } from "react-bootstrap";
import { useState } from "react";
import { useSelector } from "react-redux";
import firebase from "../../../firebase";

const MessageForm = () => {
  const chatRoom = useSelector((state: any) => state.chatRoom.currentChatRoom);
  const user = useSelector((state: any) => state.user.currentUser);
  const messageRef = firebase.database().ref("message");
  const [text, setText] = useState("");
  const [error, setError] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const createMessage = (fileUrl = null) => {
    const message = {
      timestamp: firebase.database.ServerValue.TIMESTAMP,
      user: {
        id: user.uid,
        name: user.displayName,
        image: user.photoURL,
      },
    };
    if (fileUrl !== null) {
      message["image"] = fileUrl;
    } else {
      message["text"] = text;
    }
    return message;
  };

  const handleMessage = async (e) => {
    if (!text) {
      setError((pre) => pre.concat("text First"));
      return;
    }
    setLoading(true);
    try {
      await messageRef.child(chatRoom.id).push().set(createMessage());
      setLoading(false);
      setText("");
      setError([]);
    } catch (error) {
      setError((pre) => pre.concat(error.message));
      setError([]);
    }
  };
  return (
    <MessageFormContainer>
      <Container>
        <Row>
          <Col md={10}>
            <Form onSubmit={handleMessage}>
              <Form.Control
                value={text}
                onChange={handleChange}
                type="text"
                className="text-form"
              />
            </Form>
          </Col>
          <Col md={2}>
            <div>
              <button className="send" onClick={handleMessage}>
                send
              </button>
            </div>
            <div>
              {error.map((errorMsg) => (
                <p>{errorMsg}</p>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
      <Container>
        <button type="submit">load</button>
      </Container>
    </MessageFormContainer>
  );
};

const MessageFormContainer = styled.div`
  margin-top: 10px;
  button {
    width: 100%;
    background: ${(props) => props.theme.colors.mainColor};
    color: white;
    text-transform: uppercase;
    border: none;
    border-radius: 10px;
    padding: 7px;
    font-size: 16px;
    font-weight: 700;
    letter-spacing: 10px;
    margin-bottom: 10px;
  }

  button:hover {
    background: #e46390;
  }
  .text-form {
    padding: 10px;
    margin-bottom: 10px;
  }
  .send {
    margin-top: 0px;
  }
`;
export default MessageForm;
