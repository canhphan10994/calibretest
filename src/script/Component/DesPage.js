import React from "react";
import TopNav from "./TopNav";
import Menu from "./Navigation";
import Product from "./ProductInfor";
import Suggest from "./Suggest";
import Footer from "./Footer";
import ShoppingBag from "./ShoppingBag";
import SignIn from "./SignIn";
import Shipping from "./Shipping";
import Billing from "./billing";
import Confirmation from "./Confirm";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ProductProvider } from "./ProductContext";
import { BagProvider } from "./BagStore";
import { BillProvider } from "./BillingData";
import { ButtonProvider } from "./LayoutProvider";
import { AccountProvider } from "./AccountProvider";

class DesPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ProductProvider>
        <AccountProvider>
          <BagProvider>
            <BillProvider>
              <ButtonProvider>
                <div className="desPage">
                  <BrowserRouter>
                    <header>
                      <TopNav />
                      <Menu />
                    </header>
                    <main>
                      <Switch>
                        <Route exact path="/" component={Description} />
                        <Route path="/bag" component={ShoppingBag} />
                        <Route path="/signin" render={() => <SignIn />} />
                        <Route path="/ship" component={Shipping} />
                        <Route path="/billing" component={Billing} />
                        <Route path="/confirm" component={Confirmation} />
                      </Switch>
                    </main>
                    <Footer />
                  </BrowserRouter>
                </div>
              </ButtonProvider>
            </BillProvider>
          </BagProvider>
        </AccountProvider>
      </ProductProvider>
    );
  }
}

let Description = function() {
  return (
    <div>
      <Product />
      <Suggest />
    </div>
  );
};

export default DesPage;
