import React from 'react';
import { Form, FormGroup, Input, Card, CardTitle, CardText,Button } from 'reactstrap';

const EditNoteForm = ({note, handleChange, handleDelete }) => (
  <Form>
    <Card body>
      <FormGroup>
        <CardTitle>Update Title</CardTitle>
	<Input onChange={handleChange} value={note.title} type="text" name="title"/>

      </FormGroup>

    <FormGroup>
        <CardTitle>Update Content</CardTitle>
        <Input onChange={handleChange} value={note.content} type="textarea" name="content"/>
      </FormGroup>
 <Button  color="danger" onClick={(id) => handleDelete(note.id)}>Delete</Button>
    </Card>
  </Form>
)

export default EditNoteForm;
