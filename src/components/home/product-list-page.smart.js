import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router'
import { HashRouter as Router, Route, Redirect } from 'react-router-dom';
import { fetchTableListdata } from '../../actions/product-list.action';
import { withStyles } from '@material-ui/core/styles';
import styles from './product-list.style';
import { MenuItem, FilledInput, Select, FormControl, Input, Grid, ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails, Table, TableHead, TableBody, TableRow, TableCell } from '@material-ui/core';

class ProductListPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filteredData: [],
            searchInput: ""
        };
    }
    componentDidMount() {
        this.props.fetchTableListdata();
    }
    handleChange = event => {
        this.setState({ searchInput: event.target.value }, () =>
            this.globalSearch()
        );
    };
    globalSearch = () => {
        let { searchInput } = this.state;
        let filteredData = this.props.productListApiResponse && this.props.productListApiResponse.length > 0 && this.props.productListApiResponse.filter(value => {
            debugger;
            return (
                value.name.toLowerCase().includes(searchInput.toLowerCase())

            );
        });
        if (filteredData && filteredData.length > 0) {
            this.setState({ filteredData: filteredData });
        }
        console.log("filteredData", filteredData)
        // this.props.handleSetData(
        //     (filteredData.length > 0 && filteredData) || searchInput
        //         ? filteredData
        //         : this.props.data
        // );
    };
    getDataTable = (dataTableContent) => {
        const { classes, productListApiResponse } = this.props;
        const keys = ['Name', 'gravity', 'population', 'terrain', 'diameter'];

        return (
            <React.Fragment>
                <Table className={classes.tableRoot}>
                    <TableHead>
                        <TableRow>
                            {keys.map(row => <TableCell className={classes.tableRoot} key={row}>{row}</TableCell>)}
                        </TableRow>
                    </TableHead>
                    <TableBody>


                        {dataTableContent && dataTableContent.length > 0 && dataTableContent.map((row, index) =>
                            <TableRow className={classes.tableRoot} key={index} align="left">
                                <TableCell className={classes.tableRoot}>
                                    {row.name}
                                </TableCell>
                                <TableCell className={classes.tableRoot}>
                                    {row.gravity}
                                </TableCell>
                                <TableCell className={classes.tableRoot}>
                                    {row.population}
                                </TableCell>
                                <TableCell className={classes.tableRoot}>
                                    {row.terrain}
                                </TableCell>
                                <TableCell className={classes.tableRoot}>
                                    {row.diameter}
                                </TableCell>

                            </TableRow>)}

                    </TableBody>
                </Table>
            </React.Fragment>

        );

    };

    render() {

        const { classes, productListApiResponse } = this.props;
        const { filteredData } = this.state;
        return (

            <Grid container spacing={8}>
                <Grid item xs={12}>
                    <Grid container>
                        <Grid item xs={12}>
                            <h4>Main Data table</h4>
                            {productListApiResponse && productListApiResponse.length > 0 && this.getDataTable(productListApiResponse)}
                        </Grid>
                        <Grid item xs={12}>
                            search here:
                            <Input
                                size="large"
                                name="searchInput"
                                value={this.state.searchInput || ""}
                                onChange={this.handleChange}
                                label="Search"
                            />
                        </Grid>
                        {filteredData && filteredData.length > 0 &&
                            <Grid item xs={12}>
                                <h3>Search Results</h3>
                                {this.getDataTable(filteredData)}
                            </Grid>

                        }
                        <br></br>
                        <br></br>


                    </Grid>
                </Grid>
            </Grid>

        )
    }
}
const mapDispatchToProps = dispatch => ({

    fetchTableListdata: () => dispatch(fetchTableListdata()),
});
const mapStateToProps = state => {
    return {
        productListApiResponse: state.productListInfo.productListApiResponse
    };
}


export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(ProductListPage));