import React, { useEffect } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { connect } from 'react-redux';
import ProductListPage from '../components/home/product-list-page.smart';
import Snackbar from '@material-ui/core/Snackbar';
import { closeSnackbarRequest } from '../actions/snackbar.action';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  overrides: {
    palette: {
      primary: "#0082E4"
    },
    MuiFormLabel: {
      root: {
        // color: "#03a9f4",
        "&$focused": {
          color: "#03a9f4"
        }
      }
    },
    MuiInput: {
      underline: {
        '&:after': {
          borderBottom: "2px solid #03a9f4"
        },
      }
    },
    MuiCheckbox: {
      colorPrimary: {
        color: "#03a9f4"
      }
    },
    MuiRadio: {
      colorPrimary: {
        color: "#03a9f4",
        '&$checked': {
          color: "#03a9f4"
        }
      },
      // '&$checked': {
      //   color: "#03a9f4"
      // }
    },
    MuiTabs: {
      scrollable: {
        overflowX: 'hidden'
      }
    },
    MuiTab: {
      labelIcon: {
        minHeight: 50,
        paddingTop: 0
      }
    },
    MuiExpansionPanelSummary: {
      content: {
        margin: '0px !important'
      },
      expanded: {
        margin: '0px !important'
      }
    },
    MuiButton: {
      outlinedPrimary: {
        color: "#03a9f4",
        border: '1px solid #03a9f4',
        '&:hover': {
          border: '1px solid #03a9f4'
        }
      },
      containedPrimary: {
        backgroundColor: "#03a9f4",
        '&:hover': {
          backgroundColor: "#03a9f4",
        }
      }
    }
  },
  typography: { useNextVariants: true },
});

const App = (props) => {
  useEffect(() => {

  }, []);
  return (
    <React.Fragment>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />

        <ProductListPage />
        <Snackbar
          open={props.snackbar.open}
          message={props.snackbar.message}
          autoHideDuration={props.snackbar.autoHideDuration}
          onClose={props.closeSnackbarRequest}
          onExited={props.closeSnackbarRequest}
          action={[
            <IconButton
              key="close"
              aria-label="Close"
              color="inherit"
              onClick={props.closeSnackbarRequest}
            >
              <CloseIcon />
            </IconButton>,
          ]}
        />

      </MuiThemeProvider>
    </React.Fragment>
  );
}

const mapStateToProps = state => {
  return {
    loading: state.app.displayLoader || state.userAuthorized === 'LOADING',
    snackbar: state.snackbar
  };
};

const mapDispatchToProps = dispatch => ({
  closeSnackbarRequest: () => dispatch(closeSnackbarRequest())
});

export default
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(App);
