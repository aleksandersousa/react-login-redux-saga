import './Login.css';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button, Grid, IconButton, InputAdornment, TextField } from '@material-ui/core';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import { makeStyles } from '@material-ui/styles';
import { useDispatch } from 'react-redux';
import { logInStart } from '../../redux/actions/auth';

const useStyles = makeStyles(() => ({
  btn: {
    borderColor: '#66b7ae',
    color: '#66b7ae',
    backgroundColor: 'white',
  },
}));

const imgSrc =
  'https://www.xtrategie.com.br/wp-content/uploads/2019/08/logo_xtrategie.png';

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const classes = useStyles();
  const dispatch = useDispatch();

  const handleClickShowPassword = () => setShowPassword(!showPassword);

  const onSubmit = data => dispatch(logInStart(data));

  return (
    <div className="app__login">
      <div className="app__login-wrapper">
        <div className="app__login-container">
          <div className="app__login-img">
            <img src={imgSrc} alt="logo" />
          </div>
          <hr className="app__login-hr" />
          <form className="app__login-inputs" onSubmit={handleSubmit(onSubmit)}>
            <p>Faça seu login</p>
            <Grid container direction="column" spacing={2}>
              <Grid item>
                <TextField
                  fullWidth
                  variant="filled"
                  label="E-mail"
                  autoComplete="email"
                  error={!!errors?.email}
                  helperText={errors?.email ? errors.email.message : null}
                  {...register('email', {
                    required: 'Obrigatório',
                    pattern: {
                      value: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
                      message: 'Email inválido',
                    },
                  })}
                />
              </Grid>
              <Grid item>
                <TextField
                  fullWidth
                  variant="filled"
                  label="Senha"
                  type={showPassword ? 'text' : 'password'}
                  error={!!errors?.password}
                  helperText={errors?.password ? errors.password.message : null}
                  {...register('password', {
                    required: 'Obrigatório',
                  })}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                        >
                          {showPassword ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
            </Grid>
            <Button
              size="medium"
              type="submit"
              fullWidth
              style={{
                maxWidth: '80%',
                marginTop: '2rem',
                padding: '0.5rem',
                fontWeight: '600',
              }}
              variant="outlined"
              className={classes.btn}
            >
              Entrar
            </Button>
          </form>
        </div>
      </div>
      <div className="app__login-footer">
        <span>&copy; Software Powered by Xtrategie</span>
        <p>2009 - 2021</p>
      </div>
    </div>
  );
}
