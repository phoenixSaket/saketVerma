import React from 'react';
import './ContactMe.css';
// import { Form } from 'react-bootstrap';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

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
  return (
    <div className="semi-white-bg padding20">
      <span className="center-text heading-sub paddingBottom20">CONTACT ME</span>
      <form className={classes.root + ' w-100 contactContainer'} noValidate autoComplete="off">
        <TextField
          className="name w-75"
          required
          label="Name"
          defaultValue=""
          variant="outlined"
        />
        <TextField
          className="email w-75"
          required
          label="Email"
          defaultValue=""
          variant="outlined"
        />
      </form>
    </div>
  );
}

export default ContactMe;