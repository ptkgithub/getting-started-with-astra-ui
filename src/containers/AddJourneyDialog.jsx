import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import { blue } from '@material-ui/core/colors';
import TextField from '@material-ui/core/TextField';

export default function AddJourneyDialog(props) {
    const [spacecraftName, setSpacecraftName] = useState(null);
    const [summary, setSummary] = useState(null);

    function updateSpacecraftName(target) {
        setSpacecraftName(target.currentTarget.value);
    }

    function updateSummary(target) {
        setSummary(target.currentTarget.value);
    }

    function onLaunch() {
        props.launchJourney(spacecraftName, summary);
        props.handleClose();
    };

    return (
        <div>
            <Dialog open={props.open} onClose={props.handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Launch a Spacecraft</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Enter the details below and press "Launch " to create a new journey:
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Spacecraft Name"
                        type="text"
                        fullWidth
                        required
                        onChange={updateSpacecraftName}
                    />
                    <TextField
                        margin="dense"
                        id="summary"
                        label="Journey Summary"
                        type="text"
                        multiline
                        fullWidth
                        onChange={updateSummary}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={props.handleClose} color="primary">
                        Cancel
          </Button>
                    <Button variant="contained" onClick={onLaunch} color="primary">
                        Launch
          </Button>
                </DialogActions>
            </Dialog>
        </div>
    )
};