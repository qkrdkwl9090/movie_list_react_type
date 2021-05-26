import { tvApi } from 'api';
import React from 'react';
import TVPresenter from "./TVPresenter";

export default class extends React.Component{
    state = {
        topRated: null,
        popular: null,
        airingToday: null,
        error : null,
        loading: true
    };
    async componentDidMount(){
        try{
            const {data: {result : topRated}} = await tvApi.topRated();
            const {data: {result : popular}} = await tvApi.popular();
            const {data: {result : airingToday}} = await tvApi.airingToday();
            this.setState({
                topRated,
                popular,
                airingToday
            })

        }catch{
            this.setState({
                error:"Can't find tv information."
            })
        }finally{
            this.setState({
                loading: false
            })

        }
    }
    render() {
        const {topRated, popular, airingToday, error, loading} = this.state;
        return <TVPresenter topRated={topRated} airingToday={airingToday} popular={popular} error={error} loading={loading}/>
    }

}