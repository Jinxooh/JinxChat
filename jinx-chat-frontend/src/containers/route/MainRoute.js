import React, { Component } from 'react';

class MainRoute extends Component {
    render() {
        return (
            <div>
							<div className="keypad-grid-wrapper">
								<div className="keypad-grid">
									<div className="padding"></div>
									<div className="keystate-row"></div>
									<div className="keypad-wrapper">
										<div className="keypad-lable">
											<div className="ui label"></div>
											<button className="ui button">
												<i aria-hidden="true" className="delete icon"></i>
											</button>
										</div>
										<div className="keypad-row">
											<span className="dial-button-wrapper">
												<button className="dial-button">1</button>
											</span>
											<span className="dial-button-wrapper">
												<button className="dial-button">2
												</button>
											</span>
											<span className="dial-button-wrapper">
												<button className="dial-button">3
												</button>
											</span>
										</div>
										<div className="keypad-row">
											<span className="dial-button-wrapper">
												<button className="dial-button">4
												</button>
											</span>
											<span className="dial-button-wrapper">
												<button className="dial-button">5
												</button>
											</span>
											<span className="dial-button-wrapper">
												<button className="dial-button">6
												</button>
											</span>
										</div>
										<div className="keypad-row">
											<span className="dial-button-wrapper">
												<button className="dial-button">7
												</button>
											</span>
											<span className="dial-button-wrapper">
												<button className="dial-button">8
												</button>
											</span>
											<span className="dial-button-wrapper">
												<button className="dial-button">9
												</button>
											</span>
										</div>
										<div className="keypad-row">
											<span className="dial-button-wrapper">
												<button className="dial-button">*
												</button>
											</span>
											<span className="dial-button-wrapper">
												<button className="dial-button">0
												</button>
											</span>
											<span className="dial-button-wrapper">
												<button className="dial-button">#
												</button>
											</span>
										</div>
									</div>
									<div className="keycall-row">
										<button id="btnCallSend" className="ui green massive circular icon button">
											<i aria-hidden="true" className="phone icon"></i>
										</button>
										<button id="btnCallEnd" className="ui red massive circular icon button">
											<i aria-hidden="true" className="phone icon"></i>
										</button>
									</div>
								</div>
							</div>
						</div>
        );
    }
}

export default MainRoute;