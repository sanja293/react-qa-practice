import React from "react";
import useStyles from "./styles";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import {Redirect} from "react-router-dom";
import {auth} from "../../common/firebase";

function Login() {

    const classes = useStyles();

    const [values, setValues] = React.useState({
        username: 'sanja@test.test',
        password: 'testtest',
        user: null,
        errors: [],
    });

    const handleChange = (prop) => (event) => {
        setValues({
            ...values,
            [prop]: event.target.value,
        });
    };

    const handleLogin = () => {

        auth.signInWithEmailAndPassword(values.username, values.password)
            .then(user => {
                debugger
                setValues({
                    ...values,
                    errors: [],
                    user: user,
                });
            })
            .catch((e) => {
                setValues({
                    ...values,
                    errors: `${e.code} :xxxx: ${e.message}`,
                });
        });
    };

    if (values.user !== null) {
        return <Redirect to={'/dash'} />
    }

    return <div className={classes.myContainer}>
        <form
            noValidate
            autoComplete="off"
        >
            <div>
                <TextField
                    required
                    id="myUsername"
                    label="Username"
                    value={values.username}
                    onChange={handleChange('username')}
                />
            </div>
            <div>
                <TextField
                    required
                    id="myPassword"
                    label="Password"
                    value={values.password}
                    onChange={handleChange('password')}
                />
            </div>
            <div>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={handleLogin}
                >
                    Submit
                </Button>
            </div>
            <div>
                <span>{values.errors}</span>
            </div>
        </form>
    </div>
}

export default Login
