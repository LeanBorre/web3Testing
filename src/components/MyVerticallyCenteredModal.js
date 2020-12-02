import React from "react";
import Modal from "react-bootstrap/Modal";

import { Flex, Box, Form, Input, Field, Button } from "rimble-ui";

export default function MyVerticallyCenteredModal(props) {
  console.log("props:", props);
  return (
    <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Submit a Proposal</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Please complete all the requested fields:</h4>
      </Modal.Body>
      <Box p={4}>
        <Box>
          <Form onSubmit={props.handleSubmit}>
            <Flex flexWrap={"wrap"}>
              <Box>
                <Field label="Titulo:">
                  <Input
                    onChange={props.handleInput}
                    type="text"
                    required={true}
                    placeholder="a completar"
                  />
                </Field>
                <Field label="Descripción:">
                  <Input
                    onChange={props.handleInput}
                    type="text"
                    required={true}
                    placeholder="a completar"
                  />
                </Field>
                <Field label="Link:">
                  <Input
                    onChange={props.handleInput}
                    type="text"
                    required={true}
                    placeholder="a completar"
                  />
                </Field>
                <Field label="Tributo:">
                  <Input
                    onChange={props.handleInput}
                    type="text"
                    required={true}
                    placeholder="a completar"
                  />
                </Field>
                <Field label="Solicitud de Pago:">
                  <Input
                    onChange={props.handleInput}
                    type="text"
                    required={true}
                    placeholder="a completar"
                  />
                </Field>
                <Field label="Dirección de aplicante:">
                  <Input
                    onChange={props.handleInput}
                    type="text"
                    required={true}
                    placeholder="a completar"
                  />
                </Field>
                <Field label="Campo 7:">
                  <Input
                    onChange={props.handleInput}
                    type="text"
                    required={true}
                    placeholder="a completar"
                  />
                </Field>
                <Field label="Campo 8:">
                  <Input
                    onChange={props.handleInput}
                    type="text"
                    required={true}
                    placeholder="a completar"
                  />
                </Field>
              </Box>
            </Flex>
            <Modal.Footer>
              <Box>
                <Button type="submit">Submit Form</Button>
              </Box>
              <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
          </Form>
        </Box>
      </Box>
    </Modal>
  );
}
