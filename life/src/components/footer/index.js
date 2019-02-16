import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./footer.css"

export default class footer extends Component {
    render() {
        return (
            <div className="footer">
                <ul>
                    <li>
                        <NavLink to="/home">
                        <i className="iconfont">&#xe610;</i>
                        <p>首页</p>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/classify">
                        <i className="iconfont">&#xe609;</i>
                        <p>分类</p>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/shopcar">
                        <i className="iconfont">&#xe61b;</i>
                        <p>购物车</p>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/my">
                        <i className="iconfont">&#xe605;</i>
                        <p>我的</p>
                        </NavLink>
                    </li>
                </ul>
            </div>
        )
    }
}