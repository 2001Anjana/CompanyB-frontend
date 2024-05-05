import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, TextField, Button, Container } from '@material-ui/core';
import backgroundImage from './images/shr.jpg';

const useStyles = makeStyles((theme) => ({
    shortLeaveContainer: {
        padding: theme.spacing(5),
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        backgroundImage: `url(${backgroundImage})`, 
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh', 
    },
    formContainer: {
        padding: theme.spacing(3),
        margin: 'auto',
        backgroundColor: 'rgba(176, 196, 222, 0.9)', 
        borderRadius: theme.spacing(3),
        width: '80%', 
        maxWidth: '600px', 
    },
    title: {
        marginBottom: theme.spacing(2),
        textAlign: 'center',
    },
    buttonContainer: {
        display: 'flex',
        justifyContent: 'center',
        marginTop: theme.spacing(2),
    },
}));

const ShortLeaveForm = () => {
    const classes = useStyles();
    const [employeeId, setEmployeeId] = useState('');

    const handleIDChange = (e) => {
        setEmployeeId(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault(); 
        console.log('Submitting short leave request for employee ID:', employeeId);
       
    };

    return (
        <Container className={classes.shortLeaveContainer}>
            <div className={classes.formContainer}>
                <Typography variant="h5" style={{ textTransform: 'capitalize', marginBottom: '20px' }}>Apply for short leave</Typography>
                <form onSubmit={handleSubmit}>
                    <TextField
                        id="employeeIdInput"
                        label="Employee ID"
                        value={employeeId}
                        onChange={handleIDChange}
                        placeholder="Enter Employee ID"
                        fullWidth
                        margin="normal"
                    />
                    <div className={classes.buttonContainer}>
                        <Button variant="contained" color="primary" type="submit">Apply for Short Leave</Button>
                    </div>
                </form>
            </div>
        </Container>
    );
};

export default ShortLeaveForm;
