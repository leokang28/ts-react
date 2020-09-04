import React from 'react';
import './index.less';

export interface MyProps { }
export interface MyStats {
    title: string
}
class EosApp extends React.Component<MyProps, MyStats> {
    constructor(props: MyProps) {
        super(props);
        this.state = {
            title: 'eos app',
        };
    }

    render() {
        const { title } = this.state;
        return <h1>{title}</h1>;
    }
}

export default <EosApp />;
