'use strict';


customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">atom-bank documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link">AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-AppModule-d9ec7f37df61e8154c5b0da37b10b620"' : 'data-target="#xs-controllers-links-module-AppModule-d9ec7f37df61e8154c5b0da37b10b620"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-d9ec7f37df61e8154c5b0da37b10b620"' :
                                            'id="xs-controllers-links-module-AppModule-d9ec7f37df61e8154c5b0da37b10b620"' }>
                                            <li class="link">
                                                <a href="controllers/AppController.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppController</a>
                                            </li>
                                            <li class="link">
                                                <a href="controllers/BalanceController.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">BalanceController</a>
                                            </li>
                                            <li class="link">
                                                <a href="controllers/TransactionController.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">TransactionController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-AppModule-d9ec7f37df61e8154c5b0da37b10b620"' : 'data-target="#xs-injectables-links-module-AppModule-d9ec7f37df61e8154c5b0da37b10b620"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-d9ec7f37df61e8154c5b0da37b10b620"' :
                                        'id="xs-injectables-links-module-AppModule-d9ec7f37df61e8154c5b0da37b10b620"' }>
                                        <li class="link">
                                            <a href="injectables/AppService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>AppService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/BalanceService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>BalanceService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/TransactionService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>TransactionService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/BalanceModule.html" data-type="entity-link">BalanceModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-BalanceModule-f0ae765b8dd75a95633121f47b143ad6"' : 'data-target="#xs-controllers-links-module-BalanceModule-f0ae765b8dd75a95633121f47b143ad6"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-BalanceModule-f0ae765b8dd75a95633121f47b143ad6"' :
                                            'id="xs-controllers-links-module-BalanceModule-f0ae765b8dd75a95633121f47b143ad6"' }>
                                            <li class="link">
                                                <a href="controllers/BalanceController.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">BalanceController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-BalanceModule-f0ae765b8dd75a95633121f47b143ad6"' : 'data-target="#xs-injectables-links-module-BalanceModule-f0ae765b8dd75a95633121f47b143ad6"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-BalanceModule-f0ae765b8dd75a95633121f47b143ad6"' :
                                        'id="xs-injectables-links-module-BalanceModule-f0ae765b8dd75a95633121f47b143ad6"' }>
                                        <li class="link">
                                            <a href="injectables/BalanceService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>BalanceService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/TransactionModule.html" data-type="entity-link">TransactionModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#controllers-links-module-TransactionModule-b29bd6d5e41bf069ddcee8860237d078"' : 'data-target="#xs-controllers-links-module-TransactionModule-b29bd6d5e41bf069ddcee8860237d078"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-TransactionModule-b29bd6d5e41bf069ddcee8860237d078"' :
                                            'id="xs-controllers-links-module-TransactionModule-b29bd6d5e41bf069ddcee8860237d078"' }>
                                            <li class="link">
                                                <a href="controllers/TransactionController.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">TransactionController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-TransactionModule-b29bd6d5e41bf069ddcee8860237d078"' : 'data-target="#xs-injectables-links-module-TransactionModule-b29bd6d5e41bf069ddcee8860237d078"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-TransactionModule-b29bd6d5e41bf069ddcee8860237d078"' :
                                        'id="xs-injectables-links-module-TransactionModule-b29bd6d5e41bf069ddcee8860237d078"' }>
                                        <li class="link">
                                            <a href="injectables/TransactionService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>TransactionService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/Balance.html" data-type="entity-link">Balance</a>
                            </li>
                            <li class="link">
                                <a href="classes/BalanceDto.html" data-type="entity-link">BalanceDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/Transaction.html" data-type="entity-link">Transaction</a>
                            </li>
                            <li class="link">
                                <a href="classes/TransferDto.html" data-type="entity-link">TransferDto</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/TimeoutInterceptor.html" data-type="entity-link">TimeoutInterceptor</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});