import React, { Component } from 'react'
import { Menu, Icon, Image } from 'semantic-ui-react'

export default class Footer extends Component {
    render() {
        return (
            <Menu secondary pointing icon='labeled'>
                <Menu.Item href='https://bawmedical.co.uk/'>
                    © Copyright Marcus Baw 2020 - built with React and Semantic UI
                </Menu.Item>
            </Menu>
        );
    }
}