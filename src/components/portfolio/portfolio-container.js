import React, { Component } from "react";
import PortfolioItem from "./portfolio-item";
import axios from 'axios';

export default class PortflioContainer extends Component {
    constructor() {
        super();

        console.log("rendered");
        this.handleFilter = this.handleFilter.bind(this);

        this.state = {
            pageTitle: "Welcome to my portfolio",
            isLoading: true,
            data: []
        };
        this.handleFilter = this.handleFilter.bind(this);
        this.getPortfolioItems = this.getPortfolioItems.bind(this);
    }

    handleFilter(filter) {
        if (filter === "CLEAR_FILTERS") {
            this.getPortfolioItems();
        } else {
            this.getPortfolioItems(filter);
        }
        this.setState({
            data: this.state.data.filter(item => {
                return item.category === filter;
            })
        });
    }
    getPortfolioItems(filter = null) {
        axios
          .get("https://tuckeradamson.devcamp.space/portfolio/portfolio_items")
          .then(response => {
              if (filter) {
                this.setState({
                    data: response.data.portfolio_items.filter(item => {
                        return item.category === filter;
                    })
                })
              } else {
                this.setState({
                    data: response.data.portfolio_items
                })
              }
          })
          .catch(error => {
            console.log(error)
          });
      }

    portfolioItems() {
        // data that we'll need:
        // - background image
        // - logo
        // - description
        // - id
        return this.state.data.map(item => {
            return (
                <PortfolioItem 
                    key={item.id} 
                    item={item}
                />
            );
        });
    }

    handlePageTitleUpdate(){
        this.setState({
            pageTitle: "Something Else"
        });
    }

    componentDidMount() {
        this.getPortfolioItems();
    }

    render(){
        if (this.state.isLoading) {
            <div>Loading...</div>;
        }

        return(
            <div className="homepage-wrapper">
                <div className="filter-links">
                    <button className="btn" onClick={() => this.handleFilter('eCommerce')}>
                        eCommerce
                    </button>
                    <button className="btn" onClick={() => this.handleFilter('Scheduling')}>
                        Scheduling
                    </button>
                    <button className="btn" onClick={() => this.handleFilter('Enterprise')}>
                        Enterprise
                    </button>
                    <button className="btn" onClick={() => this.handleFilter('CLEAR_FILTERS')}>
                        All
                    </button>
                </div>
                <div className="protfolio-items-wrapper">

                    {this.portfolioItems()}
                </div>
            </div>
        )
    }
}