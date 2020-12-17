import React from 'react';
import './ContactMe.css';
// import { Form } from 'react-bootstrap';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from 'react-bootstrap';
import { useState } from 'react';
import * as emailjs from 'emailjs-com'
import { Modal } from 'react-bootstrap';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

function ContactMe() {
  const classes = useStyles();

  const [isEmailError, setIsEmailError] = useState(false);
  const [modalShow, setModalShow] = React.useState(false);


  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  function handleSubmit(e) {
    const { name, email, subject, message } = formData;

    let templateParams = {
      name: name,
      from_email: email,
      to_name: 'develope.saket@gmail.com',
      subject: subject,
      message: message,
    }

    if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)) {


      emailjs.send(
        'service_hyg0hkb',
        'template_8fvylwn',
        templateParams,
        'user_WgooPhzQ9qwK3mob5BE1A'
      ) .then(function(response) {
        setModalShow(true);
      }, function(error) {
        console.log("error")
      })

      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    } else {
      setIsEmailError(true);
    }
  }



  return (
    <div className="semi-white-bg boxShadow padding20 marginTop30">
      <span className="center-text heading-sub paddingBottom20">CONTACT ME</span>
      <form className={classes.root + ' w-100 contactContainer'} noValidate autoComplete="off">
        <TextField
          className="name w-75"
          required
          label="Name"
          value={formData.name}
          onChange={(e) => { setFormData({ ...formData, name: e.target.value }) }}
          defaultValue=""
          variant="outlined"
        />
        <TextField
          className="email w-75"
          required
          label="Email"
          error={isEmailError}
          value={formData.email}
          onChange={(e) => { setFormData({ ...formData, email: e.target.value }) }}
          defaultValue=""
          variant="outlined"
        />
        <TextField
          className="subject w-75"
          required
          label="Subject"
          value={formData.subject}
          onChange={(e) => { setFormData({ ...formData, subject: e.target.value }) }}
          defaultValue=""
          variant="outlined"
        />
        <TextField
          className="message w-75"
          required
          label="Message"
          value={formData.message}
          onChange={(e) => { setFormData({ ...formData, message: e.target.value }) }}
          multiline
          rows={3}
          defaultValue=""
          variant="outlined"
        />
        <Button className="w-50 marginTop20" variant="info" onClick={(e) => handleSubmit(e)}>
          Send
        </Button>
      </form>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </div>
  );
}

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Message Sent
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          KUDOS !
          Your message has been sent.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ContactMe;