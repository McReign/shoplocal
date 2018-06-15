import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Header from "../Header";
import Footer from "../Footer";
import ItemDetailPage from '../ItemDetailPage';
import HomePage from '../HomePage';
import ExpiringSoonPage from '../ExpiringSoonPage';
import ScrollFix from '../ScrollFix';
import CategoriesPage from '../CategoriesPage';
import RetailerPage from '../RetailerPage';
import RetailerDefaultHeader from "../RetailerDefaultHeader";
import RetailerMagazines from '../RetailerMagazines';
import WelcomePage from '../WelcomePage';
import NewThisWeekPage from '../NewThisWeekPage';
import NotFoundPage from '../NotFoundPage';

class App extends Component {
	render() {
		return (
			<div>
				<ScrollFix location={window.location.href}>
					<Switch>
						<Route exact path='/' render={(props) =>
							<div>
								<Header {...props}/>
								<HomePage {...props} />
							</div>
						} />
						<Route exact path='/expiring-soon' render={(props) =>
							<div>
								<Header {...props}/>
								<ExpiringSoonPage {...props} />
							</div>
						} />
						<Route exact path='/new-this-week' render={(props) =>
							<div>
								<Header {...props}/>
								<NewThisWeekPage {...props} />
							</div>
            } />
						<Route exact path='/categories' render={(props) =>
							<div>
								<Header {...props}/>
								<CategoriesPage {...props} />
							</div>
            } />
						<Route exact path='/categories/:category' render={(props) =>
							<div>
								<Header {...props}/>
								<CategoriesPage {...props} />
							</div>
						} />
						<Route exact path='/product/:id' render={(props) =>
							<div>
								<Header {...props}/>
								<ItemDetailPage {...props} />
							</div>
						} />
						<Route exact path='/retailer/:id' render={(props) =>
							<div>
								<RetailerDefaultHeader {...props}/>
								<RetailerPage {...props} />
							</div>
						} />
						<Route exact path='/retailer/:id/magazines' render={(props) =>
							<div>
								<RetailerDefaultHeader {...props}/>
								<RetailerMagazines {...props}/>
							</div>
						} />
						<Route exact path='/welcome-page' render={(props) =>
							<div>
								<Header {...props}/>
								<WelcomePage {...props}/>
							</div>
						} />
						<Route render={(props) =>
							<div>
								<Header {...props}/>
								<NotFoundPage {...props}/>
							</div>
						} />
					</Switch>
				</ScrollFix>
				<Footer />
			</div>
		);
	}
}

export default App;
