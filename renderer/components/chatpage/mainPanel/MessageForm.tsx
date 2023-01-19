import styled from "styled-components";
import Form from "react-bootstrap/Form";

const MessageForm = () => {
  return (
    <MessageFormContainer>
      <Form>
        <Form.Control type="text" />
      </Form>
      <div>
        <button type="submit">load</button>
      </div>
    </MessageFormContainer>
  );
};

const MessageFormContainer = styled.div`
  margin-top: 10px;
  button[type="submit"] {
    width: 100%;
    background: ${(props) => props.theme.colors.mainColor};
    color: white;
    text-transform: uppercase;
    border: none;
    border-radius: 10px;
    padding: 5px;
    font-size: 16px;
    font-weight: 700;
    letter-spacing: 10px;
    margin-top: 20px;
  }

  button[type="submit"]:hover {
    background: #e46390;
  }
`;
export default MessageForm;
