import React, { Component } from "react";
import styled from "styled-components";
import Button from "../Button";
import InputText from "../textInput";
import List from "../listItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStickyNote, faTrashAlt } from "@fortawesome/free-solid-svg-icons";

const Container = styled.div`
  margin-top: 7em;
  position: relative;
  margin: 50px auto;
  overflow: auto;
  width: 50%;
  min-height: 250px;
  background-color: #ececec;
  box-shadow: 2px 2px 5px #000;
  border-radius: 10px;
  padding: 2em 25px 2em 25px;
  margin-top: 5em;
  @media (max-width: 1200px) {
    width: 40%;
  }
  @media screen and (max-width: 600px) {
    margin: 0 0;
    overflow: auto;
    width: 85%;
    margin: auto;
  }
`;

const InputForm = styled.form`
  display: flex;
  margin-bottom: 25px;
  & > :first-child {
    margin-right: 6px;
  }
`;

export default class ToDoListContainer extends Component {
  state = {
    toDoItems: [],
    inputText: "",
    submitDisabled: true
  };

  addToDo = text => {
    const key = Math.floor(Math.random() * 10000).toString();

    this.setState({
      toDoItems: [{ text, key }, ...this.state.toDoItems],
      submitDisabled: true
    });
  };

  delToDo = id => {
    this.setState({
      toDoItems: this.state.toDoItems.filter(todo => todo.key !== id)
    });
  };

  updateInput = event => {
    let text = event.target.value.replace(/\s/g, "");
    this.setState({ inputText: event.target.value });
    text ? this.setState({ submitDisabled: false }) : this.setState({ submitDisabled: true });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.addToDo(this.state.inputText);
    this.setState({ inputText: "" });
  };

  render() {
    return (
      <Container>
        <InputForm onSubmit={this.handleSubmit}>
          <InputText value={this.state.inputText} onChange={this.updateInput} />
          <Button disabled={this.state.submitDisabled} type="submit">
            Add <FontAwesomeIcon icon={faStickyNote} color="#fff" />
          </Button>
        </InputForm>
        <List items={this.state.toDoItems} removeItem={this.delToDo} />
      </Container>
    );
  }
}
