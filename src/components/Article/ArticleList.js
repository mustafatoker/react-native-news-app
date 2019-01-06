import React, { Component } from 'react';
import { FlatList, View } from 'react-native';
import { getNews } from "../../api/api";
import Article from "./Article";

export default class ArticleList extends Component {
    constructor(props) {
        super(props);

        this.state = {articles: [], refreshing: true};
        this.fetchNews = this.fetchNews.bind(this);
    }

    componentDidMount() {
        this.fetchNews();
    }

    fetchNews() {
        getNews()
            .then(articles => this.setState({articles, refreshing: false}))
            .catch(() => this.setState({refreshing: false}));
    }

    handleRefresh() {
        this.setState({refreshing: false}, () => this.fetchNews())
    }

    render() {
        return (
            <View>
                <FlatList
                    data={this.state.articles}
                    renderItem={({item}) => <Article article={item}/>}
                    keyExtractor={item => item.url}
                    refreshing={this.state.refreshing}
                    onRefresh={this.handleRefresh.bind(this)}
                />
            </View>

        );
    }
}